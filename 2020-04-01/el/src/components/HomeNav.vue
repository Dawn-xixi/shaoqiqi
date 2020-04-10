<template>
  <div class="dian-pu-shi-xuan" >
    <div :class="{'fixed-top':isFixedTop}" ref="root">
      <el-row type="flex" justify="space-between">
        <div :class="{'tab-active':tabIndex == 1  || tabIndex == 3 , 'tab-active-color':tabIndex == 1}"  @click="clickTab(1)">
          <span>{{tabOneText}}</span>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </div>
        <div :class="{'tab-active':tabIndex == 2}"  @click="clickTab(2)">距离最近</div>
        <div :class="{'tab-active':tabIndex == 3}"  @click="clickTab(3)">销量最高</div>
        <div :class="{'tab-active':tabIndex == 4  , 'tab-active-color':tabIndex == 4}"  @click="clickTab(4)">
          <span>筛选</span>
          <i class="el-icon-finished el-icon--right"></i>
        </div>
      </el-row>
    </div>
    <el-drawer direction="ttb" :visible.sync="drawer" :withHeader="false" size="auto" :closed="closed">
      <keep-alive>
        <component :is="drawerBodyComponent" @sortClick="sortClick" class="jl"></component>
      </keep-alive>
      
    </el-drawer>
  </div>
</template>
<script>

import ZongHePaiXu from "@/components/dianpuShaiXuan/ZongHePaiXu";
import ShaiXuan from "@/components/dianpuShaiXuan/ShaiXuan";

export default {
  name: "HomeNav",
  components:{
    ZongHePaiXu,
    ShaiXuan
  },
  props: {
    isFixedTop: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      tabIndex:0 ,//当前选中的标签
      drawer:false,
      drawerBodyComponent:null,//抽屉里面组件的对象
      sortIndex:0, //排序的序号
      sjfw:[],
      yhhd:[],
      yjfx:[]
    }
  },
  computed: {
    tabOneText(){
      if(this.tabIndex  == 3){
        return "销量最高"
      }else if(this.sortIndex == 1){
        return "综合排序"
      }else if(this.sortIndex == 2){
        return "好评优先"
      }else if(this.sortIndex == 3){
        return "起送价最低"
      }else{
        return "综合排序"
      }
    }
  },
  methods: {
    clickTab(index){
      this.tabIndex = index;
      if(index == 1 || index == 4){
        this.drawer = true
        
      }else{
        this.drawer = false;
      }
      this.drawerBodyComponent = index == 1 ? ZongHePaiXu :ShaiXuan
      this.$emit('clickTab',index)
    },
    sortClick(sortIndex){
      this.sortIndex = sortIndex
      this.axios('data/shops.json').then(results =>{
        this.shops = results.data
        this.drawer = false
      })
    },
     closed(){
      this.$emit('closed',this.sortIndex,this.sjfw,this.yhhd,this.yjxf)
    }
  },
};
</script>
<style scoped>
.dian-pu-shi-xuan {
  font-size: 1.5rem;
  padding: 0 2rem;
  height: 2rem;
}
.fixed-top {
  position: fixed;
  top: 6rem;
  left: 0;
  width: calc(100% - 4rem);
  padding: 1rem 2rem;
  background-color: #ffff;
  z-index: 9999;
}
.el-row{
  z-index: 9999;
}
.tab-active{
  font-weight: 700;
}
.tab-active-color{
  color: #409EFF;
}
.el-drawer__wrapper /deep/ .el-drawer{
  top:60px;
  border-top:1px solid #DCDFE6;
}
.jl{
  margin-top: 45px;
}
</style>
