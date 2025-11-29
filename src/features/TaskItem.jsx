import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { Button, Card, Badge, Checkbox } from "../components/ui";
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
      className={`task-item`}
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
          {task.completed ? (
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              <span style={{ marginTop: "4px" }}>
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
                  className="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Completed</span>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ marginTop: "4px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-alert-icon lucide-circle-alert"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
              </span>
              <span>Incomplete</span>
            </div>
          )}
        </Badge>

        <div className="task-actions">
          {isEditing ? (
            <>
              <Button size="small" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button size="small" variant="success" onClick={handleSave}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ marginTop: "4px" }}>
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
                      class="lucide lucide-save-icon lucide-save"
                    >
                      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
                    </svg>
                  </span>
                  <span>Save</span>
                </div>
              </Button>
            </>
          ) : (
            <>
              <Button
                size="small"
                variant="default"
                onClick={() => setIsEditing(true)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ marginTop: "4px" }}>
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
                      class="lucide lucide-pencil-icon lucide-pencil"
                    >
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                      <path d="m15 5 4 4" />
                    </svg>
                  </span>
                  <span>Edit</span>
                </div>
              </Button>
              <Button
                size="small"
                variant="danger"
                onClick={() => deleteTask(task.id)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ marginTop: "4px" }}>
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
                      class="lucide lucide-trash2-icon lucide-trash-2"
                    >
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                      <path d="M3 6h18" />
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </span>
                  <span>Delete</span>
                </div>
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
