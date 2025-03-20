<script>
    let { children } = $props();
    import '../app.css';
    import { Toaster } from 'svelte-5-french-toast';
    import Footer from '$shared/Footer.svelte';
    import { website_name } from '$lib/app/env.js';
</script>


<Toaster />

<main class="flex min-h-full flex-col py-12 sm:px-6 lg:px-8 w-full">
    {@render children()}
</main>

<footer class="bg-gray-300 max-h-36">
    <Footer webSiteName={website_name} />
</footer>
