<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">Reset Password</h1>
        <div
          v-if="!!error"
          class="notification is-danger">
          {{ error }}
        </div>
        <div
          v-if="!!success"
          class="notification is-success">
          {{ success }}
        </div>
        <form @submit.prevent="submit">
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
              <button
                type="submit"
                class="button is-primary">
                Send Email
              </button>
            </p>
          </div>
          <p>
            <nuxt-link to="/signin">
              Go Back Login
            </nuxt-link>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import firebase from '../plugins/firebase';

  export default {
    middleware: 'anonymous',
    data() {
      return {
        email: '',
        error: '',
        success: '',
      };
    },
    methods: {
      submit: async function () {
        if (!this.validate()) {
          return;
        }

        firebase.auth().useDeviceLanguage();
        try {
          await firebase.auth().sendPasswordResetEmail(this.email);
          this.clearNotification();
          this.clearEmail();
          this.success = 'sent email. please check your inbox and access to reset password page';
        } catch (e) {
          this.clearNotification();
          this.error = e.message;
        }
      },
      validate: function() {
        if (this.email === '') {
          this.error = 'email should be present';
          return false;
        }
        return true;
      },
      clearEmail: function() {
        this.email = '';
      },
      clearNotification: function () {
        this.error = '';
        this.success = '';
      },
    }
  };
</script>

<style>
</style>
