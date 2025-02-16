<main class="bg-[#202020] relative w-screen min-h-screen h-fit overflow-hidden">
    <div class="py-32 flex items-center justify-center w-full h-fit">
        <div class="responsive h-fit flex flex-col">
            <div class="w-full h-fit flex flex-col relative">
                <a class="size-6 flex items-center justify-center text-white/50 absolute -left-8 top-1/2 -translate-y-1/2" href="/">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7508 8.25L2.25082 8.25M2.25082 8.25L5.25082 11.25M2.25082 8.25L5.25082 5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <p class="text-[13px] translate-y-[1px] w-full leading-6 text-white">Version 19</p>
            </div>
            <p class="text-[13px] w-full leading-6 text-white/50 mb-4">13/09/2024</p>

            <p class="text">The purpose of this iteration is to showcase my work properly, without sacrificing the little details™.</p>
            <p class="text">Built with SvelteKit and Tailwind, hosted on Vercel. Set in <a href="/FaktPro.otf">Fakt Pro</a> for text, and <a href="https://www.grillitype.com/typeface/gt-alpina">GT Alpina</a> for headings.</p>
            <p class="text">I've written a bit about the implementation for the image viewer component <a href="/writing/image-viewer">here</a>.</p>
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
        @apply underline underline-offset-[4px] decoration-white/20;
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