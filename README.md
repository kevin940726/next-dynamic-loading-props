# next-dynamic-loading-props
Pass props to the loading components in next/dynamic

## Installation

```sh
npm install next-dynamic-loading-props
```

## Usage

```jsx
import dynamic from 'next/dynamic';
import withLoadingProps from 'next-dynamic-loading-props';

const Modal = withLoadingProps(useLoadingProps => dynamic(
  () => import('./modal'),
  {
    ssr: false,
    loading: () => {
      const props = useLoadingProps();
      return <Loading {...props} />
    }
  }
));

<Modal {...loadingProps} />
```
