import React, { useRef, useState } from 'react';
import './style/index.less';
interface ImageZoomProps {
  src: string;
}

const ImageZoom = (props: ImageZoomProps) => {
  const [isActive, setIsActive] = useState(false);
  const glassWrapperRef = useRef<HTMLDivElement>(null);
  const bigWrapperRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const bigImgRef = useRef<HTMLImageElement>(null);

  const onMouseOver = () => {
    setIsActive(true);
  };

  const onMouseOut = () => {
    setIsActive(false);
  };

  const onMouseMove = (e: { pageX: number; pageY: number }) => {
    if (
      !glassWrapperRef.current ||
      !glassRef.current ||
      !imgRef.current ||
      !bigImgRef.current ||
      !bigWrapperRef.current
    )
      return;
    // 该操作让glassWrapper的左上角变成坐标原点, 因为glass是先相对于glassWrapper而移动的
    const x = e.pageX - glassWrapperRef.current.offsetLeft;
    const y = e.pageY - glassWrapperRef.current.offsetTop;
    // 让鼠标在glass的中间位置
    let width = x - glassRef.current.offsetWidth / 2;
    let height = y - glassRef.current.offsetHeight / 2;
    // 让glass不超出img内部
    if (width <= 0) {
      width = 0;
    } else if (
      width >=
      glassWrapperRef.current.offsetWidth - glassRef.current.offsetWidth
    ) {
      width =
        glassWrapperRef.current.offsetWidth - glassRef.current.offsetWidth;
    }
    if (height <= 0) {
      height = 0;
    } else if (
      height >=
      glassWrapperRef.current.offsetHeight - glassRef.current.offsetHeight
    ) {
      height =
        glassWrapperRef.current.offsetHeight - glassRef.current.offsetHeight;
    }

    // 改变放大镜的位置
    glassRef.current.style.left = width + 'px';
    glassRef.current.style.top = height + 'px';

    // 改变大图片的位置
    bigImgRef.current.style.width =
      (imgRef.current.offsetWidth * bigWrapperRef.current.offsetWidth) /
        glassRef.current.offsetWidth +
      'px';
    bigImgRef.current.style.left =
      (-width * bigImgRef.current.offsetWidth) / imgRef.current.offsetWidth +
      'px';
    bigImgRef.current.style.top =
      (-height * bigImgRef.current.offsetHeight) / imgRef.current.offsetHeight +
      'px';
  };

  return (
    <div className="box">
      <div
        className="glass-wrapper"
        ref={glassWrapperRef}
        onMouseOver={onMouseOver}
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
      >
        <img src={props.src} className="img" ref={imgRef} />
        {isActive && <div className="glass" id="glass" ref={glassRef}></div>}
      </div>

      <div className="big-wrapper" ref={bigWrapperRef}>
        {isActive && (
          <img src={props.src} className="big-img" ref={bigImgRef} />
        )}
      </div>
    </div>
  );
};

export default ImageZoom;
