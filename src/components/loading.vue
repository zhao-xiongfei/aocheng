<template>
<div class='loading'>
<div class="flip-txt-loading">
  <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>
</div>
</div>
</template>

<script>
export default {
  name: 'loading',
}
</script>

<style scoped>
.loading{
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #666666 0%, #222222 100%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center
}
.flip-txt-loading {
  font: 60px Monospace;
  letter-spacing: 5px;
  color: #ffcd32;
  font-weight: bold
}

.flip-txt-loading > span {
  animation: flip-txt  2s infinite;
  display: inline-block;
  transform-origin: 50% 50% -10px;
  transform-style: preserve-3d;
}

.flip-txt-loading > span:nth-child(1) {
  -webkit-animation-delay: 0.10s;
          animation-delay: 0.10s;
}

.flip-txt-loading > span:nth-child(2) {
  -webkit-animation-delay: 0.20s;
          animation-delay: 0.20s;
}

.flip-txt-loading > span:nth-child(3) {
  -webkit-animation-delay: 0.30s;
          animation-delay: 0.30s;
}

.flip-txt-loading > span:nth-child(4) {
  -webkit-animation-delay: 0.40s;
          animation-delay: 0.40s;
}

.flip-txt-loading > span:nth-child(5) {
  -webkit-animation-delay: 0.50s;
          animation-delay: 0.50s;
}

.flip-txt-loading > span:nth-child(6) {
  -webkit-animation-delay: 0.60s;
          animation-delay: 0.60s;
}

.flip-txt-loading > span:nth-child(7) {
  -webkit-animation-delay: 0.70s;
          animation-delay: 0.70s;
}

@keyframes flip-txt  {
  to {
    -webkit-transform: rotateX(1turn);
            transform: rotateX(1turn);
  }
}
</style>
