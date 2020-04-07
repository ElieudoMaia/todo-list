<template>
  
  <div id="container-input">
      <input type="text" placeholder="Adicione tarefas aqui!" v-model="texto" @keyup.enter="adicionarTarefas" />
      <button @click="adicionarTarefas()">&#43;</button>
  </div>

</template>

<script>
import barramento from './../barramento'

export default {
    data() {
        return {
            texto: ''
        }
    },
    methods: {
        adicionarTarefas() {
            if (!this.texto == '') {
                barramento.adicionarTarefa(this.texto)
                this.texto = ''
            }
        }
    }
}
</script>

<style scoped>

    #tasks {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    #container-input input, #container-input button {
        padding: 10px;
    }
    
    #container-input button {
        background-color: rgb(45, 160, 236);
        border-color: #fff;
        color: #fff;
    }

</style>