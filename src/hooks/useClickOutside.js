// import React from "react";
import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  // TODO 1: this hook should get a reference to an element and a callback, and will call it whenever you click outside of the element
  useEffect(() => {
    const handleClick = clickEvent => {
      if (isClickOutside(ref.current, clickEvent)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback, ref]);
};

const isClickOutside = (element, clickEvent) => {
  // console.log('element', element);
  return element && !element.contains(clickEvent.target);
};
