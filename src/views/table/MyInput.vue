<!--
 * @Author: xiayefeng xiayu_12@yeah.net
 * @Date: 2023-04-01 15:37:46
 * @LastEditors: xiayefeng xiayu_12@yeah.net
 * @LastEditTime: 2023-04-01 16:23:58
 * @FilePath: \vue2.0-test\src\views\table\MyInput.vue
 * @Description: 
-->

<template>
  <div class="input-wrap" :key="key">
    <slot v-bind:data="formData">
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    row: {
      type: Object
    }
  },
  components: {},
  data () {
    return {
      text: '',
      key: 1,
      formData: {
        text: 1
      }
    }
  },
  computed: {},
  watch: {
    row () {
      this.key++
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped></style>

