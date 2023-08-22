<template>
  <div class="table-wrap">
    <div class="list-item" v-for="item of list" :key="item">{{ item }}</div>
  </div>
</template>
<script>
export default {
  name: 'FlexLayout',
  props: {},
  components: {},
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }
  },
  computed: {},
  watch: {},
  created () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.table-wrap {
  max-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .list-item {
    width: 200px;
    height: 200px;
    border: 1px solid #efefef;
    margin: 10px;

    &:nth-of-type(2) {
      height: 240px;
    }
    &:nth-of-type(3) {
      height: 230px;
    }
    &:nth-of-type(4) {
      height: 220px;
    }
    &:nth-of-type(6) {
      height: 240px;
    }
    &:nth-of-type(7) {
      height: 280px;
    }
    &:nth-of-type(8) {
      height: 240px;
    }
  }
}
</style>