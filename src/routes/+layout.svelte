<script lang="ts">
    import { Archive, LightningBolt, TwitterLogo } from 'radix-icons-svelte';
</script>

<nav>
    <svg style="z-index: 101; cursor: pointer;" on:click={() => window.location.assign('/')} width="108" height="25" viewBox="0 0 108 25" fill="none" xmlns="http://www.w3.org/2000/svg" id="logo">
        <path d="M0 24.671H5.26405C5.26405 24.671 6.94545 19.5312 11.2016 19.5312C15.4578 19.5312 16.644 24.671 16.644 24.671H22.5964L14.8651 0L7.73126 0L0 24.671ZM6.41324 18.7738L11.2455 4.36882L15.9338 18.7738C15.9338 18.7738 14.3851 17.2638 11.2016 17.2638C8.01819 17.2638 6.41324 18.7738 6.41324 18.7738Z" fill="white"/>
        <path d="M23.6235 24.671H28.8875C28.8875 24.671 30.5689 19.5312 34.8251 19.5312C39.0813 19.5312 40.2675 24.671 40.2675 24.671H46.2198L38.4886 0L31.3547 0L23.6235 24.671ZM30.0367 18.7738L34.8689 4.36882L39.5573 18.7738C39.5573 18.7738 38.0086 17.2638 34.8251 17.2638C31.6417 17.2638 30.0367 18.7738 30.0367 18.7738Z" fill="white"/>
        <path d="M66.762 24.671H72.0261C72.0261 24.671 73.7075 19.5312 77.9637 19.5312C82.2199 19.5312 83.406 24.671 83.406 24.671H89.3584L81.6271 0L74.4933 0L66.762 24.671ZM73.1753 18.7738L78.0075 4.36882L82.6958 18.7738C82.6958 18.7738 81.1471 17.2638 77.9637 17.2638C74.7802 17.2638 73.1753 18.7738 73.1753 18.7738Z" fill="white"/>
        <path d="M47.2469 24.671L47.2469 0L58.0139 0C59.5722 0 60.9299 0.270206 62.0869 0.810617C63.2439 1.35103 64.1411 2.11466 64.7786 3.10149C65.4161 4.08833 65.7349 5.25139 65.7349 6.59067V7.0136C65.7349 8.49386 65.3807 9.69216 64.6724 10.6085C63.964 11.5249 63.0904 12.1945 62.0515 12.6174C62.996 12.6644 63.7279 13.6278 64.2474 14.2387C64.7668 14.8261 65.0265 15.6132 65.0265 16.6V24.671L60.3514 24.671V17.2697C60.3514 16.7058 60.198 14.9112 59.891 14.5588C59.6077 14.2064 59.1236 14.0301 58.4389 14.0301L51.9221 14.0301V24.671H47.2469ZM51.9221 11.1372L57.518 11.1372C58.6277 11.1372 59.4896 10.8435 60.1035 10.2561C60.741 9.6452 61.0598 8.8463 61.0598 7.85946V7.50702C61.0598 6.52018 60.7528 5.73307 60.1389 5.14566C59.525 4.53476 58.6514 4.22931 57.518 4.22931L51.9221 4.22931V11.1372Z" fill="white"/>
        <path d="M93.7957 25L87.5268 0L92.8435 0L97.4063 20.3629H98.1205L102.683 0L108 0L101.731 25L93.7957 25Z" fill="white"/>
    </svg>    

    <div class="buttons">
        <button>
            <Archive/> Writing
        </button>
        <button>
            <LightningBolt/> Lab
        </button>
        <button>
            <TwitterLogo/>
        </button>
    </div>
</nav>

<slot></slot>

<style>
    nav {
        width: 100vw;
        height: 70px;

        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 0px 24px;
        
        position: absolute;
        top: 0px;
        left: 0px;
    }

    div.buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4px;

        margin-left: auto;

        width: fit-content;
        height: fit-content;
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 4px;

        font-family: 'Inter';
        font-size: 14px;
        font-weight: 500;

        color: white;
        background: transparent;

        transition: opacity 0.15s, background 0.15s;
        opacity: 70%;

        cursor: pointer;
        border: none;
        outline: none;

        user-select: none;
    }

    button:hover {
        opacity: 100%;
    }
</style>