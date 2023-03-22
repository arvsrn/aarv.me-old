<script lang="ts">
    import { page } from "$app/stores";
</script>

<main>
    <div class="container">
        <p class="heading">Error: {$page.error?.message}</p>
        <p>The exciting thing is what something could become, not what it is. The sooner something goes into the world, the sooner it can be made better. </p>
        <p>So done is better than perfect.</p>
        <p>But done is never finished.</p>
        <p>Today's 404 page is tomorrow's breakthrough.<br>It's the nature of the internet.</p>
        
        <div class="divider"></div>

        <div class="container smallgap">
            <a href="/">Twitter</a>
            <a href="/">Back to home</a>
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
        gap: 16px;

        width: var(--width);
        height: fit-content;
    }

    .smallgap {
        gap: 8px !important;
    }

    a {
        text-decoration: none;
        color: #a0a0a0;
    }

    a::before {
        content: '→ ';
    }

    div.divider {
        width: 100%;
        height: 1px;
        background-color: #232323;
        margin: 16px 0px;
    }
</style>