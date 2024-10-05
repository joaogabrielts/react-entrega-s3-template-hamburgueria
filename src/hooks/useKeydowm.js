import { useEffect, useRef } from "react";

export const useKeydowm = (keyId, callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleKeydowm = (event) => {
     
      if (event.key === keyId) {
        if (callback) callback(ref.current);
      }
    };
    window.addEventListener("keydown", handleKeydowm);
    return () => {
        window.removeEventListener("keydown", handleKeydowm);
      };
  },[]);
  return ref
};
