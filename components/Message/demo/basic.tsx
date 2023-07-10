import { Button, message } from 'airkit-ui';
import React from 'react';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = () => {
    messageApi.info('2222');
  };

  return (
    <div>
      <Button onClick={showMessage}>Show Message</Button>
      {contextHolder}
    </div>
  );
};

export default App;
