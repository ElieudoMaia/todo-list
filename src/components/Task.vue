<template>
    <div>
        <div id="container-individual-task" @click.self="changeStatus" :class="{'pending': status, 'completed': !status}">
            <div @click="changeStatus"> {{ String(description) }} </div>
            <div class="close-icon" @click="excluirTarefa"><i class="fa fa-window-close"></i></div>
        </div>
    </div>  
</template>

<script>
import barramento from './../barramento'

export default {
    props: {
        description: String
    },
    data() {
        return {
            status: true
        }
    },
    methods: {
        excluirTarefa() {
            barramento.excluirTarefa(this.description)
        },
        changeStatus() {
            this.status = !this.status
            barramento.alterarStatus(this.description)
        }
    }
}
</script>

<style scoped>
    
    #container-individual-task {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 15px 25px;
        border-radius: 5px;
        margin-right: 5px;
        color: #fff;
    }
    .pending {
        background-color: #07ad07;
    }
    .completed {
        background-color: rgb(245, 10, 10);
        text-decoration: line-through;
    }
    .close-icon {
        align-self: flex-end;
        cursor: pointer;
        margin-left: 10px;
    }

</style>