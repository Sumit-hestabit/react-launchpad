import React from 'react'
import { useTasks } from '../TaskProvider';

export default function Task({ id, task, complete }) {
  // 2
  const { setStatusTask } = useTasks()

  // 3
  const checkTask = e => setStatusTask(id, e.target.checked)

  return (
    <tr>
      <td>
        // 4
        <input type="checkbox"  onChange={checkTask} />
      </td>
      <td>
        // 5
        <span className={ complete ? 'task-done' : '' }>{ task }</span>
      </td>
    </tr>
  )
}