<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">Phone Number Verification</h1>
        <ReAuthWithPhoneNumberForm/>
      </div>
    </div>
  </section>
</template>

<script>
  import {ReAuthWithPhoneNumberForm} from '~/components';

  export default {
    middleware: 'authenticated',
    components: {
      ReAuthWithPhoneNumberForm,
    },
  };
</script>

<style>
</style>
