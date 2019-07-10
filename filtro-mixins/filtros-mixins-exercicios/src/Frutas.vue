<template>
    <div>
        <h2>{{ global }}</h2>
        <ul>
            <li v-for="f in frutas" :key="f">{{ f }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" />
    </div>
</template>

<script>
import usuarioMixin from './usuarioMixin'
import frutasMixin from './frutasMixin'

export default {
    mixins: [frutasMixin, usuarioMixin],
    created() {
        console.log('Created - Frutas.vue')            
    }
}
</script>

<style>

</style>
