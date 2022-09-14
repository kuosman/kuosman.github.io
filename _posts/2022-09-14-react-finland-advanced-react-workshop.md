---
layout: post
title: Advanced React Workshop
subtitle: React Finland 2022 at Paasitorni, Helsinki
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [react, workshop]
---

# Advanced React Workshop

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

