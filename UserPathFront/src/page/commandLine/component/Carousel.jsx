/*
 * Tencent is pleased to support the open source community by making SessionAnalytics-用户路径分析框架 available.
 *
 * Copyright (C) 2023 THL A29 Limited, a Tencent company.  All rights reserved.
 * The below software in this distribution may have been modified by THL A29 Limited ("Tencent Modifications").
 * All Tencent Modifications are Copyright (C) THL A29 Limited.
 * SessionAnalytics-用户路径分析框架 is licensed under the MIT License except for the third-party components listed below.
 */
import React, { useRef } from "react";
import { Carousel as AntdCarousel } from "antd";
import style from "../index.less";
import { v4 as uuidv4 } from "uuid";

const Carousel = ({ imageList = [] }) => {
  const ref = useRef();
  return (
    <div className={style.carousel}>
      <AntdCarousel autoplay ref={ref}>
        {imageList?.map(item => (
          <div key={uuidv4()}>
            <img src={item} onClick={() => ref.current.next()} />
          </div>
        ))}
      </AntdCarousel>
    </div>
  );
};

export default Carousel;
