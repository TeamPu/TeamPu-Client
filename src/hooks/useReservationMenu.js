import { useState } from "react";

export const useReservationMenu = () => {
  const [selected, setSelected] = useState(0);
  const handleClicked = (index) => {
    setSelected(index);
  };

  return {
    selected,
    handleClicked,
  };
};
