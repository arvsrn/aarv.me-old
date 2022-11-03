<script lang="ts">
    import { fade } from "svelte/transition";


    export let name: string;
    export let shortDescription: string;
    export let websiteLink: string;
    export let githubLink: string;
    export let paragraphs: Array<{heading: string, text: string}>;
    export let color: string;
</script>

<main style="background: {color};" transition:fade={{ duration: 50 }}>
    <h2>{name}</h2>
    <p>{shortDescription}</p>
    <div class="buttons">
        <a href={websiteLink} style="color: {color};">Visit Website</a>
        <a href={githubLink} style="color: {color};">View on GitHub</a>
    </div>
    <div class="paras">
        {#each paragraphs as para}
            <div>
                <h1>{para.heading}</h1>
                <p>{para.text}</p>
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 36px;
        gap: 8px;

        width: 700px;
        height: 585px;

        background: #BD8B60;
        border-radius: 11px;
    }

    h1, h2, p {
        mix-blend-mode: hard-light;
    }

    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #FFFFFF;
    }

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #FFFFFF;
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 24px;
        /* identical to box height, or 160% */

        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #D9D9D9;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 10px 14px;
        gap: 10px;

        width: fit-content;
        height: 44px;

        background: #FFFFFF;
        border-radius: 1000px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;

        color: #BD8B60;

        cursor: pointer;
        border: none;
        outline: none;

        text-decoration: none;
    }

    div.buttons {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
    }

    div.paras {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;

        padding-top: 130px;
    }

    div.paras > * {
        flex: 1;
    }

    div.paras > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
    }

    @media only screen and (max-width: 710px) {
        main {
            width: 90vw;
            height: 90vh; 
        }
    }
</style>