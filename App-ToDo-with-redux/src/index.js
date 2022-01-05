import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './components/store'

import App from './components/App/App'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);