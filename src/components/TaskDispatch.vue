<template>
  <div id="task-dispatch-window" style="padding: 20px;">
    <!-- Top Toolbar -->
    <div class="toolbar" style="margin-bottom: 20px;">
      <el-button type="primary">数据源设置</el-button>
      <el-button>添加任务</el-button>
      <el-button>修改任务</el-button>
      <el-button type="danger">删除任务</el-button>
      <el-button>查看结果</el-button>
      <el-button type="success">确定</el-button>
      <el-button>取消</el-button>
    </div>

    <!-- Main Form -->
    <el-form
        :model="task"
        label-width="100px"
        @submit.prevent="submitTask"
        style="background: #fafafa; padding: 20px; border-radius: 4px;"
    >
      <el-form-item label="任务名称:">
        <el-input v-model="task.name" placeholder="输入任务名称"></el-input>
      </el-form-item>

      <el-form-item label="任务类型:">
        <el-select v-model="task.type" placeholder="选择任务类型" style="width: 200px;">
          <el-option label="一般" value="normal"></el-option>
          <el-option label="优先" value="priority"></el-option>
          <el-option label="紧急" value="urgent"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="执行次数:">
        <el-radio-group v-model="task.executionType">
          <el-radio label="specific">指定日期时间</el-radio>
          <el-radio label="interval">间隔时间</el-radio>
          <el-radio label="custom">自定义时间</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- Specific Date/Time -->
      <template v-if="task.executionType === 'specific'">
        <el-form-item label="选择日期:">
          <el-checkbox-group v-model="task.days">
            <el-checkbox v-for="(day, index) in weekdays" :key="index" :label="day">
              {{ day }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="时间:">
          <!-- Using el-time-picker for a better experience -->
          <el-time-picker
              v-model="task.time"
              placeholder="选择时间"
              format="HH:mm"
              value-format="HH:mm"
          ></el-time-picker>
        </el-form-item>
      </template>

      <!-- Interval -->
      <template v-if="task.executionType === 'interval'">
        <el-form-item label="间隔时间:">
          <div style="display: flex; align-items: center;">
            <el-input v-model.number="task.interval.value" type="number" placeholder="间隔值" style="width: 100px; margin-right: 10px;"></el-input>
            <el-select v-model="task.interval.unit" placeholder="单位" style="width: 100px;">
              <el-option label="分钟" value="minutes"></el-option>
              <el-option label="小时" value="hours"></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="重复次数:">
          <el-input v-model.number="task.repeatCount" type="number" placeholder="输入次数" style="width: 100px;"></el-input>
        </el-form-item>
      </template>

      <!-- Custom Time -->
      <template v-if="task.executionType === 'custom'">
        <el-form-item label="自定义时间:">
          <el-input v-model="task.customTimes" placeholder="如: 08:00,12:30"></el-input>
        </el-form-item>
      </template>


      <el-form-item>
      <el-tree
        :data="form_tree"
        show-checkbox
        node-key="id" :default-expanded-keys="[1,4]"
        :default-checked-keys="[9]"
        />
      </el-form-item>

      <el-form-item>
      <el-select v-model="task.personnel"
                 filterable
                 multiple
                 collapse-tags
                 collapse-tags-tooltip
                 placeholder="選擇接收人員"
                 style="width: 300px;">
        <el-option label="QC人员A" value="qc-tester-a"></el-option>
        <el-option label="QC人员B" value="qc-tester-b"></el-option>
        <el-option label="QC人员C" value="qc-tester-c"></el-option>
        <el-option label="QC人员D" value="qc-tester-d"></el-option>
        <el-option label="QC人员E" value="qc-tester-e"></el-option>
      </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitTask">保存任务</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- Task List Table -->
    <el-table :data="tasks" style="margin-top: 20px; width: 100%;">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="name" label="任务名称" width="180"></el-table-column>
      <el-table-column prop="type" label="类型" width="120"></el-table-column>
      <el-table-column prop="createdAt" label="创建时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekdays: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
      task: {
        name: "",
        type: "urgent",
        executionType: "specific",
        days: [],
        time: "",
        interval: { value: 0, unit: "minutes" },
        repeatCount: 0,
        customTimes: "",
        personnel: "",

      },
      tasks: [],
      defaultProps: {
        children: "children",
        label: "label",
      },
    form_tree: [
      {
        id: 1,
        label: '實驗室管理',
        children: [
          {
            id: 4,
            label: '產品檢測',
            children: [
              {
                id: 9,
                label: '微生物',
              },
              {
                id: 10,
                label: '理化',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: '生產過程管控',
        children: [
          {
            id: 5,
            label: '大清洗',
          },
          {
            id: 6,
            label: '秤重驗證',
          },
        ],
      }]
    };
  },
  methods: {
    submitTask() {
      const newTask = { ...this.task, createdAt: new Date().toISOString() };
      this.tasks.push(newTask);
      this.resetForm();
    },
    resetForm() {
      this.task = {
        name: "",
        type: "urgent",
        executionType: "specific",
        days: [],
        time: "",
        interval: { value: 0, unit: "minutes" },
        repeatCount: 0,
        customTimes: "",
      };
    },
  },
};
</script>

<style>
/* Add custom styles as needed */
</style>
