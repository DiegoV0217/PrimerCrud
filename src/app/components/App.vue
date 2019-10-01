<template>
    <div>
        <nav class="navbar navbar-ligth bg-ligth">
            <a href="/" class="navbar-brand"> MEVN Stack</a>
        </nav>

    <div class="container">
        
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="addTask">
                                <div class="form-group">
                                    <input type="text" v-model="task.titulo"
                                    placeholder="Inserte una tarea"
                                    class="form-control">
                                </div>

                                <div class="form-group">
                                    <textarea v-model="task.duracion" cols="30" rows="10"
                                    class="form-control"
                                    placeholder="Inserte una duración">

                                    </textarea>

                                </div>
                                <button class="btn btn-primary
                                btn-block"> ENVIAR</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>


    </div>
</template>


<script>
    class Task {
        constructor(titulo, duracion){
            this.titulo = titulo;
            this.duracion = duracion;
        }

    }
    
    export default {
        data(){
            return{
                task: new Task()
            }
        },
        methods:{
            addTask(){
                console.log(this.task);
                this.task = new Task()
               
            }
        }
        
    }
</script>

<style>

</style>
