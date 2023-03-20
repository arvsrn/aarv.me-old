<script>
    import ButtonLink from "./ButtonLink.svelte";
</script>

<main>
    <div class="container" data-animate style="--stagger:1;" id="glasses">
        <div class="noggle-container">
            <div class="before"></div>
            <svg width="48" height="18" viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_31_30)">
            <path d="M0.0498047 14.7898V6.03077H9.1488V0.0927734H26.8998V6.03077H30.0318V0.0927734H47.9318V17.9068H30.0318V8.99977H26.8998V17.9068H9.1488V8.99977H3.1818V14.7898H0.0498047Z" fill="#A0A0A0"/>
            <path d="M17.9868 3.06201H23.9908V14.938H17.9868V3.06201Z" fill="#A0A0A0"/>
            <path d="M38.8008 3.06201H44.8048V14.938H38.8008V3.06201Z" fill="#A0A0A0"/>
            </g>
            <defs>
            <clipPath id="clip0_31_30">
            <rect width="48" height="18" fill="black"/>
            </clipPath>
            </defs>
            </svg>
            <div class="after"></div></div>

        <p>Aarav Sareen. Passionate about web development, obsessed with details & interface design. I like to craft meaningful web applications. I also do general programming sometimes.</p>
        <div style="display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:8px;">
            <!--
                <ButtonLink href="">Freelance →</ButtonLink>
            -->
            <ButtonLink href="/writing">Writing</ButtonLink>
            <ButtonLink href="/archive">Archive</ButtonLink>
        </div>

        <div class="carousel">
            <h3>SVELTEKIT · NEXT.JS · TYPESCRIPT · RUST · PYTHON · FIGMA · SVELTEKIT · NEXT.JS · TYPESCRIPT · RUST · PYTHON · FIGMA</h3>
        </div>
    </div>

    <div class="container nogap" data-animate style="--stagger:2;">
        <p class="container-heading">
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.62499 0.0497131V6.375H11.2145L4.37499 15.9503V9.625H0.785492L7.62499 0.0497131ZM3.21448 8.375H5.62499V12.0497L8.78549 7.625H6.37499V3.95029L3.21448 8.375Z" fill="currentColor"/>
            </svg>
            Projects
        </p>
        <div style="display:flex;flex-direction:column;align-items:flex-start;padding:24px 0px;gap:6px;width:100%;height:fit-content;border-top:1px solid #2E2E2E;">
            <p>lace-lang <span class="dark">from 2023</span> <span class="ongoing"><div class="dot"/> <span>Ongoing</span></span></p>
            <p>A procedural programming language inspired by Rust, Typescript and Python.</p>
            <div style="display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:8px;margin-top:8px;">
                <ButtonLink href="https://refresh.aarv.me/">Visit →</ButtonLink>
                <ButtonLink href="" disabled>Github</ButtonLink>
            </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-start;padding:24px 0px;gap:6px;width:100%;height:fit-content;border-top:1px solid #2E2E2E;">
            <p>refresh <span class="dark">from 2023</span> <span class="ongoing"><div class="dot"/> <span>Ongoing</span></span></p>
            <p>A beautiful icon set. New icons added monthly.</p>
            <div style="display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:8px;margin-top:8px;">
                <ButtonLink href="https://refresh.aarv.me/">Visit →</ButtonLink>
                <ButtonLink href="" disabled>Github</ButtonLink>
            </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-start;padding:24px 0px;gap:6px;width:100%;height:fit-content;border-top:1px solid #2E2E2E;">
            <p>mesh <span class="dark">from 2022</span></p>
            <p>Create beautiful SVG mesh gradients. Built with SvelteKit.</p>
            <div style="display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:8px;margin-top:8px;">
                <ButtonLink href="https://mesh.aarv.me/">Visit →</ButtonLink>
                <ButtonLink href="https://github.com/arvsrn/mesh">Github</ButtonLink>
            </div>
        </div>
    </div>

    <div class="container nogap" data-animate style="--stagger:3;">
        <p class="container-heading">
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 0L9.375 11L8.125 11L8.125 -1.09278e-07L9.375 0ZM4.19194 8.94194L3.30806 8.05806L5.24112 6.125L0.25 6.125L0.250001 4.875L5.24112 4.875L3.30806 2.94194L4.19194 2.05806L7.63388 5.5L4.19194 8.94194Z" fill="currentColor"/>
            </svg>                
            Connect
        </p>
        <div style="display:flex;flex-direction:column;align-items:flex-start;padding:24px 0px;gap:15px;width: 100%;height: fit-contents;border-top:1px solid #2E2E2E;">
            <p>Twitter <span class="dark">@arvsrn</span></p>
            <p>Github <span class="dark">@arvsrn</span></p>
            <p>Email <span class="dark">contact@aarv.me</span></p>
        </div>
    </div>
</main>

<style>
    main {
        width: 100%;
        min-height: 100vh;
        height: fit-content;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 0px;
        gap: 65px;

        background: #161616;
    }

    div.container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;

        width: var(--width);
        height: fit-content;
    }

    div.noggle-container {
        position: relative;
        width: fit-content;
        height: fit-content;
    }

    div.before, div.after {
        position: absolute;
        width: 6px;
        height: 12px;
        top: 3px;
        background-color: #161616;
        transition: transform 0.2s cubic-bezier(0.4,2,0.68,1);
    }

    div.before {
        left: 18px;
    }

    div.after {
        left: 39px;
    }

    div.noggle-container:hover div.before,
    div.noggle-container:hover div.after {
        transform: translateX(-6px);
    }

    p {
        width: var(--width);
        height: fit-content;
        color: #ededed;

        display: flex;
        flex-direction: row;
        gap: 6px;
    }

    p.container-heading {
        width: 100%;
        height: 32px;

        line-height: 32px;
        
        color: #A0A0A0;
        user-select: none;

        display: flex;
        flex-direction: row;
        gap: 6px;
        align-items: center;
    }

    p.container-heading > svg {
        transform: translateY(-2px)
    }

    div.nogap {
        gap: 0px !important;
    }

    span {
        color: #7E7E7E;
    }

    span.ongoing {
        background: #232323;
        color: #7E7E7E;
        border-radius: 100px;

        width: fit-content;
        height: fit-content;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4px;

        padding: 2px 6px;
        font-size: 11px;
    }

    span.ongoing > span {
        transform: translateY(1px);
    }

    div.dot {
        width: 6px;
        height: 6px;
        border-radius: 4px;

        background: #1cc88a;
    }

    div.dot::before {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 4px;
        background: #1cc88a;
        animation: 1.5s anim ease-out;
        animation-iteration-count: infinite;
    }

    @keyframes anim {
        0% {
            transform: scale(1);
            opacity: 50%;
        }

        100% {
            transform: scale(2.5);
            opacity: 0%;
        }
    }

    div.carousel {
        width: 100%;
        height: fit-content;

        overflow-x: hidden;
        position: relative;

        margin-top: 16px;
    }

    div.carousel > h3 {
        font-size: 16px;
        font-family: 'Supply Mono';
        font-weight: 500;
        color: #505050;

        width: 1180px !important;
        word-wrap: normal;

        animation: carousel 10s linear 0s infinite;
        user-select: none;
    }

    @keyframes carousel {
        from {
            transform: translateX(0px);
        }

        to {
            transform: translate(-568px);
        }
    }
</style>