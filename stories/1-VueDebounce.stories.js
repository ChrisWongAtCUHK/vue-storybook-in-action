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
