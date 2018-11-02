import React from 'react';

// 柱状图
// import Barchart from './components/chart/barChar';
// 树状图
// import TreeChart from './components/chart/treeChar';
// 可滑动柱状图
// import SlideChar from './components/chart/slideChar';
// import SwitchChar from './components/chart/switchChar';
import QiaoChar from './components/chart/qiaochangChar';

function App() {
  return (
    <div>
      {/* <Barchart /> */}
      {/* <TreeChart /> */}
      {/* <SwitchChar />  */}
      {/* <div>
        <SlideChar />
      </div> */}
      <div >
        <QiaoChar />
      </div>
    </div>
  );
}

export default App;
