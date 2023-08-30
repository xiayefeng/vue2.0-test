var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve('000')
    } catch (err) {
      reject(err)
    }
  }, 1000)
})
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve('111')
    } catch (err) {
      reject(err)
    }
  }, 2000)
})
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve('222')
    } catch (err) {
      reject(err)
    }
  }, 3000)
})
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve('333')
    } catch (err) {
      reject(err)
    }
  }, 4000)
})
var p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve('444')
    } catch (err) {
      reject(err)
    }
  }, 5000)
})
const p = [p1, p3, p2, p5, p4]


var fn = async () => {
  for (let i = 0; i < 5; i++) {
    console.log(i)
    let b = await p[i]
    console.log(b)
    //  console.log(i)
  }
}
fn()

function parseMergeCell (data, field, colArr) {
  let mergeCells = []
  let repeatVal = ''
  let rowspan = 1
  for (let i = 0; i < data.length; i++) {
    let { [field]: fieldVal } = data[i];
    if (repeatVal === fieldVal) {
      rowspan++
      if ((i === data.length - 1) && rowspan > 1) {
        const row = i - rowspan;
        for (let j = 0; j < colArr.length; j++) {
          mergeCells.push({ row, col: colArr[j], rowspan, colspan: 1 })
        }
      }
      continue
    } else {
      if (rowspan > 1) {
        const row = i - rowspan;
        for (let j = 0; j < colArr.length; j++) {
          mergeCells.push({ row, col: colArr[j], rowspan, colspan: 1 })
        }
      }
      repeatVal = fieldVal;
      rowspan = 1;
    }

  }
  return mergeCells
}

const arr = parseMergeCell([{ id: 1, a: 1, b: 2, c: 3 }, { id: 1, a: 1, b: 2, c: 3 }, { id: 2, a: 2, b: 2, c: 4 }, { id: 2, a: 3, b: 3, c: 3 }, { id: 2, a: 3, b: 3, c: 4 }, { id: 3, a: 3, b: 3, c: 4 }, { id: 3, a: 3, b: 3, c: 4 }], 'id', [0])

console.log(arr)