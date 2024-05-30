<script setup lang="ts">
  defineProps({
    state: Object
  })
</script>

<template>
  <label for="message">Message <span class="required-field">*</span></label>
  <textarea name="message" id="message" cols="30" :class="state!.error.value?'textarea-error':''" v-model="state!.value"></textarea>
  <p v-if="state!.error.value" class="error">{{ state!.error.message }}</p>
</template>

<style scoped lang="scss">
  @use '../scss/var' as v;
  
  textarea {
    width: 100%;
    height: 15rem;
    margin-top: 0.75rem;
    padding: 1rem;
    border: 1px solid v.$grey-500;
    border-radius: 0.5rem;
  }
  .textarea-error {
    border-color: v.$red-200;
  }
  .error {
    margin-top: 0.65rem;
    color: v.$red-200;
  }

  @media (min-width: 1024px){
    textarea {
      height: 6.5rem;
    }
  }
</style>
