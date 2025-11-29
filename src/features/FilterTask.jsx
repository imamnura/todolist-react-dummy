import { useTasks } from "../hooks/useTasks";
import { Button, Card } from "../components/ui";
import "./FilterTask.css";

export default function FilterTasks() {
  const { filter, setFilter, rawTasks } = useTasks();

  const total = rawTasks.length;
  const completedCount = rawTasks.filter((t) => t.completed).length;
  const incompleteCount = rawTasks.filter((t) => !t.completed).length;

  const filters = [
    {
      key: "incomplete",
      label: "Incomplete",
      count: incompleteCount,
    },
    { key: "completed", label: "Completed", count: completedCount },
    { key: "all", label: "All", count: total },
  ];

  return (
    <Card className="filter-bar">
      <h3 className="filter-title">Filter Tasks</h3>
      <div className="filter-buttons">
        {filters.map(({ key, label, count }) => (
          <Button
            key={key}
            variant={filter === key ? "primary" : "outline"}
            size="small"
            onClick={() => setFilter(key)}
            className="filter-btn"
          >
            {key === "incomplete" && (
              <span className="filter-icon">
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
                  class="lucide lucide-loader-icon lucide-loader"
                >
                  <path d="M12 2v4" />
                  <path d="m16.2 7.8 2.9-2.9" />
                  <path d="M18 12h4" />
                  <path d="m16.2 16.2 2.9 2.9" />
                  <path d="M12 18v4" />
                  <path d="m4.9 19.1 2.9-2.9" />
                  <path d="M2 12h4" />
                  <path d="m4.9 4.9 2.9 2.9" />
                </svg>
              </span>
            )}
            {key === "completed" && (
              <span className="filter-icon">
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
                  className="lucide lucide-circle-check-big-icon lucide-circle-check-big"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </span>
            )}
            {key === "all" && (
              <span className="filter-icon">
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
                  className="lucide lucide-file-text-icon lucide-file-text"
                >
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </span>
            )}
            {label} <span className="filter-count">({count})</span>
          </Button>
        ))}
      </div>
    </Card>
  );
}
