<script setup lang="ts">
  const props = defineProps({
    label: String,
    name: String,
    state: Object,
    value: String
  })

</script>

<template>
  <div :class="props.state!.value == props.value?'query-options query-options--active':'query-options'">
    <label class="radio-btn">
      <input name="query" :id="name" type="radio" v-model="state!.value" :value="value">
      <span class="check"></span>
    </label>
    <label class="query-label" :for="name">{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
  @use '../../scss/var' as v;

  .query-options {
    display: flex;
    align-items: center;
    margin-top: 0.9325rem;
    padding: 1rem 1.8rem;
    border: 1px solid v.$grey-500;
    border-radius: 0.5rem;
    .query-label {
      margin-left: 1rem;
      letter-spacing: 0.1rem;
    }
    .radio-btn {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 1rem;
      height: 1rem;
      border: 1px solid v.$grey-500;
      border-radius: 50%;
      input {
        display: none;
      }
      .check {
        display: inline-block;
        width: 10px;
        height: 10px;
        
        border-radius: 50%;
      }
    }
  }
  .query-options--active {
    border: 1px solid v.$green-600;
    background: v.$green-200;
      input:checked + .check {
        background: url('../../assets/images/icon-radio-selected.svg') no-repeat center;
      }
  }

  @media (min-width: 1024px){
    .query-options {
      width: 50%;
    }
  }
</style>
