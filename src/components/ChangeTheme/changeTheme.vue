<template>
  <div>
    <hr />
    <h2>{{ $t("changeTheme") }}</h2>
    <div class="options">
      <theme-change
        :value="themeColor"
        @input="UPDATE_THEME($event.hex)"
        :disableAlpha="true"
      />
      <language-change />
    </div>
  </div>
</template>

<script src="./changeTheme.js"></script>

<style scoped>
.options {
  display: flex;
  justify-content: space-around;
}
</style>
