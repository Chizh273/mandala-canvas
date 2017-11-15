export const getClickPoint = e => {
  const canvas = e.target
  let x, y
  if (e.pageX || e.pageY) {
    x = e.pageX
    y = e.pageY
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }
  x -= canvas.offsetLeft
  y -= canvas.offsetTop

  return {x, y}
}
