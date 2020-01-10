import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MakeTodo from "./components/MakeTodo";
import Extra from "./components/Extra";
import TodoList from "./components/TodoList";
import Page404 from "./components/Page404";

import "antd/dist/antd.min.css";
import MixWSidebar from "./components/MixWSidebar";

export const Todo = React.createContext();

const initialState = {
  list: JSON.parse(localStorage.getItem("offline_todo")) || []
};

function todoReducers(state, action) {
  switch (action.type) {
    case "CREATE_TODO_SUCCESS":
      localStorage.setItem(
        "offline_todo",
        JSON.stringify([action.payload, ...state.list])
      );
      return { ...state, list: [action.payload, ...state.list] };
    case "CLEAR_TODO":
      localStorage.removeItem("offline_todo");
      return { ...state, list: [] };
    case "DELETE_ONE":
      localStorage.setItem(
        "offline_todo",
        JSON.stringify(
          state.list.filter((value, index) => index !== action.payload)
        )
      );
      return {
        ...state,
        list: state.list.filter((value, index) => index !== action.payload)
      };
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(todoReducers, initialState);

  return (
    <Todo.Provider value={{ todo, dispatch }}>
      <Router>
        <Switch>
          <MixWSidebar>
            <Route exact path="/todo/create" component={MakeTodo} />
            <Route exact path="/todo" component={TodoList} />
            <Route exact path="/extra" component={Extra} />
          </MixWSidebar>

          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </Todo.Provider>
  );
}

export default App;
