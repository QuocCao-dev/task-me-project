import { v4 as uuidv4 } from "uuid";
import { TTodo } from "../types/todo";
import { useImmer } from "use-immer";

export function useTodoList() {
  const [todoList, setTodoList] = useImmer<TTodo[]>([]);

  const addTodo = (name: string) => {
    const newTodo = {
      id: uuidv4(),
      name,
      finished: false,
      createdAt: new Date(),
    };
    todoList.push(newTodo);
    setTodoList(todoList);
  };

  const deleteTodo = (id: string) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, name: string) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => (todo.id === id ? { ...todo, name } : todo))
    );
  };

  const clearAll = () => {
    setTodoList([]);
  };

  return {
    todoList,
    addTodo,
    deleteTodo,
    updateTodo,
    clearAll,
  };
}
