<script lang="ts">
    export let src: string;
</script>

<img class="w-[780px] aspect-[780/507] responsive rounded-md outline outline-1 -outline-offset-1 outline-white/[.025] select-none pointer-events-none" {src} alt="">

<style>
    img {
        image-rendering: smooth;
    }

    .responsive {
        width: 780px;
        aspect-ratio: 780 / 507;
    }

    @media only screen and (max-width: 907px) {
        .responsive {
            width: 86vw;
        }
    }
</style>