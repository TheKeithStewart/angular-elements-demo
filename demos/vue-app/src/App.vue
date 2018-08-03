<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div class="main-container">
      <div class="form-container">
        <Header title="Non-Dynamic Form" />
        <card-element>
          <Input placeholder="First Name" />
          <Select placeholder="Some Options" v-bind:options="options" />
        </card-element>
      </div>

      <div class="form-container">
        <Header title="Dynamic Form" />
        <card-element>
          <DynamicForm />
        </card-element>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/element-wrappers/Header.vue';
import Input from './components/element-wrappers/Input.vue';
import Select from './components/element-wrappers/Select.vue';
import DynamicForm from './components/element-wrappers/Dynamic-Form.vue';

export default {
  name: 'app',
  components: {
    Header,
    Input,
    Select,
    DynamicForm
  },
  props: {
    options: {
      type: String,
      default: function() {
        return JSON.stringify([
          { value: '1', viewValue: 'Value 1' },
          { value: '2', viewValue: 'Value 2' },
          { value: '3', viewValue: 'Value 3' }
        ]);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #f0f0f1;
}

.main-container {
  display: flex;
  flex-direction: column;
}

.form-container {
  width: 500px;
  align-self: center;
  padding-bottom: 20px;
}
</style>
