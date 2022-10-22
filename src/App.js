import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogPost from "./Pages/BlogPost";
import Products from "./Pages/Products";
import Bets from "./Pages/Bets";
import { Suspense, useState } from "react";
import Loading from "./Components/Loading";
import i18n from "./i18n";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));
  return (
    <div className="App w-4/5 md:w-3/5 xl:w-2/5 mx-auto">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/blog/:id">
              <BlogPost />
            </Route>
            <Route path="/bets" exact>
              <Bets />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>

      {/* <BlogPosts /> */}
    </div>
  );
}

export default App;
