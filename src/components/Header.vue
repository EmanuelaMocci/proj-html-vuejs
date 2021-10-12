<template>
    <div class="header">
        <div class="header-top">
            <div class="header-left">
                <img :src="logo">
                <!-- <i class="fas fa-search"></i> -->
                <input type="text" placeholder="Search...">
            </div>
    
            <div class="header-right">
                <span><strong>Questions?</strong> Call us : 1.800.123.4567</span>
                <div class="icone">
                    <i class="fas fa-shopping-bag"></i>
                    <i class="far fa-user"></i>
                </div>
            </div>
        </div>
    <hr>
        <div class="header-bottom">
            <div class="menu-navbar">
                <ul>
                    <li v-for="(list, index) in lists" :key="index">
                        <a :href="list.url" :class="list.stato == true ? 'active' : '' ">{{list.titolo}} <i :class="list.chevron == true ? 'fas fa-chevron-down' : '' "></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: 'Header',
    props: ['logo', 'lists']
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";
@mixin centered {
    max-width: 75%;
    margin: auto;
}

.header{
    font-family: $montserrat;
    hr{
        border: 1px solid $linkColor;
    }
}
.header-top{
    display: flex;
    @include centered;
    padding: 20px 0;

    .header-left{
        width: 100%;
        display: flex;
        align-items: center;
        img{
            width: 200px;
            padding-right: 80px;
        }
        input{
            border-radius: 30px;
            background-color: rgb(241, 241, 241);
            border: none;
            width: 250px;
            height: 35px;
            padding-left: 30px;
            outline: none;
        }
    }
    .header-right{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 100px;
        span{
            font-size: $fontDescription;
        }
        .icone{
            i{
                padding-left: 10px;
            }
        }
    }
}

.header-bottom{
    .menu-navbar{
        ul{
            display: flex;
            justify-content: center;
            li{
                padding: 20px 15px;
                list-style: none;
                a{
                    text-decoration: none;
                    color: $darkLinkColor;
                    font-size: $fontDescription;
                    cursor: pointer;
                }
                i{
                    font-size: 10px;
                    padding-left: 5px;
                }
            }
        }
        .active{
            color: $activeColor;
            font-weight: bold;
        }
    }
}


</style>
