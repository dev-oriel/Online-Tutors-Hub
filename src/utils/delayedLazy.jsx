// utils/delayedLazy.js
import React from "react";

export function delayedLazy(importFunc, delay = 1500) {
  return React.lazy(
    () =>
      new Promise((resolve) => setTimeout(() => resolve(importFunc()), delay))
  );
}
