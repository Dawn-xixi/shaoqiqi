<template>
    <div>
        <el-container>
        <el-header>
        <OrderMain></OrderMain>
        </el-header>
        <el-main>
        </el-main>
        <el-footer :active="3" style="padding:0px;">
        <BottomNav></BottomNav>
        </el-footer>
        </el-container>
    </div>
</template>
<script>
import OrderMain from '../components/order/OrderMain';
import BottomNav from '../components/BottomNav';
export default {
    name:"MyInfo",
    components:{
        BottomNav,
        OrderMain
    }
}
</script>