<template>
    <div class="testimonials-container">
        <div class="testimonials">
            <h2>Users testimonials</h2>
            <div class="reviews">
                <div>
                    <img src="../assets/img/avatar-3.jpg" alt="Immagine avatar">
                    <div>Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu</div>
                    <div class="name">Lisa Smith, ThemeFusion</div>
                </div>
                <div>
                    <img src="../assets/img/avatar-1.jpg" alt="Immagine avatar">
                    <div>Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.</div>
                    <div class="name">Melissa Green, ThemeFusion</div>
                </div>
                <div>
                    <img src="../assets/img/avatar-4.jpg" alt="Immagine avatar">
                    <div>Curabitur arcu erat, accumsan id imperdiet et, portttitor at sem. Proin eget tortor risus vestibulum ante aipsum.</div>
                    <div class="name">Sam Lewis, ThemeFusion</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionTestimonials"
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";
@mixin centered {
    max-width: 75%;
    margin: auto;
}
@mixin h2White{
    color: $textColor;
    font-family: $heroFont;
    font-weight: 400;
}
@mixin pawBackground{
    background-image: url(../assets/img/bg-transparent-3.png);
    background-color: $heroColor;
    background-repeat: repeat-x;
    background-size: 280px;
}

.testimonials-container{
    height: 600px;
    @include pawBackground;

    .testimonials{
        @include centered;
        
        h2{
            @include h2White;
            font-size: 33px;
            text-align: center;
            padding: 100px 0 30px 0;
        }
        .reviews{
            display: flex;
            justify-content: space-around;
            img{
                width: 80px;
                border-radius: 50%;
            }
            div{
                color: $textColor;
                width: 293px;
                text-align: center;
                line-height: $lineheight3;
                letter-spacing: 1px;
                font-family: $montserrat;
                font-size: 12px;
                padding: 10px 0;
            }
            .name{
                color: #8e988e;
            }
        }
    }
}
</style>