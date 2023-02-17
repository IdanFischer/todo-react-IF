import { useState } from "react"
import { Form } from "react-bootstrap"

export default function TaskAdd({ tasks, setTasks }) {
  // this sets the useState for an indviual task
  const [task, setTask] = useState("")
  const handleAddTask = (e) => {
    // this stops the refresh from happening
    e.preventDefault()
    // this sets the new task to have a default value of false for done and have the task key set to the new task on submit
    const newTask = {
      "done": false,
      "task": task
    }
    
    fetch("https://todo-c9-api-if.web.app/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    })
    .then(res => res.json())
    .then(setTasks)
    .catch(console.error)
  }
  
  console.log(`${task}`)
  
  return (
    <>
      <Form onSubmit={handleAddTask}>
        <Form.Group className="mb-3" controlId="formAddTask">
          <Form.Label>Add Task</Form.Label>
          <Form.Control 
          value={task}
          onChange={e => setTask(e.target.value)}
          type="task" 
          placeholder="Enter New Task" />
        </Form.Group>
        </Form>
      </>
      )
}