import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.less';
export interface Message {
  id: number;
  content: string;
  type: MessageType;
}

type MessageType = 'info' | 'success' | 'error';

type MessageResult = [
  {
    info: (content: string) => void;
    success: (content: string) => void;
    error: (content: string) => void;
  },
  React.ReactNode,
];

const useCustomMessage = (): MessageResult => {
  const [messages, setMessages] = useState<Array<Message>>([]);

  const removeMessage = (id: number) => {
    setMessages((prevMessages: Array<Message>) =>
      prevMessages.filter((msg) => msg.id !== id),
    );
  };

  const addMessage = (content: string, type: MessageType) => {
    const newMessage: Message = { id: Date.now(), content, type };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTimeout(() => {
      removeMessage(newMessage.id);
    }, 3000);
  };

  const messageApi = {
    info: (content: string) => addMessage(content, 'info'),
    success: (content: string) => addMessage(content, 'success'),
    error: (content: string) => addMessage(content, 'error'),
  };

  useEffect(() => {
    let root: any;

    if (messages.length > 0) {
      const messageContainer = document.createElement('div');
      messageContainer.classList.add('message-container');
      document.body.appendChild(messageContainer);

      root = createRoot(messageContainer);
      root.render(
        <>
          {messages.map((message) => (
            <div className={`message-notice`} key={message.id}>
              <div className={`message message-${message.type}`}>
                {message.content}
              </div>
            </div>
          ))}
        </>,
      );
    }

    return () => {
      const messageContainer = document.querySelector('.message-container');
      if (messageContainer && root) {
        // 延迟到下一个时间片段中执行卸载操作
        setTimeout(() => {
          root.unmount();
          document.body.removeChild(messageContainer);
        }, 0);
      }
    };
  }, [messages]);

  const contextHolder = null;

  return [messageApi, contextHolder];
};

export default useCustomMessage;
