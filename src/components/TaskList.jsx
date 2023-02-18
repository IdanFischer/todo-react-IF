import { useEffect } from "react"
import Button from "react-bootstrap/Button"

export default function TaskList({ tasks, setTasks }) {

  // renders the list (once) and updates the list when a new one gets added
  useEffect(() => {
    fetch("https://todo-c9-api-if.web.app/tasks")
      .then(res => res.json())
      // gets 
      .then(setTasks)
      .catch(console.error)
  }, [setTasks])

  const toggleDone = (task) => {

    const done = !!!task.done

    fetch(`https://todo-c9-api-if.web.app/tasks/${task.taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ done })
    })
      .then(res => res.json())
      .then(setTasks)
      .catch(console.error)
  }

  return (
    <div>
      <h1>To Do List</h1>
      {
        !tasks
          ? <p>Loading...</p>
          : tasks.map(element => (
            <Button key={element.taskId} variant="link" className={
              element.done
              ?
              "false-done col-12 display-flex mb-3 variant=link "
              :
              "true-done col-12 display-flex mb-3"
            }
              onClick={() => toggleDone(element)}>{element.task}</Button>
          ))
      }
    </div>
  )

} 