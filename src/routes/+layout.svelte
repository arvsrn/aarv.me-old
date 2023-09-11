<script lang="ts">
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    let hovering: boolean = false;
    let mousePosition: number[] = [0, 0];
    let text: string = "";

    onMount(() => {
        document.querySelectorAll('[data-info]').forEach(element => {
            element.addEventListener('mouseenter', () => {
                hovering = true;
                text = element.getAttribute('data-info') || '';
            });
            element.addEventListener('mouseleave', () => hovering = false);
        });
    });
</script>

<svelte:window on:mousemove={e => mousePosition = [e.clientX, e.clientY]}/>

{#if hovering}
    <main transition:slide={{ duration: 150 }} style="top: {mousePosition[1]}px; left: {mousePosition[0]}px;">{text}</main>
{/if}

<slot></slot>

<style>
    main {
        opacity: 100%;
        
        background-color: #0a0a0a;
        border: 1px solid rgba(255, 255, 255, 0.1);
        
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 8px;
        padding-bottom: 8px;
        border-radius: 6px;
        margin-top: 6px;
        margin-left: 6px;
        max-width: 400px;

        width: fit-content;
        height: fit-content;

        position: absolute;

        font-family: 'Fakt Pro';
        font-size: 13px;
        font-weight: normal;

        color: #ddd;
        z-index: 100;

        line-height: 21px;
    }
</style>