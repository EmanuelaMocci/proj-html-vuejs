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
        <div class="banner">
            <div class="text">
                <div>FIND THE BEST ANIMAL SUPPLIES</div>
                <div class="description">We know animals are a part of your family, let us help take care of them.</div>
                <button>Learn more about us</button>
            </div>
        </div>
        <div class="hero-bottom">
            <img src="../assets/img/food-transparent-5-400x223.png" alt="">
            <div>
                Get $25 OFF your first purchase of our homemade per food!
            </div>
            <a href="#">Visit the shop</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>


.hero{
    background-image: url(../assets/img/bg-transparent-3.png);
    background-color: #2a382a;
    font-family: 'Montserrat', sans-serif;

    ul{
        display: flex;
        justify-content: space-around;
        max-width: 78%;
        margin: auto;
        li{
            list-style: none;
            color: white;
            padding: 20px 0px;
            font-size: 13px;
            i{
                padding: 0 8px;
            }
        }
    } 
}
.banner{
    background-image: url(../assets/img/banner-5-2x-scaled.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    // opacity: 0.8;
    height: 630px;
        .text{
            max-width: 35%;
            padding-left: 15%;
            padding-top: 180px;
            div{
                color: white;
                font-weight: 700;
                font-size: 11px;

            }
            .description{
            font-family: 'Scheherazade New', serif;
            font-weight: 400;
            font-size: 50px;
            line-height: 1.2;
            padding: 30px 0;
            }
            button{
                border: none;
                padding: 10px 20px;
                border-radius: 20px;
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
        color: white;
        padding-left: 20px;
        font-size: 15px;
    }
    a{
        color: lightgray;
        padding-left: 20px;
        font-size: 15px;
    }
}
</style>