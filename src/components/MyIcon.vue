<template>
  <svg v-if="useSvg" class="icon" aria-hidden="true" v-on="$listeners" v-bind="$attrs">
    <use :xlink:href="iconname" />
  </svg>
  <i v-else class="iconfont" :class="iconname" />
</template>

<script>

export default {
  name: 'MyIcon',
  props: {
    type: {
      type: String,
      default: 'svg'
    },
    name: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      msg: 'Invalid icon'
    }
  },
  computed: {
    iconname () {
      let hash = this.type === 'svg' ? '#' : ''
      // console.log(hash)
      return `${hash}icon${this.name}`
    },
    useSvg () {
      let type = this.type
      return type === 'svg'
    }
  }
}
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>