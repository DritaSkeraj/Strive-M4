import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import MovieList from "./components/MovieList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route path="/" exact ><MovieList/></Route>
        <MyFooter />
      </Router>
    </>
  );
}

export default App;
