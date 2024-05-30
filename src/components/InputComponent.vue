<script setup lang="ts">

  defineProps({
    label: String,
    name: String,
    type: String,
    state: Object
  })

</script>

<template>
  <div>
    <label :for="name">{{ label }} <span class="required-field">*</span></label>
    <input :id="name" :name="name" :type="type" :class="state!.error.value?'input-error':''" v-model="state!.value">
    <p v-if="state!.error.value" class="error">{{ state!.error.message }}</p>
  </div>
</template>

<style scoped lang="scss">
  @use '../scss/var' as v;

  input {
    width: 100%;
    margin-top: 0.75rem;
    padding: 1rem;
    border: 1px solid v.$grey-500;
    border-radius: 0.5rem;
    &:hover, &:focus {
      border: 1px solid v.$green-600;
    }
  }
  .input-error {
    border-color: v.$red-200;
  }
  .error {
    margin-top: 0.65rem;
    color: v.$red-200;
  }

  @media (min-width: 1024px){
    div {
      flex: 1 0.5 45%;
      input {
        width: 100%;
        margin-top: 0.75rem;
        padding: 1rem;
        border: 1px solid v.$grey-500;
        border-radius: 0.5rem;
      }
    }
  }
</style>
