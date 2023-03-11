<template>
  <div class="content-box">
    <el-input size="small" class="el-input" v-model="option.data.number"
      @input="$event => params.$panel.changeOption($event, !!option.data.number, option)"></el-input>
    <el-select v-model="option.data.data" multiple :popper-append-to-body="false"
      @change="params.$panel.changeOption($event, !!option.data.data.length, option)">
      <el-option value="test1">test1</el-option>
      <el-option value="test2">test2</el-option>
      <el-option value="test3">test3</el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object
    }
  },
  data () {
    return {
      list: []
    }
  },
  computed: {
    option () {
      return this.params.column.filters[0]
    }
  },
  created () {
    console.log(this.$props)
  },
  methods: {
    generateId (idx) {
      return Symbol(idx)
    },
  }
}
</script>

<style lang="scss" scoped>
.content-box {
  padding: 6px 12px;
  display: flex;
  flex-direction: column;
}

.el-input,
.el-select {
  width: 200px;
}

.el-select {
  margin-top: 12px;
}
</style>