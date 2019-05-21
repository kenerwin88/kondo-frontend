<template>
  <div>
    <ul>
      <li v-for="org in orgs">
        {{ org.name }} - {{ org.installation_id }}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    components: {},
    data() {
      return {
        token: localStorage.getItem('user-token'),
        orgs: []
      };
    },
    methods: {
      getOrganizations() {
        if (localStorage.getItem('user-token')) {
          this.orgs = axios.post('http://localhost:8000/organizations', null, {
            params: {
              jwt: this.token
            }
          })
            .then(
              response =>
                this.orgs = response.data,
            );
        } else {
          console.log('Not logged in!');
        }
      },
    },

    mounted() {
      this.getOrganizations();
    },
  };
</script>
