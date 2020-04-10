<template>
    <div>
        <el-container>
        <el-header style="padding:0px;height:120px;">
        <MyHeader></MyHeader>
        </el-header>
        <el-main style="padding:0px;">
        <MyMain></MyMain>
        <MyMainInfo></MyMainInfo>
        <div class="zhengce" style="text-align:center;font-size:15px;color:#4DA6F0;margin-top:20px;">隐私政策</div>
        </el-main>
        <el-footer :active="4" style="padding:0px;height:0px;">
        <BottomNav></BottomNav>
        </el-footer>
        </el-container>
    </div>
</template>
<script>
import MyHeader from '../components/my/MyHeader';
import MyMain from '../components/my/MyMain';
import MyMainInfo from '../components/my/MyMainInfo';
import BottomNav from '../components/BottomNav';
export default {
    name:"MyInfo",
    components:{
        MyHeader,
        MyMain,
        MyMainInfo,
        BottomNav
    }
}
</script>