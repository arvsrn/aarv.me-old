<script lang="ts">
    interface ProjectData {
        github: string,
        name: string,
        description: string,
    }
    
    export let color: string = "#BD8B60";
    export let data: ProjectData;
    export let onclick: () => void;
</script>

<main style="background: {color}" on:click={onclick}>
    <h1>{data.name}</h1>
    <p>{data.description}</p>
    <a href="{data.github}">View on GitHub</a>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 12px;
        gap: 6px;

        width: 255px;
        height: 255px;

        border-radius: 11px;

        cursor: pointer;
        user-select: none;
    }

    h1, p, a {
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

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 24px;
        /* or 160% */

        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #D9D9D9;
    }

    a {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 24px;
        /* identical to box height, or 160% */

        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #C4C4C4;

        text-decoration: none;
    }

    a::after {
        content: '→';
        transition: transform 0.07s ease-in;
    }

    a:hover::after {
        transform: translateX(5px);
    }

    @media only screen and (max-width: 400px) {
        main {
            width: 100%;
        }
    }
</style>