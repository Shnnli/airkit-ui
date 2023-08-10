import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
} from 'react';
import './style/index.less';
export interface InputSelectProps {
  data: string[];
  value: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  valueChangeFun: (value: string) => void;
  placeHolder?: string;
}
const InputSelect: FC<{
  data: Array<string>;
  value: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  placeHolder?: string;
  valueChangeFun: (value: string) => void;
}> = ({ data, value, style, disabled, placeHolder, valueChangeFun }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const currentMatchIndex = useRef(-1);
  const currentSelectedIndex = useRef(0);
  const [isFocus, setIsFocus] = useState(false);
  const [curValue, setCurValue] = useState(value);
  const [curMatchValue, setCurMatchValue] = useState('');
  const [matchResult, setMatchResult] = useState<Array<string>>([]);

  const changeFun = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    setCurValue(value);
    valueChangeFun(value);
  };
  const matchValue = (value: string) => {
    try {
      if (value) {
        const result = [];
        let _value = value.toLocaleLowerCase();
        let reg = new RegExp(_value);
        for (let i = 0; i < data.length; i++) {
          let str = data[i].toLocaleLowerCase();
          if (reg.test(str)) {
            result.push(data[i]);
          }
        }
        setMatchResult(result);
      } else {
        setMatchResult([]);
      }
    } catch (error) {
      console.error('不合法不能匹配！');
    }
  };
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setCurValue(value);
    // valueChangeFun(value);//改变立即执行
    matchValue(value);
  };

  const handleWheelSelect = useCallback((e: WheelEvent) => {
    //展开时候不让滚动选择，也可以去掉
    e.preventDefault();
    let remainder: number;
    // 向上滚动
    if (e.deltaY < 0) {
      remainder =
        currentSelectedIndex.current > 0
          ? --currentSelectedIndex.current % data.length
          : data.length - 1;
    } else {
      remainder = ++currentSelectedIndex.current % data.length;
    }
    setCurValue(data[remainder]);
    currentSelectedIndex.current = remainder;
    valueChangeFun(data[remainder]);
  }, []);
  const addWheelListener = () => {
    window.addEventListener('wheel', handleWheelSelect, { passive: false });
  };
  const removeWheelListener = () => {
    window.removeEventListener('wheel', handleWheelSelect);
  };
  const handleKeyboard = (e: KeyboardEvent) => {
    let remainder: number;
    if (e.key === 'ArrowUp') {
      remainder =
        currentMatchIndex.current > 0
          ? --currentMatchIndex.current % matchResult.length
          : matchResult.length - 1;
    } else if (e.key === 'ArrowDown') {
      remainder = ++currentMatchIndex.current % matchResult.length;
    } else {
      return;
    }
    let result = matchResult[remainder];
    setCurValue(result);
    setCurMatchValue(result);
    valueChangeFun(result);
    currentMatchIndex.current = remainder;
  };

  const addKeyboardListener = () => {
    setCurMatchValue('');
    currentMatchIndex.current = -1;
    window.addEventListener('keydown', handleKeyboard);
  };
  const removeKeyboardListener = () => {
    window.removeEventListener('keydown', handleKeyboard);
  };
  const focusFun = () => {
    setIsFocus(true);
    if (inputRef.current) {
      inputRef.current.select();
    }
  };
  const blurFun = (e: any) => {
    valueChangeFun(e.target.value); //失焦执行
    setMatchResult([]);
    setIsFocus(false);
  };
  const handleMatchOptionClick = (e: any) => {
    valueChangeFun(e.target.innerText);
  };
  useEffect(() => {
    if (isFocus && matchResult.length > 0) {
      addKeyboardListener();
    }
    return () => {
      removeKeyboardListener();
    };
  }, [matchResult, isFocus]);
  useEffect(() => {
    const inputSelects = document.getElementsByClassName('inputSelect_');
    let length = inputSelects.length;
    for (let i = 0; i < inputSelects.length; i++) {
      const element = inputSelects[i] as HTMLDivElement;
      element['style']['zIndex'] = length-- + '';
    }
  }, []);
  useEffect(() => {
    setCurValue(value); //用于父组件value改变时修改curValue
  }, [value]);
  return (
    <div className="divInputSelect inputSelect_" style={style}>
      <select
        value={curValue}
        disabled={disabled}
        className={'optgroup'}
        onChange={changeFun}
      >
        <option style={{ display: 'none' }}>
          {/* 不能删这个,当value被改变并且不属于提供的data里面时select会默认选择第一个,此时第一个不能被点击 */}
        </option>
        {data.map((item, index) => (
          <option
            className={curValue === item ? 'selected' : ''}
            key={item + index}
          >
            {item}
          </option>
        ))}
      </select>
      {!disabled && (
        <input
          type="text"
          spellCheck="false"
          ref={inputRef}
          placeholder={placeHolder || ''}
          value={curValue}
          className="selectInput"
          disabled={disabled}
          onChange={handleValueChange}
          onFocus={focusFun}
          onBlur={blurFun}
          onMouseEnter={() => {
            data.forEach((item, index) => {
              if (curValue === item) {
                currentSelectedIndex.current = index;
              }
            });
            addWheelListener();
          }}
          onMouseLeave={() => {
            removeWheelListener();
          }}
        />
      )}
      {isFocus && (
        <div className="optgroupDiv">
          {matchResult.map((item, index) => (
            <option
              onMouseDown={handleMatchOptionClick}
              className={curMatchValue === item ? 'selected' : ''}
              key={index}
            >
              {item}
            </option>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputSelect;
