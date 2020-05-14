<template>
  <v-app>
     <v-card class="overflow-hidden info">
    <v-app-bar
      absolute
      class="font-weight-light"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >

      <v-toolbar-title style="text-decoration-line: overline;">ACME</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="mx-2 font-weight-light" text >
        Product
      </v-btn>
     <v-btn class="mx-2 font-weight-light" text >
        About
      </v-btn>
     <v-btn  class="mx-2 font-weight-light" text>
         Portolio
      </v-btn>
       <v-btn  class="mx-2 font-weight-light" text>
         Team
      </v-btn>
       <v-btn  class="mx-2 font-weight-light" text>
         Contact
      </v-btn>
       <v-btn class="mx-2 font-weight-light" text >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="600">
      <v-container style="height:70px;"></v-container>
    </v-sheet>
  </v-card>

    <v-content>
    <router-view>
 


    </router-view>
    <v-dialog
      v-model="loading.estado"
      hide-overlay
      persistent
      width="500"
    >
      <v-card
        color="orange"
        dark
      >
        <v-card-text>
          {{loading.titulo}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    </v-content>
  </v-app>
</template>

<script>

import {mapState} from "vuex";
export default {
  name: 'App',

  components: {
   
   
  },
  computed:
  {
    ...mapState(['loading'])
  },

  data: () => ({
      
  })
 
};
</script>
