//MODULES
import React from 'react';

//STYLES
import './aAtom.css';

interface AAtomProps {
  path: string;
  value: string;
}

const AAtom = (props: AAtomProps) => {
  return <a href={props.path}>{props.value}</a>;
};
export default AAtom;
