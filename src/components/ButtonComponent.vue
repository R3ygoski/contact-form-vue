<script setup lang="ts">
  import { checkForm } from '../model/formModel';
  
</script>

<template>
  <button type="submit" @click="()=>{checkForm()}">Submit</button>
</template>

<style scoped lang="scss">
  @use '../scss/var' as v;

  button {
    width: 100%;
    height: 58px;
    margin-top: 2.85rem;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    background: v.$green-600;
    color: v.$white;
    font-weight: 700;
    cursor: pointer;

    box-shadow: v.$shadow-sm;

    &:hover {
      filter: brightness(1.1);
    }
    &:active {
      filter: brightness(0.9);
    }
  }
</style>
