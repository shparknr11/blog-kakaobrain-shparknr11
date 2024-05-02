import ReactDOM from "react-dom/client";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div class="wrap">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
);
