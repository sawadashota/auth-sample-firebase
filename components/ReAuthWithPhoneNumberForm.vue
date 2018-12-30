<template>
  <section>
    <div
      v-if="!!error"
      class="notification is-danger">
      {{ error }}
    </div>
    <form @submit.prevent="submit">
      <div class="field">
        <div class="field">
          <p class="control has-icons-right">
            <input
              v-model="phoneNumber"
              class="input"
              type="text"
              placeholder="+818012349876"
            >
          </p>
        </div>
      </div>
      <div
        id="recaptcha-container"
        class="field"/>
      <div class="field">
        <p class="control">
          <button
            id="recaptcha-button"
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
        phoneNumber: '',
        error: '',
      };
    },
    mounted: function () {
      this.renderRecaptcha();
    },
    methods: {
      renderRecaptcha: function () {
        firebase.auth().useDeviceLanguage();
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        window.recaptchaVerifier.render().then(function (widgetId) {
          window.recaptchaWidgetId = widgetId;
        });
      },
      submit: async function () {
        const appVerifier = window.recaptchaVerifier;

        try {
          window.confirmationResult = await firebase.auth().signInWithPhoneNumber(this.phoneNumber, appVerifier);
          this.$router.push({path: '/verify_phone/code'});
        } catch (e) {
          console.error(e);
          this.error = e.message;
        }
      },
      clearNotification: function () {
        this.error = '';
      },
    }
  };
</script>

<style>
</style>
