import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './components/store'
import App from './components/App/App'
import { ThemesContext, themes } from "../src/components/context";

const rootElement = document.getElementById("root");


ReactDOM.render(
  <Provider store={store}>
    <ThemesContext.Provider value = {themes}>
    <App />
    </ThemesContext.Provider>
  </Provider>,
  rootElement
);
