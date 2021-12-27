<template>
    <div class="arrivals">
            <div class="img-container"></div>
            <div class="text">
                <div class="title" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="700">FIND THE BEST ANIMAL SUPPLIES</div>
                <div class="description" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="700">New arrivals weekly</div>
                <button data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="700">Learn more about us</button>
            </div>
        </div>
</template>

<script>
export default {
    name: "SectionNewArrivals"
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";
@mixin centered {
    max-width: 75%;
    margin: auto;
}
@mixin button{
    border: none;
    padding: 10px 25px;
    border-radius: 20px;
    margin-top: 10px;
    font-size: $fontDescription;
}
@mixin spacing{
    word-spacing: 2px;
    letter-spacing: 2px;
}
@mixin h2White{
    color: $textColor;
    font-family: $heroFont;
    font-weight: 400;
}

.arrivals{
    @include centered;
    background-color: black;
    position: relative;
    .img-container{
        margin: 90px 0;
        background-image: url(../assets/img/banner-3-2x-scaled.jpg);
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        height: 410px;
        opacity: $opacity;
    }

    .text{
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .title{
            color: $textColor;
            font-weight: 700;
            font-size: 11px;
            font-family: $montserrat;
            @include spacing;

        }
        .description{
            @include h2White;
            font-size: 40px;
            line-height: $lineheight1;
            padding: 30px 0;
        }
        button{
            @include button;
            &:hover{
                background-color: $button;
                color: white;
                cursor: pointer;
            }
        }
    }
}
</style>