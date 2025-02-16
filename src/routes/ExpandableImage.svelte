<script lang="ts">
    export let src: string;
    export let light: boolean = false;
    
    let position = [0, 0];
    let hovering = false;
    let hoverEnabled = false;

    let zoomFactor = 2.5;
    let padding = 64;

    let self: HTMLImageElement;

    const onMouseEnter = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        hovering = true;

        if (!hoverEnabled)
            return;

        const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
        
        position = [clientX, clientY];
    };

    const onMouseLeave = () => {
        hovering = false;
        position = [0, 0];
    };

    const onMouseMove = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        if (!hoverEnabled || !hovering)
            return;

        const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
        
        if (!self)
            return;
        
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const mouseX = (clientX - rect.left);
        const mouseY = (clientY - rect.top);

        const centerRect = [
            (rect.width * zoomFactor) - rect.width + 2 * padding,
            (rect.height * zoomFactor) - rect.height + 2 * padding,
        ];

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

    const onClick = (event: MouseEvent | TouchEvent) => {
        hoverEnabled = !hoverEnabled;

        if (hoverEnabled == false) {
            position = [0, 0];
        } else {
            const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
            const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
            
            if (!self)
                return;
            
            const rect = (event.target as HTMLElement).getBoundingClientRect();
            const mouseX = (clientX - rect.left);
            const mouseY = (clientY - rect.top);

            const centerRect = [
                (rect.width * zoomFactor) - rect.width + 2 * padding,
                (rect.height * zoomFactor) - rect.height + 2 * padding,
            ];

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
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
<div 
    role="button"
    tabindex="0"
    on:mouseenter={onMouseEnter} 
    on:mouseleave={onMouseLeave} 
    on:mousemove={onMouseMove}
    on:touchstart={onMouseEnter} 
    on:touchend={onMouseLeave} 
    on:touchmove={onMouseMove} 
    on:click={onClick}

    class="bg-[#101010] responsive relative outline outline-1 outline-white/[.025] rounded-md overflow-hidden cursor-move"
    class:light={light}
>
    <img bind:this={self} style:transform="translate({position[0]}px, {position[1]}px)" style:--zoom={zoomFactor} class:zoom={hovering && hoverEnabled} class="responsive origin-center pointer-events-none absolute" {src} alt="">
</div>

<style>
    img {
        image-rendering: smooth;
    }

    .zoom {
        scale: var(--zoom);
    }

    .responsive {
        width: 780px;
        aspect-ratio: 780 / 507;
    }

    .light {
        @apply bg-[#FBFBFB];
    }

    @media only screen and (max-width: 907px) {
        .responsive {
            width: 86vw;
        }
    }
</style>