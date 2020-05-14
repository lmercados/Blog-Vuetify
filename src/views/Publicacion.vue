<template>
    <div>
        <v-row>
               <v-col md="4"  offset-md="4">
          <v-card class="mt-6">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
            <v-card-title>{{title}}</v-card-title>
            </v-img>
            <v-card-text class="orange--text">{{body}}</v-card-text>
             <v-list two-line>
          <template v-for="item in respuestaPost">
            <v-divider :key="item.id"></v-divider>
            <v-list-item  :key="item.email">
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="blue--text" >{{item.email}}-{{item.id}}</v-list-item-title>
                <v-list-item-subtitle>{{item.body}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
           <v-btn color="red" text @click="irHome">Back</v-btn>
       </v-card>
        </v-col>
  </v-row>
    </div>
</template>
<script>

import axios from "axios";
import {mapMutations} from "vuex"
export default {
  name: "Publicacion",
  components: {},

  data: () => ({
    respuestaPost: [],
    posts:[],
    title:'',
    body:''
  }),
  methods:
  {   ...mapMutations(['mostrarLoading','OcultarLoading']),
      irHome(){
         this.$router.push({ path: '/' })
         this.$router.push({ name: 'Home' })
      }
  },
   mounted() {
     this.mostrarLoading({titulo:'Accciendo a la Información del Post Post.....',estado:true});
   axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id_publicacion}`)
      .then(response => {
        this.title=response.data.title
        this.body=response.data.body
      })
      .catch(error => {
        console.log(error)
    
      })
       .finally(() =>{ 
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id_publicacion}/comments`)
      .then(response => {
        this.respuestaPost = response.data
      })
      .catch(error => {
        console.log(error)
    
      }) 
      .finally(()=>{
         this.OcultarLoading();
      })
         
       
      })},

 
};
</script>