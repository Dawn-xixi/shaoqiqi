<template>
  <div class="dian-pu">
    <el-row type="flex" justify="space-between">
      <div class="img" fit="fill">
        <el-image style="width: 80px; height: 80px" :src="shop.img">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div class="info">
        <el-row type="flex" justify="space-between" class="ping">
          <span class="pin-pan" v-if="shop.isBrand">品牌</span>
          <h3 class="dian-ming">{{shop.title}}</h3>
        </el-row>
        <el-row type="flex" justify="space-between" align="middle">
          <el-rate
            disabled
            show-score
            text-color="#666"
            score-template="{value}"
            :value="shop.rate"
          ></el-rate>
          <span class="yue">月销{{shop.sales}}单</span>
          <span class="fen">蜂鸟专送</span>
        </el-row>
        <el-row type="flex" justify="space-between">
          <div>
            <span>￥{{shop.startPrice}}元起送</span>
            <el-divider direction="vertical"></el-divider>
            <span>配送￥{{shop.freight}}</span>
          </div>
          <div>
            <span>{{shop.innerTime}}</span>
            <el-divider direction="vertical"></el-divider>
            <span>{{shop.distance}}</span>
          </div>
        </el-row>
        <el-row>
          <span class="shop-type">{{shop.type}}</span>
        </el-row>
        <div class="huo-dong" :style="{height:isFullShow?'auto':((shop.promotesale.length>2?2 :shop.promotesale.length)*2.5)+'rem'}">
          <el-row type="flex" justify="space-between">
            <ul>
              <li v-for="(item,i) in shop.promotesale" :key="i">
                <span :class="item.type" class="type">{{item.icon}}</span>
                <span>{{item.title}}</span>
              </li>
            </ul>
            <div @click="isFullShow=!isFullShow" class="dong">
              <span>{{shop.promotesale.length}}个活动</span>
              <i class="el-icon--right" :class="isFullShow?'el-icon-caret-top':'el-icon-caret-bottom'"></i>
            </div>
          </el-row>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "DanPu",
  props: {
    shop: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      isFullShow:false
    }
  },
};
</script>
<style scoped>
.dian-pu {
  border-bottom: 0.1rem solid #eee;
  padding: 2rem 1.5rem;
}
.info {
  flex: 1;
  margin-left: 1rem;
}
.pin-pan {
  height: 15px;
  padding: 5px;
  background-image: linear-gradient(-139deg, #fff100, #ffa339);
  text-align: center;
}
.dian-ming {
  font-size: 1.5rem;
  margin: 0;
  margin-right: 30px;
}
.el-rate {
  margin-top: 4px;
}
.el-rate /deep/ .el-rate__icon {
  font-size: 1.4rem;
  margin: 0;
}
.el-rate /deep/ .el-rate_text {
  font-size: 1.4rem;
  margin: 0;
}
.el-rate__text {
  font-size: 1rem;
}
.el-rate ~ span {
  margin-left: 0.3rem;
  font-size: 1rem;
}
.fen {
  background: #409eff;
  padding: 0px 5px;
  color: #fff;
  margin-right: 5px;
}
.shop-type {
  border: 0.1rem solid #eee;
  padding: 0.1rem 0.5rem;
  margin: 1rem 0;
  display: inline-block;
}
.xin,
.zhe,
.pei {
  background-color: #6fbc46;
  color: #fff;
  padding: 0.1rem;
  margin: 0px 5px 5px 0px;
  border-radius: 5px;
  margin-bottom:10px;
}
.te,
.jian {
  background-color: #f07373;
  color: #fff;
  padding: 0.1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
}
.piao {
  background-color: #909399;
  color: #fff;
  padding: 0.1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
}

ul li {
  list-style: none;
  line-height: 2.9rem;
  flex: 1;
}
.huo-dong{
  overflow: hidden;
}
.dong{
  white-space: nowrap;
}
ul{
  margin:0px;
  padding:0px;
}
</style>