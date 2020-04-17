import Vue from 'vue'
import vueDebounce from 'vue-debounce'

Vue.use(vueDebounce)

export default {
  title: 'vue-debounce'
}

export const OfficialExample = () => ({
  template: `
  <div>
    <p><input v-debounce:400ms="myFn" type="text" /></p>
    <p><input v-debounce:400ms="myFn" debounce-events="click" type="text" /></p>
  </div>
  `,
  methods: {
    myFn(val, e) {
      console.log(val) // => The value of the input
      console.log(e) // => The event object
    }
  }
})

export const DebounceSearchInput = () => ({
  template: `
  <div>
    <input
      v-debounce:400ms="debounceSearch"
      type="text"
      placeholder="Search"
      @input="type"
    >
    <span v-if="typing">You are typing</span>
    <span v-if="message">You typed: {{ message }}</span>
  </div>
  `,
  data: () => ({
    message: null,
    typing: null,
    debounce: null
  }),
  methods: {
    type() {
      this.message = null
      this.typing = 'You are typing'
    },
    debounceSearch(val) {
      this.message = val
      this.typing = null
    }
  }
})
