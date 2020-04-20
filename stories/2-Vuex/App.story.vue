<template>
  <div>
    <h3>{{ name }}</h3>
    <Task />
  </div>
</template>

<script>
// the store share the same state
import store from './store'
import Task from './Task'

export default {
  name: 'App',
  components: { Task },
  props: {
    name: {
      type: String,
      default: 'App'
    }
  },
  store
}
</script>
