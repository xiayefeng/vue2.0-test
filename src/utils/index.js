/**
 * 二维数组合并单元格（仅针对数组对象本身）
 * @param data {array} 接口返回的数组对象
 * @param field {array|string} 指定合并选项为数组对象的某个属性值
 * @param colArr {number[]} 需要合并列的下标
 * @param signalSpan {{field: string, idx: number }[]} 需要合并的field已经列idx
 * @returns mergeCells {{row: number, col: number, colspan: number, colspan: number}[] }单元格合并规则
 */
export function parseMergeCell (data, field, colArr, signalSpan = []) {
  const mergeCells = []
  let repeatVal = ''
  let rowspan = 1
  const signalSpanList = []
  signalSpan.map(() => {
    signalSpanList.push({ span: 1, value: '' })
  })
  for (let i = 0; i < data.length; i++) {
    // let { [field]: fieldVal } = data[i]
    let fieldVal = getCellsName(data[i], field)
    if (repeatVal === fieldVal) {
      rowspan++
      if (i === data.length - 1) {
        const row = i - rowspan + 1
        for (let j = 0; j < colArr.length; j++) {
          mergeCells.push({ row, col: colArr[j], rowspan, colspan: 1 })
        }
      }
      for (const [idx, item] of signalSpan.entries()) {
        let signalVal = getCellsName(data[i], item.field)
        if (signalVal === signalSpanList[idx].value) {
          signalSpanList[idx].span++
          if (i === data.length - 1) {
            const span = signalSpanList[idx].span
            const row = i - span + 1
            mergeCells.push({ row, col: item.idx, rowspan: span, colspan: 1 })
          }
        } else {
          const span = signalSpanList[idx].span
          if (span > 1) {
            const row = i - span
            mergeCells.push({ row, col: item.idx, rowspan: span, colspan: 1 })
          }
          signalSpanList[idx].value = signalVal
          signalSpanList[idx].span = 1
        }
      }
    } else {
      if (rowspan > 1) {
        const row = i - rowspan
        for (let j = 0; j < colArr.length; j++) {
          mergeCells.push({ row, col: colArr[j], rowspan, colspan: 1 })
        }
      }
      for (const [idx, item] of signalSpan.entries()) {
        let signalVal = getCellsName(data[i], item.field)
        const span = signalSpanList[idx].span
        if (span > 1) {
          const row = i - span
          mergeCells.push({ row, col: item.idx, rowspan: span, colspan: 1 })
        }
        signalSpanList[idx].value = signalVal
        signalSpanList[idx].span = 1
      }
      repeatVal = fieldVal
      rowspan = 1
    }

  }
  return mergeCells
}

function getCellsName (row, fields) {
  if (typeof fields === 'string') {
    return row[fields] ?? ''
  } else if (Array.isArray(fields)) {
    return fields.map(item => row[item] ?? '').join()
  } else {
    return ''
  }
}