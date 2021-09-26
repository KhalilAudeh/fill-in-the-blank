<template>
  <div>
    <select v-model="$i18n.locale">
      <option
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :value="lang">
          {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return { langs: ['norwegian', 'english'] }
  }
}
</script>

<style scoped>
select {
   text-transform: capitalize !important;
   font-size: 20px;
   padding: 5px 10px;
   margin: 20px 10px;
}
</style>