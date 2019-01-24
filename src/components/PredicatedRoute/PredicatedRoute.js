import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PredicatedRoute({
  component: Component,
  valid,
  redirect,
  children,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        valid ? (
          Component ? (
            <Component {...props} />
          ) : (
            children
          )
        ) : (
          <Redirect
            to={{
              pathname: redirect,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default connect((state, { predicate }) => ({
  valid: predicate(state)
}))(PredicatedRoute);
