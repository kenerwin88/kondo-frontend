<template>

  <div class="callback">
    <div>
      <header class="header-global">
        <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
          <div class="container">
            <a class="navbar-brand mr-lg-5" href="../index.html">
              <img src="../assets/brand/white.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global"
                    aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbar_global">
              <div class="navbar-collapse-header">
                <div class="row">
                  <div class="col-6 collapse-brand">
                    <a href="../index.html">
                      <img src="../assets/brand/blue.png">
                    </a>
                  </div>
                  <div class="col-6 collapse-close">
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global"
                            aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
              <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item">
                  <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                    <i class="ni ni-ui-04 d-lg-none"></i>
                    <span class="nav-link-inner--text">Blog</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                    <i class="ni ni-collection d-lg-none"></i>
                    <span class="nav-link-inner--text">Examples</span>
                  </a>
                  <div class="dropdown-menu">
                    <a href="../examples/landing.html" class="dropdown-item">Landing</a>
                    <a href="../examples/profile.html" class="dropdown-item">Profile</a>
                    <a href="https://github.com/login/oauth/authorize?client_id=Iv1.e37b8bbbfd7d3d07"
                       class="dropdown-item">Login</a>
                    <a href="../examples/register.html" class="dropdown-item">Register</a>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </header>
      <main>
        <div class="position-relative">
          <section class="section section-lg section-shaped pb-300">
            <h1>Callback Processor</h1>
            <p>Code: {{ code }}</p>
            <p>Token: {{ token }}</p>
            <div class="shape shape-style-1 shape-default">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <section class="section section-lg pt-lg-0 mt--200">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <h1 class="display-3  text-white">Think of Kondo.io as an organization-level linter
                    </h1>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
    </main>
  </div>
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
          console.log('Already logged in!');
        } else {
          this.token = axios.post('http://localhost:8000/login/github', null, {
            params: {
              state: '1234',
              code: this.code
            }
          })
            .then(
              response =>
                localStorage.setItem('user-token', response.data),
            );
          console.log(this.token);
        }
      },
    },

    mounted() {
      this.getToken();
    },
  };
</script>
