<template>
    <div class="main">
        <SectionCategory/>
        <SectionNewArrivals/>
        <SectionBestSellers/>
        <SectionTestimonials/>
        <SectionNewsletter/>
        <SectionTips/>
        <SectionBanner/>
        <SectionNewProducts/>
    </div>
</template>

<script>
import SectionCategory from './SectionCategory.vue';
import SectionNewArrivals from './SectionNewArrivals.vue';
import SectionBestSellers from './SectionBestSellers.vue';
import SectionTestimonials from './SectionTestimonials.vue';
import SectionNewsletter from './SectionNewsletter.vue';
import SectionTips from './SectionTips.vue';
import SectionBanner from './SectionBanner.vue';
import SectionNewProducts from './SectionNewProducts.vue';



export default {
    name: 'Main', 
    components: {
        SectionCategory,
        SectionNewArrivals,
        SectionBestSellers,
        SectionTestimonials,
        SectionNewsletter,
        SectionTips,
        SectionBanner,
        SectionNewProducts
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";

</style>