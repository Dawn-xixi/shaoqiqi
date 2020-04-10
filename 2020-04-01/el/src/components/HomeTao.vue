<template>
    <div class="pztc">
        <div>
        <h4>品质套餐</h4>
        <p class="gtext">搭配齐全吃得好</p>
        <p class="go">立即抢购 ></p>
        </div>
        <div>
        <el-image :src="pimg" class="pimg"></el-image>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeTao",
    data(){
        return{
            pimg:'/images/index/pinzhitaocan.png'
        }
    }
}
</script>
<style>
.pztc{
    display:flex;
    justify-content:space-between;
    background:linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
    padding:1.5rem;
    width:320px;
    margin-left:13px;
}
.pimg{
    width:130px;
    height:90px;
}
h4{
    font-size:20px;
    margin:0px;
}
.gtext{
    color:#777777;
    margin-top:1rem;
}
.go{
    color:#AF8260;
    margin-top:1rem;
}
</style>