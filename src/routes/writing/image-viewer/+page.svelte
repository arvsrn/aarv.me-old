<script lang="ts">
    let position = [0, 0];
    let hovering = false;

    let padding = 32;

    let zoomFactor = 1.25;

    const onMouseEnter = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        const clientX = event.clientX ?? event.touches[0].clientX;
        const clientY = event.clientY ?? event.touches[0].clientY;
        
        hovering = true;
        position = [clientX, clientY];
    };

    const onMouseLeave = () => {
        hovering = false;
        position = [0, 0];
    };

    const onMouseMove = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        const clientX = event.clientX ?? event.touches[0].clientX;
        const clientY = event.clientY ?? event.touches[0].clientY;
        
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const mouseX = (clientX - rect.left);
        const mouseY = (clientY - rect.top);

        const centerRect = [
            (rect.width * zoomFactor) - rect.width + 2 * padding,
            (rect.height * zoomFactor) - rect.height + 2 * padding,
        ];

        console.log(mouseX)

        const maxX = centerRect[0] / 2;
        const maxY = centerRect[1] / 2;

        const percentage = [
            mouseX / rect.width,
            mouseY / rect.height,
        ];

        position = [
            Math.floor((1 - 2 * percentage[0]) * maxX / zoomFactor),
            Math.floor((1 - 2 * percentage[1]) * maxY / zoomFactor),
        ];
    };
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
                <p class="text-[13px] translate-y-[1px] w-full leading-6 text-white">The Image Viewer Component</p>
            </div>
            <p class="text-[13px] w-full leading-6 text-white/50 mb-4">13/09/2024</p>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
                on:mouseenter={onMouseEnter} 
                on:mouseleave={onMouseLeave} 
                on:mousemove={onMouseMove}
                on:touchstart={onMouseEnter} 
                on:touchend={onMouseLeave} 
                on:touchmove={onMouseMove} 

                class="w-[400px] h-[300px] mt-3 relative outline -outline-offset-1 outline-1 outline-white/15 flex items-center justify-center cursor-move"
            >
                <div style:width="{(400 * zoomFactor) - 400 + 2 * padding}px" style:height="{(300 * zoomFactor) - 300 + 2 * padding}px" class="absolute pointer-events-none border border-dashed border-[#D05DED] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99999 1.76389V8.00033M7.99999 14.2743V8.00033M7.99999 8.00033H1.79851M7.99999 8.00033H14.2785" stroke="#D05DED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div style:--zoom={zoomFactor} class:scale={hovering} style:transform="translate({position[0]}px, {position[1]}px)" class="absolute tiled pointer-events-none w-[400px] h-[300px] border border-dashed border-[#F24822] flex items-center justify-center">
                    <svg style:scale={1/zoomFactor} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99999 1.76389V8.00033M7.99999 14.2743V8.00033M7.99999 8.00033H1.79851M7.99999 8.00033H14.2785" stroke="#F24822" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

            <div class="w-full flex flex-row items-center gap-3 mt-4">
            <div class="flex items-center flex-row gap-1">
                <p class="font-mono text-[#F24822] text-[13px]">Zoom:</p>
                <input bind:value={zoomFactor} type="number" class="h-7 rounded-md border border-white/10 bg-transparent outline-none w-16 text-xs text-white pl-2 pt-[1px]">
            </div>

            <div class="flex items-center flex-row gap-1">
                <p class="font-mono text-[#F24822] text-[13px]">Padding:</p>
                <input bind:value={padding} type="number" class="h-7 rounded-md border border-white/10 bg-transparent outline-none w-16 text-xs text-white pl-2 pt-[1px]">
            </div>
            </div>

            <p class="text !mt-6">When the user hovers over the root container, the image is scaled up by <span class="code ml-1">zoom</span>. The image is moved around via <span class="code">translate</span>, with <span class="code">transform-origin</span> set to <span class="code">center</span>.</p>
            <p class="text">The purple dotted rectangle represents the maximum movement of the image. With this information, we can easily map the mouse position on either axis to a position within the rectangle. </p>

            <span class="code mt-4">let percentage = mouseX / containerWidth;</span>
            <p class="text !text-white/50 !text-xs !mt-0.5 !leading-5 !mb-2">We take the percentage position of the mouse on any axis,</p>
            <span class="code">let mappedPosition = maxX * (1 - 2 * percentage);</span>
            <p class="text !text-white/50 !text-xs !mt-0.5 !leading-5">and multiply it by the width of the purple rectangle (2 * maxX)</p>
            <p class="text !text-white/50 !text-xs !mt-0.5 !leading-5 !mb-2">and subtract it from half the width (maxX) to get the deviation from the center.</p>


            <p class="text"><span class="code">mappedPosition</span> has to be divided by <span class="code">zoom</span> though, as the transform coordinates are also affected by scaling. <span class="code">maxX</span> is calculated like so:</p>

            <span class="code mt-4 mb-2">let maxX = (containerWidth * (zoom - 1)) / 2 + padding;</span>

            <p class="text">This is just the rough logic and preview, you can view the entire code <a href="">on the Github repository</a>.</p>
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
        font-family: Menlo;
        @apply text-[12px] text-white leading-6 font-medium;
    }
</style>