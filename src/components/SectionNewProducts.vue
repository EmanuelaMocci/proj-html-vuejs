<template>
    <div class="tips">
            <h2>New products arrival</h2>
            <h4>Latest products</h4>
        <div class="img-container">
            <div class="img">
                <img src="../assets/img/product-8-400x400.jpg" alt="Immagine prodotto cuccia">
                <div class="hover">
                    <i class="far fa-check-square"></i>
                    <div>VIEW CART</div>
                </div>
                <div>Colored pet bed</div>
                <div class="price">$18.00 - $26.00</div>
            </div>
            <div class="img">
                <img src="../assets/img/product-2-400x400.jpg" alt="Immagine prodotto gioco">
                <div class="hover">
                    <i class="far fa-check-square"></i>
                    <div>VIEW CART</div>
                </div>
                <div>Colorful ball set</div>
                <div class="price">$29.00</div>
            </div>
            <div class="img">
                <img src="../assets/img/product-3-400x400.jpg" alt="Immagine prodotto osso">
                <div class="hover">
                    <i class="far fa-check-square"></i>
                    <div>VIEW CART</div>
                </div>
                <div>Dog bone</div>
                <div class="price"><strike>$29.00</strike> $18.00</div>
                <div class="sale">Sale!</div>
            </div>
            <div class="img">
                <img src="../assets/img/product-4-400x400.jpg" alt="Immagine prodotto trasportino">
                <div class="hover">
                    <i class="far fa-check-square"></i>
                    <div>VIEW CART</div>
                </div>
                <div>Animal transport bag</div>
                <div class="price">$29.00</div>
            </div>
            <div class="img">
                <img src="../assets/img/product-5-400x400.jpg" alt="Imamgine prodotto trasportino">
                <div class="hover">
                    <i class="far fa-check-square"></i>
                    <div>VIEW CART</div>
                </div>
                <div>Animal transport cage</div>
                <div class="price">$35.00</div>
            </div>
            <div class="img">
                <img src="../assets/img/product-10-400x400.jpg" alt="Immagine prodotto trasportino">
                <div class="hover">
                    <i class="far fa-check-square"></i>
                    <div>VIEW CART</div>
                </div>
                <div>Closable cat litter</div>
                <div class="price">$16.00</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionNewProducts"
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";

@mixin centered {
    max-width: 75%;
    margin: auto;
}
@mixin h2Title{
    font-weight: 200;
    font-family: $heroFont;
    font-size: 30px;
    color: $h2Color;
}

.tips{
    @include centered;
    h2{
        @include h2Title;
        text-align: center;
    }
    h4{
        color: $dogFood;
        font-family: $montserrat;
        font-weight: 600;
        font-size: $fontHero;
        letter-spacing: 1px;
        text-align: center;
    }
}
.img-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .img{
        margin: 30px 0 10px 0;
        position: relative;
        img{
            width: 348px;
        }
        &:hover .hover{
            display: block;
            cursor: pointer;
        }
        .hover{
            background-color: rgba(199,168,145, 0.8);
            width: 348px;
            height: 348px;
            position: absolute;
            top: -15px;
            display: none;
            div{
            color: $textColor;
            font-size: 12px;
            font-weight: 600;
        }
        i{
            margin-top: 130px;
            font-size: 28px;
            color: $textColor;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 15px 17px;
            border-radius: 50%;
        }
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
        .sale{
            background-color: $button;
            padding: 7px 4px;
            border-radius: 50%;
            color: $textColor;
            font-size: 13px;
            position: absolute;
            top: 0;
            left: 15px;
        }
    }
}

</style>