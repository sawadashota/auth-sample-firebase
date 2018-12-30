<template>
  <section>
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
            Send Sign In Link
          </button>
        </p>
      </div>
    </form>
  </section>
</template>

<script>
  import firebase from '~/plugins/firebase';

  export default {
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

        const actionCodeSettings = {
          url: `${process.env.baseUrl}/signin/finish`,
          handleCodeInApp: true,
        };

        try {
          await firebase.auth().sendSignInLinkToEmail(this.email, actionCodeSettings);
          window.localStorage.setItem('emailForSignIn', this.email);
          this.clearNotification();
          this.success = 'sent email. please check your inbox';
        } catch (e) {
          console.error(e);
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
      clearNotification: function () {
        this.error = '';
        this.success = '';
      },
    }
  };
</script>

<style>
</style>
