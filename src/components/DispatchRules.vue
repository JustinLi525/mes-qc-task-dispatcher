<template>
  <div class="dispatch-rules">
    <h1>Dispatch Rules</h1>
    <DispatchRuleForm />
  </div>
</template>

<script>
import DispatchRuleForm from "@/components/DispatchRuleForm.vue";

export default {
  components: {
    DispatchRuleForm,
  },
};
</script>

<style scoped>
.dispatch-rules {
  padding: 2rem;
  text-align: center;
}
</style>
