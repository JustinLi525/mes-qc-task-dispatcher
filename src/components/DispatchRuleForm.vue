<template>
  <div class="dispatch-rule-form">
    <h3>Create Dispatch Rule</h3>
    <form @submit.prevent="submitRule">
      <label for="rule-type">Rule Type:</label>
      <select id="rule-type" v-model="rule.type">
        <option value="time-based">Time-Based</option>
        <option value="periodic">Periodic</option>
        <option value="custom">Custom</option>
      </select>

      <div v-if="rule.type === 'time-based'" class="rule-section">
        <label for="time">Time:</label>
        <input id="time" type="time" v-model="rule.time" />

        <label for="frequency">Frequency:</label>
        <select id="frequency" v-model="rule.frequency">
          <option value="daily">Daily</option>
          <option value="specific-day">Specific Day</option>
        </select>
      </div>

      <div v-if="rule.type === 'periodic'" class="rule-section">
        <label for="interval">Interval:</label>
        <input id="interval" type="number" v-model="rule.interval" />

        <label for="unit">Unit:</label>
        <select id="unit" v-model="rule.unit">
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
        </select>
      </div>

      <div v-if="rule.type === 'custom'" class="rule-section">
        <label for="custom-rule">Custom Rule:</label>
        <textarea id="custom-rule" v-model="rule.customRule"></textarea>
      </div>

      <button type="submit">Add Rule</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rule: {
        type: 'time-based',
        time: '',
        frequency: 'daily',
        interval: 0,
        unit: 'minutes',
        customRule: '',
      },
    };
  },
  methods: {
    submitRule() {
      console.log('Rule Submitted:', this.rule);
      alert('Rule submitted successfully!');
    },
  },
};
</script>

<style scoped>
.dispatch-rule-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.rule-section {
  margin-top: 1rem;
}

label {
  display: block;
  margin-top: 0.5rem;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369a6c;
}
</style>
