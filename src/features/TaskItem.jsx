import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import {
  Button,
  Card,
  Badge,
  Checkbox,
  Input,
  Textarea,
} from "../components/ui";
import "./TaskItem.css";

export default function TaskItem({ task, index }) {
  const { updateTask, deleteTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(
    task.description || ""
  );

  const handleToggleComplete = () => {
    updateTask(task.id, { completed: !task.completed });
  };

  const handleSave = () => {
    const trimmedTitle = editTitle.trim();
    if (!trimmedTitle) return;
    updateTask(task.id, {
      title: trimmedTitle,
      description: editDescription.trim(),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description || "");
    setIsEditing(false);
  };

  return (
    <Card
      className={`task-item ${task.completed ? "task-completed" : ""}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="task-header">
        <Checkbox checked={task.completed} onChange={handleToggleComplete} />

        {isEditing ? (
          <input
            className="task-title-input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            autoFocus
          />
        ) : (
          <div className="task-title-wrapper">
            <h3
              className={`task-title ${
                task.completed ? "task-title-completed" : ""
              }`}
            >
              {task.title}
            </h3>
            {task.isFromApi && <Badge variant="primary">API</Badge>}
          </div>
        )}
      </div>

      <div className="task-body">
        {isEditing ? (
          <textarea
            className="task-desc-input"
            rows={3}
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Add a description..."
          />
        ) : (
          <p className="task-description">
            {task.description || "No description provided."}
          </p>
        )}
      </div>

      <div className="task-footer">
        <Badge variant={task.completed ? "success" : "warning"}>
          {task.completed ? "✓ Completed" : "⏳ Incomplete"}
        </Badge>

        <div className="task-actions">
          {isEditing ? (
            <>
              <Button size="small" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button size="small" variant="success" onClick={handleSave}>
                💾 Save
              </Button>
            </>
          ) : (
            <>
              <Button
                size="small"
                variant="default"
                onClick={() => setIsEditing(true)}
              >
                ✏️ Edit
              </Button>
              <Button
                size="small"
                variant="danger"
                onClick={() => deleteTask(task.id)}
              >
                🗑️ Delete
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
