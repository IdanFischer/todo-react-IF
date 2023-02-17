import { useEffect } from "react"
import Button from "react-bootstrap/Button"
import TaskAdd from "./TaskAdd"

export default function TaskList({ tasks, setTasks }) {

  useEffect(() => {
    fetch("https://todo-c9-api-if.web.app/tasks")
      .then(res => res.json())
      .then(setTasks)
      .catch(console.error)
  }, [setTasks])

  return (
    <div>
      <h1>To Do List</h1>
      {
        !tasks
          ? <p>Loading...</p>
          : tasks.map(element => (
            <Button key={element.taskId} className="col-12 display-flex mb-3">{element.task}</Button>
          ))
      }
    </div>
  )

}