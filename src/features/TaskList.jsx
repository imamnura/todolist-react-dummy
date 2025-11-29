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
        <span className="error-icon">⚠️</span>
        <p className="error-text">Failed to load tasks: {error}</p>
      </Card>
    );
  }

  if (tasks.length === 0) {
    return (
      <Card className="task-list-empty">
        <span className="empty-icon">📭</span>
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
