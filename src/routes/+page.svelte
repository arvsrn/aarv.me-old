<script lang="ts">
    import { fade } from "svelte/transition";
    import Image from "./Image.svelte";
    import Music from "./Music.svelte";

    const date = new Date();
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
                <p class="text-sm text-white font-[500]">Aarav Sareen</p>
                <p class="text-[11px] leading-6 text-white/50 mono">DESIGNER, FULL STACK DEVELOPER</p>
            </div>

            <p class="text-[13px] leading-[22px] text-white font-[400]">
                Currently designing and building interfaces at <a href="https://www.unriddle.ai">Unriddle</a>. On the side, building <a href="https://www.x.com/runicdesign">@runicdesign</a>, a component kit and <span class="text-white/50">████, a project management tool</span>.
            </p>

            <div class="flex flex-col">
                <p class="text-[11px] leading-[18px] text-white/50 mono">
                    {time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')} LOCAL TIME (IST)
                </p>
                <p class="text-[11px] leading-[18px] text-white/50 mono">VERSION 20</p>
            </div>

            <div class="flex flex-row gap-2 mt-5">
                <button on:click={() => window.location.assign('https://x.com/arvsrn')}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78122 1.99512C2.50934 1.99512 2.25875 2.14226 2.12627 2.37968C1.9938 2.6171 2.00019 2.90763 2.14297 3.139L5.8285 9.111L2.2353 12.7042C1.9424 12.9971 1.9424 13.472 2.23529 13.7649C2.52819 14.0578 3.00306 14.0578 3.29595 13.7649L6.63804 10.4228L8.62583 13.6438C8.76243 13.8651 9.00397 13.9999 9.26407 13.9999H13.2641C13.536 13.9999 13.7865 13.8528 13.919 13.6153C14.0515 13.3779 14.0451 13.0874 13.9023 12.856L10.2015 6.8593L13.7678 3.29303C14.0607 3.00013 14.0607 2.52526 13.7678 2.23237C13.4749 1.93947 13.0001 1.93947 12.7072 2.23237L9.392 5.54752L7.41946 2.35123C7.28286 2.12989 7.04133 1.99512 6.78122 1.99512H2.78122ZM9.68255 12.4999L4.12539 3.49512H6.36275L11.9199 12.4999H9.68255Z" fill="currentColor" fill-opacity="0.5"/>
                    </svg>                        
                    Twitter
                </button>
                <button 
                    on:click={copyEmail}
                    class:copied={copied}
                >
                    {#if copied}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7L7 10.5L7.63236 9.55146C8.53938 8.19094 9.63793 6.96839 10.8941 5.9216L12 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        Copied
                    {:else}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C6.89543 2 6 2.89543 6 4V4.5H9C10.3807 4.5 11.5 5.61929 11.5 7V10H12C13.1046 10 14 9.10457 14 8V4C14 2.89543 13.1046 2 12 2H8Z" fill="currentColor" fill-opacity="0.5"/>
                            <rect x="2" y="6" width="8" height="8" rx="2" fill="currentColor" fill-opacity="0.5"/>
                        </svg>
                        Email
                    {/if}
                </button>
            </div>
        </div>

        <div class="flex flex-col gap-12">
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot01.png" />
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot02.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">Home screen for <a href="https://www.unriddle.ai">Unriddle</a>'s app redesign concept</p>
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot03.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">Kanban view screen I designed for <a href="https://www.ghosteams.com">Ghosteams</a>.</p>
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot04.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">Onboarding flow for <a href="https://www.unriddle.ai">Unriddle</a>'s app redesign concept.</p>
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot05.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">Empty note screen for <a href="https://www.unriddle.ai">Unriddle</a>'s app redesign concept.</p>
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot06.png" />
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot07.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">Bento section for an issue tracking tool.</p>
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot08.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">Dashboard for <a href="https://www.ghosteams.com">Ghosteams</a>.</p>
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot09.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">Chat with PDF for <a href="https://www.unriddle.ai">Unriddle</a>'s app redesign concept.</p>
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot10.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">Moodboard app exploration.</p>
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot11.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">Chat with recording screen for <a href="https://www.unriddle.ai">Unriddle</a>'s app redesign concept.</p>
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot12.png" />
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot13.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">Issue details screen for <a href="https://www.ghosteams.com">Ghosteams</a>.</p>
            </div>
            
            <div class="flex flex-col gap-2">
                <Image src="/Shots/shot14.png" />
                <p class="text-[11px] leading-[18px] text-white/50 w-full select-none">1.5px stroke, 16×16px icons for <a href="https://www.x.com/runicdesign">Runic</a>.</p>
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
