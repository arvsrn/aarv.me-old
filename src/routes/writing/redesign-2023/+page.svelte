<script>
    import ButtonLink from "../../ButtonLink.svelte";
</script>

<main>
    <div class="container smallgap">
        <p class="heading">Redesign '23</p>
        <p>20th March 2023</p>

        <a class="exit" href="/">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6465L4.70711 4L9 4C9.27614 4 9.5 3.77614 9.5 3.5C9.5 3.22386 9.27614 3 9 3L3.5 3C3.36739 3 3.24021 3.05268 3.14645 3.14645C3.05268 3.24022 3 3.36739 3 3.5L3 9.00001C3 9.27615 3.22386 9.50001 3.5 9.50001C3.77614 9.50001 4 9.27615 4 9.00001V4.70711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </a>

        <div class="link">
            <ButtonLink href="/">Back</ButtonLink>
        </div>
    </div>
    <div class="container">
        <p>This is it — The 11th iteration of my home on the web. Set in Fakt Pro and Supply Regular, it focuses on a minimal design and showcases everything I've built. Inspired by <a href="https://www.paco.me">Paco Coursey</a> & the enormous amount of design I've consumed in the past few years.</p>
        <p>Looking forward to posting more articles here, trying out new ventures like game development, typography, motion design, etc. I'll be sharing whatever I do on my <a href="https://www.twitter.com/arvsrn">twitter</a>.</p>
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
        left: -36px;
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