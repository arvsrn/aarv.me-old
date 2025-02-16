<script lang="ts">
    import { fade } from "svelte/transition";
    import Image from "./Image.svelte";
    import Music from "./Music.svelte";

    let time: Date;
    let copied = false;

    const setTime = () => {
        const date = new Date();
        let localTime = date.getTime();
        let localOffset = date.getTimezoneOffset() * 60_000;

        let utc = localTime + localOffset;
        time = new Date(utc + 19_800_000);

        setTimeout(setTime, 60_000);
    };

    const copyEmail = () => {
        window.navigator.clipboard.writeText('hi@arvsrn.com');
        copied = true;
        setTimeout(() => copied = false, 2000);
    };

    setTime();
    setTimeout(setTime, 60_000);
</script>

<main class="relative w-screen min-h-screen h-fit overflow-hidden bg-[#101010]">
    <div class="py-32 flex flex-col gap-32 items-center justify-center w-full h-fit">
        <div class="responsive h-fit flex flex-col gap-3">
            <div class="flex flex-col">
                <p class="text-sm text-white font-[500]">404</p>
                <p class="text-[11px] leading-6 text-white/50 mono">NOT FOUND</p>
            </div>

            <p class="text-[13px] leading-[22px] text-white font-[400]">
                Lost in the void. 
            </p>

            <div class="flex flex-col">
                <p class="text-[11px] leading-[18px] text-white/50 mono">
                    {time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')} LOCAL TIME (IST)
                </p>
                <p class="text-[11px] leading-[18px] text-white/50 mono">VERSION 20</p>
            </div>

            <div class="flex flex-row gap-2 mt-5">
                <button on:click={() => window.location.assign('/')}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7508 8.25L2.25082 8.25M2.25082 8.25L5.25082 11.25M2.25082 8.25L5.25082 5.25" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                                          
                    Take me back
                </button>
            </div>
        </div>
    </div>
</main>

<style>
    :global(body::-webkit-scrollbar), ::-webkit-scrollbar {
        display: none;
    }

    .responsive {
        width: 440px;
    }

    @media only screen and (max-width: 500px) {
        .responsive {
            width: 86vw;
        }
    }

    a {
        @apply text-[#70B8FF] font-[500];
    }

    a:hover {
        @apply text-[#C2E6FF];
    }

    button {
        @apply bg-white/[.025] select-none rounded-full pl-1.5 pr-2.5 py-0.5 size-fit border-dashed border-white/5 border-[1px] flex flex-row items-center gap-1 text-xs leading-[22px] text-white transition-colors duration-150;
    }

    button:hover {
        @apply bg-white/[.05] border-white/[.075];
    }

    button.copied {
        @apply bg-[#22FF991E] border-[#22FF991E] text-[#3DD68C];
    }
</style>