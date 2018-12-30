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
    <button
      class="button"
      @click="onClick">
      Re Auth with Google
    </button>
  </section>
</template>

<script>
  import firebase from '~/plugins/firebase';

  export default {
    data() {
      return {
        error: '',
        success: '',
      };
    },
    methods: {
      onClick: async function() {
        const user = firebase.auth().currentUser;
        try {
          await user.reauthenticateWithPopup(new firebase.auth.GoogleAuthProvider());
          this.clearNotification();
          this.success = 're authenticated successfully!';
        } catch (e) {
          this.clearNotification();
          this.error = e.message;
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
