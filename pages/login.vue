<template>
    <form @submit.prevent="login">
        <h3>Login</h3>
        <input v-model="email"
               :class="{
                  invalid: errorMessages.email
               }"
               type="text"
               name="email"
               placeholder="Email" />
        <div class="error-message">{{ errorMessages.email }}</div>
        <input v-model="password"
               :class="{
                  invalid: errorMessages.password
               }"
               type="password"
               name="password"
               placeholder="Password"/>
        <div class="error-message">{{ errorMessages.password }}</div>
        <input type="submit" name="acao" value="Login"/>
    </form>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null,
    errorMessages: {
      email: null,
      password: null
    }
  }),
  methods: {
    async login () {
      try {
        this.errorMessages = {
          email: null,
          password: null
        };

        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        });
        this.$router.push('/project');
      } catch (e) {
        console.log('e', e);
        this.errorMessages = e.first_errors
        // Object.keys(e.first_errors).map(error => this.errorMessages[error])
      }
    }
  }
}
</script>

<style lang="scss">
  form {
      max-width: 460px;
      width: 70%;
      padding: 30px 45px 30px 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #F4F4F4;

      h3 {
        text-transform: uppercase;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 700;
        margin-bottom: 5px;
        font-size: 24px;

      }

      input[type=text],
      input[type=password] {
        width: 100%;
        height: 45px;
        border: 1px solid #ccc;
        padding-left: 10px;
        margin: 12px 0 0;
        border-radius: 3px;

        &:focus {
          outline: 0;
        }
      }

      input[type=submit] {
        height: 35px;
        cursor: pointer;
        background: #395378;
        color: white;
        text-transform: uppercase;
        border: 0;
        transition: 0.15s;
        padding: 0 28px;
        margin-top: 20px;
        font-weight: 700;
        border-radius: 5px;
      }

      input.invalid {
        border: 1px solid red;
      }

    .error-message {
      color: red;
    }
  }
</style>
