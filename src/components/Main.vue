<template>
    <div class="main">
        <SectionCategory/>
    </div>
</template>

<script>
import SectionCategory from './SectionCategory.vue';

export default {
    name: 'Main', 
    components: {
        SectionCategory
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";

</style>