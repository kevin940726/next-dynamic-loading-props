import React, { useRef, useEffect, useCallback, ComponentType } from 'react';

export default function loadable<P = {}>(
  loader: (loading: ComponentType<P>) => ComponentType<P>,
  Loading: ComponentType<P>
): ComponentType<P> {
  return function (props) {
    const loadingRef = useRef(<Loading {...props} />);
    const LoadableRef = useRef<ComponentType<P> | null>(null);

    useEffect(() => {
      loadingRef.current = <Loading {...props} />;
    });

    const getLoadable = useCallback(() => {
      if (!LoadableRef.current) {
        LoadableRef.current = loader(() => loadingRef.current);
      }

      return LoadableRef.current;
    }, []);

    const Loadable = getLoadable();

    return <Loadable {...props} />;
  };
}
