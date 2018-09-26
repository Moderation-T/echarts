// 此柱状图的相关数据写在了model的result中

import React, { Component } from 'react';
import { connect } from 'dva';

import echarts from 'echarts/lib/echarts';
// 这里config中用到啥就要引用啥别忘了，要不然不起效果啦
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
// 引入图例
import 'echarts/lib/component/legend';
// 引入提示框
import 'echarts/lib/component/tooltip';
// 引入工具箱
import 'echarts/lib/component/toolbox';
// 引入滚动条
import 'echarts/lib/component/dataZoom';

export class SwitchReact extends Component {
  componentDidMount() {
    // 初始化数据
    this.initBar();
  }
  // componentWillReceiveProps(nextProps) {
  //   //  当异步调取数据时会重新渲染 也就是props有更新的时候
  //   const chart = nextProps.msg.chart;
  //   this.initBar(chart);
  // }

  // 初始化图形的函数
  initBar() {
    const config =  {
      title : {
          text: '某地区蒸发量和降水量',
          subtext: '纯属虚构'
      },
      tooltip : {
          trigger: 'axis'
      },
      legend: {
          data:['蒸发量','降水量']
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'蒸发量',
              type:'bar',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
              markPoint : {
                  data : [
                      {type : 'max', name: '最大值'},
                      {type : 'min', name: '最小值'}
                  ]
              },
              markLine : {
                  data : [
                      {type : 'average', name: '平均值'}
                  ]
              }
          },
          {
              name:'降水量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
              markPoint : {
                  data : [
                      {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                      {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                  ]
              },
              markLine : {
                  data : [
                      {type : 'average', name : '平均值'}
                  ]
              }
          }
      ]
  };
    const myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(config);
  }

  render() {
    return (
      <div>
        <div id="main" style={{ width: '600px', height: '400px' }} />
      </div>
    );
  }
}

export default connect(({ result }) => ({
  result,
}))(SwitchReact);
