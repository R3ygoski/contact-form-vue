<script setup lang="ts">
  defineProps({
    state: Object
  })
</script>

<template>
  <div>
    <label class="checkbox-btn">
      <input type="checkbox" name="consent" id="consent" v-model="state!.value.isChecked">
      <span class="check"></span>
    </label>
    <label class="consent-label" for="consent"> I consent to being contacted by the team <span class="required-field">*</span></label>
  </div>
  <p v-if="state!.error.value" class="error">{{ state!.error.message }}</p>
</template>

<style scoped lang="scss">
  @use '../scss/var' as v;

  div {
    display: flex;
    align-items: center;
    margin-top: 2.25rem;
    padding: 0 0.5rem;
    .checkbox-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.15rem;
      height: 1.15rem;
      border: 1px solid v.$green-600;
      border-radius: 0.25rem;
      input {
        display: none;
      }
      input:checked  {
        border: 1px solid v.$red-200;
      }
      input:checked + .check {
        background: url('../assets/images/icon-checkbox-check.svg') no-repeat center;
      }
      .check {
        display: inline-block;
        width: 1.15rem;
        height: 1.15rem;
        border-radius: 0.25rem;
      }
    }
    .consent-label {
      width: 100%;
      font-size: 0.825rem;
      margin-left: 1.25rem;
      letter-spacing: 0.1rem;
      line-height: 1.25rem;
    }
  }
  .error {
    margin-top: 1.25rem;
    color: v.$red-200;
  }
</style>
