<main>
    <h1>Work in progress...</h1>
    <p>Aarav Sareen — Web developer & designer.</p>
    <p>Working on some stuff right now, new site will be live in a few weeks.</p>
    <h2>Contact</h2>
    <p><a href="">twitter/@arvsrn</a> or <a href="">contact@aarv.me</a>.</p>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,600;1,600&family=Inter:wght@400;500;600;700;800;900&display=swap');

    a {
        display: inline;
        width: fit-content;

        color: #ccc;

        text-decoration-color: #555 !important;
        text-decoration-thickness: 2px !important;
        text-decoration: underline;
    }

    main {
        position: absolute;
        top: 0px; left: 0px;
        
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        padding: 15vh 20vw;
        align-items: flex-start;
        gap: 4px;

        background-color: #222222;
    }

    h1 {
        font-family: 'IBM Plex Serif';
        font-size: 22px;
        font-weight: 600;
        font-style: italic;

        color: #e5e5e5;

        margin-bottom: 8px;
    }

    h1::before {
        content: '☕';
        font-style: normal;
        margin-right: 4px;
    }

    p {
        width: 100%;

        font-family: Inter, sans-serif;
        font-size: 15px;
        font-weight: normal;

        color: #aaa;
    }

    h2 {
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: bold;

        color: #ddd;

        margin-top: 20px;
    }
</style>