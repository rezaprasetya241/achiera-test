import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import TodoListComponent from "../component/organism/TodoListComponent";

function HomePage() {
  return (
    <div className="w-screen min-h-screen bg-gray600">
      <section>
        <div className=" bg-black flex items-center justify-center h-52">
          <img src={Logo} alt="logo-app" className="" />
        </div>
      </section>
      {/* // todolist component */}
      <section className=" flex justify-center flex-col items-center">
        <div>
          <TodoListComponent />
          <div className="flex items center justify-end text-white">
            <Link to={"/register"} className="underline">
              Go to register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
