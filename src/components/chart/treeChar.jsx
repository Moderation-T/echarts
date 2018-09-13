import React, { Component } from 'react';


import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/tree';
// 引入提示框
import 'echarts/lib/component/tooltip';
// 引入工具箱
import 'echarts/lib/component/toolbox';
// 引入标题
import 'echarts/lib/component/title';

export default class TreeChart extends Component {
  componentDidMount() {
    // 初始化数据
    this.initTree();
  }

  // 初始化图形的函数
  initTree() {
   const data = [
     {
      name:'手机',
      children:[
        {name:'小米',
        children:[
          {name:'小米1'}
        ]
      },
        {name:'华为'},
        {name:'魅族'},
      ]
     }
   ];

   console.log(data);
   

   const arr = [];
   console.log(arr);
   


  function traverseTree(node) {
    if (!node) {
      return;
    }
  
    // initArr.push(node.name);
    if (node.children && node.children.length > 0) {
      let i = 0;
      for (i = 0; i < node.children.length; i += 1) {
        traverseTree(node.children[i]);
        arr.unshift({
          name: node.name,
        });
      }
    }
  }
  traverseTree(data);
   console.log(arr);
   
    const config = {
      // 标题
      title: {
        // 主标题
        text: '手机品牌',
        // 副标题
        subtext: '线、节点样式',
      },
      // 提示框
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}',
      },
      // 工具箱
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: false,

      series: [
        {
          name: '树图',
          type: 'tree',
          /*
              树的方向可选：'vertical' | 'horizontal' | 'radial'
              */
          orient: 'RL', // vertical horizontal ‘RL'根节点从右往左
          // rootLocation: { x: 100, y: '60%' }, // 根节点位置  {x: 'center',y: 10}
          // symbol: 'rectangle',
          symbolSize: 30,
          // 项目样式
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'inside',
                // 文字样式
                textStyle: {
                  color: '#cc9999',
                  fontSize: 15,
                  fontWeight: 'bolder',
                },
              },
              lineStyle: {
                color: '#000',
                width: 2,
                type: 'broken', // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                curveness: 0 
              },
            },
            // 鼠标hover效果
            emphasis: {
              label: {
                show: true,
                textStyle: {
                  color: 'blue',
                  fontSize: 15,
                  fontWeight: 'bolder',
                },
              },
            },
          },
          data: [
            {
              name: '手机',
              value: 6,
              // symbolSize: [90, 70],
              // symbol: 'image://http://www.iconpng.com/png/ecommerce-business/iphone.png',
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                },
              },
              children: [
                {
                  name: '小米',
                  value: 4,
                  // symbol: 'image://http://pic.58pic.com/58pic/12/36/51/66d58PICMUV.jpg',
                  nodePadding: 40,
                  layerPadding: 100,
                  itemStyle: {
                    normal: {
                      label: {
                        show: false,
                      },
                    },
                  },
                  symbolSize: [60, 60],
                  children: [
                    {
                      name: '小米1',
                      symbol: 'rectangle',
                      symbolSize: 20,
                      value: 4,
                      itemStyle: {
                        normal: {
                          color: '#fa6900',
                          label: {
                            show: true,
                            position: 'right',
                          },
                        },
                        emphasis: {
                          label: {
                            show: false,
                          },
                          borderWidth: 0,
                        },
                      },
                    },
                    {
                      name: '小米2',
                      value: 4,
                      symbol: 'rectangle',
                      symbolSize: 20,
                      itemStyle: {
                        normal: {
                          label: {
                            show: true,
                            position: 'right',
                            formatter: '{b}',
                          },
                          color: '#fa6900',
                          borderWidth: 2,
                          borderColor: '#cc66ff',
                        },
                        emphasis: {
                          borderWidth: 0,
                        },
                      },
                    },
                    {
                      name: '小米3',
                      value: 2,
                      symbol: 'rectangle',
                      symbolSize: 20,
                      itemStyle: {
                        normal: {
                          label: {
                            position: 'right',
                          },
                          color: '#fa6900',
                          brushType: 'stroke',
                          borderWidth: 1,
                          borderColor: '#999966',
                        },
                        emphasis: {
                          borderWidth: 0,
                        },
                      },
                    },
                  ],
                },
                {
                  name: '苹果',
                  // symbol: 'image://http://www.viastreaming.com/images/apple_logo2.png',
                  nodePadding: 300,
                  layerPadding: 300,
                  symbolSize: [60, 60],
                  itemStyle: {
                    normal: {
                      label: {
                        show: false,
                      },
                    },
                  },
                  value: 4,
                },
                {
                  name: '华为',
                  // symbol: 'image://http://market.huawei.com/hwgg/logo_cn/download/logo.jpg',
                  symbolSize: [60, 60],
                  itemStyle: {
                    normal: {
                      label: {
                        show: false,
                      },
                    },
                  },
                  value: 2,
                },
                {
                  name: '联想',
                  // symbol: 'image://http://www.lenovo.com.cn/HomeUpload/Home001/6d94ee9a20140714.jpg',
                  symbolSize: [60, 60],
                  itemStyle: {
                    normal: {
                      label: {
                        show: false,
                      },
                    },
                  },
                  value: 2,
                },
              ],
            },
          ],
        },
      ],
    };
    const myChart = echarts.init(document.getElementById('main'));
    // const  _zr = myChart.getZrender();
    myChart.setOption(config);
  }

  render() {
    return (
      <div>
        <div id="main" style={{ width: '450px', height: '350px' }} />
      </div>
    );
  }
}
