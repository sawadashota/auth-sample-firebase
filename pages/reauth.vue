<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">Re Authenticate</h1>
      </div>
    </div>
    <div
      v-if="hasPasswordProvider"
      class="columns">
      <div class="column is-half is-offset-one-quarter">
        <ReAuthWithCredentialsForm/>
      </div>
    </div>
    <div
      v-if="hasSNSProviders"
      class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h2 class="title is-4">Re Authenticate SNS Account</h2>
        <ReAuthWithGoogleButton v-if="hasGoogleProvider"/>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';
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
      hasPasswordProvider: function () {
        return this.user.providers.includes('password');
      },
      hasSNSProviders: function () {
        return this.user.providers.includes('google.com');
      },
      hasGoogleProvider: function () {
        return this.user.providers.includes('google.com');
      }
    },
  };
</script>

<style>
</style>
