<script lang="ts">
    import Projects from './Projects.svelte';
    import Writing from './Writing.svelte';
</script>

<main>
    <div class="container">
        <div class="noggle-container" data-animate style="--stagger: 2;">
            <div class="before"></div>
            <svg width="48" height="18" viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_31_30)">
            <path d="M0.0498047 14.7898V6.03077H9.1488V0.0927734H26.8998V6.03077H30.0318V0.0927734H47.9318V17.9068H30.0318V8.99977H26.8998V17.9068H9.1488V8.99977H3.1818V14.7898H0.0498047Z" fill="black"/>
            <path d="M17.9868 3.06201H23.9908V14.938H17.9868V3.06201Z" fill="black"/>
            <path d="M38.8008 3.06201H44.8048V14.938H38.8008V3.06201Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_31_30">
            <rect width="48" height="18" fill="black"/>
            </clipPath>
            </defs>
            </svg>
            <div class="after"></div>
        </div>
        <p data-animate style="--stagger: 2;">Aarav Sareen — Passionate developer and visual designer constantly learning and creating meaningful projects. Reach me at <a href="mailto:contact@aarv.me">contact@aarv.me</a>.</p>
        <h2 data-animate style="--stagger: 3">Now</h2>
        <p data-animate style="--stagger: 3">Focusing a bit more on my hobbies this year, like music and chess. Constantly learning and building cool shit. Experimenting with design.</p>
        <Projects></Projects>
    </div>
</main>

<style>
    main {
        width: 100vw;
        height: 100vh;

        background-color: white;

        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 100px 56px;
        align-items: center;

        box-sizing: border-box;
    }

    div.container {
        display: flex;
        flex-direction: column;
        width: 512px;
        gap: 16px;
    }

    div.noggle-container {
        position: relative;
        width: fit-content;
        height: fit-content;
    }

    div.before, div.after {
        position: absolute;
        width: 6px;
        height: 12px;
        top: 3px;
        background-color: white;
        transition: transform 0.2s cubic-bezier(0.4,2,0.68,1);
    }

    div.before {
        left: 18px;
    }

    div.after {
        left: 39px;
    }

    div.noggle-container:hover div.before,
    div.noggle-container:hover div.after {
        transform: translateX(-6px);
    }

    h2 {
        font-family: 'Fakt Pro';
        font-size: 14px;
        font-weight: 500;

        user-select: none;
        color: black;
        margin-top: 16px;
    }

    p {
        font-family: 'Fakt Pro';
        font-size: 14.5px;
        line-height: 19px;
        font-weight: normal;

        width: 100%;
        word-wrap: break-word;

        color: #434343;
    }

    a {
        text-decoration: none;
        color: black;

        font-family: 'Fakt Pro';
        font-size: 14.5px;
        line-height: 19px;
        font-weight: normal;
        
        position: relative;
    }

    a::after {
        content: '';
        position: absolute;
        height: 1.25px;
        width: 100%;
        left: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(3px);
        background: #555;
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    a:hover::after {
        opacity: 1;
        transform: translateY(0);
    }


    @media only screen and (max-width: 600px) {
        div.container {
            width: 100%;
        }
    }
</style>