import React from 'react';
import Navbar from './components/layout/Navbar';
import Students from './components/students/Students';
import './styles/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Student from './components/students/Student';
import StudentForm from './components/students/StudentForm';
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Login from "./components/pages/Login";
import PrivateRoute from './components/routes/PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <PrivateRoute component={Navbar} />
          <Switch>
            <PrivateRoute exact path="/" component={Students} />
            <PrivateRoute exact path="/student/:id" component={Student} />
            {/* qustion mark added so component will render with or without id */}
            <PrivateRoute exact path="/studentForm/:id?" component={StudentForm} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
