import React, { createContext, useContext, ComponentType } from 'react';

export default function loadable<P = {}>(
  loader: (useLoadingProps: () => P) => ComponentType<P>
): ComponentType<P> {
  const LoadingPropsContext = createContext({} as P);

  const useLoadingProps = () => useContext(LoadingPropsContext);

  const Loadable = loader(useLoadingProps);

  return function (props: P) {
    return (
      <LoadingPropsContext.Provider value={props}>
        <Loadable {...props} />
      </LoadingPropsContext.Provider>
    );
  };
}
