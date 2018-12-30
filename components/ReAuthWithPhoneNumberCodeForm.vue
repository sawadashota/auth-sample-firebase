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
        <div class="field">
          <p class="control has-icons-right">
            <input
              v-model="code"
              class="input"
              type="text"
              placeholder="code"
            >
          </p>
        </div>
      </div>
      <div class="field">
        <p class="control">
          <button
            id="recaptcha-button"
            type="submit"
            class="button is-primary">
            Verify
          </button>
        </p>
      </div>
    </form>
  </section>
</template>

<script>
  import firebase from '~/plugins/firebase';
  import storeUser from'~/plugins/store-user';

  export default {
    data() {
      return {
        code: '',
        error: '',
        success: '',
      };
    },
    methods: {
      submit: async function () {
        const user = firebase.auth().currentUser;
        try {
          const credential = firebase.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, this.code);
          const newUser = await user.linkWithCredential(credential);
          storeUser(this.$store, newUser);
          this.$router.push({path: '/'});
        } catch (e) {
          console.error(e);
          this.error = e.message;
        } finally {
          window.confirmationResult = null;
        }
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
