<template>      
  <span :class="className" :style="styleCss" @click="toggle">
    <span class="circle"></span>
  </span>  
</template>
<script>
export default {
  name: "uiSwitch",
  props: {
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    value: {
      type: Boolean
    }
  },
  computed: {
    className() {
      return this.value ? "box open" : "box";
    },
    styleCss() {
      if (this.value && this.activeColor) {
        return `background-color:` + this.activeColor;
      } else if (!this.value && this.inactiveColor) {
        return `background-color:` + this.inactiveColor;
      }
      // return this.val ? `background-color:` + this.activeColor :`background-color:` + this.inactiveColor
    }
  },
  methods: {
    toggle() {
      //console.log("click")
      // this.value = !this.value
      this.$emit("input", !this.value);
      this.$emit("change");
    }
  },
  mounted() {
    if (this.activeColor) {
    }
  }
};
</script>


<style lang="scss" scoped>
input {
  display: none;
}
.box {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  border: 1px solid #dcdfe6;
  background: #dcdfe6;
  cursor: pointer;
  .circle {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: 1px;
    left: 1px;
    background: #fff;
    transition: all 0.3s;

    // transform: translate3d(20px, 0px, 0px);
  }
  &.open .circle {
    transform: translate3d(20px, 0px, 0px);
  }
}
</style>
