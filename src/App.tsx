import { useState } from "react";
import { Header } from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/Todos/TodoList";
import { useTodoList } from "./hooks/use-todos";
import { TTodo } from "./types/todo";

function App() {
  const { todoList, addTodo, deleteTodo, updateTodo, clearAll } = useTodoList();
  const [todo, setTodo] = useState<TTodo | undefined>();

  const handleSubmitTask = (name: string) => {
    if (todo?.id) {
      updateTodo(todo?.id, name);
      setTodo(undefined);
    } else addTodo(name);
  };

  const handleDeleteTask = (id: string) => {
    deleteTodo(id);
  };

  const handleSelectTodo = (todo: TTodo) => {
    setTodo(todo);
  };

  return (
    <div className="container mx-auto">
      {/* Header */}
      <div className="mt-8">
        <Header />
      </div>
      {/* End of Header */}

      {/* TodoForm */}
      <div className="mt-8">
        <TodoForm onSubmit={handleSubmitTask} todo={todo} />
      </div>
      {/* End Of TodoForm */}

      {/* TodoList */}
      <div className="w-full mt-8">
        <TodoList
          todoList={todoList}
          onDelete={handleDeleteTask}
          onSelectTodo={handleSelectTodo}
          onClearAll={clearAll}
        />
      </div>
      {/* End Of TodoList */}
    </div>
  );
}

export default App;
