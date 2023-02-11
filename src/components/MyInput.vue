<template>
  <div class="input-wrap">
    <div class="my-input" ref="input" :placeholder="placeholder" contenteditable @input="inputText">
    </div>
    <my-icon class="clear-btn" name="close" @click="clearBtn" />
    <span v-if="showWordLimt && +maxlength" class="word-num">{{ input.length + '/' + maxlength }}</span>
  </div>

</template>

<script>
export default {
  name: 'MyInput',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    clos: {
      type: Number,
      default: 2
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      defualt: ''
    },
    showWordLimt: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [String, Number]
    }
  },
  data () {
    return {
      input: ''
    }
  },
  computed: {
    canInput () {
      return this.input.length < this.maxlength
    }
  },
  watch: {
    value: {
      handler (val) {
        if (val !== this.$refs.input?.innerText) {
          this.input = val
          this.$refs.input && (this.$refs.input.innerText = val)
          // this.setSelectPoint()
        }
      }
    }
  },
  created () {
  },
  mounted () {
    if (this.value !== this.$refs.input?.innerText) {
      this.input = this.value
      this.$refs.input && (this.$refs.input.innerText = this.value)
    }
  },
  methods: {
    inputText (e) {
      let text = e.target.innerText
      if (this.showWordLimt && this.maxlength && text.length > this.maxlength) {
        text = text.slice(0, this.maxlength)
        this.$refs.input.innerText = text
      }
      this.input = text
      this.$emit('change', text)
    },
    clearBtn () {
      this.$emit('change', '')
      this.$refs.input.innerText = ''
      this.input = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrap {
  position: relative;

  .clear-btn {
    position: absolute;
    right: 1px;
    top: calc(50% - 8px);
    font-size: 14px;
    color: #ccc;
    cursor: pointer;

    &:hover {
      color: #999;
    }
  }

  .word-num {
    position: absolute;
    right: 2px;
    bottom: 0;
    color: #ccc;
    font-size: 12px;
  }
}

.my-input {
  text-align: left;
  border: 1px solid #ccc;
  padding: 2px 16px 2px 5px;
  border-radius: 3px;
  line-height: 20px;
  min-height: 48px;
  font-size: 14px;


  &:empty:before {
    content: attr(placeholder);
    font-size: 13px;
    color: #bbb;
  }

  &:focus {
    border: 1px solid #ccc;
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }


}
</style>