<template>
    <div class="hero">
        <ul>
            <li>
                <i class="far fa-map"></i>
                <strong>International </strong>Shipping Services
            </li>

            <li>
                <i class="far fa-clock"></i>
                See our <strong>store hours </strong>and services
            </li>

            <li>
                <i class="fas fa-check"></i>
                We price match to give you the <strong>best deals</strong>
            </li>
        </ul>
        <div class="banner-container">
            <div class="banner"></div>
            <div class="text">
                <div class="title" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">FIND THE BEST ANIMAL SUPPLIES</div>
                <div class="description" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">We know animals are a part of your family, let us help take care of them.</div>
                <button data-aos="zoom-in-left" data-aos-duration="1500" data-aos-delay="500">Learn more about us</button>
            </div>
        </div>
        <div class="hero-bottom">
            <img src="../assets/img/food-transparent-5-400x223.png" alt="">
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                Get $25 OFF your first purchase of our homemade per food!
            </div>
            <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">Visit the shop</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";
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

.hero{
    background-image: url(../assets/img/bg-transparent-3.png);
    background-color: $heroColor;
    font-family: $montserrat;

    ul{
        display: flex;
        justify-content: space-around;
        max-width: 78%;
        margin: auto;
        li{
            list-style: none;
            color: $textColor;
            padding: 20px 0px;
            font-size: 13px;
            i{
                padding: 0 8px;
            }
        }
    } 
}
.banner-container{
    position: relative;
    .banner{
        background-image: url(../assets/img/banner-5-2x-scaled.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        opacity: $opacity;
        height: 630px;
    }
    .text{
        max-width: 35%;
        padding-left: 12%;
        padding-top: 180px;
        position: absolute;
        bottom: 150px;
        .title{
            color: $textColor;
            font-weight: 700;
            font-size: 11px;
            @include spacing;
        }
        .description{
            color: $textColor;
            font-family: $heroFont;
            font-weight: 400;
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
.hero-bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 180px;
        padding-top: 20px;
    }
    div{
        color: $textColor;
        padding-left: 20px;
        font-size: $fontHero;
    }
    a{
        color: $linkColor;
        padding-left: 20px;
        font-size: $fontHero;
    }
}
</style>