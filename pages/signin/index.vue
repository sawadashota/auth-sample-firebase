<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">Sign In</h1>
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
                class="button is-primary">
                Sign In
              </button>
            </p>
          </div>
          <p>
            <nuxt-link to="/reset_password">
              Forget a password?
            </nuxt-link>
          </p>
        </form>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h2 class="title is-4">Email Link Sign In</h2>
        <SignInLinkLoginForm/>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h2 class="title is-4">Login Via SNS Account</h2>
        <GoogleLoginButton/>
      </div>
    </div>
  </section>
</template>

<script>
  import {GoogleLoginButton, SignInLinkLoginForm} from '~/components';
  import firebase from '~/plugins/firebase';

  export default {
    middleware: 'anonymous',
    components: {
      GoogleLoginButton,
      SignInLinkLoginForm
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
