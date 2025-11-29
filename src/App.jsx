import "./styles/App.css";
import { TasksProvider } from "./contexts/TasksContext";
import AddTaskForm from "./features/AddTaskForm";
import FilterTask from "./features/FilterTask";
import TaskList from "./features/TaskList";

const App = () => {
  return (
    <TasksProvider>
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Todo List React Dummy</h1>
          <p className="app-subtitle">
            A simple todo list application built with React.
          </p>
        </header>

        <main className="app-main">
          <section className="left-column">
            <AddTaskForm />
            <FilterTask />
          </section>
          <section className="right-column">
            <h2 className="section-title">Tasks</h2>
            <TaskList />
          </section>
        </main>
      </div>
    </TasksProvider>
  );
};

export default App;
