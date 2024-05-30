<script setup lang="ts">
  import InputComponent from './components/InputComponent.vue';
  import QueryComponent from './components/QueryTypeSection/QueryComponent.vue';
  import MessageComponent from './components/MessageComponent.vue';
  import ConsentComponent from './components/ConsentComponent.vue';
  import ButtonComponent from './components/ButtonComponent.vue';
  import SuccessModalComponent from './components/SuccessModalComponent.vue';

  import { formModel } from './model/formModel';

</script>

<template>
  <form @submit.prevent>
    <h1>Contact Us</h1>
    <section class="input-section">
      <InputComponent label="First Name" name="firstName" type="text" :state="formModel.firstName"/>
      <InputComponent label="Last Name" name="lastName" type="text" :state="formModel.lastName"/>
      <InputComponent label="Email Address" name="email" type="email" :state="formModel.email"/>
    </section>
    <section class="query-section">
      <QueryComponent :state="formModel.queryType"/>
    </section>
    <section class="message-section">
      <MessageComponent :state="formModel.messages"/>
    </section>
    <ConsentComponent :state="formModel.consent"/>
    <ButtonComponent/>
  </form>
  <SuccessModalComponent v-if="formModel.valid"/>
</template>

<style scoped lang="scss">
  @use './scss/var' as v;

  form {
    display: flex;
    flex-direction: column;
    width: clamp(300px, 92%, 450px);
    height: auto;
    padding: 1.5rem;
    border-radius: 1rem;
    background: v.$white;
    box-shadow: v.$shadow-lg;
    h1 {
      font-size: 1.9325rem;
    }
    .input-section {
      display: flex;
      flex-direction: column;
      margin-top: 1.9rem;
      gap: 1.6rem;
    }
    .query-section {
      margin-top: 1.5rem;
    }
    .message-section {
      margin-top: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    form {
      width: 740px;
      padding: 2.5rem;
      .input-section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.6rem 1.2rem;
      }
    }
  }
</style>
