import { Button, Card, CardBody, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { TTodo } from "../types/todo";

type Props = {
  onSubmit(name: string): void;
  todo: TTodo | undefined;
};

const TodoForm = ({ onSubmit, todo }: Props) => {
  const [taskName, setTaskName] = useState(todo?.name ?? ""); // undefined.name

  useEffect(() => {
    if (todo?.name) {
      setTaskName(todo.name);
    }
  }, [todo]);

  const handleClick = () => {
    onSubmit(taskName);
    setTaskName("");
  };

  return (
    <Card>
      <CardBody className="flex flex-col items-center justify-center">
        <Input
          label="Todo Name"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <Button size="md" color="green" className="mt-2" onClick={handleClick}>
          Submit
        </Button>
      </CardBody>
    </Card>
  );
};

export default TodoForm;
