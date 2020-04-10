<template>
    <div>
        <el-container>
        <el-header>
        <FindHeader></FindHeader>
        </el-header>
        <el-main></el-main>
        <el-footer :active="2" style="padding:0px;">
        <BottomNav></BottomNav>
        </el-footer>
        </el-container>
    </div>
</template>
<script>
import FindHeader from '../components/find/FindHeader';
import BottomNav from '../components/BottomNav';
export default {
    name:"MyInfo",
    components:{
        BottomNav,
        FindHeader
    }
}
</script>