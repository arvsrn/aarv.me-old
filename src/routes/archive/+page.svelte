<main>
    <div class="container" style="flex-direction:row;align-items:center;">
        <p class="heading-heading">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_113_52)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6877 20.5714C16.0586 21.6545 14.103 22.2857 12 22.2857C6.31935 22.2857 1.71429 17.6806 1.71429 12C1.71429 10.9609 1.86838 9.95769 2.15498 9.01212L5.14286 12V16.2857L9.42857 18L12 17.1429V12L9.42857 10.2857L8.57143 8.57143L13.7143 5.14286L9.32174 2.2145C9.26628 2.17752 9.20907 2.14404 9.15048 2.11411C10.0553 1.85376 11.0114 1.71429 12 1.71429C12.4858 1.71429 12.9637 1.74795 13.4315 1.8131L12.9567 2.4719L15.5281 5.04333L15.7575 5.27271L16.0756 5.33633L20.3613 6.19347L20.4041 6.06849C21.2333 7.24109 21.8232 8.59486 22.1028 10.0587L18 7.71429L14.5714 11.1429L15.4286 14.5714L14.5714 18L16.2857 20.5714H17.6877ZM24 12C24 18.6274 18.6274 24 12 24C5.37259 24 0 18.6274 0 12C0 5.37259 5.37259 0 12 0C18.6274 0 24 5.37259 24 12Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_113_52">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>                
            Archive
        </p> 
        <divider />
    </div>
    
    <div class="container">
        <p class="heading">Technologies I use</p>
        <p>- Javascript, Typescript & Rust</p>
        <p>- SvelteKit & Next.js</p>
        <p>- Firebase, Lemonsqueezy & Vercel</p>
    </div>
    
    <div class="container">
        <p class="heading">Apps I use</p>
        <p>- Visual Studio Code</p>
        <p>- Figma</p>
        <p>- Notion</p>
        <p>- Brave</p>
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
        gap: 45px;

        background: #161616;
    }

    p.heading {
        font-family: 'Fakt Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14.5px;
        line-height: 17px;

        color: #EDEDED;
    }

    p.heading-heading {
        font-size: 24px;
        color: white;

        width: fit-content;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }

    p.heading-heading > svg {
        transform: translateY(-2px);
    }

    divider {
        height: 1px;
        flex: 1;

        background: #3b3b3b;
    }

    p {
        font-family: 'Fakt Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14.5px;
        line-height: 19px;

        color: #A0A0A0;

        width: 100%;
        word-wrap: break-word;
    }

    div.container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;

        width: var(--width);
        height: fit-content;
    }
</style>