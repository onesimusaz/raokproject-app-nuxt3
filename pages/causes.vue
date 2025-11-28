<template>
    <div class="main-container">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb items="Causes" title="Causes" />
        <CausesWrapper />
        <FunFactOne />
        <TestimonialOne />
        <Sponsor />
        <Footer />
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            CausesWrapper: () => import('@/components/CausesWrapper'),
            FunFactOne: () => import('@/components/FunFactOne'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            Sponsor: () => import('@/components/Sponsor'),
            Footer: () => import('@/components/Footer'),
        }
    };
</script>


