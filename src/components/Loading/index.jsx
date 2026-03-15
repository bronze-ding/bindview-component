import s from "./index.less"
import React from "../../React"
/**
 * 加载等待动画
 * @returns 
 */
export default function Loading() {
  return {
    name: 'BvLoading',
    render(h) {
      return h(
        "div",
        { class: s['box'] },
        [
          h("div", { class: s['Masking'] }, []),
          h("div", { class: s["loading"] }, [])
        ]
      )
    }
  }
}