import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store";




let rerenderDomTree = (state) =>{
  console.log(state)
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderDomTree(store.getState())
store.subscribe(()=>{
  let state = store.getState();

  rerenderDomTree(state)


})