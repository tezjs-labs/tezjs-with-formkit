<script >
import headerComponent from "/@/components/header.vue";
import footerComponent from "/@/components/footer.vue";
export default {
  components: {
    headerComponent: headerComponent,
    footerComponent:footerComponent
  },
  head: {
    title: "tezjs:Form-kit",
  },
};
</script>
<template>
  <headerComponent></headerComponent>
  <div class="my-12 flex  
              justify-center">
    <FormKit
    type="form"
    class="w-full"
    :config="{ validationVisibility: 'submit' }"
>
  <FormKit
    type="text"
    label="Name"
    validation="required|length:3"
    help="Enter your full name."
  />
  <FormKit
    type="date"
    label="Birthday"
    validation="required|date_between:1990-01-01 00:00:00,1999-12-31 23:59:59"
    :validation-messages="{ date_between: 'Only for those born in the 90s.' }"
    help="Enter your date of birth"
  />
  <!-- We override validation-visibility for the input below: -->
  <FormKit
    type="tel"
    label="Phone Number"
    placeholder="xxx-xxx-xxxx"
    validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
    validation-visibility="live"
    help="What are your digits?"
  />
</FormKit>
</div>

 <footerComponent></footerComponent>
</template>