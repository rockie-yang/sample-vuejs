<template>
  <div class="col-lg-6 mb-4">
    <!-- Project Card Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
      </div>
      <div class="card-body">
        <scatter-chart
          :data="[
            [174.0, 80.0],
            [176.5, 82.3]
          ]"
          :options="options"
          xtitle="Size"
          ytitle="Population"
        ></scatter-chart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// generate random Color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// generate random Integer
function getRandomInt(min: any, max: any) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomScalingFactor() {
  return Math.floor(Math.random() * (120 - 10)) + 10;
}

export default Vue.extend({
  // props: ["min", "max", "count"],
  mounted() {
    setTimeout(() => {
      this.scatterChartData.datasets.forEach(function(dataset: any) {
        dataset.data = dataset.data.map(function() {
          return {
            x: randomScalingFactor(),
            y: randomScalingFactor()
          };
        });
        dataset.backgroundColor = getRandomColor();
        dataset.pointRadius = getRandomInt(2, 14);
      });

      this.max = this.max += 5;
    }, 2000);
    setInterval(() => {
      this.count += 1;
    }, 1000);
  },
  data() {
    return {
      min: 0,
      max: 10,
      count: 0,
      scatterChartData: {
        datasets: [
          {
            label: "title",
            xAxisID: "x-axis-1",
            yAxisID: "y-axis-1",
            backgroundColor: getRandomColor(),
            borderWidth: 0,
            pointRadius: getRandomInt(4, 14),
            data: [
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              }
            ]
          },
          {
            label: "My Second dataset",
            xAxisID: "x-axis-1",
            yAxisID: "y-axis-2",
            backgroundColor: getRandomColor(),
            borderWidth: 0,
            pointRadius: getRandomInt(4, 12),
            pointStyle: "circle",
            data: [
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              },
              {
                x: randomScalingFactor(),
                y: randomScalingFactor()
              }
            ]
          }
        ]
      },
      options: {
        responsive: true,
        hoverMode: "nearest",
        intersect: true,
        title: {
          display: false,
          text: "Chart.js Scatter Chart - Multi Axis"
        },
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              position: "bottom",
              gridLines: {
                zeroLineColor: "rgba(0,0,0,1)"
              },
              display: false
            }
          ],
          yAxes: [
            {
              type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: false,
              position: "left",
              id: "y-axis-1"
            },
            {
              type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: false,
              position: "right",
              reverse: true,
              id: "y-axis-2",

              // grid line settings
              gridLines: {
                drawOnChartArea: false // only want the grid lines for one axis to show up
              }
            }
          ]
        },
        animation: {
          easing: "easeInOutElastic",
          duration: 1800
        }
      }
    };
  }
});
</script >
