/*
 * @Author: xiayefeng xiayu_12@yeah.net
 * @Date: 2023-03-18 03:17:36
 * @LastEditors: xiayefeng xiayu_12@yeah.net
 * @LastEditTime: 2023-03-18 11:16:57
 * @FilePath: \vue2.0-test\src\api\common.js
 * @Description: 
 */
import request from '@/utils/request'

export function reqGet (url, params, config = {}) {
  return request({
    url,
    params,
    ...config
  })
}

export function reqPost(url, data, config = {}) {
  console.log(data)
  console.log(url)
  console.log(config)
  return request({
    url,
    data,
    method: 'post',
    ...config
  })
}