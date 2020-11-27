import React from 'react';
import Navbar from './components/layout/Navbar';
import Students from './components/students/Students';
import './styles/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Student from './components/students/Student';
import StudentForm from './components/students/StudentForm';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Students} />
        <Route exact path="/student/:id" component={Student} />
        {/* qustion mark added so component will render with or without id */}
        <Route exact path="/studentForm/:id?" component={StudentForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
