<template>
    <div class="footer">
        <div class="footer-top">
            <div class="logo">
                <img :src="logo" alt="logo">
                <div>1234 Avada Avenue Avadaville info@your-company.com <br> Call us:(1) 234 5678</div>
            </div>
            <div class="shop-list">
                <h3>{{shopLists[0].titoloLista}}</h3>
                <ul>
                    <li v-for="(list, index) in shopLists" :key="index">
                        {{list.titolo}}
                    </li>
                </ul>
            </div>
            <div class="links">
                <h3>{{links[0].titoloLink}}</h3>
                <ul>
                    <li v-for="(link, index) in links" :key="index">
                        {{link.titolo}}
                    </li>
                </ul>
            </div>
            <div class="subscribe">
                <h3>Subscribe to our newsletter</h3>
                <input type="text" placeholder="Insert your email...*">
                <button>Subscribe</button>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="menu-footer">
                <ul>
                    <li v-for="(footerList, index) in footerLists" :key="index">
                        <a :href="footerList.url" :class="footerList.stato == true ? 'active' : '' ">{{footerList.titolo}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: ['logo', 'shopLists', 'links', 'footerLists']
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
    padding: 13px 60px;
    border-radius: 20px;
}
@mixin pawBackground{
    background-image: url(../assets/img/bg-transparent-3.png);
    background-repeat: repeat-x;
    background-size: 250px;
}
@mixin marginCentered{
    margin-left: auto;
    margin-right: auto;
    display: block;
}
@mixin footerFont{
    color: $textColor;
    font-family: $montserrat;
    font-weight: 400;
    font-size: 16px;
}
.footer{
    height: 600px;
    background-color: $heroColor;
    margin-top: 100px;
    .footer-top{
        @include centered;
        padding-top: 110px;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #2d4030;
        .shop-list, .links{
            color: $textColor;
            font-family: $montserrat;
            h3{
            @include footerFont;
            }
        }
        ul{
            padding: 0;
            li{
                list-style: none;
                font-size: $fontDescription;
                padding: 10px 0;
                letter-spacing: 1px;
            }
        }
    }
}
.subscribe{
    width: 240px;
    background-color: #254229;
    @include pawBackground;
    border-radius: 5px;
    margin-bottom: 50px;
    h3{
        @include footerFont;
        padding: 16px 0 16px 27px;
    }
    input{
        background-color: #f9f5f1;
        border: none;
        padding: 13px 0px 13px 20px;
        margin-bottom: 25px;
        border-radius: 20px;
        outline: none;
        width: 166px;
        @include marginCentered;
    }
    button{
        @include button;
        @include marginCentered;
        color: $textColor;
        background-color: $button;
        font-size: $fontHero;
        margin-bottom: 20px;
        &:hover{
            background-color: $hoverBotton;
            cursor: pointer;
        }
    }
}
.logo{
    width: 220px;
    img{
        width: 200px;
    }
    div{
        color: $textColor;
        font-family: $montserrat;
        font-size: $fontDescription;
        padding-top: 20px;
        line-height: $lineheight3;
        word-spacing: 1.5px;
        letter-spacing: 1px;
    }
}
.footer-bottom{
    .menu-footer{
        ul{
            display: flex;
            justify-content: center;
            padding: 30px 0;
            li{
                padding: 5px 15px;
                list-style: none;
                a{
                    text-decoration: none;
                    color: $linkFooter;
                    font-size: $fontDescription;
                    font-family: $montserrat;
                    cursor: pointer;
                }
            }
        }
        .active{
            color: $textColor;
            font-weight: bold;
        }
    }
}

</style>