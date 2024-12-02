import { useEffect, useRef, useState } from "react";

export const useMobileNavBar = () => {
  const [opened, setOpened] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpened(false);
      }
    };

    if (opened) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [opened]);

  return {
    opened,
    setOpened,
    sidebarRef,
    buttonRef,
  };
};
