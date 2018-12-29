<template>
  <span>
    <span v-if="done">
      sent email verification
    </span>
    <button
      v-else
      class="button is-small"
      @click="onClick">
      Send Email Verification
    </button>
  </span>
</template>

<script>
  import firebase from '../plugins/firebase';

  export default {
    data() {
      return {
        done: false,
      };
    },
    methods: {
      onClick: async function() {
        const user = firebase.auth().currentUser;
        try {
          await user.sendEmailVerification();
          this.done = true;
        } catch (e) {
          console.error(e);
        }
      },
    }
  };
</script>

<style>
</style>
