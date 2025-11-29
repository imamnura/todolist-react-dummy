import { useTasks } from "../hooks/useTasks";
import TaskItem from "./TaskItem";
import { Card } from "../components/ui";
import "./TaskList.css";

export default function TaskList() {
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return (
      <Card className="task-list-empty">
        <div className="loader"></div>
        <p className="empty-text">Loading tasks from API...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="task-list-error">
        <span className="error-icon">
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
            className="lucide lucide-triangle-alert-icon lucide-triangle-alert"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </span>
        <p className="error-text">Failed to load tasks: {error}</p>
      </Card>
    );
  }

  if (tasks.length === 0) {
    return (
      <Card className="task-list-empty">
        <span className="empty-icon">
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
            className="lucide lucide-info-icon lucide-info"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </span>
        <p className="empty-text">No tasks found for this filter.</p>
      </Card>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={task.id} task={task} index={index} />
      ))}
    </div>
  );
}
