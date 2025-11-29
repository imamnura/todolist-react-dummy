import "./styles/App.css";
import { TasksProvider } from "./contexts/TasksContext";

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
            <h2>Add New Task</h2>
            <h2>Filter</h2>
          </section>
          <section className="right-column">
            <h2 className="section-title">Tasks</h2>
          </section>
        </main>
      </div>
    </TasksProvider>
  );
};

export default App;
