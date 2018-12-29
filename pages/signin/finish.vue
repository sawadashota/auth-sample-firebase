<template>
  <section>
    <div class="notification is-danger">
      Failed to authenticate
    </div>
  </section>
</template>

<script>
  export default {
    middleware: 'emailSignIn',
  };
</script>

<style>
</style>
