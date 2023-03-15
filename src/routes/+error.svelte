<script lang="ts">
    import { page } from "$app/stores";
</script>

<main>
    <div class="container smallgap">
        <p class="heading">Error.</p>
        <p>{$page.error?.message}</p>
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
        gap: 10px;

        width: var(--width);
        height: fit-content;
    }

    .smallgap {
        gap: 5px !important;
    }
</style>