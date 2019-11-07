<template>
  <div>
    <div>BLOGS</div>
    <v-card max-width="1000" class="mx-auto my-auto">
      <div v-for="data in blogData" v-bind:key="data.id">
        <router-link :to="{path: `/blog-view/${data.id}`}" tag="span">
          <v-card-title class="headline" v-text="data.title"></v-card-title>
        </router-link>
        <v-card-subtitle v-text="data.author"></v-card-subtitle>
        <v-card-subtitle v-text="data.content"></v-card-subtitle>
        <v-btn>
          <v-icon @click="editBlog()">edit</v-icon>
        </v-btn>
        <v-btn @click="dialog = true">
          <v-icon>delete</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this blog??</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="deleteBlog(data.id); dialog = false">Yes</v-btn>

              <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
/* eslint-disable default case, no-console */
export default {
  name: "blogview",
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    ...mapActions(["fetchBlogData", "deleteBlog", "editBlog"])
  },
  computed: mapGetters(["blogData"]),
  created() {
    this.fetchBlogData();
  }
};
</script>