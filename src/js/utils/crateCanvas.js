export default (height, width) => {
  const canvas = document.createElement('canvas')

  canvas.id = 'rootCanvas'
  canvas.width = width
  canvas.height = height

  return canvas
}
