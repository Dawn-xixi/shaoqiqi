<template>
    <div class="my-info" height="100">
        <div class="infotext">
        <el-image class="touimg" src="/images/index/touxiang.jpg"></el-image> 
        <div>
        <p class="number">Qiqi</p>
        <p class="telephone">
        <i class="el-icon-phone-outline"></i>
        <span>178****9808</span>
        </p>
        </div>
        </div>
        <i class="el-icon-arrow-right right"></i>
    </div>
</template>
<script>
export default {
    name:"MyHeader",
}
</script>
<style>
.my-info{
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2.5rem;
}
.infotext{
    
    display:flex;
}
.number{
    font-size:25px;
    font-weight:bold;
    margin:0px;
    margin-left:15px;
    margin-bottom:10px;
    color:#fff;
}
.touimg{
    width:70px;
    height:70px;
    border-radius:50%;
}
.telephone{
    font-size:12px;
    margin-left:15px;
    color:#fff;
}
.right{
    color:#fff;
}
</style>