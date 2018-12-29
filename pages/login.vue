<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">Login</h1>
        <div
          v-if="!!error"
          class="notification is-danger">
          {{ error }}
        </div>
        <form @submit.prevent="emailLogin">
          <div class="field">
            <p class="control has-icons-right">
              <input
                v-model="email"
                class="input"
                type="email"
                placeholder="Email"
              >
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input
                v-model="password"
                class="input"
                type="password"
                placeholder="Password">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button
                type="submit"
                class="button is-success">
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <GoogleLoginButton/>
      </div>
    </div>
  </section>
</template>

<script>
  import {GoogleLoginButton} from '../components';
  import firebase from '../plugins/firebase';

  export default {
    middleware: 'anonymous',
    components: {
      GoogleLoginButton
    },
    data() {
      return {
        email: '',
        password: '',
        error: '',
      };
    },
    methods: {
      emailLogin: async function () {
        if (!this.validate()) {
          this.clearPassword();
          return;
        }

        try {
          await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
          this.clearError();
          this.$router.push({path: '/'});
        } catch (e) {
          this.clearPassword();
          this.error = e.message;
        }
      },
      validate: function() {
        if (this.email === '' || this.password === '') {
          this.error = 'both email and password should be present';
          return false;
        }
        return true;
      },
      clearError: function () {
        this.error = '';
      },
      clearPassword: function () {
        this.password = '';
      }
    }
  };
</script>

<style>
</style>
