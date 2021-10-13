<template>
    <div class="tips">
            <h2>Get the best tips and tricks</h2>
            <h4>Recent articlets</h4>
        <div class="img-container">
            <div class="img">
                <img src="../assets/img/blog-1-400x400.jpg" alt="">
                <div>How to 'loose leash walk' your dog</div>
                <div class="date">April 21st, 2020</div>
            </div>
            <div class="img">
                <img src="../assets/img/blog-2-400x400.jpg" alt="">
                <div>Stop cats from scratching furniture</div>
                <div class="date">April 19th, 2020</div>
            </div>
            <div class="img">
                <img src="../assets/img/blog-3-400x400.jpg" alt="">
                <div>Where to buy the best pet food</div>
                <div class="date">April 18th, 2020</div>
            </div>
            <div class="img">
                <img src="../assets/img/blog-4-400x400.jpg" alt="">
                <div>Proper care for your pet toys</div>
                <div class="date">April 17th, 2020</div>
            </div>
        </div>
        <button>Read all articles</button>
    </div>
</template>

<script>
export default {
    name: "SectionTips"
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
    justify-content: space-between;

    .img{
        margin: 40px 0;
        img{
            width: 245px;
        }
        div{
            font-family: $montserrat;
            max-width: 190px;
            padding: 20px 0 0 25px;
            line-height: $lineheight2;
            letter-spacing: 0.7px;
            font-size: $fontHero;
        }
        .date{
            font-size: 10px;
        }
    }
}
button{
    @include button;
    color: $textColor;
    background-color: $button;
    height: 35px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    &:hover{
        background-color: $hoverBotton;
        cursor: pointer;
    }
}

</style>