<!--
 * @Author: xiayefeng xiayu_12@yeah.net
 * @Date: 2023-04-01 15:09:19
 * @LastEditors: xiayefeng xiayu_12@yeah.net
 * @LastEditTime: 2023-04-01 17:09:59
 * @FilePath: \vue2.0-test\src\views\table\MyTable.vue
 * @Description: 
-->
<!--
 * @Author: xiayefeng xiayu_12@yeah.net
 * @Date: 2023-04-01 15:09:19
 * @LastEditors: xiayefeng xiayu_12@yeah.net
 * @LastEditTime: 2023-04-01 16:09:38
 * @FilePath: \vue2.0-test\src\views\table\table2.vue
 * @Description: test
-->
<template>
  <div>
    <el-button @click="getData">获取data</el-button>
    <el-button @click="changeData">改变data</el-button>
    <div class="table-wrap" v-for="item in allData" :key="item.id">
      <vxe-table :data="item.tableData">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="test" title="测试"></vxe-column>
        <vxe-column title="内容">
          <template #default="{ row }">
            <el-input v-model="item.name" v-for="(item, idx) in row.textList" :key="idx"></el-input>
          </template>
        </vxe-column>
      </vxe-table>
      <my-input :row="item.data" ref="inputEl" v-slot="slotProps">
        <el-input v-model="slotProps.data.text"></el-input>
      </my-input>
    </div>

  </div>
</template>

<script>
import MyInput from './MyInput.vue'
export default {

  props: {},
  components: {
    MyInput
  },
  data () {
    return {
      allData: [
        {
          tableData: [{ test: 1, textList: [{ name: '' }] }],
          data: { text: '1' },
          id: '1'
        },
        {
          tableData: [{ test: 2, textList: [{ name: '' }] }],
          data: { text: '2' },
          id: '2'
        },
        {
          tableData: [{ test: 3, textList: [{ name: '' }] }],
          data: { text: '3' },
          id: '3'
        },
        {
          tableData: [{ test: 4, textList: [{ name: '' }] }],
          data: { text: '4' },
          id: '4'
        },
        {
          tableData: [{ test: 5, textList: [{ name: '' }] }],
          data: { text: '5' },
          id: '5'
        },
        {
          tableData: [{ test: 6, textList: [{ name: '' }] }],
          data: { text: '6' },
          id: '6'
        },
        {
          tableData: [{ test: 7, textList: [{ name: '' }] }],
          data: { text: '7' },
          id: '7'
        }
      ],
      formData: {
        text: 1
      }
    }
  },
  computed: {},
  watch: {},
  created () {

  },
  methods: {
    getData () {
      this.$refs.inputEl.forEach(vm => {
        console.log(vm.formData.text)
      })
    },
    changeData () {
      const obj = this.allData.find(item => item.id === '5')
      obj.data = { text: '5' }
    }
  }
}
</script>

<style lang="scss" scoped></style>