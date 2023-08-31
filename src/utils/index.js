/**
 * 二维数组合并单元格（仅针对数组对象本身）
 * @param data 接口返回的数组对象
 * @param field 指定合并选项为数组对象的某个属性值
 * @param colArr 需要合并列的下标
 * @returns mergeCells单元格合并规则
 */
export function parseMergeCell (data, field, colArr) {
  let mergeCells = []
  let repeatVal = ''
  let rowspan = 1
  for (let i = 0; i < data.length; i++) {
    let { [field]: fieldVal } = data[i]
    if (repeatVal === fieldVal) {
      rowspan++
      if (i === data.length - 1) {
        const row = i - rowspan + 1
        for (let j = 0; j < colArr.length; j++) {
          mergeCells.push({ row, col: colArr[j], rowspan, colspan: 1 })
        }
      }
      continue
    } else {
      if (rowspan > 1) {
        const row = i - rowspan
        for (let j = 0; j < colArr.length; j++) {
          mergeCells.push({ row, col: colArr[j], rowspan, colspan: 1 })
        }
      }
      repeatVal = fieldVal
      rowspan = 1
    }

  }
  return mergeCells
}