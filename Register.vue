<template>
 <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center deep-purple--text"> Sign UP To GladStar</h1>
                            <div class="text-center" mt-4>
                                <v-btn class="mx-2 my-5" fab color="black" outlined>
                                    <v-icon>
                                        fab fa-facebook-f
                                    </v-icon>
                                </v-btn>
                                <v-btn class="mx-2 my-5" fab color="black" outlined>
                                    <v-icon>
                                        mdi-twitter
                                    </v-icon>
                                </v-btn>
                                <v-btn class="mx-2 my-5" fab color="black" outlined>
                                    <v-icon>
                                        fab fa-linkedin-in
                                    </v-icon>
                                </v-btn>

                            </div>
                            <v-form>
                                <v-text-field
                                label="Name"
                                text="Name"
                                prepend-icon=" mdi-account-circle"
                                type="text"
                                color="deep-purple"/>
                                <v-text-field
                                label="Email"
                                text="Email"
                                prepend-icon="mdi-email"
                                type="text"
                                color="deep-purple"/>
                                <v-text-field
                                id="password"
                                label="Password"
                                text="Password"
                                prepend-icon="mdi-lock"
                                type="password"
                                color="deep-purple"/>
                                <v-text-field
                                id="confirmpassword"
                                label="Confirm Password"
                                text="Password"
                                prepend-icon="mdi-lock"
                                type="password"
                                color="deep-purple"/>
                            </v-form>
                            
                      </v-card-text>
                      <div class="text-center my-3">
                          <v-btn rounded color="deep-purple " class="white--text ">REGISTER</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="deep-purple">
                        <v-card-text class="white--text mt-12">
                            <h1 class="text-center">Hello!</h1>
                            <h5 class="mt-3 text-center">Already Have An Account? </h5>
                        </v-card-text>
                        <div class="text-center mt-16">
                             <v-btn rounded color="white" outlined="" dark to="/">SIGN IN</v-btn>
                        </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
//   import Login  from '../components/Login'
// import Login from '../components/Login.vue'

  export default {
    // name: 'Login',

    components: {
    //  Login
    },
  }
</script>
