import s from "./index.less"
import { propsType } from "bindview"
import React from "../../React"

/**
 * 对话框组件
 * @returns 
 */
export default function Dialog(props, slot) {

  const { show, title, components = {}, func } = propsType(props, {
    show: "object",
    title: "string",
    func: "function"
  })

  return {
    name: "Dialog",
    render() {
      const { methods: f } = this
      return (
        <div className={s.dialog} ref="dialog">
          <div className={s.title}>{title ? title : "对话框"}</div>
          <div className={s.content}>
            <div className={s.contentBox}>{slot()}</div>
          </div>
          <div className={s.bottom}>
            <span className={s.but}>
              <button onClick={f.close}>关闭</button>&nbsp;<button onClick={func}>确认</button>
            </span>
          </div>
        </div>
      )
    },
    methods: {
      close() {
        show.set(false)
      }
    },
    life: {
      created() {
        if (show.get()) {
          this.refs.dialog.style.display = "block"
        } else {
          this.refs.dialog.style.display = "none"
        }
      },
      updated() {
        if (show.get()) {
          this.refs.dialog.style.display = "block"
        } else {
          this.refs.dialog.style.display = "none"
        }
      }
    },
    components
  }
}