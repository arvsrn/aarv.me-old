<svelte:head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
        
        * {
            box-sizing: border-box;
            padding: 0px;
            margin: 0px;
            overflow: hidden;
        }

        body {
            width: 100vw;
            height: 100vh;

            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 147px;

            background: #111111;
        }

        ::selection {
            background-color: rgba(255, 255, 255, 0.05)
        }
    </style>
</svelte:head>

<div class="noise"/>

<svg style="position: absolute; top: 35px; left: 35px; z-index: 101;" width="108" height="25" viewBox="0 0 108 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 24.671H5.26405C5.26405 24.671 6.94545 19.5312 11.2016 19.5312C15.4578 19.5312 16.644 24.671 16.644 24.671H22.5964L14.8651 0L7.73126 0L0 24.671ZM6.41324 18.7738L11.2455 4.36882L15.9338 18.7738C15.9338 18.7738 14.3851 17.2638 11.2016 17.2638C8.01819 17.2638 6.41324 18.7738 6.41324 18.7738Z" fill="white"/>
    <path d="M23.6235 24.671H28.8875C28.8875 24.671 30.5689 19.5312 34.8251 19.5312C39.0813 19.5312 40.2675 24.671 40.2675 24.671H46.2198L38.4886 0L31.3547 0L23.6235 24.671ZM30.0367 18.7738L34.8689 4.36882L39.5573 18.7738C39.5573 18.7738 38.0086 17.2638 34.8251 17.2638C31.6417 17.2638 30.0367 18.7738 30.0367 18.7738Z" fill="white"/>
    <path d="M66.762 24.671H72.0261C72.0261 24.671 73.7075 19.5312 77.9637 19.5312C82.2199 19.5312 83.406 24.671 83.406 24.671H89.3584L81.6271 0L74.4933 0L66.762 24.671ZM73.1753 18.7738L78.0075 4.36882L82.6958 18.7738C82.6958 18.7738 81.1471 17.2638 77.9637 17.2638C74.7802 17.2638 73.1753 18.7738 73.1753 18.7738Z" fill="white"/>
    <path d="M47.2469 24.671L47.2469 0L58.0139 0C59.5722 0 60.9299 0.270206 62.0869 0.810617C63.2439 1.35103 64.1411 2.11466 64.7786 3.10149C65.4161 4.08833 65.7349 5.25139 65.7349 6.59067V7.0136C65.7349 8.49386 65.3807 9.69216 64.6724 10.6085C63.964 11.5249 63.0904 12.1945 62.0515 12.6174C62.996 12.6644 63.7279 13.6278 64.2474 14.2387C64.7668 14.8261 65.0265 15.6132 65.0265 16.6V24.671L60.3514 24.671V17.2697C60.3514 16.7058 60.198 14.9112 59.891 14.5588C59.6077 14.2064 59.1236 14.0301 58.4389 14.0301L51.9221 14.0301V24.671H47.2469ZM51.9221 11.1372L57.518 11.1372C58.6277 11.1372 59.4896 10.8435 60.1035 10.2561C60.741 9.6452 61.0598 8.8463 61.0598 7.85946V7.50702C61.0598 6.52018 60.7528 5.73307 60.1389 5.14566C59.525 4.53476 58.6514 4.22931 57.518 4.22931L51.9221 4.22931V11.1372Z" fill="white"/>
    <path d="M93.7957 25L87.5268 0L92.8435 0L97.4063 20.3629H98.1205L102.683 0L108 0L101.731 25L93.7957 25Z" fill="white"/>
</svg>    

<svg style="position: absolute; top: 0px; left: 27vw;" width="231" height="982" viewBox="0 0 231 982" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.02">
    <path d="M227.96 852.633L227.96 804.428C227.96 804.428 180.468 789.031 180.468 750.055C180.468 711.079 227.96 700.217 227.96 700.217L227.96 645.709L5.50849e-05 716.507L5.79405e-05 781.835L227.96 852.633ZM173.47 793.904L40.3679 749.654L173.47 706.721C173.47 706.721 159.517 720.903 159.517 750.055C159.517 779.207 173.47 793.904 173.47 793.904Z" fill="white"/>
    <path d="M227.96 1031.34L7.62939e-05 1031.34L7.19841e-05 932.743C7.13603e-05 918.473 2.49677 906.04 7.49018 895.445C12.4836 884.85 19.5395 876.634 28.6579 870.796C37.7763 864.958 48.5229 862.039 60.8979 862.039L64.8058 862.039C78.4834 862.039 89.5557 865.282 98.0228 871.769C106.49 878.255 112.677 886.256 116.585 895.769C117.019 887.12 125.921 880.418 131.565 875.661C136.993 870.904 144.266 868.525 153.384 868.525L227.96 868.525L227.96 911.337L159.572 911.337C154.361 911.337 137.78 912.743 134.523 915.554C131.267 918.148 129.639 922.581 129.639 928.851L129.639 988.528L227.96 988.528L227.96 1031.34ZM102.908 988.528L102.908 937.284C102.908 927.122 100.194 919.229 94.7662 913.608C89.1218 907.77 81.7399 904.851 72.6215 904.851L69.365 904.851C60.2466 904.851 52.9736 907.662 47.546 913.283C41.9013 918.905 39.0789 926.905 39.0789 937.284L39.0789 988.528L102.908 988.528Z" fill="white"/>
    <path d="M231 605.074L6.10352e-05 662.481L5.8907e-05 613.794L188.153 572.011L188.153 565.471L5.49683e-05 523.687L5.28401e-05 475L231 532.407L231 605.074Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M115.067 388.501C112.634 399.177 109.191 414.28 83.7186 419.123L83.5001 419.124C83.9892 419.238 84.49 419.353 85.001 419.469C95.6492 421.896 110.702 425.328 115.586 450.621L115.587 451C115.701 450.511 115.816 450.011 115.932 449.5L115.932 449.499C118.353 438.878 121.773 423.876 146.889 418.952L147.5 418.95L147.229 418.886L147.288 418.875L147.182 418.876C146.794 418.786 146.4 418.696 145.999 418.605C135.35 416.177 120.295 412.745 115.413 387.446L115.412 387C115.298 387.489 115.184 387.99 115.067 388.501Z" fill="white"/>
    <path d="M227.96 363L227.96 314.795C227.96 314.795 180.468 299.398 180.468 260.422C180.468 221.446 227.96 210.584 227.96 210.584L227.96 156.076L3.98261e-05 226.874L4.26817e-05 292.202L227.96 363ZM173.47 304.271L40.3679 260.021L173.47 217.088C173.47 217.088 159.517 231.27 159.517 260.422C159.517 289.574 173.47 304.271 173.47 304.271Z" fill="white"/>
    <path d="M227.96 146.67L227.96 98.4651C227.96 98.4651 180.468 83.0679 180.468 44.0922C180.468 5.11648 227.96 -5.74574 227.96 -5.74574L227.96 -60.254L2.45673e-05 10.5444L2.74229e-05 75.8719L227.96 146.67ZM173.47 87.9415L40.3679 43.6908L173.47 0.757912C173.47 0.757912 159.517 14.94 159.517 44.0922C159.517 73.2443 173.47 87.9415 173.47 87.9415Z" fill="white"/>
    </g>
</svg>    

<main>
    <div>
        <h6 class="light">Aarav Sareen</h6>
        <h6 class="dark">Programmer + Designer</h6>
    </div>
    <p>Aspiring software engineer and entrepreneur. I do designing and full-stack development. Currently building <a href="">@meshgradient</a>.</p>
    <div>
        <h6 class="light">Projects</h6>
        <h6 class="dark thin">Some of the coolest things I've built.</h6>
    </div>
    <div class="project" on:click={() => window.location.assign('https://meshgradient.vercel.app')}>
        <img src="mesh.png" alt="meshgradient">
        <p>meshgradient</p>
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C2.44772 2.5 2 2.94772 2 3.5V12.5C2 13.0523 2.44772 13.5 3 13.5H12C12.5523 13.5 13 13.0523 13 12.5V9C13 8.72386 12.7761 8.5 12.5 8.5C12.2239 8.5 12 8.72386 12 9V12.5H3V3.5H6.5C6.77614 3.5 7 3.27614 7 3C7 2.72386 6.77614 2.5 6.5 2.5H3ZM12.8536 2.64645C12.9015 2.69439 12.9377 2.74964 12.9621 2.80861C12.9861 2.86669 12.9996 2.9303 13 2.997V3V3.00049V6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6V4.20711L6.85355 9.35355C6.65829 9.54882 6.34171 9.54882 6.14645 9.35355C5.95118 9.15829 5.95118 8.84171 6.14645 8.64645L11.2929 3.5H9.5C9.22386 3.5 9 3.27614 9 3C9 2.72386 9.22386 2.5 9.5 2.5H12.4999H12.5C12.5678 2.5 12.6324 2.51349 12.6914 2.53794C12.7504 2.56234 12.8056 2.59851 12.8536 2.64645Z" fill="#8E8E93"/>
        </svg>
    </div>
    <div>
        <h6 class="light">Connect</h6>
        <h6 class="dark thin">Reach out <a href="https://www.twitter.com/arvsrn">@arvsrn</a> or <a href="mailto:contact@aarv.me">contact@aarv.me</a></h6>
    </div>
</main>

<style>
    div.noise {
        width: 100vw;
        height: 100vh;
        position: absolute;
        background-image: url(noise.png);
        pointer-events: none;
        z-index: 100;
        top: 0px;
        left: 0px;
        opacity: 60%;
    }

    img {
        width: 30px;
        height: 30px;

        border-radius: 39px;
    }

    main {
        width: 475px;
        height: fit-content;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 12px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;

        width: 100%;
        height: fit-content;
    }

    h6 {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        
        letter-spacing: 0.01em;
    }

    h6.dark {
        color: #8E8E93;
    }

    h6.light {
        color: #D1D1D6;
    }

    h6.thin {
        font-weight: 400;
    }

    p {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;

        color: #D1D1D6;

        width: 100%;
        word-wrap: break-word;
    }

    a {
        color: #A0A0A0;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: #343434;
    }

    a:hover {
        text-decoration-color: #505050;
    }

    div.project {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px;
        gap: 10px;

        width: 100%;
        height: fit-content;

        border-radius: 8px;
    }

    div.project > p {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;

        letter-spacing: 0.01em;

        color: #D1D1D6;
        width: fit-content;
    }

    @media only screen and (max-width: 500px) {
        main {
            width: 90vw;
        }
    }
</style>
