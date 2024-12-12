"use client";

import React from "react";

function error({ reset }: { reset: () => void }) {
  return (
    <>
      <div>ERRORrrrrrr auxilio me desmayo</div>
      <button onClick={reset}>intenta de nuevo</button>
    </>
  );
}

export default error;
