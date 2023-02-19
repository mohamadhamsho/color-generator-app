import React, { useEffect, useState } from "react";

function SingleColor({ rgb, weight, index, hex }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <>
      <div
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
        className={`item p-3 ${index > 10 ? "color-light" : "color-dark"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
      >
        <p>{weight}%</p>
        <p>{hexValue}</p>
        {alert && (
          <p
            className={`copy-text ${index > 7 ? "color-light" : "color-dark"}`}
          >
            Copied To Clipboard
          </p>
        )}
      </div>
    </>
  );
}

export default SingleColor;
