import React, { FC } from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouterProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: FC<RouterProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              state: { from: location },
              pathname: isPrivate ? '/' : 'dashboard',
            }}
          />
        );
      }}
    />
  );
};

export default Route;
