import { useHistory } from "react-router-dom";
import React, { useState } from "react";

export default function Nav() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
