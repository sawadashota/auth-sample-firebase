<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <ReAuthWithCredentialsForm v-if="isPassword"/>
        <ReAuthWithGoogleButton v-if="isGoogle"/>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';
  import firebase from '../plugins/firebase';
  import {ReAuthWithCredentialsForm, ReAuthWithGoogleButton} from '../components';

  export default {
    middleware: 'authenticated',
    components: {
      ReAuthWithCredentialsForm,
      ReAuthWithGoogleButton,
    },
    data() {
      return {
        email: '',
        password: '',
        error: '',
        success: '',
      };
    },
    computed: {
      ...mapGetters('user', ['user']),
      isPassword: function () {
        return this.user.provider === 'password';
      },
      isGoogle: function () {
        return this.user.provider === 'google.com';
      }
    },
    methods: {
      clearError: function () {
        this.error = '';
      },
      reAuthWithGoogle: async function() {
        const user = firebase.auth().currentUser;
        try {
          await user.reauthenticateWithRedirect(new firebase.auth.GoogleAuthProvider());
        } catch (e) {
          this.error = e.message;
        }
      },
    }
  };
</script>

<style>
</style>
