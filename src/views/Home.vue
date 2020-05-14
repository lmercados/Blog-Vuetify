<template>
  <div class="home">
    <v-container>
      <v-row class="mt-6" style="height:300px">
        <v-col sm="4" offset-md="4" class="text-center">
          <h1 class="font-weight-light blue--text">Bienvenidos a Mi Blog con Vuetify 2.x</h1>

          <p class="mt-6 font-weight-light">
            Este blog esta compuesto por una barra de Navegación,un sistema de grilla de 3 columnas por cada
            fila,estaremso presentado los diferentes comentarios y todos lo relacionado a cada post,espero que lo difrutes. BY Luis Mercado.
          </p>
        </v-col>
      </v-row>
    

 
   <v-row>
        <v-col sm="12" md=4 v-for="item in posts" :key="item.index">
          <v-card class="mb-6" max-width="500" >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >

        
              <v-card-title>{{item.titulo}} </v-card-title>
            </v-img>
            <v-card-text class="">{{item.descripcion}}</v-card-text>
             
    <v-card-actions>
      <v-btn color="orange" text><router-link  style="text-decoration: none; color: inherit;" :to="{ name: 'Publicacion', params: { id_publicacion:item.id }}">Look</router-link></v-btn>

    </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    
    </v-container>
    </div>
   
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
import {mapMutations} from "vuex"
export default {
  name: "Home",
  components: {},

  data: () => ({
    respuestaPost: [],
    posts:[],
    numero:0
  }),
  methods:
  { 
    ...mapMutations(['mostrarLoading','OcultarLoading']),
     cargarPost(){
       
       for (let index = 0; index <9; index++) {
          this.posts.push({id:this.respuestaPost[index].id,titulo:this.respuestaPost[index].title.toUpperCase(),
           descripcion:this.respuestaPost[index].body})
          }
       }
    },
  mounted() {
     this.mostrarLoading({titulo:'Cargando Post.....',estado:true});
     axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.respuestaPost = response.data
      })
      .catch(error => {
        console.log(error)
    
      })
      .finally(() =>{  
       
        this.cargarPost();
        this.OcultarLoading();
      })
    }
};
</script>
