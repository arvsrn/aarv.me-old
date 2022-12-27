> Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app. — [svelte.dev](https://svelte.dev/)

### Reactivity

Traditionally, front-end frameworks have something called a [Virtual DOM](https://stackoverflow.com/questions/21965738/what-is-virtual-dom), which is essentially a tree representing the actual HTML DOM. When the Virtual DOM gets updated, the framework figures out which nodes to update in the real DOM using a method called [diffing](https://reactjs.org/docs/reconciliation.html). However, the [virtual DOM is pure overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead).

Svelte has no virtual DOM. Because of the compile step, elements can be made reactive easily. When the app state changes, the HTML elements are surgically updated.

Read more about reactivity in svelte [here](https://svelte.dev/blog/svelte-3-rethinking-reactivity).

### The Framework

Instead of literally compiling the component code to HTML, Svelte compiles your code to a Javascript file, which directly manipulates the DOM. We will be doing the same. The following is a wrapper around the `HTMLElement` class 

```tsx
class Component {
    element: HTMLElement;
    parent: HTMLElement;
    $$params: Record<string, any>;
    index: number;
    children: Array<Component>;
    
    constructor(elemType: string, parent: HTMLElement, $$params: Record<string, any>, show: boolean) {
        this.element = document.createElement(elemType);
        this.parent = parent;
        this.$$params = $$params;
        this.children = []; 

        // update all the parameters on the HTML element
        this.update($$params);
        
        parent.appendChild(this.element);
        this.index = parent.childNodes.length - 1;

        if (!show) this.show(false);
    }
    
    update($$params: Record<string, any>) { 
        for (const [key, value] of Object.entries($$params)) {
            // @ts-ignore
            this.element[key] = value;
        }
    }

    addEventHandler(name: string, callback: () => void) {
        this.element.addEventListener(name, callback);
    }

    show(show: boolean) {
        if (show) this.parent.insertBefore(this.element, this.parent.children[this.index]);
        else this.element.remove();
    }

    // The Component class has a children attribute. This function is
    // used to find a child at a certain position, eg. [0, 2, 1] (meaning
    // the second child of the third child of the first child of this 
    // element.
    childAt(...indices: number[]) {
        let element: Component = this;

        for (const index of indices) {
            element = element.children[index];
        }

        return element;
    }
}
```

In order to be reactive, i.e. update any elements that depend on a variable, we’ll map the variable name to its value inside a Record and use a custom `$$update` function to update any elements dependent on the variable. The implementation is really simple, and the switch cases will be added in our compile step.

```tsx
function $$update(variable: string) {
    switch (variable) {}
}

let variables: Record<string, any> = {}; 
```

### Adding the elements to the DOM

Our parser will turn the component code into an AST. To represent an AST node, let’s define a `CompilerElement` interface, and a function to take the AST and add each element to the DOM.

```tsx
interface CompilerElement {
    tag: string;
    $$params: Record<string, any>;
    children: Array<Element>;
    eventHandlers: Record<string, () => void>;
}

let body: Array<CompilerElement> = [];

// this is just a dummy component, to store the DOM tree as a bunch of
// Component objects. parentNode.children can be used to access the entire
// DOM tree.
let parentNode: Component = new Component('main', document.body, {}, true);

// takes the nodes from the AST and adds them to the DOM
function fromNodes(nodes: Array<CompilerElement>, parent: HTMLElement, parentComponent: Component) {
    for (const node of nodes) {
        let elem = new Component(node.tag, parent, node.$$params, true);
        parentComponent.children.push(elem);
        fromNodes(node.children, elem.element, elem);

        // add all the event handlers
        for (const [event, callback] of Object.entries(node.eventHandlers)) {
            elem.element.addEventListener(event, callback);
        }
    }
}

fromNodes(body, document.body, parentNode);

// the children can be stored elsewhere and the parent can be removed from the DOM.
let children = parentNode.children;
parentNode.show(false);
```

### If Blocks

Svelte also features conditional blocks, so let’s implement that as well. This block interface will be used to represent a conditional or each block from the HTML parser. In other words, the AST will contain a bunch of Blocks and CompilerElements. For now, our framework only supports conditional blocks.

```tsx
interface Block {
    type: "conditional";
    conditions: [CompilerElement[], () => boolean][];
}
```

The `conditions` attribute is an array, and each member has a `CompilerElement[]`: The elements to show if the condition is true, and a function that returns a boolean (whether the condition is true or not). 

Let’s update the `body` variable and `CompilerElement.children` to accept `Block` objects:

```tsx
let body: Array<CompilerElement | Block>;

interface CompilerElement {
		...
    children: Array<CompilerElement | Block>;
		...
}
```

And also the `fromNodes` function to support `Block` objects and hidden elements:

```tsx
// takes the nodes from the AST and adds them to the DOM
function fromNodes(nodes: Array<CompilerElement | Block>, parent: HTMLElement, parentComponent: Component, show: boolean) {
    for (const node of nodes) {
        if ('tag' in node /* typeof node == CompilerElement? */) {
            let elem = new Component(node.tag, parent, node.$$params, show);
            parentComponent.children.push(elem);
            fromNodes(node.children, elem.element, elem, true);
    
            // add all the event handlers
            for (const [event, callback] of Object.entries(node.eventHandlers)) {
                elem.element.addEventListener(event, callback);
            }
        }
        else {
            for (const [elements, callback] of node.conditions) {
                fromNodes(elements, parent, parentComponent, callback());
            }
        }
    }
}
```

The show parameter is passed into the `elem` instance. If `show` is false, the element is removed from the DOM. For `Block` objects, the `callback` function is called to figure out if the block children are to be hidden or not. Every time a condition changes, we can re-evaluate the condition and show/hide the blocks with the condition in the `$$update` function.

### Read More

- [How virtual DOM and diffing works in React](https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e)
- [Rethinking Reactivity by Rich Harris on Youtube](https://www.youtube.com/watch?v=AdNJ3fydeao)