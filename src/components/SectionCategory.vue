<template>
    <div class="section-category">
        <div class="description">
            <div class="text">
                <h2>Browse by category</h2>
                <div>
                    Augue purus et, tincidunt condimentum mauris. At nibh rutrum mi in. Nisi, vitae interdum eleifend dui, 
                    consequat nulla rhocus dictum. Viverra.
                </div>
            </div>

            <div class="img-container">
                <div class="img">
                    <img src="../assets/img/product-9-300x300.jpg" alt="">
                    <div class="hover">
                        <div>Bed</div>
                    </div>
                    <div>Bed (1)</div>
                </div>
                <div class="img">
                    <img src="../assets/img/product-3-300x300.jpg" alt="">
                    <div class="hover">
                        <div>Food</div>
                    </div>
                    <div>Food (6)</div>
                </div>
                <div class="img">
                    <img src="../assets/img/product-2-300x300.jpg" alt="">
                    <div class="hover">
                        <div>Toys</div>
                    </div>
                    <div>Toys (6)</div>
                </div>
                <div class="img">
                    <img src="../assets/img/product-4-300x300.jpg" alt="">
                    <div class="hover">
                        <div>Transport</div>
                    </div>
                    <div>Transport (6)</div>
                </div>
            </div>
        </div>

        <div class="dog-food-container">
            <div class="dog-food">
                <h2>Kibble</h2>
                <div>Dry dog food</div>
                <img src="../assets/img/food-transparent-18.png" alt="">
                <button>Shop dry food</button>
            </div>
            <div class="dog-food">
                <h2>Moist</h2>
                <div>Canned dog food</div>
                <img src="../assets/img/food-transparent-17.png" alt="">
                <button>Shop dry food</button>
            </div>
            <div class="dog-food">
                <h2>Frozen</h2>
                <div>Freeze-Dried dog food</div>
                <img src="../assets/img/food-transparent-16.png" alt="">
                <button>Shop dry food</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionCategory"
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
@mixin h2Title{
    font-weight: 200;
    font-family: $heroFont;
    font-size: 30px;
    color: $h2Color;
}
@mixin pawBackground{
    background-image: url(../assets/img/bg-transparent-3.png);
    background-color: $heroColor;
    background-repeat: repeat-x;
    background-size: 280px;
}

.description{
    .text{
        max-width: 40%;
        text-align: center;
        margin: 80px auto 50px auto;

        h2{
        @include h2Title;
        }
        div{
            font-family: $montserrat;
            word-spacing: 1px;
            font-size: $fontDescription;
            line-height: $lineheight2;
        }
    }
    .img-container{
        display: flex;
        justify-content: space-between;
        @include centered;

        .img{
            position: relative;
            img{
                width: 260px;
            }
            &:hover .hover{
                display: block;
                cursor: pointer;
            }
            .hover{
                background-color: rgba(199,168,145, 0.8);
                width: 260px;
                height: 260px;
                position: absolute;
                top: -20px;
                display: none;
                div{
                    color: $textColor;
                    font-size: 18px;
                    font-weight: 500;
                    margin-top: 110px;
                }
            }
            div{
                text-align: center;
                font-family: $montserrat;
                margin: 20px 0 100px 0;
            }
        }
    }
}
.dog-food-container{
    @include centered;
    display: flex;
    justify-content: space-between;
    
    .dog-food{
        height: 470px;
        width: 348px;
        @include pawBackground;
        background-position: center top;
        text-align: center;
        &:hover{
            transform: scale(1.05);
            cursor: pointer;
            box-shadow: 0px 0px 5px 3px #d1d0d0;
        }

        h2{
            color: $textColor;
            font-weight: 300;
            font-size: 30px;
            padding-top: 40px;
            line-height: 0.8;
        }
        div{
            color: $dogFood;
            font-family: $montserrat;
            font-weight: 600;
            font-size: $fontDescription;
            letter-spacing: 1px;
        }
        img{
            width: 218px;
            margin-left: auto;
            margin-right: auto;
            display: block;
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