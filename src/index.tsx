import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createApi from "../src/api/api";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { compose } from "recompose";

import {App} from './app';
import { reducer } from './components/reducer/reducer';

const api = createApi((...args:any) => store.dispatch(...args));
export const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : (f:any) => f
    )
  );
interface anus{
    govno : string,
    ehe?:number,

}
const init=()=>{
    ReactDOM.render(
        <Provider store={store}>
        <App/>
        </Provider>,
        document.querySelector(`#root`)
        
        
    )
}

init()