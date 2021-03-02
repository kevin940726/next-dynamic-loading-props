# next-dynamic-loading-props
Pass props to the loading components in next/dynamic. A package to workaround [vercel/next.js#7906](https://github.com/vercel/next.js/issues/7906).

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
