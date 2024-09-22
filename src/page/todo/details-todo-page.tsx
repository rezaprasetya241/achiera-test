import { Link, useParams, useSearchParams } from "react-router-dom";
import CardComponent from "../../component/atom/card/CardComponent";

const DetailsTodoPage = () => {
  const [queryParams] = useSearchParams();
  const { id } = useParams();
  const dataDetails = queryParams.get("details");
  return (
    <div className="w-screen bg-gray600 min-h-screen flex items-center justify-center">
      <div className="text-white ">
        <CardComponent>
          <div>
            <p>id: {id}</p>
            <p>Details: {dataDetails}</p>
          </div>
        </CardComponent>
        <div className="flex flex-col justify-center">
          <Link to={"/"} className="underline text-center mt-2">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsTodoPage;
