import App from './2-Vuex/App.story.vue'

export default {
  title: 'vuex'
}

// the store share the same state
export const VuexApps = () => ({
  components: { App },
  template: `
<div>
  <App name="App 1"/>
  <App name="App 2"/>
</div>
  `
})
