<template>
    <div>
        <div class="main">
        <a href="#">
        <p>
        <span class="num1">0</span>
        <span class="ge1">个</span>
        </p>
        <p class="money">红包</p>
        </a>
        
        <a href="#">
        <p>
        <span class="num2">0</span>
        <span class="ge2">个</span>
        </p>
        <p class="money">金币</p>
        </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"MyMain",
}
</script>
<style>
a{
    text-decoration:none;
}

.main{
    display:flex;
    justify-content:space-around;
    padding:20px 30px 20px 30px;
    background-color:#fff;
}
.num1{
    color: rgb(255, 95, 62);
    font-size:30px;
    font-weight:bold;
}
.num2{
    color: rgb(106, 194, 11);
    font-size:30px;
    font-weight:bold;
}
.ge1{
    color: rgb(255, 95, 62);
    font-size:13px;
}
.ge2{
    color: rgb(106, 194, 11);
    font-size:13px;
}
.money{
    color:#666;
    font-weight:bold;
    font-size:13px;
    margin:0px;
}
p{
    margin:0px;
}
</style>