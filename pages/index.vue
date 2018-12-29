<template>
  <section class="container">
    <div>
      <section>
        <div class="notification">
          Hi {{ user.displayName }}!
        </div>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div
                v-if="!!user.photoURL"
                class="media-left">
                <figure class="image is-48x48">
                  <img
                    :src="user.photoURL"
                    :alt="user.displayName">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ user.displayName }}</p>
                <p class="subtitle is-6">{{ user.email }}</p>
              </div>
              <div class="content">
                uid: {{ user.uid }}
                <br>
                Email Verified: {{ user.emailVerified }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    middleware: 'authenticated',
    computed: {
      ...mapGetters('user', ['user']),
    },
  };
</script>

<style>
</style>
