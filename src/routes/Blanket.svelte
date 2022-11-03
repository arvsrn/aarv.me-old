<script lang="ts">
    export let onclick: () => void;
</script>

<main on:click|self={onclick}>
    <slot></slot>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 0px;
        left: 0px;

        width: 100vw;
        height: 100vh;

        background: rgba(0, 0, 0, 0.25);
    }
</style>