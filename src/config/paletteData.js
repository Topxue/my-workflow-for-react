/**
 * 存储流程设计相关参数
 */

const _controls = [
  {
    action: 'create.start-event',
    title: '开始',
    tooltip: '创建 StartEvent'
  },
  {
    action: 'create.intermediate-event',
    title: '中间'
  },
  {
    action: 'create.end-event',
    title: '结束',
    tooltip: '创建 EndEvent'
  },
  {
    action: 'create.exclusive-gateway',
    title: '网关'
  },
  {
    action: 'create.task',
    title: '任务',
    tooltip: '创建 Task'
  },
  {
    action: 'create.user-task',
    title: '用户任务',
    tooltip: '创建 UserTask'
  },
  {
    action: 'create.user-sign-task',
    title: '会签任务'
  },
  {
    action: 'create.subprocess-expanded',
    title: '子流程'
  },
  {
    action: 'create.data-object',
    title: '数据对象'
  },
  {
    action: 'create.data-store',
    title: '数据存储'
  }, {
    action: 'create.participant-expanded',
    title: '扩展流程'
  },
  {
    action: 'create.group',
    title: '分组'
  },
  // {
  //   action: 'create.joker',
  //   title: 'joker'
  // }
]

//  获取控件配置信息
const getControl = (action) => {
  const result = _controls.filter(item => item.action === action)
  return result[0] || {}
}

export default getControl
