<script lang="ts">
    export let href: string;
    export let disabled: boolean = false;
</script>

<a {href} class:disabled={disabled}>
    <slot></slot>
</a>

<style>
    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 6px 12px;
        gap: 2px;

        width: fit-content;
        height: 29px;

        background: #1C1C1C;
        color: #A0A0A0;

        border: 1px solid #232323;
        border-radius: 100px;

        text-decoration: none;
        user-select: none;
    }

    a:hover {
        border: 1px solid #2E2E2E;
    }

    a:focus {
        outline: 2px solid #232323;
    }

    .disabled {
        cursor: not-allowed;
    }
</style>