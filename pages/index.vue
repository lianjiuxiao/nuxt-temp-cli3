<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-temp-v3
      </h1>
      <h2 class="subtitle">
        My glorious Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>

      <p>hasValue在dom中能实现吗{{ hasValue('111111111111') }}</p>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
  import {getUserInfo} from '~/network/pageNetWork'

  export default {
    components: {
      Logo
    },
    computed: {
      ...mapGetters('ModuleUser', ['user']),
      ...mapState({
        userWx: state => state.ModuleUser.wx
      })
    },
    mounted() {
      // console.log(this.user)
      // console.log(this.userWx)
      this.$mock({
        url: "/city",
        method: 'get',
        headers: {token2: "123456"}
      }).then(res => {
      })
      this.$axios({
        url: "/login",
        params: {username: 'lisanxing', userpwd: '123456'},
        method: 'get',
        headers: {token2: "45678"},
        auth: {token2: "123456"}
      }).then(res => {
      })
      this.$cross({
        url: "https://www.easy-mock.com/mock/5bf50d687392ed1f6bff6f1b/mock-vue/city",
        method: 'get',
        // headers: {token2: "123456"}
      }).then(res => {
      })
      this.appReady(() => {

      })
      const option = {
        token: '1111111'
      }
      getUserInfo(option).then(res => {
        console.log("res>>>>>>>");
        console.log(res);
      })
    }
  }
</script>

<style>

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
