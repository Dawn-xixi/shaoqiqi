<template>
    <ul>
        <li @click="click(1)" :class="{active:current == 1}"><span>综合排序</span><i class="el-icon-check"></i></li>
        <li @click="click(2)" :class="{active:current == 2}"><span>好评优先</span><i class="el-icon-check"></i></li>
        <li @click="click(3)" :class="{active:current == 3}"><span>起送价最低</span><i class="el-icon-check"></i></li>
        <li @click="click(4)" :class="{active:current == 4}"><span>配送最快</span><i class="el-icon-check"></i></li>
        <li @click="click(5)" :class="{active:current == 5}"><span>配送费最低</span><i class="el-icon-check"></i></li>
        <li @click="click(6)" :class="{active:current == 6}"><span>人均从低到高</span><i class="el-icon-check"></i></li>
        <li @click="click(7)" :class="{active:current == 7}"><span>人均从高到底</span><i class="el-icon-check"></i></li>
        <li @click="click(8)" :class="{active:current == 8}"><span>通用排序</span><i class="el-icon-check"></i></li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            current:0 //当前选中的项,

        }
    },
    methods:{
        click(index){
            this.current = index
            this.$emit('sortClick',index)
        }
    }
}
</script>

<style scoped>
    ul{
        list-style:none;
        padding:1rem 2rem;
        margin:0;
        
    }
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:20px;
    }
    li.active,li.active .el-icon-check{
        font-weight:bold;
        color:#333;
    }
</style>