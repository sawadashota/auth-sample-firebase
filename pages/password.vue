<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">Edit Password</h1>
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
                Update
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import firebase from '../plugins/firebase';

  export default {
    middleware: 'authenticated',
    data() {
      return {
        password: '',
        error: '',
        success: '',
      };
    },
    methods: {
      submit: async function () {
        if (!this.validate()) {
          this.clearPassword();
          return;
        }

        const user = firebase.auth().currentUser;

        try {
          await user.updatePassword(this.password);
          this.clearError();
          this.success = 'update password successfully';
        } catch (e) {
          this.error = e.message;
        } finally {
          this.clearPassword();
        }
      },
      validate: function() {
        this.clearError();
        if (this.password === '') {
          this.error = 'password should be present';
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
