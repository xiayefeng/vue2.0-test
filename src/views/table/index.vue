<!--
 * @Author: Anyuxuan xiayu_12@yeah.net
 * @Date: 2023-02-11 17:07:16
 * @LastEditors: Anyuxuan xiayu_12@yeah.net
 * @LastEditTime: 2023-03-11 16:29:45
 * @FilePath: \vue2.0-test\src\views\table\index.vue
 * @Description: 
-->
<template>
  <div>
    <my-input v-model="myText" placeholder="asdfsaf" show-word-limt maxlength="200"></my-input>
    <vxe-table :data="tableData" :scroll-y="{ enabled: false }">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="test">
        <template #default="{ row }">
          <!-- <div class="my-input" placeholder="ddd" contenteditable @input="inputMsg($event, row)"></div> -->
          <el-input type="textarea" autosize v-model="row.test"></el-input>
          <!-- <textarea v-model="row.test" cols="30" rows="10"></textarea> -->
        </template>
      </vxe-column>
      <vxe-column field="number" title="Name" :filters="[{ data: { data: [], number: '' }, id: 'asdfasdf' }]"
        :filter-method="filterRoleMethod" :filter-reset-method="filterResetMethod"
        :filter-recover-method="filterRecoverMethod">
        <template #filter="{ $panel, column }">
          <div class="filter-wrap" v-for="(option, index) in column.filters" :key="index">
            <el-input size="small" type="text" v-model="option.data.number"
              @input="$panel.changeOption($event, !!option.data, option)"></el-input>
            <el-select size="small" class="my-select" v-model="option.data.data" multiple :popper-append-to-body="false"
              @change="$panel.changeOption($event, !!option.data, option)">
              <el-option v-for="(label, cIndex) in roleList" :key="cIndex" :value="label">{{ label }}</el-option>
            </el-select>
          </div>

        </template>
      </vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  name: 'TablePage',
  components: {
  },
  data () {
    return {
      myText: 'sdfaf',
      tableData: [
        { id: 10001, number: 'Test1', role: 'Develop Develop Develop Develop Develop Develop Develop Develop', sex: 'Man', age: 28, address: 'test abc', test: '' },
        { id: 10002, number: 'Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2', role: 'Designer', sex: 'Women', age: 22, address: 'Guangzhou', test: '' },
        { id: 10003, number: 'Test3', role: 'PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM', sex: 'Man', age: 32, address: 'Shanghai', test: '' },
        { id: 10004, number: 'Test4', role: 'Test', sex: 'Women', age: 24, address: 'Shanghai', test: '' }
      ],
      roleList: ['', 'Develop', 'PM', 'Test']
    }
  },
  computed: {},
  watch: {},
  created () {

  },
  mounted () {
    setTimeout(() => {
      this.myText = '111111'
    }, 3000);
  },
  methods: {
    inputMsg (e, row) {
      console.log(e.target.innerText)
      row.test = e.target.innerText
    },
    filterRoleMethod ({ option, row }) {
      if (option.data?.number && option.data?.data?.length) {
        return row.number?.includes(option?.data?.number) && option?.data?.data?.includes(row.ssdaf)
      } else if (option.data?.number) {
        return row.number?.includes(option?.data?.number)
      } else if (option.data?.data?.length) {
        return option?.data?.data?.includes(row.ssdaf)
      } else {
        return true
      }
    },
    filterResetMethod ({ options }) {
      options.forEach((option) => {
        // console.log(option)
        option.data = {
          number: '',
          data: []
        }
      })
    },
    // 重置筛选复原方法（当未点击确认时，该选项将被恢复为默认值）
    filterRecoverMethod ({ option }) {
      // console.log(option)
      option.data = {
        number: '',
        data: []
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.my-input {
  border: 1px solid #ccc;
  padding: 2px 5px;
  border-radius: 3px;
  line-height: 20px;
  min-height: 48px;
  font-size: 14px;

  &:empty:before {
    content: attr(placeholder);
    font-size: 13px;
    color: #999;
  }

  &:focus {
    border: 1px solid #ccc;
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }
}

.filter-wrap {
  width: 224px;
  justify-items: center;
  display: flex;
  flex-wrap: wrap;

  .el-input,
  .el-select {
    margin: 12px;
    width: 200px;
  }

  .el-select {
    margin-top: 0;
  }
}
</style>