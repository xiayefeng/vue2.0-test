<template>
  <div>
  <my-input v-model="myText" placeholder="asdfsaf" show-word-limt maxlength="200"></my-input>
    <vxe-table :data="tableData" :scroll-y="{ enabled: false }">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="test">
        <template #default="{ row }">
          <div class="my-input" placeholder="ddd" contenteditable @input="inputMsg($event, row)"></div>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  name: 'TablePage',
  components: {},
  data () {
    return {
      myText: 'sdfaf',
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop Develop Develop Develop Develop Develop Develop Develop', sex: 'Man', age: 28, address: 'test abc', test: '' },
        { id: 10002, name: 'Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2', role: 'Designer', sex: 'Women', age: 22, address: 'Guangzhou', test: '' },
        { id: 10003, name: 'Test3', role: 'PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM', sex: 'Man', age: 32, address: 'Shanghai', test: '' },
        { id: 10004, name: 'Test4', role: 'Test', sex: 'Women', age: 24, address: 'Shanghai', test: '' }
      ]
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
    }
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
</style>