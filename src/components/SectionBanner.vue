<template>
    <div class="banner-container">
        <div class="banner">

            <div class="img-left">
                <img src="../assets/img/banner-8-2x.jpg" alt="">
                <div class="text">
                    <div class="title">FIND THE BEST ANIMAL SUPPLIES</div>
                    <h2 class="description">Popular accessories</h2>
                    <button>View all toys accessories</button>
                </div>
            </div>

            <div class="img-right">
                <img src="../assets/img/banner-9-2x.jpg" alt="">
                <div class="text">
                    <div class="title">FIND THE BEST FOOD</div>
                    <h2 class="description">New food arrival</h2>
                    <button>View all food products</button>
                </div>
            </div>
        </div>
        <div class="banner-paw">
            <div class="icons-container">
                <div class="icons">
                    <i class="fas fa-truck"></i>
                    <div>Free worldwide deliveries</div>
                </div>
                <div class="icons">
                    <i class="far fa-map"></i>
                    <div>Find stores near you</div>
                </div>
                <div class="icons">
                    <i class="fas fa-dollar-sign"></i>
                    <div>Best price guarranteed</div>
                </div>
                <div class="icons">
                    <i class="far fa-credit-card"></i>
                    <div>All credit card accepted</div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionBanner"
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
@mixin centered {
    max-width: 75%;
    margin: auto;
}

.banner-container{
    margin: 80px 0;
}
.banner{
    display: flex;
    .img-left, .img-right{
        width: 100%;
        height: 355px;
        background-color: black;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            opacity: $opacity;
        }
        .text{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            .title{
                color: $textColor;
                font-weight: 700;
                font-size: 9px;
                font-family: $montserrat;
                @include spacing;
            }
            .description{
                @include h2White;
                font-size: 28px
            }
            button{
                @include button;
                background-color: white;
                &:hover{
                    background-color: $button;
                    color: white;
                    cursor: pointer;
                }
            }
        }
    }
}
.banner-paw{
    height: 250px;
    @include pawBackground;
    .icons-container{
        @include centered;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
            .icons{
            text-align: center;
            i{
                color: $textColor;
                font-size: 35px;
            }
            div{
                font-family: $montserrat;
                font-size: $fontDescription;
                color: #8e988e;
                font-weight: 500;
                padding-top: 20px;
            }
        }
    }
}

</style>