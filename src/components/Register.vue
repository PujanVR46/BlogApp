<template>
<div>
<div>
<Header/>
</div>
<div class="text-md-center">
 <p class="font-weight-black display-1">Register</p>
   <v-card
    class="mx-auto"
    max-width="344"
  >
  
          <v-text-field
            label="Username"
            placeholder="Enter your username here"
            v-model="register.username"
            outlined
            
          ></v-text-field>
          <v-text-field
            label="Email"
            placeholder="Enter your email here"
            v-model="register.email"
            outlined
            
          ></v-text-field>
          <v-text-field
            label="Password"
            placeholder="Enter your password here"
            v-model="register.password"
            outlined
            
          ></v-text-field>
          <v-btn dark>Register</v-btn>
          <div>Already a member? <router-link to='/register'>Login Here</router-link></div>
  </v-card>
</div>
</div>
</template>
<script>
import Header from './Header.vue'
export default {
    name: 'register',
    data(){
        return{
            register:{
                username: '',
                email:'',
                password: '',
            }
        }
    },
    components:{
        Header
    }

}
</script>