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

/**
 * 执行命令栈
 * @param bpmnModeler
 * @param command
 */
export const executeCommand = (bpmnModeler, command) => {
  const commandStack = bpmnModeler.get('commandStack')
  commandStack.execute(command.cmd, command.context)
}
