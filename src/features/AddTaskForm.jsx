import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { Button, Input, Textarea, Card } from "../components/ui";
import "./AddTaskForm.css";

export default function AddTaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorTitle, setErrorTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorTitle("Title is required");
      return;
    }
    addTask(title, description);
    setTitle("");
    setDescription("");
    setErrorTitle("");
  };

  return (
    <Card className="add-task-form">
      <h2 className="form-title">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <Input
          id="title"
          type="text"
          label="Title"
          placeholder="Title task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errorTitle}
          required
        />

        <Textarea
          id="description"
          label="Description"
          rows={3}
          placeholder="Description task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button type="submit" variant="primary" className="submit-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus-icon lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add Task
        </Button>
      </form>
    </Card>
  );
}
