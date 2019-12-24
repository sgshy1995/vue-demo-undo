<template>
  <div>
    数据：<span>{{n}}</span>
    <hr />
    <button @click="one" class="doso">+ 1</button>
    <button @click="two" class="doso">- 1</button>
    <button @click="three" class="doso">+ 2</button>
    <button @click="four" class="doso">- 2</button>
    <hr />
    历史记录：<span>{{history}}</span>
    <hr />
    <button @click="five" class="dothat">撤 销</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      n: 0,
      history: [],
      onUodoMode: false
    };
  },
  watch: {
    n(newValue, oldValue) {
      if (!this.onUodoMode) {
        this.history.push({ from: oldValue, to: newValue });
      }
    }
  },
  methods: {
    one() {
      this.n += 1;
    },
    two() {
      this.n -= 1;
    },
    three() {
      this.n += 2;
    },
    four() {
      this.n -= 2;
    },
    five(){
        const last = this.history.pop()
        const old = last.from
        this.onUodoMode = true
        this.n = old // 触发watch
        this.$nextTick(()=>{ // 同级代码，必然在watch结束后才执行
            this.onUodoMode = false
        },0)
    }
  }
};
</script>

<style scoped>
button.doso{
    background: wheat;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    transition: all 0.3s;
}
button.doso:hover{
    transform: scale(1.1);
}
button.dothat{
    background: pink;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s;
}
button.dothat:hover{
    transform: scale(1.1);
}
button{
    border: 1px solid black;
}
button:focus{
    outline: none;
}
span{
    color: brown;
}
</style>