import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { TodoItem } from "./TodoItem";
import { TTodo } from "../../types/todo";

type Props = {
  todoList: TTodo[];
  onDelete(id: TTodo["id"]): void;
  onSelectTodo(todo: TTodo): void;
  onClearAll(): void;
};

const TodoList = ({ todoList, onDelete, onSelectTodo, onClearAll }: Props) => {
  return (
    <Card>
      {/* Todo Header */}
      <CardHeader
        variant="gradient"
        color="green"
        className="flex items-center justify-between h-20 px-4 mb-4"
        floated={false}
        shadow
      >
        <div className="flex items-center gap-2">
          <Typography className="text-white">Todo</Typography>
          <div>
            <span className="w-[36px] h-[36px] rounded-full bg-gray-500 p-2">
              {todoList.length}
            </span>
          </div>
        </div>

        <div>
          <Button onClick={onClearAll}>Clear All</Button>
        </div>
      </CardHeader>
      <CardBody className="flex flex-wrap items-center gap-4">
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onSelectTodo={onSelectTodo}
          />
        ))}
      </CardBody>
    </Card>
  );
};

export default TodoList;
