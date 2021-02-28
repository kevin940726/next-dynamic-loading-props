import React, { createContext, useContext, ComponentType } from 'react';

export default function withLoadingProps<Props = {}>(
  loader: (useLoadingProps: () => Props) => ComponentType<Props>
): ComponentType<Props> {
  const LoadingPropsContext = createContext({} as Props);

  const useLoadingProps = () => useContext(LoadingPropsContext);

  const Dynamic = loader(useLoadingProps);

  return function (props: Props) {
    return (
      <LoadingPropsContext.Provider value={props}>
        <Dynamic {...props} />
      </LoadingPropsContext.Provider>
    );
  };
}
