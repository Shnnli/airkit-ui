import { Divider } from 'airkit-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <Divider borderStyle="dashed"></Divider>
      <span>单车欲问边，属国过居延。</span>
      <Divider borderStyle="dotted"></Divider>
      <span>征蓬出汉塞，归雁入吴天。</span>
      <Divider borderStyle="double"></Divider>
      <span>大漠孤烟直，长河落日圆。</span>
      <Divider borderStyle="groove"></Divider>
      <span>萧关逢候骑，都护在燕然。</span>
      <Divider borderStyle="ridge"></Divider>
    </div>
  );
};

export default App;
