/*
 * @Author: xiayefeng xiayu_12@yeah.net
 * @Date: 2023-03-18 03:16:16
 * @LastEditors: xiayefeng xiayu_12@yeah.net
 * @LastEditTime: 2023-03-18 11:18:20
 * @FilePath: \vue2.0-test\src\utils\request.js
 * @Description: 
 */
import axios from 'axios'

const instance = axios.create({
  timeout: 5000
})

export default instance