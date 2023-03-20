<script lang="ts">
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    
    inject({ mode: dev ? 'development' : 'production' });
</script>

<style>
    :root {
        --width: 500px;
    }

    @media only screen and (max-width: 595.24px) {
        :root {
            --width: 84vw;
        }
    }
</style>

<slot></slot>