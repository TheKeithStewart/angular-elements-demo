<template>
  <dynamic-form-element v-bind:questions="questions" />
</template>

<script>
export default {
  name: 'DynamicForm',
  props: {
    questions: {
      type: String,
      default: function() {
        return JSON.stringify([
          {
            value: 'Bombasto',
            key: 'firstName',
            label: 'First name',
            required: true,
            order: 1,
            controlType: 'textbox',
            type: ''
          },
          {
            key: 'emailAddress',
            label: 'Email',
            required: false,
            order: 2,
            controlType: 'textbox',
            type: 'email'
          },
          {
            key: 'brave',
            label: 'Bravery Rating',
            required: false,
            order: 3,
            controlType: 'dropdown',
            options: [
              { key: 'solid', value: 'Solid' },
              { key: 'great', value: 'Great' },
              { key: 'good', value: 'Good' },
              { key: 'unproven', value: 'Unproven' }
            ]
          }
        ]);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
