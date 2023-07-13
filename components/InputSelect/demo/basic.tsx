import { InputSelect } from 'airkit-ui';
import React from 'react';
const App: React.FC = () => {
  return (
    <InputSelect
      value="a"
      data={['a', 'b', 'c', 'd']}
      valueChangeFun={(value) => {
        console.log(value);
      }}
      placeHolder="this is a inputSelect"
    ></InputSelect>
  );
};

export default App;
