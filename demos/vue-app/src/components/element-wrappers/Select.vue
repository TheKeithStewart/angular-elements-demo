<template>
  <select-element :placeholder="placeholder" v-bind:options="options"></select-element>
</template>

<script>
export default {
  name: 'Select',
  props: {
    placeholder: String,
    options: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
