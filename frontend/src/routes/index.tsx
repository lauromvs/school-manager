import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Employee from '../pages/Employee';
import Professor from '../pages/Professor';
import Student from '../pages/Student';
import AddStudent from '../pages/AddStudent';
import AddEmployee from '../pages/AddEmployee';
import AddSubject from '../pages/AddSubject';
import EnrollStudent from '../pages/EnrollStudent';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/employee" component={Employee} />
    <Route path="/professor" component={Professor} />
    <Route path="/student" component={Student} />
    <Route path="/addStudent" component={AddStudent} />
    <Route path="/addEmployee" component={AddEmployee} />
    <Route path="/addSubject" component={AddSubject} />
    <Route path="/enrollStudent" component={EnrollStudent} />
  </Switch>
);

export default Routes;