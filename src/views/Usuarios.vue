<template>
  <div class="home row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users_store" :key="user.key">
                        <td>{{ user.nombre }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                            <router-link :to="{path: '/formulario/'+user.id }" class="btn btn-primary">Editar
                            </router-link>
                            <button @click.prevent="deleteUser(user.name)" class="btn btn-danger">Borrar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {
    getUsuarios
} from '@/helpers/API.js';
import store from "@/store";

export default {
  name: 'Usuarios',
  components: {
  
  },
  data() {
    return {
      Users:[]
    }
  },
  mounted() {
    var that = this;
    getUsuarios().then((result)=>{
        result.data.documents.forEach((user)=>{
            console.log(user.fields);
            var id = user.name.split("usuarios/")[1];
            var User = {
                nombre:user.fields.nombre.stringValue,
                email:user.fields.email.stringValue,
                id:id
            }
            that.Users.push(User);
        });
        that.users_store=that.Users;
    }).then((e)=>{
        console.log(e);
    })
  },
  methods: {
    
  },
  computed: {
      users_store: {
        get() {
            return this.$store.state.users;
        },
        set(value) {
            this.$store.commit('SET_USERS', value);
        }
    }
  }

}
</script>
