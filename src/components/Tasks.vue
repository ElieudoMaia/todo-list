<template>

<div>
    <div id="all-tasks">
        <div id="tasks" v-for="t in tasks" :key="t.description">
            <task :description="t.description" />
        </div>
    </div>
</div>
    

</template>

<script>
import Task from './Task.vue'
import barramento from './../barramento'

export default {
    components: {
        Task
    },
    data() {
        return {
          //description: 'nome da atividade', status: 'pending or completed'
            tasks: [],
            qtdTasks: 0,
            qtdTasksCompleted: 0
        }
    },
    computed: {
        percentual: function() {
           
           if(this.qtdTasks == 0) {
               return 0
           } else {
               return Math.round((this.qtdTasksCompleted / this.qtdTasks) * 100)
           }

        }    
    },
    watch: {
        percentual: function() {
            barramento.alterarPercentual(this.percentual)
        }
    },
    created() {
        barramento.tarefaAdicionada( tarefa => {
            let v = true
            let i
            for(i in this.tasks) {
                if(this.tasks[i].description == tarefa) {
                    v = false
                }
            }
            
            if(v == true){
                this.tasks.push( {description: tarefa, situation: true} )
            }
            this.contarTarefas()
        }),
        barramento.tarefaExcluida( tarefa => {
            let i
            for(i in this.tasks) {
                if(this.tasks[i].description == tarefa) {
                    this.tasks.splice(i, 1)
                }
            }
            this.contarTarefas()
        }),
        barramento.statusAlterado( tarefa => {
            let i
            for(i in this.tasks) {
                if(this.tasks[i].description == tarefa) {
                    this.tasks[i].status = !this.tasks[i].status
                }
            }
            this.contarTarefasCompletas()
        })
    },
    methods: {
        contarTarefas() {
            this.qtdTasks = this.tasks.length
            this.contarTarefasCompletas()
        },
        contarTarefasCompletas() {
            this.qtdTasksCompleted = 0
            let i 
            for(i in this.tasks) {
                if(this.tasks[i].status == true) {
                    this.qtdTasksCompleted++
                }
            }
        }
    }
}
</script>

<style scoped>
    #all-tasks {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    #tasks {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

</style>