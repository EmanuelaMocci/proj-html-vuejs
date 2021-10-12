<template>
    <div class="main">
        <SectionCategory/>
        <SectionNewArrivals/>
        <SectionBestSellers/>
    </div>
</template>

<script>
import SectionCategory from './SectionCategory.vue';
import SectionNewArrivals from './SectionNewArrivals.vue';
import SectionBestSellers from './SectionBestSellers.vue';

export default {
    name: 'Main', 
    components: {
        SectionCategory,
        SectionNewArrivals,
        SectionBestSellers
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";

</style>