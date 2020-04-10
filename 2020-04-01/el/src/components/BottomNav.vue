<template>
  <div class="dbdh">
  <el-row>
    <el-col :span="6">
    <div :class="{active:active==1}" @click="to('/')">
    <i class="el-icon-eleme" style="font-size:2.5rem;"></i>
    <div>首页</div>
    </div>
    </el-col>
    <el-col :span="6">
    <div :class="{active:active==2}" @click="to('/find')">
    <i class="el-icon-discover" style="font-size:2.5rem;"></i>
    <div>发现</div>
    </div>
    </el-col>
    <el-col :span="6">
    <div :class="{active:active==3}" @click="to('/order')">
    <i class="el-icon-document" style="font-size:2.5rem;"></i>
    <div>订单</div>
    </div>
    </el-col>
    <el-col :span="6">
    <div :class="{active:active==4}" @click="to('/my')">
    <i class="el-icon-user" style="font-size:2.5rem;"></i>
    <div>我的</div>
    </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
    name:"DiBuDaoHang",
    props:{
        active:{
            default:1
        }
    },
    methods:{
        to(router){
            this.$router.push({path:router})
        }
    },
};
</script>
<style>
.dbdh{
       text-align: center;
    color: #909399;
    border-top: 0.1rem solid #DCDFE6;
    padding-top: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-bottom: 1rem;
    background-color: #fff;
    z-index:9999;
}
.el-col{
    font-size:0.2rem;
}
.active{
    color:#0089DC;
}
</style>