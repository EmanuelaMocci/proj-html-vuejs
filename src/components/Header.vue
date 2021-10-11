<template>
    <div class="header">
        <div class="header-left">
           <img :src="logo">
           <!-- <i class="fas fa-search"></i> -->
           <input type="text" placeholder="Search..."> <!-- v-model="search" -->
        </div>
    
        <div class="header-right">
            <span><strong>Questions?</strong> Call us : 1.800.123.4567</span>
            <div class="icone">
                <i class="fas fa-shopping-bag"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['logo'],
    // data() {
    //     return {
    //         search: ""
    //     }
    // }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap');

.header{
    display: flex;
    max-width: 78%;
    margin: auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;

    .header-left{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            width: 200px;
            padding-right: 80px;
        }
    }
    .header-right{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 100px;
        span{
            font-size: 15px;
        }
        .icone{
            i{
                padding-left: 10px;
            }
        }
    }
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

</style>
