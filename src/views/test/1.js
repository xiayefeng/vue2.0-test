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