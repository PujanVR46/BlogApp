<template>
  <v-app class="bg">
    <div class="text-center ff mb-25 container">
      <v-card class="px-6 py-6 mb-5 mt-12 mx-auto teal darken-2">
        <p class="display-2 font-weight-bold white--text mt-0 mb-12">ADD BLOG</p>

        <v-text-field
          dark
          class="mb-0"
          label="Title"
          placeholder="Enter title"
          :counter="70"
          v-model="title"
          outlined
          v-validate="'required|max:70'"
          :error-messages="errors.collect('title')"
          data-vv-name="title"
          required
        ></v-text-field>

        <v-text-field
          dark
          label="Author"
          v-validate="'required'"
          :error-messages="errors.collect('author')"
          data-vv-name="author"
          required
          placeholder="Enter author"
          v-model="author"
          outlined
        ></v-text-field>

        <v-textarea
          dark
          label="Description"
          v-validate="'required'"
          :error-messages="errors.collect('content')"
          data-vv-name="content"
          required
          placeholder="Description"
          v-model="content"
          outlined
        ></v-textarea>
        <div class="pb-2">
          <v-btn class="ma-3" large @click="submit()">Save</v-btn>
          <router-link to="/blog-view" tag="span">
            <v-btn class="ma-3" large dark @click="$router.go(-1)">Cancel</v-btn>
          </router-link>
        </div>
      </v-card>
    </div>
  </v-app>
</template>
<script>
import { mapActions } from "vuex";
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
  name: "blogadd",
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      title: "",
      content: "",
      author: "",
      dictionary: {
        attributes: {
          email: "E-mail Address"
        },
        custom: {
          title: {
            required: () => "title can not be empty",
            max: "The title field may not be greater than 70 characters"
          }
        }
      }
    };
  },
  methods: {
    ...mapActions(["addBlog"]),
    submit() {
      this.$validator.validateAll().then(res => {
        if (res) {
          const data = {
            title: this.title,
            author: this.author,
            content: this.content
          };
          this.addBlog(data).then(() => {
            this.$router.push("/blog-view");
          });
        }
      });
    }
  },
  computed: {
    isComplete() {
      return this.title && this.author && this.content;
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