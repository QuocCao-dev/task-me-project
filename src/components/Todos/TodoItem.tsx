import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { TTodo } from "../../types/todo";

type Props = {
  todo: TTodo;
  onDelete(id: TTodo["id"]): void;
  onSelectTodo(todo: TTodo): void;
};

export function TodoItem({ todo, onDelete, onSelectTodo }: Props) {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleSelectTodo = () => {
    onSelectTodo(todo);
  };

  return (
    <Card className="w-[260px] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-3">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {todo.name}
          </Typography>
        </div>
        <Typography color="gray">description</Typography>
      </CardBody>
      <CardFooter className="flex gap-2 pt-3">
        <Button
          size="sm"
          color="blue"
          fullWidth={true}
          onClick={handleSelectTodo}
        >
          Edit
        </Button>
        <Button size="sm" color="red" fullWidth={true} onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
