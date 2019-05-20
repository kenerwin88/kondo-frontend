<template>
  <div>
    <p>JWT: {{jwt}}</p>
    <p>User ID: {{jwtData.sub}}</p>
    <p>Issuer: {{jwtData.iss}}</p>
    <button @click.native="doSomethingWithJWT()">Do Something</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jwt: '',
    };
  },

  computed: {
    // this.jwtData will update whenever this.jwt changes.
    jwtData() {
      // JWT's are two base64-encoded JSON objects and a trailing signature
      // joined by periods. The middle section is the data payload.
      if (this.jwt) return JSON.parse(atob(this.jwt.split('.')[1]));
      return {};
    },
  },

  methods: {
    async fetchJWT() {
      // Error handling and such omitted here for simplicity.
      const res = await fetch('http://localhost:8000/login/github');
      this.jwt = await res.text();
    },

    async doSomethingWithJWT() {
      const res = await fetch('http://localhost/vuejs-jwt-example/do-something', {
        method: 'POST',
        headers: new Headers({
          Authorization: `Bearer: ${this.jwt}`,
        }),
      });
        // Do stuff with res here.
    },
  },

  mounted() {
    this.fetchJWT();
  },
};
</script>
