<main>
    <div class="container">
        <p class="heading">Writing</p>
        <p class="heading" style="margin-bottom:16px;">
            <span class="dark">Thoughts & experiments.</span>
        </p>

        <div class="article">
            <a href="/writing/redesign-2023">Redesign '23</a> <span class="right">20 March 2023</span>
        </div>
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

    div.article {
        height: fit-content;
        width: 100%;

        display: flex;
        flex-direction: row;
        gap: 8px;
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

    a {
        color: #ededed;
        text-decoration-color: #7e7e7e;
        text-decoration-thickness: 1px;
    }

    span {
        color: #7e7e7e;
    }

    span.right {
        margin-left: auto;
    }
</style>