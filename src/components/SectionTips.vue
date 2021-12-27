<template>
    <div class="tips">
            <h2>Get the best tips and tricks</h2>
            <h4>Recent articlets</h4>
        <div class="img-container">
            <div class="img" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="900">
                <img src="../assets/img/blog-1-400x400.jpg" alt="Immagine cane">
                <div class="hover">
                    <div>How to 'loose leash walk' your dog</div>
                    <div>Tips & tricks</div>
                </div>
                <div class="text">How to 'loose leash walk' your dog</div>
                <div class="date">April 21st, 2020</div>
            </div>
            <div class="img" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">
                <img src="../assets/img/blog-2-400x400.jpg" alt="Immagine gatto">
                <div class="hover">
                    <div>Stop cats from scratching furniture</div>
                    <div>Tips & tricks</div>
                </div>
                <div class="text">Stop cats from scratching furniture</div>
                <div class="date">April 19th, 2020</div>
            </div>
            <div class="img" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1200">
                <img src="../assets/img/blog-3-400x400.jpg" alt="Immagine gatto">
                <div class="hover">
                    <div>Where to buy the best pet food</div>
                    <div>Tips & tricks</div>
                </div>
                <div class="text">Where to buy the best pet food</div>
                <div class="date">April 18th, 2020</div>
            </div>
            <div class="img" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1300">
                <img src="../assets/img/blog-4-400x400.jpg" alt="Immagine cane">
                <div class="hover">
                    <div>Proper care for your pet toys</div>
                    <div>Tips & tricks</div>
                </div>
                <div class="text">Proper care for your pet toys</div>
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
        position: relative;
        img{
            width: 245px;
        }
         &:hover .hover{
            display: block;
            cursor: pointer;
        }
        .hover{
            background-color: rgba(193,153,130, 0.8);
            width: 245px;
            height: 245px;
            position: absolute;
            top: 0px;
            display: none;

            div:first-child{
                color: $textColor;
                font-weight: 500;
                text-align: center;
                font-family: $montserrat;
                font-size: 18px;
                margin: 32% 10% 3% 10%;
            }
            div:last-child{
                color: $textColor;
                text-align: center;
                font-family: $montserrat;
                font-size: $fontDescription;
                font-weight: 500;
            }
        }
        .text, .date{
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