<script>
    import NavBar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<NavBar />
<main class="h-full"><slot /></main>
<Footer />
