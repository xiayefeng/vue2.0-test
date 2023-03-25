<!--
 * @Author: xiayefeng xiayu_12@yeah.net
 * @Date: 2023-02-11 16:56:51
 * @LastEditors: xiayefeng xiayu_12@yeah.net
 * @LastEditTime: 2023-03-18 14:09:26
 * @FilePath: \vue2.0-test\src\views\home\index.vue
 * @Description: 
-->
<template>
  <div>
    <input type="text" v-paste="handleParse">
  </div>
</template>

<script>
import { reqPost } from '@/api/common'
// import * as qiniu from 'qiniu-js'
export default {
  name: 'HomePage',
  components: {},
  data () {
    return {
      token: ''
    }
  },
  directives: {
    paste: {
      bind (el, binding) {
        el.addEventListener('paste', function (e) {
          binding.value(e)
        })
      }
    }
  },
  created () {
    reqPost('/api/getUploadToken', { bucket: 'wxu' }).then(res => {
      console.log(res)
      this.token = res.data?.data ?? ''
    })
  },
  mounted () { },
  methods: {
    //微信截图上传图片时触发
    handleParse (e) {
      // let file = null;
      var data = e.clipboardData || window.clipboardData, that = this;
      console.log('fun', JSON.parse(JSON.stringify(data)));
      var blob = data.items[0].getAsFile();
      var isImg = (blob && 1) || -1;
      var reader = new FileReader();
      if (isImg >= 0) {
        //将文件读取为 DataURL
        reader.readAsDataURL(blob);
      }
      reader.onload = function (event) {
        //获取base64流
        var base64_str = event.target.result;
        //div中的img标签src属性赋值，可以直接展示图片
        // console.log('base64_str',base64_str);
        var bytes = window.atob(base64_str.split(',')[1]);
        var array = [];
        for (var i = 0; i < bytes.length; i++) {
          array.push(bytes.charCodeAt(i));
        }
        var blob = new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
        var formData = new FormData();
        formData.append('file', blob, Date.now() + '.jpg');
        formData.append('filename', 'file.jpg')
        // console.log(blob);
        that.update(formData, 'image');
      }
    },
    update (formData) {
      /* const observable = qiniu.upload(formData, file, this.token, { fname: file + '.jpg' })
      observable.subscribe({
        complete (res) {
         console.log(res)
        }
      })  */// 上传开始
      // 上传
      formData.append('token', this.token)
      formData.append('key', 'wxu')
      fetch('https://upload-z2.qiniup.com', {
        method: 'post',
        body: formData,
        headers: {
          Host: 'https://upload-z2.qiniup.com'
        }
      }).then(response => response.json()).then(res => {
        console.log(res)
        let pic = res.data.url;
        console.log(pic)

      })
    },

  }
}
</script>

<style lang="scss" scoped></style>