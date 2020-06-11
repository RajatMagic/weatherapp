
<script>
import { Line } from "vue-chartjs";
import APP_CONST from '@/constants/AppConst';

export default {
  extends: Line,
  name: APP_CONST.LINE_CHART,
  props: ["data"],
  mounted() {},
  watch: {
    data: {
      immediate: APP_CONST.TRUE,
      deep: APP_CONST.TRUE,
      handler(newValue, oldValue) {
        if (newValue && newValue.labels && newValue.datasets) {
          let labels = newValue.labels;
          this.renderChart(
            {
              labels,
              datasets: [newValue.datasets[0], newValue.datasets[1]]
            },
            {
              responsive: APP_CONST.TRUE,
              maintainAspectRatio: APP_CONST.FALSE
            }
          );
        }
      }
    }
  }
};
</script>