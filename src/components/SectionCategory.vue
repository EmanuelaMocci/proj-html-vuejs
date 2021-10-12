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
                    <div>Bed (1)</div>
                </div>
                <div class="img">
                    <img src="../assets/img/product-3-300x300.jpg" alt="">
                    <div>Food (6)</div>
                </div>
                <div class="img">
                    <img src="../assets/img/product-2-300x300.jpg" alt="">
                    <div>Toys (6)</div>
                </div>
                <div class="img">
                    <img src="../assets/img/product-4-300x300.jpg" alt="">
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

        <div class="arrivals">
            <div class="text-container"></div>
            <div class="text">
                <div>FIND THE BEST ANIMAL SUPPLIES</div>
                <div class="description">New arrivals weekly</div>
                <button>Learn more about us</button>
            </div>
            <!-- <img src="../assets/img/banner-3-2x-scaled.jpg" alt=""> -->
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

.description{
    .text{
        max-width: 40%;
        text-align: center;
        margin: 80px auto 50px auto;

        h2{
        font-weight: 200;
        font-family: $heroFont;
        font-size: 30px;
        color: #2a382a;
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
            img{
                width: 260px;
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
        background-color: $heroColor;
        background-image: url(../assets/img/bg-transparent-3.png);
        background-repeat: repeat-x;
        background-size: 280px;
        background-position: center top;
        text-align: center;

        
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
            border: none;
            color: $textColor;
            background-color: $button;
            padding: 10px 25px;
            border-radius: 20px;
            margin-top: 10px;
            font-size: $fontDescription;
        }
    }
}
.arrivals{
    @include centered;
    background-color: black;
    position: relative;
    .text-container{
        margin-top: 100px;
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
        top: 120px;
        left: 350px;
        div{
            color: $textColor;
            font-weight: 700;
            font-size: 11px;
            font-family: $montserrat;
        }
        .description{
            font-family: $heroFont;
            font-weight: 400;
            font-size: 40px;
            line-height: $lineheight1;
            padding: 30px 0;
        }
        button{
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            background-color: $textColor;
        }
    }
}


</style>