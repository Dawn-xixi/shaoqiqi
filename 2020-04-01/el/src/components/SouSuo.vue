<template>
    <div class="sou-suo" :class="{'fixed-top':isFixedTop}" ref="root">
        <div class="inner">
            <i class="el-icon-search el-icon--left"></i>
            <span>搜索饿了么商家、商品名称</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"SouSuo",
    props:{
        isFixedTop:{
            type:Boolean,
            default:false
        }
    }
   
}
</script>
<style scoped>
    .sou-suo{
        background-image: linear-gradient(90deg,#0af,#0085ff);
        padding: 1rem 2rem;
    }
    .sou-suo .inner{
        background-color: #fff;
        color: #999999;
        font-size: 1.5rem;
        padding: 1rem;
        text-align:center;
    }
    .sou-suo.fixed-top{
        position: fixed;
        top:0;
        width: calc(100% - 4rem);
        z-index: 9999;
    }

</style>