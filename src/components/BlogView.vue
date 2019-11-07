<template>
  <div>
    <v-app class="bg">
      <div v-for="data in blogData" v-bind:key="data.id" class="ff">
        <v-card max-width="1000" height="250" class="mx-auto pt-1 pa-5 mt-5 mb-5 teal darken-2">
          <v-card-subtitle
            class="pb-0 mb-0 white--text font-weight-medium"
          >{{ moment(data.created_at).format('MMMM Do YYYY') }}</v-card-subtitle>
          <router-link
            :to="{path: `/blog-view/${data.id}`}"
            class="linkTags"
            onmouseover
            tag="span"
          >
            <v-card-title class="display-1 font-weight-black pt-1 pb-0" v-text="data.title"></v-card-title>
          </router-link>
          <v-card-subtitle
            class="pt-0 mt-0 white--text font-italic font-weight-medium"
          >-{{data.author}}</v-card-subtitle>
          <v-card-subtitle>
            <span class="white--text title">{{ data.content | truncate(30) }}</span>
            <router-link
              class="title font-weight-black linkTags"
              :to="{path: `/blog-view/${data.id}`}"
              tag="span"
              onmouseover
            >Read More</router-link>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" fab small>
              <v-icon @click="editBlog()">edit</v-icon>
            </v-btn>

            <v-btn fab small color="error" @click="dialog = true">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-actions>
          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this blog??</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="green darken-1" @click="deleteBlog(data.id); dialog = false">Yes</v-btn>

                <v-btn color="green darken-1" @click="dialog = false">No</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </div>
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination v-model="page" class="my-4" :length="15"></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-app>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import truncate from "vue-truncate-collapsed";
import moment from "moment";
/* eslint-disable default case, no-console */
export default {
  name: "blogview",
  data() {
    return {
      dialog: false,
      page: 1
    };
  },
  methods: {
    ...mapActions(["fetchBlogData", "deleteBlog", "editBlog"]),
    moment: function(date) {
      return moment(date);
    }

    // truncate(string, value) {
    //   return (string || "").substring(0, value) + "…";
    // }
  },
  computed: mapGetters(["blogData"]),
  created() {
    this.fetchBlogData();
  },

  filters: {
    truncate(string, value) {
      return (string || "").substring(0, value) + "…   ";
    }
  },
  components: {
    // truncate
  }
};
</script>
<style scoped>
.bg {
  background-image: url("../assets/happy.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>