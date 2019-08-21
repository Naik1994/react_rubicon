import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
  return(
    <article className="center mw6 pt3 pb4 pl3 pr3 br2 mv5 box-bg">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Good Morning ! Welcome Back</legend>
            <div className="mt3">
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="uname"
                id="uname"
              />
            </div>
            <div className="mv3">
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="container">
              <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
              <a href="#0" className="f6 link dim black db no-bg">Forgot password?</a>
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange('home')}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="LOGIN"
            />
          </div>
        </div>
      </main>
    </article>
  );
}

export default Signin;
