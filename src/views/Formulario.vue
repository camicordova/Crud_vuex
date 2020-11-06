<template>
  <div class="formulario row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center" v-if="!$route.params.id">Crear Usuario</h3>
            <h3 class="text-center" v-if="$route.params.id">Editar Usuario</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-model="user.nombre" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block" v-if="!$route.params.id">Crear Usuario</button>
                    <button class="btn btn-primary btn-block" v-if="$route.params.id">Editar Usuario</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {
    createUsuario,
    getUsuario
} from '@/helpers/API.js';

export default {
  name: 'Formulario',
  components: {
  
  },
  data() {
    return {
      user:{
        nombre:'',
        email:'',
        id: null
      }
    }
  },
  mounted() {
    var that= this;
    if(that.$route.params.id) {
      getUsuario(that.$route.params.id)
        .then((result)=>{
          that.user.nombre=result.data.fields.nombre.stringValue;
          that.user.email=result.data.fields.email.stringValue;
          that.user.id=that.$route.params.id;
        }).catch((e)=>{

        })
    }
  },
  methods: {
    onFormSubmit(event) {
      var that= this;
        createUsuario(this.user)
          .then((result)=>{
            console.log(result);
            if(!that.$route.params.id){
              alert("Usuario creado")
            } else {
              alert("Usuario editado")
            }
            window.location="/"
          }).catch((e)=>{
            console.log(e);
          })
    }
  }
}
</script>