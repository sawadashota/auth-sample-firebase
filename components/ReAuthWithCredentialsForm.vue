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
    <form @submit.prevent="reAuthWithCredential">
      <div class="field">
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
        <p class="control">
          <input
            v-model="password"
            class="input"
            type="password"
            placeholder="New Password">
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button
            type="submit"
            class="button is-primary">
            Submit
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
        password: '',
        error: '',
        success: '',
      };
    },
    methods: {
      reAuthWithCredential: async function () {
        if (!this.validate()) {
          this.clearPassword();
          return;
        }

        const user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(this.email, this.password);
        try {
          await user.reauthenticateAndRetrieveDataWithCredential(credential);
          this.clearNotification();
          this.clearForm();
          this.success = 're authenticated successfully!';
        } catch (e) {
          this.clearNotification();
          this.error = e.message;
        } finally {
          this.clearPassword();
        }
      },
      validate: function () {
        this.clearNotification();
        if (this.email === '' || this.password === '') {
          this.error = 'both email and password should be present';
          return false;
        }
        return true;
      },
      clearNotification: function () {
        this.error = '';
        this.success = '';
      },
      clearForm: function () {
        this.email = '';
        this.clearPassword();
      },
      clearPassword: function () {
        this.password = '';
      },
    }
  };
</script>

<style>
</style>
