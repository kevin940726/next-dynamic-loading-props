import { ReactNode, useState } from 'react';
import dynamic from 'next/dynamic';
import withLoadingProps from '../';

interface ModalProps {
  children: ReactNode;
}

const Modal = withLoadingProps<ModalProps>((useLoadingProps) =>
  dynamic(() => import(/* webpackChunkName: "modal" */ '../components/modal'), {
    ssr: false,
    loading: () => {
      const { children } = useLoadingProps();
      return <button disabled>{children}</button>;
    },
  })
);

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <button onClick={() => setLoaded(true)}>Load</button>
      {loaded && <Modal>Open modal</Modal>}
    </div>
  );
}
