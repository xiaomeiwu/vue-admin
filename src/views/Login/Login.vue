<template>
  <div class="login">
    <div class="login-submit">
      <xm-input label="用户名" v-model="username"></xm-input>
      <xm-input label="密码" type="password" v-model="password"></xm-input>
      <div class="login-operator">
        <button class="p-2 bg-blue-500 rounded w-full" @click="login">
          登&nbsp;录
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { XmInput } from "../../components";
export default {
  components: {
    XmInput
  },
  data() {
    return {
      username: "xiaomeiwu",
      password: "123456"
    };
  },
  methods: {
    login() {
      let { username, password } = this;
      if (username === "xiaomeiwu" && password === "123456") {
        this.$router.replace({ path: "/admin" });
      }
    }
  }
};
</script>
