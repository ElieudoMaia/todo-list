import Vue from 'vue'

export default new Vue({
    data() {
        return {
            callback: ''
        }
    },
    methods: {
        adicionarTarefa(tarefa) {
            this.$emit('tarefaAdicionada', tarefa);
        },
        tarefaAdicionada(callback) {
            this.$on('tarefaAdicionada', callback);
        },
        excluirTarefa(tarefa) {
            this.$emit('tarefaExcluida', tarefa)
        },
        tarefaExcluida(callback) {
            this.$on('tarefaExcluida', callback)
        },
        alterarStatus(tarefa) {
            this.$emit('statusAlterado', tarefa)
        },
        statusAlterado(callback) {
            this.$on('statusAlterado', callback)
        },
        alterarPercentual(percent) {
            this.$emit('percentualAlterado', percent)
        },
        percentualAlterado(callback) {
            this.$on('percentualAlterado', callback)
        }
    }    

})