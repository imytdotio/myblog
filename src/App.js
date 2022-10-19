import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogPost from "./Pages/BlogPost";

function App() {
  return (
    <div className="App w-4/5 md:w-3/5 xl:w-2/5 mx-auto">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <BlogPost />
          </Route>
        </Switch>
      </BrowserRouter>

      {/* <BlogPosts /> */}
    </div>
  );
}

export default App;
