import s from "./index.less"
import React from "../../React";

import { propsType, createApp } from "bindview"

function View(props) {

  // 属性校验，src 支持字符串或数组
  const { src, index, func } = propsType(props, {
    src: ["string", "array"],
    index: "number",
    func: "function"
  });


  return {
    name: 'ImageView',
    render(h) {
      const { data: _ } = this;
      // 判断src类型，获取当前图片
      let imgSrc = Array.isArray(src) ? src[_.index] : src;
      return h(
        "div",
        { className: s.imageView },
        [
          h("div", { className: s.left }, [
            h("span", {
              className: `${s.up} iconfont icon-xiangqian`,
              onClick: () => {
                if (Array.isArray(src) && _.index > 0) {
                  _.index = _.index - 1
                }
              }
            }, [])
          ]),
          h("div", { className: s.center }, [
            h("img", { src: imgSrc }, []),
            h("span", { className: `${s.pag}` }, [`${_.index + 1}/${src.length}`])
          ]),
          h("div", { className: s.right }, [
            h("span", {
              className: `${s.down} iconfont icon-xianghou`,
              onClick: () => {
                if (Array.isArray(src) && _.index < src.length - 1) {
                  _.index = _.index + 1
                }
              }
            }, []),
            h("span", {
              className: `${s.close} iconfont icon-shanchu`,
              onClick: func
            }, [])
          ])
        ]
      );
    },
    data: () => ({
      index: typeof index === "number" ? index : 0,
    })
  };
}

export default function ImageView(src, ind) {

  const box = document.createElement("div")
  box.className = s.view
  document.body.append(box)

  const vm = createApp(View, {
    src,
    index: ind ? ind : 0,
    func() {
      vm.$remove()
      box.remove()
    }
  }).$mount(box)
}

