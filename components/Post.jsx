import React from "react";
import Button from "./Buttons";

export default function Post({ title, body, id }) {
  return (
    <div>
      <h3>{title ? title : "title"}</h3>
      <p>{body ? body : "body"}</p>
      <Button id={id} />
    </div>
  );
}
