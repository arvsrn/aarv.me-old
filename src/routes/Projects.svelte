<main data-animate style="--stagger: 4;">
    <h2>Projects</h2>
    <a href="https://mesh.aarv.me" data-info="Meshgradient is an app for generating stunning SVG mesh gradients.">
        <span>2022</span>
        meshgradient
    </a>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 4px;

        margin-top: 8px;
        width: 512px;
    }

    h2 {
        font-family: 'Fakt Pro';
        font-size: 14px;
        font-weight: normal;

        color: #666;
        user-select: none;
        margin-bottom: 2px;
    }

    a {
        width: fit-content;
        text-decoration: none;

        font-family: 'Fakt Pro';
        font-size: 14px;
        font-weight: normal;

        color: black;
        cursor: pointer;
        user-select: none;
    }

    span {
        font-family: 'IBM Plex Serif';
        font-size: 14px;
        font-weight: normal;
        
        color: #666;
        margin-right: 4px;
    }

    @media only screen and (max-width: 600px) {
        main {
            width: 100%;
        }
    }
</style>