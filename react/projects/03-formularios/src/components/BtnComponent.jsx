import { useRef, useState, useEffect } from "react";

// Este ejemplo no ilustra el funcionamiento de useref

export const BtnComponent = (props) => {
  
  let toggled = useRef(false);
  
  const handleToggleBody  = () => {
    toggled.current = !toggled.current;
  }
  
  return (
    <section>
      <h3 onMouseMove={handleToggleBody}>
        {props.title}
      </h3>

      {toggled && <article >{props.body}</article>}
    </section>
  )
  
}