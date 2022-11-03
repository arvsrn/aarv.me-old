<main>
    <main>
        <h1>Writing</h1>
        <a href="/writing/recreating-svelte-1/"><span>27/10/22</span>&nbsp;Recreating Svelte #1</a>
    </main>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding-top: 50px;
    }

    main > main {
        width: 600px;
        height: fit-content;
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 4px;
    }

    a {
        width: 100%;
        height: 32px;
        
        display: flex;
        flex-direction: row;
        align-items: center;

        font-family: 'Inter';
        font-size: 16px;
        color: white;

        opacity: 70%;
        transition: opacity 0.2s ease-in;

        cursor: pointer;
        user-select: none;

        text-decoration: none;
    }

    a:hover {
        opacity: 100%;
    }

    span {
        font-size: inherit;
        font-family: 'IBM Plex Serif';
        font-style: normal;
        color: #a0a0a0;

        opacity: inherit;
    }

    h1 {
        color: white;

        font-size: 1.5em;
        font-weight: 700;
        font-family: 'IBM Plex Serif';
        font-style: italic;
        padding: 12px 0px;
    }

    @media only screen and (max-width: 630px) {
        main {
            width: 90vw;
        }
    }
</style>