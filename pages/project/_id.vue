<template>
  <div class="container">
    <nav>
      <ul>
        <button type="button" class="btn btn-dark">Back</button>
      </ul>
    </nav>

    <div class="editor-box">
      <h3>Name</h3>
      <div class="qowi-box">
        <input v-model="name"
               id= "email"
               type="text"
               name="email"
               placeholder="Quwi-Desktop"/>
        <input @click.prevent="updateProject"
               class="submit-ok"
               type="submit"
               name="acao"
               value="OK"/>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    async asyncData({ store, route, params }) {
      let id = null;
      if (process.server) {
        id = params.id
      } else {
        id = route.params.id
      }

      const project  = await store.dispatch('project/getProject', id);
      return { name: project.name, id: id }
    },
    methods: {
      async updateProject () {
        try {
          await this.$store.dispatch('project/updateProject', {
            id: this.id,
            name: this.name
          });
          this.$router.push('/project')
        } catch (e) {
          console.log('error', e)
        }
      }
    }
  }
</script>

<style  lang="scss">
  nav {
    background-color: #C1C8D2;
    top: 0;
    width: 100%;
    box-shadow: 0 0 5px rgb(0 0 0 / 25%);

    ul {
      height: 90px;
      align-items: center;
      display: flex;
      padding: 0 30px;
      width: 100%;

      button  {
        padding: 15px  22px;
        border-radius: 5px;
        border: 1px solid #CECECE;
        background: #CECECE;
        font-size: 24px;
        font-weight: 700;
      }
    }
  }

  .container {
    justify-content: center;
    background: #F4F4F4;
    height: 100vh;
    font-family: Arial,Helvetica,sans-serif;

    .editor-box {
      text-align: left;
      height: fit-content;
      width: 96%;
      margin: auto;
      border-radius: 8px;
      font-size: 14px;
      background: #fff;
      box-shadow: 0 0 5px rgb(0 0 0 / 20%);
      margin-top: 130px;
      padding: 40px 30px 60px;
      display: flex;
      align-items: center;

      #email {
        padding: 14px 22px;
        border: 1px solid #ccc;
        margin-right: 8px;
        border-radius: 3px;
        width: 50%;
        font-size: 16px;
      }

      .submit-ok {
        padding: 14px 22px;
        border: 1px solid #ccc;
        background: #395378;
        border-radius: 5px;
        color: #FFF;
        font-size: 16px;
        font-weight: 700;
      }

      .qowi-box {
        width: 100%;
        justify-content: center;
        display: flex;

        input[type=text] {
          color: black;
          font-weight: 500;
        }

      }

      h3 {
        font-weight: 500;
      }

    }

  }


</style>
