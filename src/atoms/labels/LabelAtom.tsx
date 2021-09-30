//MODULES
import React from 'react';

//STYLES
import './labelAtom.css';

//COMPONENTS

interface LabelAtomProps {
  htmlFor: string;
  value: string;
}

/**
 * @functionComponent LabelAtom
 * @componentType atom
 * @param htmlFor string
 * @param value string
 * @returns string
 * @description Renvoie un label lié à un tag input.
 */
const LabelAtom = (props: LabelAtomProps) => {
  return <label htmlFor={props.htmlFor}>{props.value}</label>;
};
export default LabelAtom;
