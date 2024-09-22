import { MdOutlineDelete } from "react-icons/md";
import CardComponent from "../../atom/card/CardComponent";
import { Todo } from "../../../helpers/types/todo/todo";
import { Link } from "react-router-dom";
interface Props {
  item: Todo;
  handleDelete: (id: string) => void;
}

const CardItemTodoComponent = ({ item, handleDelete }: Props) => {
  const deleteData = () => {
    handleDelete(item.id);
  };
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="w-full">
        <CardComponent>
          <Link to={`/todo/${item.id}?details=${item.label}`}>
            <div className="text-white">
              <p>{item.label}</p>
            </div>
          </Link>
        </CardComponent>
      </div>
      <MdOutlineDelete
        className="text-red-500 cursor-pointer text-xl"
        onClick={deleteData}
      />
    </div>
  );
};

export default CardItemTodoComponent;
