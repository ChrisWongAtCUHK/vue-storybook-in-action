<template>
  <div>
    <p>{{ task.title }} </p>
    <p>{{ task.counter }} </p>
    <p>
      <input
        type="button"
        value="Click me"
        @click="taskCounterIncrement"
      >
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Task',
  // the store share the same state
  computed: {
    ...mapState(['task'])
  },
  // the store share the same state
  methods: {
    ...mapActions(['taskCounterIncrement'])
  }
}
</script>
