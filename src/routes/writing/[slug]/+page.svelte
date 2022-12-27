<script lang="ts">
    import Markdown from 'svelte-markdown';
    import { page } from '$app/stores';
</script>

<main>
    <div class="container">
        { @html $page.data.body }
    </div>
</main>

<style>
    main {
        width: 100vw;
        height: 100vh;

        padding: 100px 0px;

        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    div.container {
        display: flex;
        flex-direction: column;
        width: 512px;
        gap: 16px;
    }
    
    :global(p) {
        font-family: 'Fakt Pro';
        font-size: 14.5px;
    }

    :global(h1), :global(h2), :global(h3) {
        font-family: 'Fakt Pro';
        font-size: 15px;
        font-weight: normal;

        margin-top: 24px;
    }

    :global(a) {
        font-family: 'Fakt Pro';
        font-size: 14.5px;
        font-weight: normal;

        text-decoration: underline;
        text-decoration-color: #555;
        color: #555;
    }

    :global(blockquote) {
        padding-left: 8px;
        border-left: 2px solid #555;
    }
    
    :global(p > code) {
        font-size: 13px;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 0px 2px;
        border-radius: 4px;
        color: #E03E3E;
    }

    :global(pre) {
        width: 100%;
        height: fit-content;
        padding: 4px;
        overflow-x: auto;
        display: block;
    }

    :global(pre > code) {
        height: fit-content;
    }
</style>