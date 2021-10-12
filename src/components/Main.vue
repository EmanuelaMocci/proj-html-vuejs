<template>
    <div class="main">
        <SectionCategory/>
        <SectionNewArrivals/>
        <SectionBestSellers/>
        <SectionTestimonials/>
        <SectionNewsletter/>
    </div>
</template>

<script>
import SectionCategory from './SectionCategory.vue';
import SectionNewArrivals from './SectionNewArrivals.vue';
import SectionBestSellers from './SectionBestSellers.vue';
import SectionTestimonials from './SectionTestimonials.vue';
import SectionNewsletter from './SectionNewsletter.vue';



export default {
    name: 'Main', 
    components: {
        SectionCategory,
        SectionNewArrivals,
        SectionBestSellers,
        SectionTestimonials,
        SectionNewsletter
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";

</style>