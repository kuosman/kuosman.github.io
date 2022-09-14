---
layout: post
title: Advanced React Workshop (React 18)
subtitle: React Finland 2022 at Paasitorni, Helsinki
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [react, workshop]
---

# Advanced React Workshop (React 18)

Workshop organizer: Nik Graf -> https://www.nikgraf.com/

## identifierPrefix

```javascript
    const root = ReactDOM.createRoot(rootElement, { identifierPrefix: "yolo-" });

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
```
## useId

Generates unique id.

```javascript
const Checkbox: React.FC<Props> = ({ children }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
};
```

## Concurrency

### New hooks

- useTransition
- useDeferredValue
- startTransition
- useSyncExternalStore
- useInsetionEffect

## useDeferredValue

Does the dom update only at the end when there are many renderings to useState --> better user experience and faster ui.

useDeferredValue(value) is hook that accepts a value and returns a new copy of the value that will defer to more urgent updates. The previous value is kept until urgent updates have completed. Then, the new value is rendered. This hook is similar to using debouncing or throttling to defer updates.

https://medium.com/ovrsea/asynchronous-rendering-with-usedeferredvalue-ce7b3675151f
Neat trick showing which one is stale: compare values
That said it might get expensive with more complex values e.g. large nested objects.

## useTransition

useTransition() is a hook for transition. It returns the transition state and a function to start the transition.

## useState

React 18 introduced "Automatic Batching" of State Updates.

Pro: more efficient state updates
Con: some existing probably won't but might break

## useSyncExternalStore

useSyncExternalStore is a hook recommended for reading and subscribing from external data sources in a way that’s compatible with concurrent rendering features like selective hydration and time slicing.

## useInsertionEffect

useInsertionEffect is introduced in React 18. It has the same signature as useEffect, but it fires synchronously before all DOM mutations. i.e. it is fired before useLayoutEffect. It is used to inject styles into the DOM before reading layout.
