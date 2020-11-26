import "./App.css";
import Categories from "./views/Categories";
import Items from "./views/Items";
import Layout from "./components/Layout"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { CategoriesRoute, ItemsRoute } from "./Routes"

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to={CategoriesRoute} />
          </Route>
          <Route exact path={CategoriesRoute}>
            <Categories />
          </Route>
          <Route exact path={ItemsRoute}>
            <Items />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
