<!--
 * @Author: xiayefeng xiayu_12@yeah.net
 * @Date: 2023-04-04 23:37:10
 * @LastEditors: xiayefeng xiayu_12@yeah.net
 * @LastEditTime: 2023-04-05 09:57:40
 * @FilePath: \vue2.0-test\src\views\select\MySelect.vue
 * @Description: 
-->
<template>
  <div class="select-wrap">
    <el-button @click="setOptions(1)">第一次赋值</el-button>
    <el-button @click="setOptions(2)">第二次赋值</el-button>
    <el-select v-model="value" filterable remote clearable :remote-method="remoteMethod">
      <el-option v-for="item of options" :key="item.id" :label="item.label" :value="item.id"></el-option>
    </el-select>
  </div>
</template>
<script>
import debounce from 'lodash/debounce'
export default {
  props: {},
  components: {},
  data () {
    return {
      value: '',
      options: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.setOptions(3)
  },
  methods: {
    setOptions (type) {
      if (type === 1) {
        this.options = [
          { label: 'a', value: 'A', id: '1' },
          { label: 'b', value: 'B', id: '2' },
          { label: 'c', value: 'C', id: '3' },
          { label: 'd', value: 'D', id: '2' },
          { label: 'e', value: 'E', id: '4' },
          { label: 'f', value: 'F', id: '5' },
          { label: 'g', value: 'G', id: '6' },
          { label: "h", value: "H", id: "6" },
          {
            label: "i",
            value: "I",
            id: "7"
          },
          {
            "label": "j",
            "value": "J",
            "id": "8"
          },
          {
            "label": "k",
            "value": "K",
            "id": "9"
          },
          {
            "label": "l",
            "value": "L",
            "id": "10"
          },
          {
            "label": "m",
            "value": "M",
            "id": "11"
          },
          {
            "label": "n",
            "value": "N",
            "id": "12"
          },
          {
            "label": "o",
            "value": "O",
            "id": "13"
          },
          {
            "label": "p",
            "value": "P",
            "id": "14"
          },
          {
            "label": "q",
            "value": "Q",
            "id": "15"
          },
          {
            "label": "r",
            "value": "R",
            "id": "16"
          },
          {
            "label": "s",
            "value": "S",
            "id": "17"
          },
          {
            "label": "t",
            "value": "T",
            "id": "18"
          },
          {
            "label": "u",
            "value": "U",
            "id": "19"
          },
          {
            "label": "v",
            "value": "V",
            "id": "20"
          },
          {
            "label": "w",
            "value": "W",
            "id": "21"
          },
          {
            "label": "x",
            "value": "X",
            "id": "22"
          },
          {
            "label": "y",
            "value": "Y",
            "id": "23"
          },
          {
            "label": "z",
            "value": "Z",
            "id": "24"
          },
          {
            "label": "aa",
            "value": "AA",
            "id": "25"
          },
          {
            "label": "ab",
            "value": "AB",
            "id": "26"
          },
          {
            "label": "ac",
            "value": "AC",
            "id": "27"
          },
          {
            "label": "ad",
            "value": "AD",
            "id": "28"
          },
          {
            "label": "ae",
            "value": "AE",
            "id": "29"
          },
          {
            "label": "af",
            "value": "AF",
            "id": "30"
          },
          {
            "label": "ag",
            "value": "AG",
            "id": "31"
          },
          {
            "label": "ah",
            "value": "AH",
            "id": "32"
          },
          {
            "label": "ai",
            "value": "AI",
            "id": "33"
          },
          {
            "label": "aj",
            "value": "AJ",
            "id": "34"
          },
          {
            "label": "ak",
            "value": "AK",
            "id": "35"
          },
          {
            "label": "al",
            "value": "AL",
            "id": "36"
          },
          {
            "label": "am",
            "value": "AM",
            "id": "37"
          },
          {
            "label": "an",
            "value": "AN",
            "id": "38"
          },
          {
            "label": "ao",
            "value": "AO",
            "id": "39"
          },
          {
            "label": "ap",
            "value": "AP",
            "id": "40"
          },
          {
            "label": "aq",
            "value": "AQ",
            "id": "41"
          },
          {
            "label": "ar",
            "value": "AR",
            "id": "42"
          },
          {
            "label": "as",
            "value": "AS",
            "id": "43"
          },
          {
            "label": "at",
            "value": "AT",
            "id": "44"
          },
          {
            "label": "au",
            "value": "AU",
            "id": "45"
          },
          {
            "label": "av",
            "value": "AV",
            "id": "46"
          },
          {
            "label": "aw",
            "value": "AW",
            "id": "47"
          },
          {
            "label": "ax",
            "value": "AX",
            "id": "48"
          },
          {
            "label": "ay",
            "value": "AY",
            "id": "49"
          },
          {
            "label": "az",
            "value": "AZ",
            "id": "50"
          },
          {
            "label": "ba",
            "value": "BA",
            "id": "51"
          },
          {
            "label": "bb",
            "value": "BB",
            "id": "52"
          },
          {
            "label": "bc",
            "value": "BC",
            "id": "53"
          },
          {
            "label": "bd",
            "value": "BD",
            "id": "54"
          },
          {
            "label": "be",
            "value": "BE",
            "id": "55"
          },
          {
            "label": "bf",
            "value": "BF",
            "id": "56"
          },
          {
            "label": "bg",
            "value": "BG",
            "id": "57"
          },
          {
            "label": "bh",
            "value": "BH",
            "id": "58"
          },
          {
            "label": "bi",
            "value": "BI",
            "id": "59"
          },
          {
            "label": "bj",
            "value": "BJ",
            "id": "60"
          },
          {
            "label": "bk",
            "value": "BK",
            "id": "61"
          },
          {
            "label": "bl",
            "value": "BL",
            "id": "62"
          },
          {
            "label": "bm",
            "value": "BM",
            "id": "63"
          },
          {
            "label": "bn",
            "value": "BN",
            "id": "64"
          },
          {
            "label": "bo",
            "value": "BO",
            "id": "65"
          },
          {
            "label": "bp",
            "value": "BP",
            "id": "66"
          },
          {
            "label": "bq",
            "value": "BQ",
            "id": "67"
          },
          {
            "label": "br",
            "value": "BR",
            "id": "68"
          },
          {
            "label": "bs",
            "value": "BS",
            "id": "69"
          },
          {
            "label": "bt",
            "value": "BT",
            "id": "70"
          },
          {
            "label": "bu",
            "value": "BU",
            "id": "71"
          },
          {
            "label": "bv",
            "value": "BV",
            "id": "72"
          },
          {
            "label": "bw",
            "value": "BW",
            "id": "73"
          },
          {
            "label": "bx",
            "value": "BX",
            "id": "74"
          },
          {
            "label": "by",
            "value": "BY",
            "id": "75"
          },
          {
            "label": "bz",
            "value": "BZ",
            "id": "76"
          },
          {
            "label": "ca",
            "value": "CA",
            "id": "77"
          },
          {
            "label": "cb",
            "value": "CB",
            "id": "78"
          },
          {
            "label": "cc",
            "value": "CC",
            "id": "79"
          },
          {
            "label": "cd",
            "value": "CD",
            "id": "80"
          },
          {
            "label": "ce",
            "value": "CE",
            "id": "81"
          },
          {
            "label": "cf",
            "value": "CF",
            "id": "82"
          },
          {
            "label": "cg",
            "value": "CG",
            "id": "83"
          },
          {
            "label": "ch",
            "value": "CH",
            "id": "84"
          },
          {
            "label": "ci",
            "value": "CI",
            "id": "85"
          },
          {
            "label": "cj",
            "value": "CJ",
            "id": "86"
          },
          {
            "label": "ck",
            "value": "CK",
            "id": "87"
          },
          {
            "label": "cl",
            "value": "CL",
            "id": "88"
          },
          {
            "label": "cm",
            "value": "CM",
            "id": "89"
          },
          {
            "label": "cn",
            "value": "CN",
            "id": "90"
          }
        ]
      } else if (type === 2) {
        this.options = [
          { label: 'd', value: 'D', id: '2' },
          { label: 'a', value: 'A', id: '1' },
          { label: 'd', value: 'D', id: '2' },
          { label: 'c', value: 'C', id: '3' },
          { label: 'e', value: 'E', id: '3' },
          { label: 'g', value: 'G', id: '6' },
          { label: "h", value: "H", id: "6" },
          {
            label: "bv",
            value: "BV",
            id: "72"
          },
          {
            label: "bw",
            value: "BW",
            id: "73"
          },
          {
            label: "bx",
            value: "BX",
            id: "74"
          }
        ]
      } else if (type === 3) {
        this.options = [
          { label: 'a', value: 'A', id: '1' },
          { label: 'd', value: 'D', id: '2' },
          { label: 'c', value: 'C', id: '3' },
          { label: 'e', value: 'E', id: '3' },
        ]
      }
    },
    remoteMethod: debounce(function (val) {
      if (val.length === 1) {
        this.setOptions(1)
      } else if (val.length === 2) {
        this.setOptions(2)
      } else if (val.length >= 3) {
        this.setOptions(3)
      } else {
        this.options = []
      }

    }, 800, { leading: true })
  }
}
</script>

<style lang="scss" scoped></style>