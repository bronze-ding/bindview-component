import s from "./index.less"
import React from "../../React"
/**
 * 加载等待动画
 * @returns 
 */
export default function Loading() {
  return {
    name: 'BvLoading',
    render() {
      return (
        <div class={s['box']}>
          <div class={s['Masking']}></div>
          <div class={s["loading"]}></div>
        </div>
      )
    }
  }
}