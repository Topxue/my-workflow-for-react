/**
 * 随机ID
 * @returns {string}
 */
export const mathId = (num = 23) => {
  let id = ''
  for (let i = 0; i <= num; i++) {
    id += Math.floor(Math.random() * 10)
  }

  return id
}
