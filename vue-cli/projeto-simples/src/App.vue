<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      titulo: 'Teste data usando VueJS!!!'
    }
  }
}
</script>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    background-color: chocolate;
  }
</style>
