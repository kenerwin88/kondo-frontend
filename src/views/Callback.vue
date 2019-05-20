<template>
  <div class="callback">
    <h1>Callback Processor</h1>
    <p>Code: {{ code }}</p>
    <p>Token: {{ token }}</p>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    components: {},

    data() {

      return {
        code: this.$route.query.code,
        token: localStorage.getItem('user-token')
      };
    },

    methods: {
      getToken() {
        if (localStorage.getItem('user-token')) {
          console.log("Already logged in!")
        }
        else {
          this.token = axios.post("http://localhost:8000/login/github", null, {
            params: {
              state: "1234",
              code: this.code
            }
          })
            .then(
              response =>
                localStorage.setItem('user-token', response.data),
            );
          console.log(this.token)
        }
      },
    },

    mounted() {
      this.getToken();
    },
  };
</script>
