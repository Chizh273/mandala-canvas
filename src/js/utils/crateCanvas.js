export const createCanvas = (root, height, width) => {
  const canvas = root.createElement('canvas')

  canvas.id = 'rootCanvas'
  canvas.width = width
  canvas.height = height

  return canvas
}
