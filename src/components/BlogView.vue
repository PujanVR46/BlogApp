<template>
  <div>
    <v-app class="bg">
      <div v-for="data in blogData" v-bind:key="data.id" class="ff container">
        <v-card class="mx-auto pt-1 pa-5 mt-5 mb-5 teal darken-2">
          <v-layout row>
            <v-flex md6>
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
              <v-card-subtitle class="pt-0">
                <span class="white--text title">{{ data.content | truncate(30) }}</span>
                <router-link
                  class="title font-weight-black linkTags"
                  :to="{path: `/blog-view/${data.id}`}"
                  tag="span"
                  onmouseover
                >Read More</router-link>
              </v-card-subtitle>
            </v-flex>
            <v-flex md6 d-flex justify-end>
              <v-card-actions>
                <router-link :to="{path:`/blog-edit/${data.id}`}" class="pr-2" tag="span">
                  <v-btn color="primary" fab small>
                    <v-icon>edit</v-icon>
                  </v-btn>
                </router-link>
                <v-btn fab small color="error" @click="showAlert(data.id)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
    </v-app>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
/* eslint-disable default case, no-console */
export default {
  name: "blogview",
  data() {
    return {
      page: 1
    };
  },
  methods: {
    ...mapActions(["fetchBlogData", "deleteBlog"]),
    showAlert(id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            this.deleteBlog(id);
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },
    moment: function(date) {
      return moment(date);
    }
  },
  computed: mapGetters(["blogData"]),
  created() {
    this.fetchBlogData();
  },

  filters: {
    truncate(string, value) {
      return (string || "").substring(0, value) + "…   ";
    }
  }
};
</script>
<style scoped>
.bg {
  background-image: url("../assets/image8.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>