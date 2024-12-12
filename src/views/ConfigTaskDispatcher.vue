<template>
  <div class="task-dispatcher-page">
    <!-- First Row: Task Dispatcher Name and Priority -->
    <div class="row first-row">
      <div class="field">
        <label for="dispatcherName">Task Dispatcher Name:</label>
        <input type="text" id="dispatcherName" v-model="dispatcherName" placeholder="Enter task dispatcher name" />
      </div>
      <div class="field">
        <label for="priority">Priority:</label>
        <select id="priority" v-model="priority">
          <option value="Normal">Normal</option>
          <option value="Prioritize">Prioritize</option>
          <option value="Urgent">Urgent</option>
        </select>
      </div>
    </div>

    <!-- Second Row: Execution Pattern -->
    <div class="row second-row">
      <div class="label-container">
        <label class="execution-pattern-label">Execution Pattern:</label>
      </div>
      <div class="execution-pattern-container">
        <!-- Radio Buttons for Execution Pattern -->
        <div class="pattern-options">
          <label><input type="radio" value="date" v-model="executionPattern" /> Specified by Date</label>
          <label><input type="radio" value="time" v-model="executionPattern" /> Specified by Time Period</label>
          <label><input type="radio" value="string" v-model="executionPattern" /> Specified by String</label>
        </div>
      </div>
    </div>

    <div class="row second-row-content">
      <!-- Conditional Rows Based on Execution Pattern -->
      <div v-if="executionPattern === 'date'" class="conditional-row">
        <p>Content for specified by date (to be clarified).</p>
      </div>

      <div v-if="executionPattern === 'time'" class="conditional-row">
        <p>Content for specified by time period (to be clarified).</p>
      </div>

      <div v-if="executionPattern === 'string'" class="conditional-row">
        <p>Content for specified by string (to be clarified).</p>
      </div>
    </div>

    <!-- Third Row: Additional Content Placeholder -->
    <div class="row third-row">
      <p>Additional content for the third row (to be specified).</p>


    </div>

    <!-- Fourth Row: Additional Content Placeholder -->
    <div class="row fourth-row">
      <p>Additional content for the fourth row (to be specified).</p>
    </div>

    <!-- Table -->
    <div class="table-container">
      <h3>Task Dispatcher Table</h3>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Priority</th>
          <th>Execution Pattern</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(dispatcher, index) in dispatchers" :key="index">
          <td>{{ dispatcher.name }}</td>
          <td>{{ dispatcher.priority }}</td>
          <td>{{ dispatcher.executionPattern }}</td>
          <td>
            <button @click="editDispatcher(index)">Edit</button>
            <button @click="deleteDispatcher(index)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      dispatcherName: '',
      priority: 'Normal',
      executionPattern: 'date',
      dispatchers: [
        { name: 'Sample Dispatcher 1', priority: 'Normal', executionPattern: 'date' },
        { name: 'Sample Dispatcher 2', priority: 'Urgent', executionPattern: 'time' },
      ],
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ]
    };
  },
  methods: {
    editDispatcher(index) {
      alert(`Edit dispatcher at index ${index}`);
    },
    deleteDispatcher(index) {
      this.dispatchers.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.task-dispatcher-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.label-container {
  margin-right: 10px;
}

.field {
  display: flex;
  align-items: center;
  justify-content: stretch;
  margin-right: 20px;
  flex: 1;
  max-width: 400px; /* Set the maximum width */
}

.field label {
  width: 200px;
  text-align: right;
  margin-right: 10px;
  font-weight: bold;
}

.field input,
.field select {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 400px; /* Set the maximum width */
}

.execution-pattern-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pattern-options label {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.pattern-options input {
  margin-right: 5px;
}

.table-container {
  margin-top: 20px;
}

.table-container table {
  width: 100%;
  border-collapse: collapse;
}

.table-container th,
.table-container td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.table-container th {
  background-color: #f9f9f9;
}

.table-container button {
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.table-container button:last-child {
  background-color: #dc3545;
}

.table-container button:hover {
  opacity: 0.8;
}

.dropdown-container {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}

.dropdown-container label {
  margin-bottom: 5px;
  font-weight: bold;
}
</style>
