<template>
    <v-app-bar dark app>
        <router-link to="/" tag="span">
      <v-toolbar-title class="headline text-uppercase">
        <span>ANIME/MANGA</span>
        <span class="font-weight-light">BLOGS</span>
      </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
        <router-link to="/login" tag="span">
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Login</span>
      </v-btn>
      
      </router-link>
    </v-app-bar>
</template>

<script>

export default {
  name: 'header',
  components: {
    //
  },
  data: () => ({
    //
  }),
};
</script>
