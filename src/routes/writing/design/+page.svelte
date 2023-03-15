<script>
    import ButtonLink from "../../ButtonLink.svelte";

</script>
<main>
    <div class="container smallgap">
        <p class="heading">Design</p>
        <p>22nd March 2022</p>

        <a class="exit" href="/">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6465L4.70711 4L9 4C9.27614 4 9.5 3.77614 9.5 3.5C9.5 3.22386 9.27614 3 9 3L3.5 3C3.36739 3 3.24021 3.05268 3.14645 3.14645C3.05268 3.24022 3 3.36739 3 3.5L3 9.00001C3 9.27615 3.22386 9.50001 3.5 9.50001C3.77614 9.50001 4 9.27615 4 9.00001V4.70711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </a>

        <div class="link">
            <ButtonLink href="/">Back</ButtonLink>
        </div>
    </div>
    <div class="container">
        <p class="heading">What led you into design and code?</p>
        <p>I’ve always loved design as far as I can remember but how I got into code is a much more interesting story. Before my last year of University I had no idea about programming, how websites were made, or any of that — I studied Arts and Psychology and never considered Computer Science.</p>
        <p>Then I happened to take a class that was focused around technology called Music and the Internet MUMT 301. That’s when everything changed for me. One day, our professor taught us the very basics of HTML, CSS, JavaScript and challenged the class to build a website for our favourite musician. I distinctly remember failing to grasp the concept of a for loop and at the same time being blown away by dragging an index.html file into a browser. I was immediately enthralled.</p>
        <p>After that class I spent all my time building the website for our challenge. I was hooked and couldn’t stop learning how websites were made. By the end of the week I had won the challenge and registered for Introduction to Computer Science in my last semester.</p>
        <p>Everything snowballed from there. After graduating I got a part-time job making minimum wage and I would spend all my free time trying to recreate my favourite websites and studying books about JavaScript until I was able to land my first Software Engineering role.</p>
    </div>
    <div class="container">
        <p class="heading">Could you tell us a bit about Narative and Fey?</p>
        <p>Narative is a company I started with my co-founders. Our goal was to build an agency and use our profits to build products we found exciting. We were lucky to work with so many amazing clients at Narative and really hone our skills.</p>
        <p><a href="/">Fey</a> is the first product Narative has produced. At this point, Fey is our complete focus and Narative sits as a parent company on top of Fey.</p>
        <p>Fey is easily the most ambitious product I’ve ever built. Right now we’re a small team doing big things working as hard as we can to onboard more customers. The world of finance is incredibly difficult because the stakes are high when you deal with money. In addition to that, we’re trying to create the best experience in the world for retail investors instead of just another finance app.</p>
    </div>
</main>

<style>
    main {
        width: 100%;
        min-height: 100vh;
        height: fit-content;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 0px;
        gap: 45px;

        background: #161616;
    }

    p.heading {
        font-family: 'Fakt Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14.5px;
        line-height: 17px;

        color: #EDEDED;
    }

    p {
        font-family: 'Fakt Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14.5px;
        line-height: 19px;

        color: #A0A0A0;

        width: 100%;
        word-wrap: break-word;
    }

    div.container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;

        width: var(--width);
        height: fit-content;

        position: relative;
    }

    .smallgap {
        gap: 5px !important;
    }

    a {
        color: #a0a0a0;
        text-decoration-color: #7e7e7e;
        text-decoration-thickness: 1px;
    }

    a.exit {
        position: absolute;
        left: -32px;
        top: 50%;
        transform: translateY(-50%);

        width: 24px;
        height: 24px;

        background: transparent;
        border: none;
        outline: none;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }

    a:hover {
        background: #232323;
    }

    div.link {
        display: none;
        margin-top: 8px;
    }

    @media only screen and (max-width: 600px) {
        div.link { display: block; }
        a.exit { display: none; }
    }
</style>