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
    max-width: 78%;
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
                width: 270px;
            }
            div{
                text-align: center;
                font-family: $montserrat;
                margin: 20px 0 100px 0;
            }
        }
    }
}


</style>