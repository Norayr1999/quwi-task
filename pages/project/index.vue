<template>
  <div class="container">
    <div class="body-table">
      <div class="project-body-box" v-for="project in projects"
            :key="project.id">
          <NuxtLink :to="`/project/${project.id}`"
                    class="project-box">
            <div class="project-logo">
              <img :src="project.logo_url"
                   alt="">
            </div>
            <div class="box-body">
              <div class="date">{{ project.name }}</div>
              <div class="time">{{ project.is_active ? 'Active' : 'Inactive' }}</div>
              <div class="users-wrapper">
                <div v-for="user in project.users"
                    :key="user.id"
                    class="spots">
                  <p>{{ user.name }}</p>
                  <p>{{ user.dta_activity }}</p>
                </div>
              </div>
            </div>
          </NuxtLink>
      </div>
      <div class="project-body-box" v-for="project in projects"
            :key="project.id">
          <NuxtLink :to="`/project/${project.id}`"
                    class="project-box">
            <div class="project-logo">
              <img :src="project.logo_url"
                   alt="">
            </div>
            <div class="box-body">
              <div class="date">{{ project.name }}</div>
              <div class="time">{{ project.is_active ? 'Active' : 'Inactive' }}</div>
              <div v-for="user in project.users"
                  :key="user.id"
                  class="spots">
                <p>{{ user.name }}</p>
                <p>{{ user.dta_activity }}</p>
              </div>
            </div>
          </NuxtLink>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    async asyncData({ store }) {
      await store.dispatch('project/getProjects');
      return {
        projects: store.state.project.projects
      }
    },
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

  .container {
    justify-content: center;
    background: #F4F4F4;
    height: 100vh;
    font-family: Arial,Helvetica,sans-serif;
    overflow-y: scroll;
    z-index: 10;

    .body-table {
      padding-top: 80px;
    }

    .body-table {
      text-align: left;
      border-collapse: collapse;
      height: fit-content;
      width: 50%;
      justify-content: center;
      margin: auto;
    }

    .project-body-box {
      a {
          text-decoration: none;
          color: black;
        }
        
      .project-box {
        padding: 25px 30px;
        display: flex;
        width: 100%;
        align-items: center;
        background: #fff;
        box-shadow: 0 0 5px rgb(0 0 0 / 20%);
        margin-top: 20px;
        border-radius: 8px;
        font-size: 14px;

        .box-body {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }
      }

      .time {
        color: green;
        font-size: 14px;
        width: 20%;
      }

      .date {
        width: 30%;
      }
      .users-wrapper {
        display: flex;
        flex-direction: column;
        width: 40%;
        min-width: 50%;
      }

      .spots {
        display: flex;
        padding-right: 20px;

        p {
          margin-bottom: 4px;
          width: 51%;
          &:first-child {
            margin-right: 20px;
          }
        }
      }

      .project-logo {
        padding-right: 40px;

        img {
          width: 30px;
        }
      }

    }

    td {
      font-weight: 700;
    }
  }
</style>
