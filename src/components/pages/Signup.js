import React, { useState } from "react";
import Input from "../layout/Input";
import { useFirebase } from "react-redux-firebase";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  let history = useHistory();
  const firebase = useFirebase();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await firebase.createUser({
      email: user.email,
      password: user.password,
    });
    history.replace("/");
  };

  return (
    <div className="container">
      <div className="py-5">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card shadow">
              <div className="card-body">
                <img
                  src="assets/logo.png"
                  alt="logo"
                  className="card-img-top mb-3"
                  height="70px"
                />

                <form onSubmit={submitForm}>
                  <div className="form-group">
                    <Input
                      name="name"
                      placeholder="Enter Your Name"
                      value={user.name}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      name="email"
                      placeholder="Enter Your E-mail"
                      value={user.email}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      value={user.password}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="Again Write Your Password"
                      value={user.confirmPassword}
                      onChange={onInputChange}
                    />
                  </div>
                  <button className="btn btn-primary btn-block">Signup</button>
                  <Link to="/login" className="mt-2 d-block">
                    Already Have Acount. Click Here To Login
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
