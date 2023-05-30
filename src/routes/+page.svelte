<script>
    import PlaceholderProject from "./PlaceholderProject.svelte";

    const date = new Date();
    let localTime = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;

    let utc = localTime + localOffset;
    let time = new Date(utc + 19_800_000);

    const setTime = () => {
        const date = new Date();
        let localTime = date.getTime();
        let localOffset = date.getTimezoneOffset() * 60000;

        let utc = localTime + localOffset;
        time = new Date(utc + 19_800_000);

        setTimeout(setTime, 60_000);
    };

    setTimeout(setTime, 60_000);
</script>

<main>
    <div class="gradient"></div>

    <section data-animate style:--stagger="1" style:gap="24px">
        <div class="row" style:align-items="center">
            <div>
                <p>Aarav Sareen</p>
                <p class="dark">Web Developer & Designer</p>
            </div>
            <svg style:margin-left="auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C4 12 12 9.6 12 0C12 4 14.4 12 24 12C20 12 12 14.4 12 24C12 20 9.6 12 0 12Z" fill="#EDEDED" stroke="#EDEDED"/>
            </svg>                
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
            <p>Passionate about web development, obsessed with details & interface design. I like to craft meaningful web applications.</p>
            <p>Working on a lot of epic sh#t. More projects to come in the (near) future.</p>
        </div>
        <div class="row">
            <a href="" class="disabled" data-info="Will be available for work soon.">Freelance</a>
            <a href="" class="disabled" data-info="Coming soon.">Writing</a>
        </div>
    </section>

    <section style:gap="0px" data-animate style:--stagger="2">
        <p class="section-heading">(Freelance) Projects</p>
        <div class="divider"></div>
        <PlaceholderProject />
        <div class="divider"></div>
    </section>
    <section style:gap="0px" data-animate style:--stagger="3">
        <p class="section-heading">(Hobby) Projects</p>
        <div class="divider"></div>
        <div style:padding="16px 0px" style:gap="8px">
            <p>mesh <span style:color="#555555">from 2022</span></p>
            <p class="dark">Simple web-based tool to generate & edit SVG mesh gradients.</p>
            <a href="https://mesh.aarv.me/" class="arrow">Visit</a>
        </div>
        <div class="divider"></div>
    </section>

    <section data-animate style:--stagger="4">
        <div class="row">
            <p style:color="#555555">Crafted with love. <a href="">View source</a> (V12)</p>
            <p style:margin-left="auto" style:color="#555555" data-info="GMT +5:30 (India)" style:cursor="default">{time.getHours()}.{time.getMinutes()} local time</p>
        </div>
        <div class="row" style:align-items="center">
            <p style:color="#555555" style:flex="none">Get in touch</p>
            <div class="divider"></div>
            <div class="row" style:margin-left="auto">
                <a href="https://www.posts.cv/arvsrn">posts.cv</a>
                <a href="" class="disabled" data-info="My email server doesn't work aah">email</a>
            </div>
        </div>
    </section>
</main>

<style>
    main {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 64px 0px;

        overflow-y: scroll;
    }

    section {
        width: 500px;
        height: fit-content;

        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px 0px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    div.divider {
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.05);
    }

    div.gradient {
        width: 100vw;
        position: absolute;
        top: -50px;
        left: 0px;
        height: 30px;

        will-change: transform;
        filter: blur(60px);
        -webkit-filter: blur(60px);
        -moz-filter: blur(60px);
        background-color: #ededed;

        animation: gradient 10s ease infinite;
        pointer-events: none;
    }

    div.row {
        flex-direction: row;
        gap: 16px;
    }

    p.dark {
        color: #7e7e7e;
    }

    p.section-heading {
        font-size: 13.25px;
        color: #7e7e7e;
        font-weight: 500;
        margin-bottom: 8px;
        user-select: none;
    }

    a {
        text-decoration: none;
        color: #7e7e7e;
        transition: color 0.15s ease;
    }

    a.disabled:hover {
        text-decoration: line-through;
    }
    
    a:hover {
        color: #ededed;
    }

    .arrow::after {
        content: "→";
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-left: 2px;
        transition: margin-left 0.15s ease;
    }

    .arrow:hover::after {
        margin-left: 6px;
    }

    @keyframes gradient {
        from {
            background-color: #FC4F4F;
        }

        20% {
            background-color: #D36D41;
        }

        40% {
            background-color: #57CE55;
        }

        60% {
            background-color: #4191DB;
        }

        80% {
            background-color: #C072F0;
        }

        100% {
            background-color: #FC4F4F;
        }
    }

    @media only screen and (max-width: 594.24px) {
        section {
            width: 84vw;
        }
    }
</style>
