<template>
    <div :active="5">
        <el-container>
        <el-header style="padding:0px;height:50px;">
        <MyAddressHeader></MyAddressHeader>
        </el-header>
        <el-main style="padding:0px;">
        <SouSuoAddress></SouSuoAddress>
        </el-main>
        <el-footer style="padding:0px;height:50px;">
        <BottomNav></BottomNav>
        </el-footer>
        </el-container>
    </div>
</template>
<script>
import MyAddressHeader from '../components/address/MyAddressHeader';
import SouSuoAddress from '../components/address/SouSuoAddress';
import BottomNav from '../components/BottomNav';
export default {
    name:"MyAddress",
    components:{
        MyAddressHeader,
        SouSuoAddress,
        BottomNav
    }
}
</script>