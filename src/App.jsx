import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";

import MyNavbar from "./components/MyNavbar";
import Movies from "./components/Movies";
import Movies2 from "./components/Movies2";
import Movies3 from "./components/Movies3";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="bg-dark text-white">
      <MyNavbar />
      <Header />
      <Movies />
      <Movies2 />
      <Movies3 />
      <MyFooter />
    </div>
  );
}

export default App;
