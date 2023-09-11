<script lang="ts">
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
    <div class="outer">
        <div class="inner">
            <div class="orange" data-animate style:--stagger="0"></div>
            <p data-animate style:--stagger="1">Aarav Sareen—Passionate about web development, obsessed with details and interface design. I like to craft meaningful, beautiful and functional products.</p>
            <p class="quote" data-animate style:--stagger="2">This website is missing some content which is yet to come: writing, newsletter, my projects... those will be added by the end of 2023. Let me cook 🧑‍🍳</p>
        </div>
        <div class="inner">
            <p class="dark" data-animate style:--stagger="3">Experience</p>
            <p data-animate style:--stagger="4">Good software is two things: well designed and well implemented.</p>
            <p data-animate style:--stagger="5">I've been programming (and consequently designing) for the past three years. I've learnt technologies and skills that enable me to make whatever I want: Rust, JS/TS, Next.js, SvelteKit, and design (interface, web, iconography).</p>
        </div>
        <div class="inner">
            <p class="dark" data-animate style:--stagger="7">Now</p>
            <p data-animate style:--stagger="8">Going for chess mastery (<a href="https://www.chess.com/member/hostileduckie">currently 1500 ELO</a>). Solving interesting math, engineering and design problems. Focusing on spending my time intentionally. Reading non-fiction books.</p>
        </div>
        <div class="inner">
            <p class="dark" data-animate style:--stagger="8">Contact</p>
            <p data-animate style:--stagger="9">Reach out to me at <a href="https://www.x.com/arvsrn">@arvsrn</a> or <a href="mailto:contact@aarv.me">contact@aarv.me</a>.</p>
            <p class="dark" data-animate style:--stagger="10" data-info="GMT +5:30 (India)">{time.getHours()}.{time.getMinutes()} local time</p>
        </div>
    </div>
</main>

<style>
    main {
        width: 100vw;
        height: 100vh;

        background: #0a0a0a;
        display: flex;
        flex-direction: row;
        padding: 64px;
    }

    div.outer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;

        width: 512px;
    }

    div.inner {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        width: 100%;
    }

    div.orange {
        width: 24px;
        height: 24px;
        border-radius: 32px;
        background: #FF2E00;
        margin-bottom: 4px;
    }

    p {
        color: #EDEDED;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;

        width: 100%;
    }

    p.dark {
        color: #666;
        user-select: none;
    }

    a {
        color: #ededed;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: #a0a0a0;
    }

    a:hover {
        color: #a0a0a0;
    }

    p.quote {
        padding-left: 8px;
        border-left: 2px solid #666;
        color: #a0a0a0;
    }

    @media only screen and (max-width: 512px) {
        main {
            padding: 64px 48px;
        }
    }
</style>