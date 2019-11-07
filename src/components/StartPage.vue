<template>
  <div>
    <v-card max-width="1000" class="mx-auto my-auto">
      <div v-for="data in allBlogData" v-bind:key="data.id">
        <v-card-title class="headline" v-text="data.title"></v-card-title>

        <v-card-subtitle v-text="data.author"></v-card-subtitle>
        <v-card-subtitle v-text="data.content"></v-card-subtitle>
      </div>
    </v-card>
    <v-flex xs12>
      <v-img :src="require('../assets/image4.jpg')" class="my-3" contain></v-img>
    </v-flex>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "startpage",
  methods: {
    ...mapActions(["fetchAllBlog"])
  },
  computed: mapGetters(["allBlogData"]),
  created() {
    this.fetchAllBlog();
  }
};
</script>
