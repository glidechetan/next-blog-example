import React from "react";

export default function DarkTheme() {
  return (
    <style jsx global>
      {`
        /* Dark Theme */
        :root {
          --background-color: rgb(27, 27, 27);
          --link-color: rgb(234, 207, 3);
          --text-color: rgb(230, 224, 224);
        }
      `}
    </style>
  );
}
