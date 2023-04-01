<template>
  <div class="table-wrap">
    <vxe-table max-height="500" :data="tableData" :scroll-y="{ gt: 40 }">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="data" title="测试">
        <template #default="{ row }">
          {{ row.data.text }}
        </template>
      </vxe-column>
      <vxe-column title="内容">
        <template #default="{ row }">
          <el-input v-model="item.name" v-for="(item, idx) in row.textList" :key="idx"></el-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>
<script>
import tableData from './container'
export default {
  props: {},
  components: {},
  data () {
    return {
      tableData: tableData.slice()
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

<style lang="scss" scoped></style>