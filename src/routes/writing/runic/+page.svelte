<script>
    import Image from "../../Image.svelte";
</script>

<main class="bg-[#202020] relative w-screen min-h-screen h-fit overflow-hidden">
    <div class="py-32 flex items-center justify-center w-full h-fit">
        <div class="responsive h-fit flex flex-col">
            <div class="w-full h-fit flex flex-col relative">
                <a class="size-6 flex items-center justify-center !text-white/50 absolute -left-8 top-1/2 -translate-y-1/2" href="/">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7508 8.25L2.25082 8.25M2.25082 8.25L5.25082 11.25M2.25082 8.25L5.25082 5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <p class="text-[13px] translate-y-[1px] w-full leading-6 text-white">Runic</p>
            </div>
            <p class="text-[13px] w-full leading-6 text-white/50 mb-4">13/09/2024</p>

            <p class="text">For the past 2 years I've been trying to create a design system and icon set that just sticks. After multiple revisions and refinements, I've landed on this visual style. I reckon it will take 1-2 months to write all the components & templates, and write comprehensive documentation.</p>

            <div class="flex flex-col gap-8 w-full h-fit items-center mt-8">
                <Image dark src="/Shots/Runic-1.png"></Image>
                <Image dark src="/Shots/Runic-5.png"></Image>
                <Image dark src="/Shots/Runic-2.png"></Image>
                <Image dark src="/Shots/Runic-4.png"></Image>
            </div>

            <p class="heading !mt-16">Some old variations</p>

            <div class="flex flex-col gap-8 w-full h-fit items-center mt-8">
                <Image dark src="/Shots/Runic-Old-1.png"></Image>
                <p class="text-xs text-white/50 -mt-4 w-full leading-5">This style was too simple, it couldn't be extrapolated onto other components like modals, tables, etc. In other words, it didn't work well with more complicated components.</p>
                <Image dark src="/Shots/Runic-Old-2.png"></Image>
                <p class="text-xs text-white/50 -mt-4 w-full leading-5">This one was too complex, the excessive borders, shadows and indents didn't age well.</p>
                <Image dark src="/Shots/Runic-Old-3.png"></Image>
                <p class="text-xs text-white/50 -mt-4 w-full leading-5">These icons looked good in theory: 15×15px, sharp edges, legible icons. But they didn't work with actual UI. The bounding box size made them hard to work with, since most UIs use even multiples for sizes and paddings. I'm not a fan of these at all, but you can grab them <a href="https://www.figma.com/community/file/1332591474304366188/rune-icons">here</a> if you like.</p>
            </div>
        </div>
    </div>
</main>

<style>
    :global(body::-webkit-scrollbar), ::-webkit-scrollbar {
        display: none;
    }

    .responsive {
        width: 600px;
    }

    .heading {
        @apply text-[15px] w-full leading-6 text-white mt-8 mb-1;
    }

    .text { 
        @apply text-[13px] w-full leading-6 text-white/80 mt-2.5;
    }

    a {
        @apply underline underline-offset-[4px] text-white decoration-white/20;
    }

    @media only screen and (max-width: 750px) {
        .responsive {
            width: 80vw;
        }
    }

    .scale {
        scale: var(--zoom);
    }

    .tiled {
        background-image: url(/Tiled.png);
        image-rendering: pixelated;
    }

    span.code {
        @apply font-mono text-[12px] leading-6;
    }
</style>