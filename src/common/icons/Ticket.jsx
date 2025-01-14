// icon:ticket | Fontawesome https://fontawesome.com/ | Fontawesome
import * as React from "react";

function TicketIcon(props) {
  return (
    <svg
      viewBox="0 0 576 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M64 64C28.7 64 0 92.7 0 128v80c26.5 0 48 21.5 48 48s-21.5 48-48 48v80c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-80c-26.5 0-48-21.5-48-48s21.5-48 48-48v-80c0-35.3-28.7-64-64-64H64zm64 96v192h320V160H128zm-32 0c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
    </svg>
  );
}

export default TicketIcon;
