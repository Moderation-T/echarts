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

export class SlideReact extends Component {
  componentDidMount() {
    // 初始化数据
    const { chart } = this.props.result.msg;
    this.initBar(chart);
  }
  // componentWillReceiveProps(nextProps) {
  //   //  当异步调取数据时会重新渲染 也就是props有更新的时候
  //   const chart = nextProps.msg.chart;
  //   this.initBar(chart);
  // }

  // 初始化图形的函数
  initBar(chart) {
    const name = chart.names; // 横坐标名称
    const { year } = chart; // 纵坐标名称

    // 颜色列表
    const colorList = [
      '#ff7f50',
      '#87cefa',
      '#da70d6',
      '#32cd32',
      '#6495ed',
      '#ff69b4',
      '#ba55d3',
      '#cd5c5c',
      '#ffa500',
      '#40e0d0',
    ];

    // 柱状图数据
    const seriesBar = year.map(item => ({
      name: Object.keys(item)[0], // 对应图例名称
      type: 'bar', // 展示类型
      data: Object.values(item)[0], // 数据值
      // itemStyle: // 样式
    }));

    const config = {
      // 工具提示 也就是鼠标放上的提示框
      tooltip: {
        /*
         // trigger 触发类型
        'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
         'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
      */
        trigger: 'axis',
        // 标题背景色
        backgroundColor: 'rgba(255,255,255,0.7)',

        // 焦点类型
        axisPointer: {
          type: 'shadow',
        },

        // 触发框设置
        formatter(params) {
          // for text color
          const color = colorList[params[0].dataIndex];
          let res = `<div style="color:${color}">`;
          res += `<strong>${params[0].name}（万元）</strong>`;
          for (let i = 0, l = params.length; i < l; i += 1) {
            res += `<br/>${params[i].seriesName} : ${params[i].value}`;
          }
          res += '</div>';
          return res;
        },
      },

      // 图例
      legend: {
        // 图例位置
        x: 'right',
        // 图例数据
        data: year.map(item => Object.keys(item)[0]),
      },
      // 工具箱
      toolbox: {
        show: true,
        orient: 'vertical',
        y: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
          // magicType : {show: true, type: ['line', 'bar']},
          dataZoom : {show: true},
        },
      },
      // 可计算
      calculable: true,
      // 网格位置
      grid: {
        y: 40,
        y2: 80,
        x2: 20,
      },
      // x轴设置
      xAxis: [
        {
          type: 'category',
          data: name,
          axisLabel: {
            // 调整x轴的lable
            // interval: 0,//标签设置为全部显示

            // 解决横坐标文字过长显示不全的问题
            formatter(params) {
              let newParamsName = ''; // 最终拼接成的字符串
              const paramsNameNumber = params.length; // 实际标签的个数
              const provideNumber = 6; // 每行能显示的字的个数
              const rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
              /**
               * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
               */
              // 条件等同于rowNumber>1
              if (paramsNameNumber > provideNumber) {
                /** 循环每一行,p表示行 */
                for (let p = 0; p < rowNumber; p += 1) {
                  let tempStr = ''; // 表示每一次截取的字符串
                  const start = p * provideNumber; // 开始截取的位置
                  const end = start + provideNumber; // 结束截取的位置
                  // 此处特殊处理最后一行的索引值
                  if (p === rowNumber - 1) {
                    // 最后一次不换行
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    // 每一次拼接字符串并换行
                    tempStr = `${params.substring(start, end)}\n`;
                  }
                  newParamsName += tempStr; // 最终拼成的字符串
                }
              } else {
                // 将旧标签的值赋给新标签
                newParamsName = params;
              }
              // 将最终的字符串返回
              return newParamsName;
            },
            textStyle: {
              fontSize: 12, // 让字体变大
            },
          },
        },
      ],
      dataZoom: [
        // 区域缩放

        // 控制x轴移动
        {
        //   id: 'dataZoomX',
        //   show: true, // 是否显示 组件。如果设置为 false，不会显示，但是数据过滤的功能还存在。
          // backgroundColor: 'rgba(47,69,84,0)', // 组件的背景颜色
          type: 'slider', // slider表示有滑动块的，inside表示内置的
        //   dataBackground: {
        //     // 数据阴影的样式。
        //     // lineStyle: mylineStyle, // 阴影的线条样式
        //     // areaStyle: myareaStyle, // 阴影的填充样式
        //   },
          fillerColor: 'rgba(167,183,204,0.4)', // 选中范围的填充颜色。
        //   borderColor: '#ddd', // 边框颜色。
        //   filterMode: 'filter', // 'filter'：当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉。
        //   // 'weakFilter'：当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只有当全部维度都在数据窗口同侧外部，整个数据项才会被过滤掉。
        //   // 'empty'：当前数据窗口外的数据，被 设置为空。即 不会 影响其他轴的数据范围。
        //   // 'none': 不过滤数据，只改变数轴范围。
        //   xAxisIndex: 0, // 设置 dataZoom-inside 组件控制的 x轴,可以用数组表示多个轴
        //   yAxisIndex: [0, 2], // 设置 dataZoom-inside 组件控制的 y轴,可以用数组表示多个轴
        //   radiusAxisIndex: 3, // 设置 dataZoom-inside 组件控制的 radius 轴,可以用数组表示多个轴
        //   angleAxisIndex: [0, 2], // 设置 dataZoom-inside 组件控制的 angle 轴,可以用数组表示多个轴
          start: 0, // 数据窗口范围的起始百分比,表示30%
          end: 65, // 数据窗口范围的结束百分比,表示70%
          // startValue: 10, // 数据窗口范围的起始数值
          // endValue: 100, // 数据窗口范围的结束数值。
          orient: 'horizontal', // 布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。'horizontal'：水平。'vertical'：竖直。
          zoomLock: true, // 是否锁定选择区域（或叫做数据窗口）的大小。如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
        //   throttle: 100, // 设置触发视图刷新的频率。单位为毫秒（ms）。
        //   zoomOnMouseWheel: true, // 如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。
        //   moveOnMouseMove: true, // 如何触发数据窗口平移。true：表示不按任何功能键，鼠标移动能触发数据窗口平移。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标移动能触发数据窗口平移。'ctrl'：表示按住 ctrl 和鼠标移动能触发数据窗口平移。'alt'：表示按住 alt 和鼠标移动能触发数据窗口平移。
        //   left: 'center', // 组件离容器左侧的距离,'left', 'center', 'right','20%'
        //   top: 'top', // 组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
        //   right: 'auto', // 组件离容器右侧的距离,'20%'
        //   bottom: 'auto', // 组件离容器下侧的距离,'20%'
        },

        // 控制y轴移动
        // {
        //   id: 'dataZoomY',
        //   type: 'inside',
        //   filterMode: 'empty',
        //   disabled: false, // 是否停止组件的功能。
        //   xAxisIndex: 0, // 设置 dataZoom-inside 组件控制的 x轴,可以用数组表示多个轴
        //   yAxisIndex: [0, 2], // 设置 dataZoom-inside 组件控制的 y轴,可以用数组表示多个轴
        //   radiusAxisIndex: 3, // 设置 dataZoom-inside 组件控制的 radius 轴,可以用数组表示多个轴
        //   angleAxisIndex: [0, 2], // 设置 dataZoom-inside 组件控制的 angle 轴,可以用数组表示多个轴
        //   start: 30, // 数据窗口范围的起始百分比,表示30%
        //   end: 70, // 数据窗口范围的结束百分比,表示70%
        //   startValue: 10, // 数据窗口范围的起始数值
        //   endValue: 100, // 数据窗口范围的结束数值。
        //   orient: 'horizontal', // 布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。'horizontal'：水平。'vertical'：竖直。
        //   zoomLock: false, // 是否锁定选择区域（或叫做数据窗口）的大小。如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
        //   throttle: 100, // 设置触发视图刷新的频率。单位为毫秒（ms）。
        //   zoomOnMouseWheel: true, // 如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。
        //   moveOnMouseMove: true, // 如何触发数据窗口平移。true：表示不按任何功能键，鼠标移动能触发数据窗口平移。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标移动能触发数据窗口平移。'ctrl'：表示按住 ctrl 和鼠标移动能触发数据窗口平移。'alt'：表示按住 alt 和鼠标移动能触发数据窗口平移。
        // },
      ],
      // y轴设置
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            margin: 4,
            // 数值过大转换显示单位
            formatter(value) {
              if (value >= 10000 && value < 10000000) {
                value = `${value / 10000}万`;
              } else if (value >= 10000000) {
                value = `${value / 10000000}千万`;
              }
              return value;
            },
          },
        },
      ],
      series: seriesBar,
      /*
      // series 展开长成下边这样
       series: [
        {
            name: '2010',
            type: 'bar',
            itemStyle: itemStyle,
            data: [4804.7,1444.3,1332.1,908,871.8,1983.7,1627.6,499.2]
        },
        {
            name: '2011',
            type: 'bar',
            itemStyle: itemStyle,
            data: [5506.3,1674.7,1405,1023.2,969,2149.7,1851.7,581.3]
        },
        {
            name: '2012',
            type: 'bar',
            itemStyle: itemStyle,
            data: [6040.9,1823.4,1484.3,1116.1,1063.7,2455.5,2033.5,657.1]
        },
        {
            name: '2013',
            type: 'bar',
            itemStyle: itemStyle,
            data: [6311.9,1902,1745.1,1215.1,1118.3,2736.9,2294,699.4]
        }
    ]
      */
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
}))(SlideReact);
