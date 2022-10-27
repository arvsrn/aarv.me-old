<main>
    <h1>Writing</h1>
    <a href="/writing/recreating-svelte-1">Recreating Svelte #1<span>27/10/22</span></a>
</main>

<style>
    main {
        width: 600px;
        height: fit-content;
        
        display: flex;
        flex-direction: column;
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
        font-family: inherit;
        color: #EDEDED;

        opacity: inherit;

        margin-left: auto;
    }

    h1 {
        color: rgba(255, 255, 255, 0.75);

        font-size: 1.5em;
        font-weight: 700;
        font-family: 'Inter';
        padding: 12px 0px;
    }

    @media only screen and (max-width: 630px) {
        main {
            width: 90vw;
        }
    }
</style>