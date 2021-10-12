<template>
    <div class="best-seller">
        <h4>All-time best sellers</h4>
        <div class="view-products">
            <h2>Items everyone loves</h2>
            <button>View all products</button>
        </div>
        <div class="img-container">
            <div class="img">
                <img src="../assets/img/product-21-400x400.jpg" alt="">
                <div>Transport cage</div>
                <div class="price">$25.00</div>
            </div>
            <div class="img">
                <img src="../assets/img/product-20-400x400.jpg" alt="">
                <div>Dog leash</div>
                <div class="price">$25.00</div>
            </div>
            <div class="img">
                <img src="../assets/img/product-16-400x400.jpg" alt="">
                <div>Animal transport cage</div>
                <div class="price"><strike>$35.00</strike> $25.00</div>
            </div>
            <div class="img">
                <img src="../assets/img/product-11-400x400.jpg" alt="">
                <div>Colorful cat leash</div>
                <div class="price">$12.00</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionBestSellers"
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
@mixin h2Title{
    font-weight: 200;
    font-family: $heroFont;
    font-size: 30px;
    color: $h2Color;
}

.best-seller{
    @include centered;
    h4{
        color: $dogFood;
        font-family: $montserrat;
        font-weight: 600;
        font-size: $fontHero;
        letter-spacing: 1px;
    }
    .view-products{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            @include h2Title;
        }
        button{
            @include button;
            color: $textColor;
            background-color: $button;
            height: 35px;
        }
    }
    .img-container{
        display: flex;
        justify-content: space-between;

        .img{
            margin: 40px 0;
            img{
                width: 245px;
            }
            div{
                text-align: center;
                font-family: $montserrat;
                margin: 15px 0;
            }
            .price{
                font-size: $fontDescription;
                color: $button;
                font-weight: 500;
                strike{
                    font-size: 10px;
                    padding-right: 3px;
                }
            }
        }
    }
}


</style>