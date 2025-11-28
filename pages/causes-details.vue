<template>
    <div class="main-container">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb items="Causes details" title="Causes details" />
        <CausesDetailsContent />
        <Footer />
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            CausesDetailsContent: () => import('@/components/CausesDetailsContent'),
            Footer: () => import('@/components/Footer'),
        }
    };
</script>


