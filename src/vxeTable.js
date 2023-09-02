import VXETable from 'vxe-table'
import FilterContent from '@/views/table/FilterContent.vue'

// 创建一个简单的输入框筛选
VXETable.renderer.add('FilterContent', {
  // 筛选模板
  renderFilter (h, renderOpts, params) {
    return (
      <FilterContent params={params
      } />
    )
  },
  // 重置数据方法
  filterResetMethod ({ options }) {
    options.forEach((option) => {
      console.log(option)
      option.data = {
        number: '',
        data: []
      }
    })
  },
  // 重置筛选复原方法（当未点击确认时，该选项将被恢复为默认值）
  filterRecoverMethod ({ option }) {
    console.log(option)
    option.data = {
      number: '',
      data: []
    }
  },
  // 筛选方法
  filterMethod ({ option, row, column }) {
    const { data } = option
    // console.log(data)
    const cellValue = row[column.field]
    if (cellValue) {
      if(data.data.number && data.data)
      return cellValue.includes(data.data.number)
    }
    return false
  }
})