---
layout: post
title: Conference, day 1
subtitle: React Finland 2022 at Paasitorni, Helsinki
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [react, workshop]
---

# Conference, day 1

`400` attendees

`six` workshop

`25` speakers

Live stream: https://www.youtube.com/watch?v=zE8PDM_7xoQ

![React Finland, day 1](./reactfinland_images/20220915_084023.jpg?raw=true "React Finland, day 1")

## Opening

### What do engineers, kintsugi and stained glass, and lotuses and clocks have in common?

Jen Luker @knitcodemonkey

https://jenluker.com/#/

### Bringing the New React Native Architecture to the OSS community

Nicola Corti

https://ncorti.com/

Android @ React Native

### The World Beyond Components

Ryan Carniato

Author of https://www.solidjs.com/

#### createSignal

```javascript
    import { render } from "solid-js/web";
    import { createSignal } from "solid-js";

    function Counter() {
    const [count, setCount] = createSignal(0);
    const increment = () => setCount(count() + 1);

    return (
        <>
        <h1>Count : {count()}</h1>
        <button type="button" onClick={increment}>Click me</button>
        </>
    );
    }

    render(() => <Counter />, document.getElementById("app")!);
```

Google results why use solidjs:
- https://dev.to/devsmitra/solidjs-and-reactjs-difference-and-comparison-1p3e
- https://www.webtips.dev/solidjs-vs-react

## Techniques

### Zorm - Type-safe <form> for React using Zod

Esa-Matti Suuronen

https://esamatti.fi/

#### Zod

Form library: https://zod.dev/

Zod is a TypeScript-first schema declaration and validation library.

#### Zorm

https://github.com/esamattis/react-zorm

### Good Code

Kadi Kraman

https://github.com/kadikraman


`Writing code`
1. Make it work
2. Make it clean
3. Optimise
4. Generalise

### Better code

`Document` and `enforce` code style decisions:
* document code-style decisions in the ReadMe
* invoice the whole team
* do a walk-through new joiners
* set up linting on CI
* continuesly impore the rules
* refer back to them in code reviers

Always explain any unusual decisions in code comments.

### Notes to my younger self

Kenneth Sutherland

https://www.kennethsutherland.com/

Firts weeks - everyone had headphones on
Bugs - 1000's
No support
Whole team left to go to the states
...

## Statecharts

### The weird things about React

Nik Graf

http://www.nikgraf.com/

### The two types of state management

David Khourshid

https://github.com/davidkpiano

#### Redux

#### Zustand

https://github.com/pmndrs/zustand

#### Multistore

- Recoil
- Valtio
- MobX
- Jotai
- XState

### State machines meet component libraries

Farzad Yousefzadeh

https://farzadyz.com/

https://stately.ai

### Mob programming

Woody Zuill

https://woodyzuill.com/


David Corbacho Roman

https://github.com/dcorb

Laura Ojala

https://lauraojala.fi/

https://github.com/laojala