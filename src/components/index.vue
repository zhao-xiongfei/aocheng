<template>
  <div class="index"> 
    <h1>
      <i class="iconfont icon-aomen"></i>
      澳诚夺宝
      <p style="font-size:10px">
        AO CHENG DUO BAO
      </p>
    </h1>
    <div class='list'>
      <div>
        <p>
      <i style="font-size:35px" class="iconfont icon-woyaochongzhi"></i>          
        </p>
        代理赚钱</div>
      <div>
          <p>
      <i style="font-size:35px" class="iconfont icon-tixian1"></i>          
        </p>
        游戏提现</div>
      <div>
          <p>
      <i style="font-size:35px" class="iconfont icon-icon-shortcut"></i>          
        </p>
        用久入口</div>
      <div>
          <p>
      <i class="iconfont icon-shipinjiaocheng"></i>          
        </p>
        新手教程</div>
    </div>
    <div class='come'>
      <div @click="toduobao()">
      <i class="iconfont icon-zhifubaozhanneidaeshoufukuan"></i>
      <p>开始夺宝</p>
      </div>
    </div>
    <div class='bottom'>
      <div><i class="iconfont icon-yuebao"></i>余额 : <b style="color:#ccc">{{0}}元</b></div>
      <div><i class="iconfont icon-ID-icon"></i>账户 : <b style="color:#ccc">{{10001}}</b></div>
    </div>

  <Loading v-if="loading" ></Loading> 
  </div>
  
</template>

<script>
import Loading from './loading'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: true
    }
  },
  mounted() {
           setTimeout(() => {
      this.loading = false
    }, 10000);
  },
  methods: {
    toduobao () {
      this.$router.push({
        name: 'duobao'
      })
    },
   
  },
  components: {
    Loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.index{
  position: absolute;
  /* bottom:70px; */
  width: 100%;
  height: 100%;
}
h1{
  color:#ffcd32;
  text-align: center;
  font-size: 60px;
  margin-top: 100px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
.icon-aomen{
  color:teal;
  font-size: 110px;
  position: absolute;
  top:100px;
  left:130px;
}
.bottom{
  width: 100%;
  color: #ffcd32;
  font-size: 30px;
  position: absolute;
  bottom: 160px;
  display: flex;
  justify-content:space-around
}
.bottom div{
  flex: 1;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  border:1px solid #ffcd32;
  max-width: 40%;
  border-radius: 40px
}
.bottom div i{
  font-size: 40px
}
.index .list{
  display: flex;
  align-items: center;
  justify-content:space-around;
  padding-top: 100px
}
.index .list div{
  color: #ccc;
  font-size: 20px
}
 .index .list p{
  /* border:2px solid #ffcd32; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 20px
}
.index .list p i {
  font-size: 90px;
  color: #ffcd32

}
.index .come{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px
}
.index .come div i{
  font-size: 100px;
  display: block;
    animation: ball-scale 1s 0s ease-in-out infinite;
}

@keyframes ball-scale {
  0% {
    transform: scale(0.5);
  }

  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
.index .come div{
  box-shadow: #ffcd32 0px 0px 20px 0px;
  font-size: 40px;
  color: #ffcd32;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:300px;
  height: 300px;;
  border: 1px solid #ffcd32;
  border-radius: 50%;
  position: relative;
  background: teal
  
}

.index .come div:active{
    background: #ccc;
    color: #ffcd32
}

</style>
