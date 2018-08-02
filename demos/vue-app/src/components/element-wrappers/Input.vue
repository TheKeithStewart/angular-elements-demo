<template>
  <input-element :placeholder="placeholder"></input-element>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
