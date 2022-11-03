<script lang="ts">
    import Project from "./Project.svelte";
    import AboutProject from "./AboutProject.svelte";
    import { fade } from 'svelte/transition';
    import Blanket from "./Blanket.svelte";

    let visible: boolean = false;
    let duration: number = 100;
    let show: boolean = false;

    setTimeout(() => visible = true, 1);

    const projects = [
        {
            name: "meshgradient",
            shortDescription: "Built front-end with SvelteKit and hosted on Vercel.",
            websiteLink: "https://meshgradient.vercel.app",
            githubLink: "https://www.github.com/arvsrn/mesh",
            paragraphs: [
                { heading: 'About', text: 'Meshgradient is a tool for making beautiful mesh gradients. Unlike most mesh gradient generators, this app can export your gradient as SVG, and supports customisations like blob size and blending modes.' },
            ],
            color: "#BD8B60"
        },
    ];

    let projectI: number = 0;
</script>

{#if visible}
<main>
    <main>
        <h1 in:fade={{duration: duration * 2}}>Aarav<br>Sareen</h1>
        <h2 in:fade={{duration: duration * 2}}>Full stack developer and designer. <br> <span>(I'm not a good designer)</span></h2>
        <p in:fade={{duration: duration * 8}}>Aspiring software engineer and entrepreneur. I do designing (figma) and full-stack development with SvelteKit & Typescript. </p>
        <a in:fade={{duration: duration * 8}} class="writing" href="/writing">See writing</a>
        
        <h3 in:fade={{duration: duration * 18}}>Projects</h3>
        <div in:fade={{duration: duration * 18}}>
            {#each projects as project, i}
                <Project color={project.color} onclick={() => {projectI = i; show = true}} data={{name: project.name, description: project.shortDescription, github: project.githubLink}} />
            {/each}
        </div>
    </main>
</main>
{/if}

{#if show}
    <Blanket onclick={() => show = false}>
        <AboutProject 
            name={projects[projectI].name}
            shortDescription={projects[projectI].shortDescription}
            websiteLink={projects[projectI].websiteLink}
            githubLink={projects[projectI].githubLink}
            paragraphs={projects[projectI].paragraphs}
            color={projects[projectI].color}
        ></AboutProject>
    </Blanket>
{/if}

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding-top: 50px;
    }

    main > main {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        width: 600px;
        gap: 17px;
    }

    main > main > * {
        animation: transformY;
        animation-iteration-count: 1;
    }

    @keyframes transformY {
        0% {
            transform: translateY(50px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    main > main > div {
        display: flex;
        flex-direction: row;
        gap: 22px;
    }

    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 80px;
        line-height: 87.02%;

        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #FFFFFF;
    }

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #A0A0A0;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h2 > span {
        color: #505050;
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;

        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #A0A0A0;

        width: 100%;
        word-wrap: break-word;
        padding-right: 80px;
    }

    a.writing {
        font-family: 'IBM Plex Serif';
        font-style: italic;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #A0A0A0;

        text-decoration: none;
    }

    a.writing::after {
        content: '→';
        transition: transform 0.07s ease-in;
    }

    a.writing:hover::after {
        transform: translateX(5px);
    }

    h3 {
        padding-top: 98px;

        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;

        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #978365;
    }

    @media only screen and (max-width: 710px) {
        main > main {
            width: 80vw;
        }

        h1 {
            font-size: 11.5vw;
        }

        h2 {
            font-size: clamp(20px, 3.9vw, 36px);
            line-height: clamp(24px, 4.0vw, 36px);
        }

        p {
            font-size: 1em;
        }

        main > div {
            flex-wrap: wrap;
        }

        main {
            overflow-x: hidden;
        }
    }
</style>
