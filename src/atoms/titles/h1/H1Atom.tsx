//MODULES
import React from 'react';

//STYLES
import './h1Atom.css';

interface H1AtomProps {
  value: string;
}

/**
 * @constant H1Atom -- Formate un titre de niveau 1
 * @param props.value Insérer un attribut titre contenant la valeur.
 *
 */
const H1Atom = (props: H1AtomProps) => {
  return <h1 className="h1">{props.value}</h1>;
};
export default H1Atom;
