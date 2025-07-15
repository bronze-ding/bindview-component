// 解析JSX
const React = {
  newArr(argument) {
    return [...argument].filter((i, index) => {
      if (index !== 0 && index !== 1) {
        return true
      }
    })
  },
  createElement(a, b) {
    return {
      attributes: b ? b : {},
      children: arguments.length >= 3 ? this.newArr(arguments) : [],
      elementName: a
    }
  }
}

export default React