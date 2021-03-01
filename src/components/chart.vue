  
<template>
  <div id="main" style="width:100%;height:400px"></div>
</template>

<script>
export default {
  data() {
    return {
      myChart: '',
      // 指定图表的配置项和数据
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  mounted() {
    this.myChart=this.$echarts.init(document.getElementById('main')).setOption(this.option)
    // 使用刚指定的配置项和数据显示图表。
   
  }
}
</script>