<template>
  <div id="duobao">
      <div class='top'>
      <div v-bind:class="[clas === 1 ? 'activeClass' : 'errorClass']" @click="clas = 1;dd = '大';xs = '小';dxds ='大'">大小场</div>
      <div v-bind:class="[clas === 2 ? 'activeClass' : 'errorClass']" @click="clas = 2;dd = '单';xs = '双';dxds ='单'">单双场</div>
      </div>      
      <div class='duobao'>
          <div class='number'>
              <div>数量</div>
              <div class='dx' @click="xiao()">最小</div>
              <div class='jj' @click="jian()">-</div>
              <div>{{number}}手</div>
              <div class='jj' @click="jia()">+</div>
              <div class='dx' @click="da()">最大</div>
          </div>
          <div class='shouyi'>
              <div>预期收益</div>
              <div>{{number*10}} 元</div>
          </div>
          
          <div class='xiazhu'>
              <div>下注费</div>
              <div>{{number}} 元</div>
          </div>
          <div class='tongzhi'>
              <div>通知费(下注打款微信红包)</div>
              <div>1 元</div>
          </div>
          <div class='dxds'>
              <div v-bind:class="[dxds === '大' ||dxds ==='单' ? 'activeClass' : 'errorClass']" @click="dxds = dd">{{dd}}</div>
              <div v-bind:class="[dxds === '小' ||dxds ==='双' ? 'activeClass' : 'errorClass']" @click="dxds = xs">{{xs}}</div>              
          </div>
          <div class='sunbit'>
              开始夺宝
          </div>
      </div>
       <div class='bottom'>
      <div><i class="iconfont icon-yuebao"></i>余额 : <b style="color:#ccc">{{0}}</b></div>
      <div class='chongzhi'>充值</div>
    </div>
  </div>
</template>

<script>
import loading from './loading'
export default {
  name: 'duobao',
  data () {
    return {
      clas: 1,
      number: 1,
      shouyi: 10,
      xiazhu: 1,
      tongzhi: 1,
      dd: '大',
      xs: '小',
      dxds: '大'
    }
  },
  computed: {},
  methods: {
      xiao () {
          this.number = 1
      },
      da () {
          this.number = 100
      },
      jian () {
        if(this.number <= 1){
            return
        }
        this.number -= 1
      },
      jia () {
        if(this.number >= 100){
            return
        }
        this.number += 1
      }
  },
  components: {
      loading
  }
}
</script>

<style scoped>
#duobao{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.top{
    width: 90%;
    height: 8%;    
    display: flex;
}
.top div{
    flex: 1;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    border-top-left-radius: 20px;  
    border-top-right-radius: 20px;   
    border-bottom: 0;
    font-size: 40px
}
.top .activeClass{
    border-color: #ffcd32;
    color: #ffcd32;
}
.top .errorClass{
    border-bottom: 1px solid #ffcd32;
    color: #ccc    
}
.duobao{
    padding: 20px;
    box-sizing: border-box;        
    width: 90%;
    border: 1px solid #ffcd32;
    border-top: 0;
    margin-bottom: 30%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
.duobao .number,.shouyi,.xiazhu,.tongzhi {
    display: flex;
    justify-content:space-between;
    color: #ccc;
    align-items: center;
    border-bottom: 1px solid #ffcd32;
    padding: 20px 0
}
.duobao .dxds{
    display: flex;
    justify-content: space-between

}
.duobao .sunbit{
    text-align: center;
    height: 80px;
    background: #ffcd32;
    line-height: 80px;
    border-radius: 20px;
    margin-top: 40px;
    font-weight: bold
}
.duobao .dxds .activeClass{
  background: #ccc;
  color: #000
}
.duobao .dxds .errorClass{
    
}
.duobao .dxds div{
    margin-top: 40px;
    color: #ccc;
    border:1px solid #ccc;
    width: 45%;
    padding: 10px 0;
    text-align: center;
    border-radius: 20px;
}
.duobao .number .jj{
    width: 50px;
    height: 50px;
    background:teal;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffcd32;
    font-weight: bold;
    font-size: 50px
}
.duobao .number .dx{
    font-weight: bold;    
    width: 90px;
    height: 40px;
    background:teal;
    font-size: 25px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center
}
.bottom{
  width: 100%;
  color: #ffcd32;
  font-size: 30px;
  position: absolute;
  bottom: 140px;
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
  border-radius: 40px;
}
.bottom .chongzhi:active{
    background: #ccc;
    color: #ffcd32
}
.bottom .chongzhi {
    border: 0;
    color: #ccc;
    background: teal
}
.bottom div i{
  font-size: 40px
}
</style>
