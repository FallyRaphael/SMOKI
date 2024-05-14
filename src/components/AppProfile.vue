<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <!-- Login Window -->
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login to Your Account</h4>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field label="Email" v-model="loginUser.email" outlined dense color="blue"
                          autocomplete="false" class="mt-16" />
                        <v-text-field label="Password" v-model="loginUser.password" outlined dense color="blue"
                          autocomplete="false" type="password" />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox label="Remember Me" class="mt-n1" color="blue"></v-checkbox>
                          </v-col>
                        </v-row>
                        <v-btn color="#5c6bc0" dark block tile @click="login">Log in</v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">Or Log in using</h5>
                        <div class="d-flex justify-space-between align-center mx-10 mb-16">
                          <v-btn depressed outlined color="light-grey">
                            <v-icon color="red">mdi-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="light-grey">
                            <v-icon color="blue">mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="light-grey">
                            <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0;">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Don't Have an Account Yet?</h3>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <!-- Registration Window -->
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0;">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Already Signed up?</h3>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Sign Up for an Account</h4>
                    <h6 class="text-center grey--text">
                      Let's get you all set up so you can start creating your first onboarding experience
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field label="First Name" v-model="user.firstName" outlined dense color="blue"
                              autocomplete="false" class="mt-4" />
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field label="Last Name" v-model="user.lastName" outlined dense color="blue"
                              autocomplete="false" class="mt-4" />
                          </v-col>
                        </v-row>
                        <v-text-field label="Email" v-model="user.email" outlined dense color="blue"
                          autocomplete="false" />
                        <v-text-field label="Password" v-model="user.password" type="password" outlined dense
                          color="blue" autocomplete="false" />
                        <v-btn color="blue" dark block tile @click="register">Sign up</v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">Or Sign up using</h5>
                        <div class="d-flex justify-space-between align-center mx-10 mb-11">
                          <v-btn depressed outlined color="light-grey">
                            <v-icon color="red">mdi-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="light-grey">
                            <v-icon color="blue">mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="light-grey">
                            <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
<script>
import AuthService from "../services/AuthService.js";


export default {
  data() {
    return {
      step: 1,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      loginUser: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthService.login(this.loginUser);
        if (response.token) {
          this.$store.dispatch('login', {username: this.loginUser.email});
          this.$router.push({ name: 'EventRegister' }); // Redirect to dashboard or wherever you want
          alert('Login successful');
        }
      } catch (error) {
        alert('Invalid credentials');
      }
    },
    async register() {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await AuthService.register(this.user);
        alert('Registration successful');
        this.reloadRoute();
        this.$router.push('/profile'); // Redirect to login page after successful registration
      } catch (error) {
        if (error.response && error.response.status === 409) {
          alert('Email already exists!');
        } else {
          alert('Failed to register. Please try again.');
        }
      }
    }
    
  }
}
</script>
