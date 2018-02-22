<template>
  <div id="app">
    <div class='footer'>
      <router-link tag="div" to='index' :class="classObject">
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </router-link>
      <router-link tag="div" class="div" to='duobao'>
        <i class="iconfont icon-duobaojilu"></i>
        <p>夺宝</p>
      </router-link>
      <router-link tag="div" class="div" to='chongzhi'>
        <i class="iconfont icon-chongzhi1"></i>
        <p>充值</p>
      </router-link>
      <router-link tag="div" class="div" to='mingxi'>
        <i class="iconfont icon-mingxi3"></i>
        <p>明细</p>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    classObject: function () {
      return this.$route.path === '/' ? 'div router-link-active' : ' div'
    }
  }
}
</script>

<style scoped>
#app{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #666666 0%, #222222 100%)
  
}
.footer{
  z-index: 1;
  position: fixed;
  bottom:0;
  display: flex;
  width: 100%;
  height: 120px;
  align-items:center;
  justify-content: center;
  background: linear-gradient(0deg, #222222 0%, #666666 100%)
}
.footer .div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:#bbb
}
.footer .div i{
  font-size: 50px
}
.footer .div p{
  font-size: 30px
}
.footer .router-link-active i {
  color: #ffcd32
}
.footer .router-link-active p {
  color: #ffcd32
}
</style>
