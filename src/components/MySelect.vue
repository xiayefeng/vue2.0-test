<!--
 * @Author: xiayefeng xiayu_12@yeah.net
 * @Date: 2023-04-15 22:10:09
 * @LastEditors: xiayefeng xiayu_12@yeah.net
 * @LastEditTime: 2023-04-15 22:56:29
 * @FilePath: \vue2.0-test\src\components\MySelect.vue
 * @Description: 
-->
<template>
  <el-select ref="dragSelect" v-model="selectVal" v-bind="$attrs" class="drag-select" multiple v-on="$listeners">
    <slot />
  </el-select>
</template>

<script>
import Sortable from 'sortablejs'

export default {
  name: 'DragSelect',
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  computed: {
    selectVal: {
      get () {
        return [...this.value]
      },
      set (val) {
        this.$emit('input', [...val])
      }
    }
  },
  mounted () {
    this.setSort()
  },
  methods: {
    setSort () {
      const el = this.$refs.dragSelect.$el.querySelectorAll('.el-select__tags > span')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        setData: function (dataTransfer) {
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          this.$nextTick(() => {
            const oldValue = this.selectVal[evt.oldIndex]
            const newValue = this.selectVal[evt.newIndex]
            this.$set(this.selectVal, evt.oldIndex, newValue) 
            this.$set(this.selectVal, evt.newIndex, oldValue)
            this.selectVal = this.selectVal.slice()
          })
          /* [this.value[evt.oldIndex], this.value[evt.newIndex]] = [this.value[evt.newIndex], this.value[evt.oldIndex]] */
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-select {
  ::v-deep {
    .sortable-ghost {
      opacity: .8;
      color: #fff;
      background: #42b983;
    }

    .el-tag {
      cursor: pointer;
    }
  }
}
</style>
