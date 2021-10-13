<template>
    <div class="newsletter-container">
        <div class="newsletter">
            <h2>Join our newsletter</h2>
            <div>Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra vehicula nullam ut nisl.</div>
            <input type="text" placeholder="Insert your email...*">
            <button>Subscribe</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionNewsletter"
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
    padding: 12px 45px;
    border-radius: 20px;
    font-size: $fontDescription;
}
@mixin h2Title{
    font-weight: 200;
    font-family: $heroFont;
    font-size: 33px;
    color: $h2Color;
}

.newsletter-container{
    @include centered;
    background-image: linear-gradient(transparent 50%, rgba(249,245,241, 0.45) 80%), url('../assets/img/banner-7-2x-scaled.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    margin-top: -90px;
    margin-bottom: 100px;

    .newsletter{
        padding: 55px 100px;

        h2{
            @include h2Title;
        }
        div{
            color: #535662;
            width: 50%;
            font-family: $montserrat;
            font-size: 12px;
            letter-spacing: 1;
            font-weight: 500;
            line-height: $lineheight3;
        }
        input{
            background-color: #f9f5f1;
            border: none;
            padding: 12px 150px 12px 25px ;
            border-radius: 20px;
            margin: 50px 20px 0 0;
            outline: none;
        }
        button{
            @include button;
            color: $textColor;
            background-color: $button;
            &:hover{
                background-color: $hoverBotton;
                cursor: pointer;
            }
        }
    }
}
</style>