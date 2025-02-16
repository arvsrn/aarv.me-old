<script lang="ts">
    import { slide } from "svelte/transition";

    interface Song {
        cover: string;
        link: string;
        name: string;
        artist: string;
        src: string;
    }

    const songs: Song[] = [
        {
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTV28coDqQihGgYzNIfSstu4S89l7IdTi3rA&s",
            link: "https://open.spotify.com/track/6XjDF6nds4DE2BBbagZol6?si=66ea700add244fe6",
            name: "Gata Only",
            artist: "FloyyMenor, Cris Mj",
            src: "/Music/Gata Only.mp3",
        },
        {
            cover: "https://i.scdn.co/image/ab67616d0000b273a1c530786072f5471340c1f8",
            link: "https://open.spotify.com/track/2nqtsUds06yqBgjfhMZhpa?si=c7195c7792bb4aa8",
            name: "DECKED",
            artist: "VAPORCHROME",
            src: "/Music/DECKED.mp3",
        },
        {
            cover: "https://i1.sndcdn.com/artworks-000138147326-qqf0v7-t1080x1080.jpg",
            link: "https://open.spotify.com/track/3A1BJKGMsa8JqO8M8zztyq?si=cf2a5b9cafb54e99",
            name: "Me Gustas Tu",
            artist: "Manu Chao",
            src: "/Music/Me Gustas Tu.mp3",
        },
        {
            cover: "https://i.scdn.co/image/ab67616d0000b273fae65e5717bdab6ec896cc15",
            link: "https://open.spotify.com/track/65r94rVdiMwqXyQFEr3tqT?si=95c1339149364be5",
            name: "Resonance",
            artist: "Home",
            src: "/Music/Resonance.mp3",
        },
        {
            cover: "https://i.scdn.co/image/ab67616d0000b2737d738c72c6579eb76c137443",
            link: "https://open.spotify.com/track/44ENDeqm995fDbfBoX25Am?si=7a7ba2cd02124983",
            name: "Anyway",
            artist: "onimanxd",
            src: "/Music/Anyway.mp3",
        },
        {
            cover: "https://i.scdn.co/image/ab67616d0000b273f442b79dcc4887070f6c7de4",
            link: "https://open.spotify.com/track/7H3n6nnlgJPD58YqoBiN7q?si=99b6e71b226d4b9f",
            name: "Me gustaría gustarte",
            artist: "lusillón",
            src: "/Music/Me gustaria gustarte.mp3",
        },
        {
            cover: "https://cdns-images.dzcdn.net/images/cover/8bcef3d15ca7c515ffde7f0955549904/1900x1900-000000-80-0-0.jpg",
            link: "https://open.spotify.com/track/3gilyLEPttYyyo9NTNyAwx?si=a71764cd218e42e5",
            name: "Paro",
            artist: "Nej",
            src: "/Music/Paro.mp3",
        },
        {
            cover: "https://i.scdn.co/image/ab67616d0000b2732bb81507086381f9175c092c",
            link: "https://open.spotify.com/track/2ywSkFhN0wUvxKiWW0BxcK?si=b337aaca95754b3a",
            name: "Bartender",
            artist: "Asal",
            src: "/Music/Bart Ender.mp3",
        },
    ]

    /*
        https://www.youtube.com/watch?v=5C-5JlGaK9k 
        https://www.youtube.com/watch?v=ZFkfmaO9XMw 
        https://www.youtube.com/watch?v=rs6Y4kZ8qtw 
        https://www.youtube.com/watch?v=8GW6sLrK40k 
        https://www.youtube.com/watch?v=BZJJ7pnlOts 
        https://www.youtube.com/watch?v=UOnbQwrNiZo 
        https://www.youtube.com/watch?v=B-99Pm--78Y 
        https://www.youtube.com/watch?v=ix-YnepdX6Y
    */

    let last = "";
    let current: Song | null = songs[Math.floor(Math.random() * songs.length)];

    const shuffle = () => {
        let newSong = songs[Math.floor(Math.random() * songs.length)];

        while (newSong.name === last) {
            newSong = songs[Math.floor(Math.random() * songs.length)];
        }

        last = current?.name ?? "";
        current = newSong;
    }

    let open: boolean = false;

    export function clickOutside(node: HTMLElement, options: {
        handler: (e: MouseEvent) => void,
        handleContextMenu?: boolean,
    }): { destroy: () => void } {
        const onClick = (event: MouseEvent) =>
            node 
            && !node.contains(event.target as HTMLElement) 
            && !event.defaultPrevented 
            && options.handler(event);
    
        document.addEventListener('click', onClick, true);
        document.addEventListener('touchstart', onClick, true);
            if (options.handleContextMenu)
            document.addEventListener('contextmenu', onClick, true);
    
        return {
            destroy() {
                document.removeEventListener('click', onClick, true);
                if (options.handleContextMenu)
                    document.removeEventListener('contextmenu', onClick, true);
            },
        };
    };

    export function blurInDownwards(node: Node, props: { duration: number, transform?: string }) {
        return {
            duration: props.duration,
            css: (t: number) => {
                return `
                    transform: translateY(-${4-(t*4)}px) ${props.transform ?? ""};
                    scale: ${0.99 + (0.01 * t)};
                    filter: blur(${1-(t*1)}px);
                `;
            }
        };
    };
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events -->
<main class="p-1 -ml-1 -mt-1 mb-2 rounded-full w-fit h-fit flex flex-row gap-1.5 items-center border border-transparent" class:open={open} use:clickOutside={{ handler: () => open = false, handleContextMenu: true }} >
    <div class="size-6 flex flex-col overflow-hidden rounded-full">
        <main on:click={() => { open = true; shuffle() }} class="overflow-visible flex-none flex items-center size-6 rounded-full bg-white/10 cursor-pointer gap-0.5 justify-center relative">
            <div class="w-0.5 bg-white/25 rounded-full animate-1"></div>
            <div class="w-0.5 bg-white/25 rounded-full animate-2"></div>
            <div class="w-0.5 bg-white/25 rounded-full animate-3"></div>
        </main>

        {#if current}
            <img class:moveUp={open} class="size-6 rounded-full select-none" draggable="false" src={current.cover} alt="">
        {/if}
    </div>

    {#if open && current}
        <div class="flex flex-row items-center gap-1.5" transition:slide={{ axis: 'x', duration: 250 }}>
            <div class="w-fit h-5 overflow-hidden">
                <p class="text-xs translate-y-[1.5px] text-white leading-5 text-nowrap select-none">{current.name}—{current.artist}</p>
            </div>

            <main on:click={() => shuffle()} class="overflow-visible flex items-center size-6 rounded-full hover:bg-white/10 cursor-pointer gap-0.5 text-white/50 justify-center relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99884 5.00021L2.74493 5M2.74493 5L5.25187 7.50768M2.74493 5L5.25187 2.49306" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.2534 10.9931L13.5073 10.9933M13.5073 10.9933L11.0004 8.48561M13.5073 10.9933L11.0004 13.5002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                    
            </main>

            <a href={current.link} class="overflow-visible flex items-center size-6 -ml-1.5 rounded-full hover:bg-white/10 cursor-pointer gap-0.5 text-white/50 justify-center relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00104 14.5C11.5909 14.5 14.501 11.5899 14.501 8C14.501 4.41015 11.5909 1.5 8.00104 1.5C4.41119 1.5 1.50104 4.41015 1.50104 8C1.50104 11.5899 4.41119 14.5 8.00104 14.5ZM11.0324 5.7415C11.0324 5.32729 10.6966 4.9915 10.2824 4.9915L6.04771 4.9915C5.6335 4.9915 5.29771 5.32729 5.29771 5.7415C5.29771 6.15572 5.6335 6.4915 6.04771 6.4915L8.47177 6.4915L5.24929 9.71398C4.9564 10.0069 4.9564 10.4817 5.24929 10.7746C5.54218 11.0675 6.01706 11.0675 6.30995 10.7746L9.53243 7.55216L9.53244 10.0398C9.53244 10.454 9.86822 10.7898 10.2824 10.7898C10.6966 10.7898 11.0324 10.454 11.0324 10.0398L11.0324 5.7415Z" fill="currentColor"/>
                </svg>                
            </a>

            <audio src={current.src} autoplay={true} on:ended={() => {
                open = false;
                current = null;
            }}></audio>
        </div>
    {/if}

    <!--
        {#if open}
            <div transition:blurInDownwards={{ duration: 100 }} class="w-fit h-fit absolute top-8 left-0 z-50">
                <iframe style="border-radius:12px" src={shuffle()} width="300" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        {/if}
    -->
</main>

<style>
    @keyframes wave {
        from {
            height: 12px;
        }

        50% {
            height: 6px;
        }

        to {
            height: 12px;
        }
    }

    .animate-1, .animate-2, .animate-3 {
        height: 12px;
        animation: wave 1s infinite;
    }

    .animate-2 {
        animation-delay: 0.33s;
    }

    .animate-3 {
        animation-delay: 0.66s;
    }

    .open {
        @apply bg-[#3D3D3D] border border-white/5;
    }

    @keyframes moveUp {
        from {
            transform: translateY(0px);
            opacity: 0.5;
        }

        to {
            transform: translateY(-24px);
            opacity: 1;
        }
    }

    .moveUp {
        animation: moveUp 200ms ease-in-out;
        animation-fill-mode: forwards;
    }
</style>