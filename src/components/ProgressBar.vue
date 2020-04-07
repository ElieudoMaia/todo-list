<template>
  
    <div class="container-progress">
        <div id="bar">
            <div id="progress" :style="{'width': progress + '%'}">
            </div>
        </div>
        <div> {{ progress }}% </div>
    </div>

</template>

<script>
import barramento from './../barramento'

export default {
    data() {
        return {
            progress: 0
        }
    },
    created() {
        barramento.percentualAlterado( novoPercentual => {
            this.progress = novoPercentual
            console.log(novoPercentual)
        })
    }
}
</script>

<style scoped>

    .container-progress {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #bar {
        border: 1px solid gray;
        width: 75vw;
        height: 15px;
        border-radius: 5px;
    }
    
    #progress {
        display: block;
        height: 100%;
        background-color: rgb(11, 197, 82);
    }

</style>