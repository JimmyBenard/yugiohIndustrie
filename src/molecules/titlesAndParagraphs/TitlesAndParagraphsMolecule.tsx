//MODULES
import React, { Fragment } from 'react';

//ATOMICS COMPONENTS
import H2Atom from '../../atoms/titles/h2/H2Atom';
import PAtom from '../../atoms/paragraphs/PAtom';

//STYLES
import './titlesAndParagraphsMolecule.css';

interface TitlesAndParagraphsMoleculeProps {
  h2: string;
  p: string;
}

const TitlesAndParagraphsMolecule = (
  props: TitlesAndParagraphsMoleculeProps
) => {
  return (
    <Fragment>
      <H2Atom value={props.h2} />
      <PAtom value={props.p} />
    </Fragment>
  );
};
export default TitlesAndParagraphsMolecule;
