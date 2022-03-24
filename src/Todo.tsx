import { VFC } from "react";
import { TodoType } from "./types/todo";

// export const Todo = (props: Pick<TodoType, "title" | "userId" | "completed">) => {
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const complateMark = completed ? "[完]" : "[未]";
  return <p>{`${complateMark}${title}(ユーザー:${userId})`}</p>;
};
