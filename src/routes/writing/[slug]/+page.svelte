<script lang="ts">
    import { page } from '$app/stores';
    import { Calendar } from "radix-icons-svelte";
</script>

<svelte:head>
    <style>
        body {
            overflow-x: hidden;
        }

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.4);
        }
    </style>
</svelte:head>

<main>
    <div class="heading">
        <h1>Lorem ipsum dolor {$page.params.slug}</h1>
        <div class="calendar">
            <Calendar color="rgba(255, 255, 255, 0.3)"></Calendar>
            12th August, 2022
        </div>
    </div>
    <p>Lorem ipsum <a href="/">dolor sit amet, consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div class="code">
        let something = new Something();
        <span class="comment">// this is something</span>
    </div>
    <div class="seperator"/>
    <p>In mollis nunc sed id semper risus in hendrerit. Vitae et leo duis ut diam. Auctor elit sed vulputate mi sit amet mauris. Nunc faucibus a pellentesque sit amet porttitor. Nunc congue nisi vitae suscipit tellus. Sagittis vitae et leo duis. Amet venenatis urna cursus eget. Risus quis varius quam quisque id diam. Fames ac turpis egestas integer eget aliquet nibh praesent. Duis at consectetur lorem donec massa sapien faucibus et. Et netus et malesuada fames ac. Sed cras ornare arcu dui vivamus arcu felis bibendum. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Nulla porttitor massa id neque aliquam. Nulla facilisi morbi tempus iaculis urna id volutpat. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Fringilla urna porttitor rhoncus dolor purus non enim praesent.</p>
    <h2>Lorem ipsum dolor sit amet..</h2>
    <p>Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Et magnis dis parturient montes. Mi sit amet mauris commodo. Mauris commodo quis imperdiet massa tincidunt. Accumsan lacus vel facilisis volutpat est velit. Sodales neque sodales ut etiam. Nisl vel pretium lectus quam id leo in. Bibendum enim facilisis gravida neque convallis. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tortor vitae purus faucibus ornare suspendisse sed nisi. Sed egestas egestas fringilla phasellus faucibus. Quis enim lobortis scelerisque fermentum dui faucibus in ornare.</p>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

    div.heading {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    div.seperator {
        height: 1px;
        width: 100%;

        background: rgba(255, 255, 255, 0.1);
    }

    div.code {
        width: 100%;
        height: fit-content;

        border-radius: 6px;
        background: rgba(255, 255, 255, 0.1);

        font-family: 'IBM Plex Mono';
        font-size: 14px;
        color: #EDEDED;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        padding: 12px;
    }

    span.comment {
        color: #A0A0A0;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 24px;

        width: 600px;
        height: fit-content;
    }

    h1 {
        color: rgba(255, 255, 255, 0.75);

        font-size: 1.75em;
        font-weight: 700;
        font-family: 'Inter';
        line-height: 1.1111111;

        margin-bottom: 6px;
    }

    h2 {
        color: rgba(255, 255, 255, 0.75);

        font-size: 1.25em;
        font-weight: 700;
        font-family: 'Inter';
        padding: 12px 0px;
    }

    p {
        color: rgba(255, 255, 255, 0.6);

        font-size: 16px;
        font-family: 'Inter';
        line-height: 29px;

        height: fit-content;
    }

    div.calendar {
        font-size: 14px;
        font-family: 'Inter';
        color: rgba(255, 255, 255, 0.4);

        width: fit-content;
        height: fit-content;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4px;

        padding-bottom: 12px;
    }
    
    @media only screen and (max-width: 630px) {
        main {
            width: 90vw;
        }
    }

    a {
        color: inherit;
        text-decoration: underline;
        text-decoration-color: rgba(255, 255, 255, 0.2);
        text-decoration-thickness: 2px;
    }

    a:hover {
        text-decoration-color: rgba(255, 255, 255, 0.4);
    }
</style>