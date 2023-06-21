const allData = [
  4200, 9600, 16600, 4200, 9600, 16600, 15500, 9600, 5700, 12780, 17600, 8600,
  15500, 18400, 17400,
];

const xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(xAxisData);
const data1 = allData.slice(0, 5).map(function (d, i) {
  return [xAxisData[i], d];
});
const data2 = allData.slice(4, 10).map(function (d, i) {
  return [xAxisData[i + 4], d];
});

const data3 = allData.slice(9, allData.length).map(function (d, i) {
  return [xAxisData[i + 9], d];
});

option = {
  backgroundColor: "#fff",
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["xxx"],
    top: "10%",
  },
  toolbox: {
    show: false,
    feature: {
      dataZoom: {},
    },
  },
  grid: {
    top: "30%",
    left: "0%",
    right: "0%",
    bottom: "9%",
  },
  xAxis: {
    show: false,
    type: "category",
    boundaryGap: false,
    axisLabel: {
      color: "rgba(0,0,0,0.8)",
      fontSize: 30,
    },
  },
  yAxis: {
    show: false,
    type: "value",
    axisLabel: {
      formatter: "{value} °C",
      color: "rgba(0,0,0,0.8)",
      fontSize: 30,
    },
  },
  series: [
    {
      name: "xx1",
      type: "line",
      color: "#0b8fb066",
      areaStyle: {},
      lineStyle: {
        color: "#0b8fb066",
      },
      data: data1,
      smooth: true,
      symbolSize: 0,
    },
    {
      name: "xx2",
      type: "line",
      color: "#red",
      areaStyle: {
        color: "red",
      },
      lineStyle: {
        color: "red",
      },
      data: data2,
      smooth: true,
      symbolSize: 0,
    },
    {
      name: "xx3",
      type: "line",
      color: "#0b8fb066",
      areaStyle: {
        color: "blue",
      },
      lineStyle: {
        color: "yellow",
      },
      data: data3,
      smooth: true,
      symbolSize: 0,
    },
  ],
};
