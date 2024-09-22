import { CiCirclePlus } from "react-icons/ci";
import CardItemTodoComponent from "../molecule/card-item-todo/CardItemTodoComponent";
import TodoJson from "../../data/data-todoList.json";
import { ListTodo } from "../../helpers/types/todo/todo";
import { useState } from "react";
import ButtonComponent from "../atom/button/ButtonComponent";

const initialState: ListTodo = { listTodo: TodoJson };

const TodoListComponent = () => {
  const [listData, setListData] = useState<ListTodo>(initialState);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleDelete = (id: string) => {
    const filterData = listData.listTodo.filter((item) => item.id !== id);
    setListData({ ...listData, listTodo: filterData });
    return listData;
  };

  const handleAdd = () => {
    if (newTodo !== "") {
      const newData = listData;
      newData.listTodo.push({
        id: (listData.listTodo.length + 1).toString(),
        label: newTodo,
      });
      setNewTodo("");
      return setListData({ ...listData, listTodo: newData.listTodo });
    }
  };

  return (
    <div className=" flex flex-col items-center py-4">
      <div className="">
        {/* // for header TodoList */}
        <div className="flex items-center justify-between gap-2 py-4">
          <input
            className="bg-gray300 w-full rounded-lg p-2"
            type="text"
            placeholder="Add new todo"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
          />
          <div>
            <ButtonComponent disabled={newTodo === ""} handleClick={handleAdd}>
              <div className="flex items-center gap-2">
                <span>Add</span>
                <CiCirclePlus />
              </div>
            </ButtonComponent>
          </div>
        </div>
        {/* // for list of TodoList */}
        <div className="flex flex-col gap-y-4">
          {/* // item of list TodoList */}
          {listData?.listTodo?.map((item, index) => {
            return (
              <CardItemTodoComponent
                item={item}
                handleDelete={handleDelete}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoListComponent;
