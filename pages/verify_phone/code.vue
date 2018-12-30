<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">Enter Code</h1>
        <ReAuthWithPhoneNumberCodeForm/>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <p>
          <nuxt-link to="/verify_phone">
            Back
          </nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import {ReAuthWithPhoneNumberCodeForm} from '~/components';

  export default {
    middleware: 'authenticated',
    components: {
      ReAuthWithPhoneNumberCodeForm,
    },
  };
</script>

<style>
</style>
