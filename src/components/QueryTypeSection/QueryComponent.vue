<script setup lang="ts">
  import QueryOptionsComponent from './QueryOptionsComponent.vue'

  defineProps({
    state: Object
  })

</script>

<template>
  <p>Query Type <span class="required-field">*</span></p>
  <div class="query-options-wrapper">
    <QueryOptionsComponent name="generalEnquiry" label="General Enquiry" :state="state" value="opt1"/>
    <QueryOptionsComponent name="supportRequest" label="Support Request" :state="state" value="opt2"/>
  </div>
  <p v-if="state!.error.value" class="error">{{ state!.error.message }}</p>
</template>

<style scoped lang="scss">
  @use '../../scss/var' as v;

  .query-options-wrapper {
    margin-top: 1.25rem;
  }

  .error {
    margin-top: 1.25rem;
    color: v.$red-200;
  }

  @media (min-width: 1024px){
    .query-options-wrapper {
      display: flex;
      margin-top: 0.4rem;
      gap: 1.2rem;
    }
  }
</style>