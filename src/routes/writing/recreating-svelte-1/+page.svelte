<script lang="ts">
    import { Calendar } from "radix-icons-svelte";

    let codeblock1 = `class Component {
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
}`;
    let codeblock2 = `function $$update(variable: string) {
    switch (variable) {}
}

let variables: Record<string, any> = {}; `;

    let codeblock3 = `interface CompilerElement {
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
parentNode.show(false);`;
let codeblock4 = `
interface Block {
    type: "conditional";
    conditions: [CompilerElement[], () => boolean][];
}
`;
let codeblock5 = `let body: Array<CompilerElement | Block>;

interface CompilerElement {
	...
    children: Array<CompilerElement | Block>;
	...
}`;
let codeblock6 = `// takes the nodes from the AST and adds them to the DOM
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
}`;
</script>

<svelte:head>
    <style>
        body {
            overflow-x: hidden;
        }

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.4);
        }

        body {
            overflow-x: hidden;
        }
    </style>
</svelte:head>

<main>
    <main>
        <div class="heading">
            <h1>Recreating Svelte #1</h1>
            <div class="calendar">27/07/2022</div>
        </div>
    
        <p class="quote">Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app. — <a href="https://www.svelte.dev/">svelte.dev</a></p>
        <h2>Reactivity</h2>
        <p>Traditionally, front-end frameworks have something called a <a href="https://stackoverflow.com/questions/21965738/what-is-virtual-dom">Virtual DOM</a>, which is essentially a tree representing the actual HTML DOM. When the Virtual DOM gets updated, the framework figures out which nodes to update in the real DOM using a method called <a href="https://reactjs.org/docs/reconciliation.html">diffing</a>. However, <a href="https://svelte.dev/blog/virtual-dom-is-pure-overhead">the virtual DOM is pure overhead</a>.</p>
        <p>Svelte has no virtual DOM. Because of the compile step, elements can be made reactive easily. When the app state changes, the HTML elements are surgically updated. My first implementation of this features a <span class="code">Component</span> class, which looks something like this.</p>
        <p class="grey">Read more about reactivity in svelte <a href="https://svelte.dev/blog/svelte-3-rethinking-reactivity">here</a>.</p>
        <pre>{codeblock1}</pre>
        <p>In order to be reactive, we’d have to map the variable name to its value inside an object (or, well, a Record) and then use a custom <span class="code">$$update</span> function to update any elements dependent on the variable. The implementation is literally just 4 lines, and the switch cases will be added in our compile step.</p>
        <pre>{codeblock2}</pre>
        <p>Now, to actually add the elements to the DOM, let’s define a <span class="code">CompilerElement</span> interface to represent an AST node from the HTML parser (which will be implemented later), and a function to create DOM nodes out of these <span class="code">CompilerElement</span>s.</p>
        <p class="grey">Read more about abstract syntax trees (ASTs) and parsers <a href="https://medium.com/basecs/leveling-up-ones-parsing-game-with-asts-d7a6fc2400ff">here</a></p>
        <pre>{codeblock3}</pre>
        <h2>Conditionals</h2>
        <p>Svelte also features conditional blocks and each blocks (similar to for loops), so let’s implement that as well. This block interface will be used to represent a conditional or each block from the HTML parser. In other words, the AST will contain a bunch of Blocks and CompilerElements.</p>
        <pre>{codeblock4}</pre>
        <p>I’ll figure out each blocks later, for now, we only have conditional blocks. The <span class="code">conditions</span> attribute is an array, and each member has a <span class="code">CompilerElement[]</span>: The elements to show if the condition is true, and a function that returns a boolean (whether the condition is true or not). </p>
        <p>Let’s update the <span class="code">body</span> variable and <span class="code">CompilerElement.children</span> to accept <span class="code">Block</span> objects:</p>
        <pre>{codeblock5}</pre>
        <p>And also the <span class="code">fromNodes</span> function to support <span class="code">Block</span> objects and hidden elements:</p>
        <pre>{codeblock6}</pre>
        <p>The show parameter is passed into the <span class="code">elem</span> instance. If <span class="code">show</span> is false, the element is removed from the DOM and if it’s true then the element stays. For Block objects, the <span class="code">callback</span> function is called to figure out if the block children are to be hidden or not.</p>
        <p>Here’s a demo application I made by updating the <span class="code">body</span> variable and <span class="code">$$update</span> function. <a href="https://gist.github.com/arvsrn/2a7cdbe4ad3fe1ae8c28ab9b614016be">View the code here</a>.</p>
        <iframe width="700px" height="400px" src="https://www.youtube.com/embed/dDIo7fnHT0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Read more</h2>
        <p>
            <a class="bulleted" href="https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e">How virtual DOM and diffing works in React</a>
            <br>
            <a href="https://www.youtube.com/watch?v=AdNJ3fydeao" class="bulleted">Rethinking Reactivity by Rich Harris on Youtube</a>
        </p>
    </main>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding-top: 50px;
    }

    div.heading {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    iframe {
        width: 700px;
        height: 400px;
    }

    p.quote {
        border-left: 2px solid #A0A0A0;
        padding-left: 12px;
    }

    a.bulleted::before {
        content: "• ";
        text-decoration: none;
    }

    div.seperator {
        height: 1px;
        width: 100%;

        background: rgba(255, 255, 255, 0.1);
    }

    pre {
        width: 100%;
        height: fit-content;

        border-radius: 6px;
        background: rgba(255, 255, 255, 0.03);

        font-family: 'IBM Plex Mono';
        font-size: 14px;
        color: #EDEDED;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        padding: 24px;
        overflow-x: scroll;
    }

    pre::-webkit-scrollbar {
        height: 8px;
        
    }

    pre::-webkit-scrollbar-track {
        background: transparent;
    }

    pre::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.25);
        margin: 4px;
        border-radius: 3px; 
    }

    span.comment {
        color: #A0A0A0;
    }

    span.code {
        font-family:"IBM Plex Mono";
        background:rgba(135,131,120,0.15);
        color:#EB5757;
        border-radius:3px;
        font-size:85%;
        padding:0.2em 0.4em;
    }

    main > main {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;

        width: 688.7px;
        height: fit-content;
    }

    h1 {
        color: rgba(255, 255, 255, 0.75);

        font-size: 1.75em;
        font-weight: 700;
        font-family: 'Inter';
        line-height: 1.1111111;

        margin-bottom: 6px;
    }

    h2 {
        color: rgba(255, 255, 255, 0.75);

        font-size: 1.25em;
        font-weight: 700;
        font-family: 'Inter';
        padding: 12px 0px;
    }

    p {
        color: rgba(255, 255, 255, 0.8);

        font-size: 16px;
        font-family: 'Inter';
        line-height: 29px;

        height: fit-content;
    }

    p.grey, p.grey > a {
        color: rgba(255, 255, 255, 0.5);
    }   

    div.calendar {
        font-size: 14px;
        font-family: 'IBM Plex Serif';
        color: rgba(255, 255, 255, 0.4);

        width: fit-content;
        height: fit-content;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4px;

        padding-bottom: 12px;
    }
    
    @media only screen and (max-width: 700px) {
        main {
            display: flex;
            align-items: center;
        }

        main > main {
            width: 90vw;
        }

        iframe {
            width: 90vw;
            height: 60vw;
        }
    }

    a {
        text-decoration: underline;
        text-decoration-color: rgba(255, 255, 255, 0.2);
        text-decoration-thickness: 2px;
        color: rgba(255, 255, 255, 0.6);
    }

    a:hover {
        text-decoration-color: rgba(255, 255, 255, 0.4);
    }
</style>