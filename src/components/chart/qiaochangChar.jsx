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

import qiaochangData from './qiaochangdata';

export class qiaochangChar extends Component {
  componentDidMount() {
    // 初始化数据
    this.initBar();
  }

  // 初始化图形的函数
  initBar() {
    console.log(qiaochangData.data.map(item => item[0]));

    const config = {
      tooltip: {
        trigger: 'axis',
        // 触发框设置
        formatter(params) {
          console.log(params[0].name);
          console.log(qiaochangData.dataLine);

          const tongbi = qiaochangData.dataLine.filter(item => {
            console.log(item);

            return item[0] === params[0].name;
          });
          console.log(tongbi[0][1]);

          // for text color
          let res = `<div ">`;
          res += `<strong>${params[0].name}</strong>`;
          for (let i = 0, l = params.length; i < l; i += 1) {
            if (params[i].seriesName === '价格') {
              res += `<br/>${params[i].seriesName} : ${params[i].value}万元<br/>同比${tongbi[0][1]}%`;
            } else {
              res += `<br/>${params[i].seriesName} : ${params[i].value}%`;
            }
          }
          res += '</div>';
          return res;
        },
      },

      // 图例
      legend: {
        // 图例位置
        x: 'left',
        // 图例数据
        data: ['价格', '同比率', '环比率'],
        // selected: { 价格: true, 同比率: false, 环比率: false },
      },
      xAxis: {
        data: qiaochangData.data.map(item => item[0]),
      },
      yAxis: [
        {
          name: '价格(万元)',
          type: 'value',
        },
        {
          name: '百分比(%)',
          nameLocation: 'end',
          type: 'value',
          // inverse: true, 反向
        },
      ],
      toolbox: {
        left: 'center',
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          restore: {},
          saveAsImage: {},
        },
      },
      dataZoom: [
        {
          startValue: '2014-06-01',
        },
        {
          type: 'inside',
        },
      ],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [
          {
            gt: 0,
            lte: 50,
            color: '#096',
          },
          {
            gt: 50,
            lte: 100,
            color: '#ffde33',
          },
          {
            gt: 100,
            lte: 150,
            color: '#ff9933',
          },
          {
            gt: 150,
            lte: 200,
            color: '#cc0033',
          },
          {
            gt: 200,
            lte: 300,
            color: '#660099',
          },
          {
            gt: 300,
            color: '#7e0023',
          },
        ],
        outOfRange: {
          color: '#999',
        },
      },
      series: [
        {
          name: '价格',
          type: 'bar',
          data: qiaochangData.data.map(item => item[1]),
          markLine: {
            silent: true,
          },
          itemStyle: {
            normal: {
              color: '#2f78cc',
              lineStyle: {
                color: '#2f78cc',
              },
            },
          },
        },
        {
          name: '同比率',
          type: 'line',
          yAxisIndex: 1,
          data: qiaochangData.dataLine.map(item => item[1]),
          markLine: {
            silent: true,
          },
          itemStyle: {
            normal: {
              color: '#ad15ab',
              lineStyle: {
                color: '#ad15ab',
              },
            },
          },
        },
        {
          name: '环比率',
          type: 'line',
          yAxisIndex: 1,
          data: qiaochangData.dataLine2.map(item => item[1]),
          markLine: {
            silent: true,
          },
          itemStyle: {
            normal: {
              color: '#f1d010',
              lineStyle: {
                color: '#f1d010',
              },
            },
          },
        },
      ],
    };
    const myChart = echarts.init(document.getElementById('main2'));
    myChart.setOption(config);
  }

  render() {
    return (
      <div>
        <div id="main2" style={{ width: '800px', height: '400px', margin: '50px auto' }} />
      </div>
    );
  }
}

export default connect(({ result }) => ({
  result,
}))(qiaochangChar);
