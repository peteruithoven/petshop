import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import renderProps from "render-props";

/* ProtectedRoute
 * Inspired by:
 * - https://github.com/devbytecom/react-protected-route/
 * - https://reacttraining.com/react-router/web/example/auth-workflow
 */
export default function ProtectedRoute({
  predicate,
  redirectTo,
  component,
  render,
  children,
  useFrom,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
        if (predicate) {
          if (React.isValidElement(children)) return children;
          else return renderProps(component || children || render, props);
        } else {
          const { state } = props.history.location;
          const fromPathname = state && state.from && state.from.pathname;
          return (
            <Redirect
              to={{
                pathname: useFrom ? fromPathname || redirectTo : redirectTo,
                state: { from: props.location }
              }}
            />
          );
        }
      }}
    />
  );
}
ProtectedRoute.propTypes = {
  predicate: PropTypes.bool,
  redirectTo: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  render: PropTypes.func,
  useFrom: PropTypes.bool
};
ProtectedRoute.defaultProps = {
  predicate: false,
  redirectTo: "/",
  useFrom: false
};
