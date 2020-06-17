<template>
  <div id="app" class="container">
    <header-component></header-component>
    <h1 class="titile" v-if="authenticated" :style="{ color: updatedColor }">
      {{ $t("title") }}
    </h1>
    <router-view />
    <div>
      <theme-change v-if="authenticated" />
    </div>
  </div>
</template>

<script>
import ThemeChange from '@/components/ChangeTheme/changeTheme.vue';
import HeaderComponent from '@/components/Header/header.vue';

export default {
  name: 'App',
  components: {
    ThemeChange,
    HeaderComponent,
  },
  computed: {
    updatedColor() {
      return this.$store.getters.themeColor;
    },
    authenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  color: #2c3e50;
  margin-top: 60px;
}
.titile {
  color: #005bcc;
  font-size: 75px;
  text-align: center;
}
</style>
