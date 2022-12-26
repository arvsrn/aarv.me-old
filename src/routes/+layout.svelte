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
        
        background-color: #1c1c1c;
        
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 12px;
        border-radius: 6px;
        margin-top: 12px;
        margin-left: 12px;
        max-width: 439.31px;

        width: fit-content;
        height: fit-content;

        position: absolute;

        font-family: 'Fakt Pro';
        font-size: 14px;
        font-weight: normal;

        color: #ddd;
        z-index: 100;

        line-height: 21px;
    }
</style>
