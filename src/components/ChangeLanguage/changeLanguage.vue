<template>
  <div>
    <h2>{{ $t('changeLanguage')}}</h2>
    <select v-model="$i18n.locale" class="language-select">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>
<script src="./changeLanguage.js"></script>
<style scoped>
select.language-select {
    width: 100%;
}
</style>
