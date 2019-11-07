<template>
  <v-app class="bg">
    <div class="text-center ff mb-25">
      <p class="display-2 font-weight-bold white--text my-10">ADD BLOG</p>
      <v-card class="px-6 py-6 mb-5 mx-auto teal darken-2" max-width="70%" min-height="400">
        <validation-provider class="mb-0" name="Title" rules="required" v-slot="{ errors }">
          <v-text-field
            dark
            class="mb-0"
            required
            label="Title"
            placeholder="Enter title"
            v-model="title"
            outlined
          ></v-text-field>
          <div class="subtitle-2 mt-0">{{ errors[0] }}</div>
        </validation-provider>
        <validation-provider name="Author" rules="required" v-slot="{ errors }">
          <v-text-field dark label="Author" placeholder="Enter author" v-model="author" outlined></v-text-field>
          <div class="subtitle-2 mt-0">{{ errors[0] }}</div>
        </validation-provider>
        <validation-provider name="Description" rules="required" v-slot="{ errors }">
          <v-textarea dark label="Description" placeholder="Description" v-model="content" outlined></v-textarea>
          <div class="subtitle-2 ml-0">{{ errors[0] }}</div>
        </validation-provider>
        <div class="pb-2">
          <v-btn class="ma-3" large @click="submit()">Save</v-btn>
          <router-link to="/blog-view" tag="span">
            <v-btn class="ma-3" large dark @click="cancel()">Cancel</v-btn>
          </router-link>
        </div>
      </v-card>
    </div>
    <v-snackbar v-model="snackbar" :color="success" :timeout="timeout">{{ text }}</v-snackbar>
  </v-app>
</template>
<script>
import { mapActions } from "vuex";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "This field is required"
});

export default {
  name: "blogadd",
  data() {
    return {
      title: "",
      content: "",
      author: "",
      text: "Blog added successfully!",
      timeout: 3000,
      snackbar: false
    };
  },
  methods: {
    ...mapActions(["addBlog"]),
    submit() {
      const data = {
        title: this.title,
        author: this.author,
        content: this.content
      };
      this.addBlog(data)
        .then(() => {
          this.snackbar = true;
        })
        .then(() => {
          this.$router.push("/blog-view");
        });
      // .catch(e => {
      //   this.registerFailed = true;
      //   this.registerFailedMsg = e;
      // });
    }
  },
  computed: {
    isComplete() {
      return this.title && this.author && this.content;
    }
  },
  components: {
    ValidationProvider
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