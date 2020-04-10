<template>
  <div
    class="home"
    ref="root"
    v-infinite-scroll="getShops"
    infinite-scroll-delay="0"
    infinite-scroll-disabled="isInfiniteDisabled"
  >
    <el-container>
      <el-header height="90">
        <DingWei></DingWei>
        <sou-suo ref="souSuo" :is-fixed-top="souSuoTop"></sou-suo>
      </el-header>
      <el-main>
        <home-nav-igation :sydh="sydh"></home-nav-igation>
        <home-tao></home-tao>
        <home-supper></home-supper>
        <home-tui></home-tui>
        <home-nav @clickTab="clickTab"  ref="dianPuShaiXuan" :is-fixed-top="dianPuShaiXuanTop"></home-nav>
        <dan-pu v-for="(shop,i) in shops" :key="i" :shop="shop"></dan-pu>
        <div v-if="isLoading" class="loading">
          <i class="el-icon-loading el-icon--left" style="color:#000;"></i>正在加载...
        </div>
        <div v-else class="loading" style="color:#000;">已经到底</div>
      </el-main>
      <el-footer style="height:50px;" :active="1" key="home">
        <bottom-nav></bottom-nav>
      </el-footer>
    </el-container>
    <el-backtop target=".home" :right="30" :bottom="100">
      <div>
        <i class="el-icon-top"></i>
      </div>
    </el-backtop>
  </div>
</template>

<script>
// @ is an alias to /src
import DingWei from "@/components/DingWei";
import SouSuo from "@/components/SouSuo";
import BottomNav from "@/components/BottomNav";
import HomeNavIgation from "@/components/HomeNavIgation";
import HomeTao from "@/components/HomeTao";
import HomeSupper from "@/components/HomeSupper";
import HomeTui from "@/components/HomeTui";
import HomeNav from "@/components/HomeNav";
import DanPu from "@/components/DanPu";
export default {
  name: "Home",
  components: {
    DingWei,
    SouSuo,
    BottomNav,
    HomeNavIgation,
    HomeTao,
    HomeSupper,
    HomeTui,
    HomeNav,
    DanPu
  },
  data() {
    return {
      sydh: [],
      shops: [],
      souSuoTop: false,
      dianPuShaiXuanTop: false,
      page: 0,
      isLoading: false
    };
  },
  computed: {
    isInfiniteDisabled() {
      return this.isLoading || this.shops.length == this.$store.state.shops.length;
    }
  },
  mounted() {
    window.onload = () => {
      const sousuo = this.$refs.souSuo.$refs.root;
      const souSuoOffsetTop = sousuo.offsetTop;
      const dianPuShaiXuanOffsetTop = 452;
      this.$refs.root.onscroll = () => {
        let scrollTop = this.$refs.root.scrollTop;
        this.souSuoTop = scrollTop >= souSuoOffsetTop;
        this.dianPuShaiXuanTop = scrollTop >= dianPuShaiXuanOffsetTop - 55 - 15;
      };
    };

    this.$store.dispatch("getSydh").then(results => {
      this.sydh = results;
    });
    this.$store.dispatch("getShops").then(results => {
      this.shops = results;
    });
  },
  methods: {
    getShops() {
      this.isLoading=true;
      setTimeout(()=>{
        this.page++;
      let newShops = this.$store.getters.getShops(this.page);
      this.shops = this.shops.concat(newShops);
      this.isLoading=false;
      },1000)
    },

    clickTab(index){
      if(index == 1 || index == 4){
        this.$refs.root.scrollTop =382
      }else{
        this.$refs.root.scrollTop =0
      }
    },
    // closed(sx1,sx2,sx3,sx4){
    //   console.log(sx1)
    //   // this.axios('').then(results=>{
    //   //   this.shops = results.data
    //   // })
    // }
  }   
};
</script>
<style scoped>
.el-header {
  padding: 0px;
}
.el-main {
  padding: 0px;
}
.el-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0px;
}
.home {
  height: 100vh;
  overflow: auto;
}
.loading {
  padding: 1rem;
  text-align: center;
}
</style>
