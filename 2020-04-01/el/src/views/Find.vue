<template>
    <div>
        <button @click="show = !show">切换</button>
        <transition name="state">
              <h1 key="a" v-if="show">状态一</h1>
               <h1 key="b">状态一</h1>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:true
        }
    },
};
</script>
<style scoped>


.state-enter,
.state-leave-to{
opacity: 0;
transform: translateX(100px);
}
.state-enter-active,
.state-leave-active{
    transition: all 2s ease;
}
.state-ente-to,
.state-leave{
    transform: translateX(0);
}
</style>