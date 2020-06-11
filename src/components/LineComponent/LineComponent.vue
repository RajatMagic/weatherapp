
<script>
import { Line } from "vue-chartjs";
//eslint-disable-next-line
import chartjsPluginAnnotation from "chartjs-plugin-annotation";

var chartColors = {
  color1: "#09729f",
  color2: "#fff"
};

export default {
  extends: Line,
  name: "LineChart",
  props: ["data"],
  mounted() { },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
          if(newValue&&newValue.labels&&newValue.datasets){
                let labels = newValue.labels;
                //options.scales.xAxes[0].gridLines.color = gridLineColor;
                this.renderChart(
                {
                    labels,
                    datasets: [newValue.datasets[0], newValue.datasets[1]]
                },
                {
                    responsive: true, // Instruct chart js to respond nicely.
                    maintainAspectRatio: false // Add to prevent default behaviour of full-width/height
                }
                );
          }
        
      }
    }
  }
};
</script>