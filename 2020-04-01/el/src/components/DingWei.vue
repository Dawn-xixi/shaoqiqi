<template>
    <div class="ding-wei">
        <i class="el-icon-location-outline el-icon--left"></i>
        <span>{{weiZhi}}</span>
        <i class="el-icon-caret-bottom el-icon--right" :class="{active:active==5}" @click="to('/address')"></i>
    </div>
</template>
<script>
export default {
    props:{
        active:{
            default:1
        }
    },
    data() {
        return {
            weiZhi:"正在识别地址..."
        }
    },
    mounted() {
        setTimeout(()=>{
            this.weiZhi="徐州101"
        },1000)
    },
    methods: {
        to(router){
            this.$router.push({path:router})
        }
    },
}
</script>
<style scoped>
    .ding-wei{
        font-size: 1.8rem;
        font-weight: 700;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        color: #fff;
        padding: 1rem;
    }
    .ding-wei .el-icon--left{
        font-weight: 700;
    }
    .ding-wei el-icon--right{
        font-size: 0.5rem;
        display: inline-flex;
        vertical-align: middle;
        margin-right: -0.5rem;
    }
</style>