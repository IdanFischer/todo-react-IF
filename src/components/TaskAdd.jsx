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
    // this fetches the post api url
    fetch("https://todo-c9-api-if.web.app/tasks/", {
      // sets the method as a post
      method: "POST",
      // makes it so it reads it in json (a just in case type of code, not needed but always good for failsafe)
      headers: {
        "Content-Type": "application/json"
      },
      // converts the new task into json format so that the api can receieve it
      body: JSON.stringify(newTask)
    })
    // makes the response come back as json
    .then(res => res.json())
    // displays all the data and gets all
    .then(data => setTasks(data))
    // error handling 
    .catch(console.error)
  }
  
  return (
    <>
      <Form onSubmit={handleAddTask}>
        <Form.Group className="mb-3" controlId="formAddTask">
          <Form.Label>Add Task</Form.Label>
          <Form.Control 
          // displays the task in the text bar so we and the computer can see
          value={task}
          // gets setTask to change the task variable, and e.target.value hits the object target and the object value so that what gets displayed is what we are writing 
          onChange={e => setTask(e.target.value)}
          type="text" 
          placeholder="Enter New Task" />
        </Form.Group>
        </Form>
      </>
      )
}