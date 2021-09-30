//MODULES
import React from 'react';

//STYLES
import './inputAtom.css';

interface InputAtomProps {
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: any;
  onClick: any;
}

/**
 * @functionComponent InputLabel
 * @componentType atom
 * @param id string
 * @param type string
 * @param name string
 * @param value string
 * @param onChange any (optional)
 * @param onClick any (optional)
 * @returns string
 * @description Renvoie un input lié à un tag input.
 */
const InputAtom = (props: InputAtomProps) => {
  return (
    <input
      id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onClick={props.onClick}
    />
  );
};
export default InputAtom;
