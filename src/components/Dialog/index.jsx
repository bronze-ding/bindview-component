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
    render(h) {
      const { methods: f } = this
      return h(
        "div",
        { className: s.dialog, ref: "dialog" },
        [
          h("div", { className: s.title }, [title ? title : "对话框"]),
          h("div", { className: s.content }, [
            h("div", { className: s.contentBox }, [slot()])
          ]),
          h("div", { className: s.bottom }, [
            h("span", { className: s.but }, [
              h("button", { onClick: f.close }, ["关闭"]),
              "\u00A0",
              h("button", { onClick: func }, ["确认"])
            ])
          ])
        ]
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