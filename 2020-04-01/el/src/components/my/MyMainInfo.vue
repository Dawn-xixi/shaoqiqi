<template>
    <div>
    <div class="main-info">
        <div>
        <span><i class="el-icon-location-information mylocation" fit="fill"></i></span>
        <span class="myaddress">我的地址</span>
        </div>
        <div>
        <i class="el-icon-arrow-right addressright"></i>
        </div>
    </div>
    <div class="main-info1">
        <div>
        <span><i class="el-icon-location-information mylocation" fit="fill"></i></span>
        <span class="myaddress">金币商城</span>
        </div>
        <div>
        <i class="el-icon-arrow-right addressright"></i>
        </div>
    </div>
    <div class="main-info2">
        <div>
        <span><i class="el-icon-location-information mylocation" fit="fill"></i></span>
        <span class="myaddress">分享拿20元现金</span>
        </div>
        <div>
        <i class="el-icon-arrow-right addressright"></i>
        </div>
    </div>
    <div class="main-info3">
        <div>
        <span><i class="el-icon-location-information mylocation" fit="fill"></i></span>
        <span class="myaddress">我的客服</span>
        </div>
        <div>
        <i class="el-icon-arrow-right addressright"></i>
        </div>
    </div>
    <div class="main-info4">
        <div>
        <span><i class="el-icon-location-information mylocation" fit="fill"></i></span>
        <span class="myaddress">下载饿了么App</span>
        </div>
        <div>
        <i class="el-icon-arrow-right addressright"></i>
        </div>
    </div>
    <div class="main-info5">
        <div>
        <span><i class="el-icon-location-information mylocation" fit="fill"></i></span>
        <span class="myaddress">规则中心</span>
        </div>
        <div>
        <i class="el-icon-arrow-right addressright"></i>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"MyMainInfo",
}
</script>
<style>
.main-info{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#fff;
    margin-top:10px;
    margin-bottom:10px;
    padding:1rem;
    color:#333;
}
.main-info1{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#fff;
    padding:1rem;
    border-bottom:1px solid #eee;
    color:#333;
}
.main-info2{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#fff;
    padding:1rem;
    margin-bottom:10px;
    color:#333;
}
.main-info3{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#fff;
    padding:1rem;
    border-bottom:1px solid #eee;
    color:#333;
}
.main-info4{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#fff;
    padding:1rem;
    border-bottom:1px solid #eee;
    color:#333;
}
.main-info5{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#fff;
    padding:1rem;
    color:#333;
}
.myaddress{
    font-size:16px;
    margin-left:10px;
}
.mylocation{
    font-size:20px;
    color:rgb(74, 165, 240);
}
.addressright{
    color:#bbb;
}
</style>