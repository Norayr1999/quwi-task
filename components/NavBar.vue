<template>
  <nav>
    <ul>
      <div>
        <li><a href="#" id="logo">Q</a></li>
      </div>
      <div>
        <li><NuxtLink to="/project">PROJECTS</NuxtLink></li>
        <li @click="logout"><a>LOGOUT</a></li>
      </div>
    </ul>
  </nav>
</template>

<script>
  export default {
    methods: {
      logout () {
        this.$store.dispatch('logout');
        this.$router.push('/login');
      }
    }
  }
</script>

<style  lang="scss">
  nav {
    overflow: hidden;
    background-color: #FAFAFA;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 0 5px rgb(0 0 0 / 25%);

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style-type: none;
      margin: 0;
      padding: 0 30px;
      width: 100%;

      #logo {
        display: flex;
        justify-self: start;
        color: black;
        font-weight: 700;
        font-size: 24px;
      }

      li {
        display: inline;
        font-family: "Fira Sans", sans-serif;
        font-size: 17px;

        a {
          color: #636363;
          text-decoration: none;
          padding: 14px;
          text-transform: uppercase;
          font-size: 14px;
          &.nuxt-link-active {
            color: red;
          }
        }
      }
    }
  }
</style>
