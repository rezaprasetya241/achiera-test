import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home-page";
import RegistrationPage from "./page/registration-page";
import DetailsTodoPage from "./page/todo/details-todo-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/todo/:id" element={<DetailsTodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
