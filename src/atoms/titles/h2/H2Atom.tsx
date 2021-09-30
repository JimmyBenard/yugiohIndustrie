//MODULES
import React from 'react';

//STYLES
import './h2Atom.css';

interface H2AtomProps {
  value: string;
}
/**
 * @constant H2Atom -- Formate un titre de niveau 2
 * @param props.value Insérer un attribut titre contenant la valeur.
 *
 */
const H2Atom = (props: H2AtomProps) => {
  return <h2 className="h2">{props.value}</h2>;
};
export default H2Atom;
