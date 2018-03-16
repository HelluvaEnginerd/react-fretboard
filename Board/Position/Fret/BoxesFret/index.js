import React from 'react'
import pt from 'prop-types'
import BoxesContent from '../BoxesContent'
import Wrapper from './Wrapper'


const BoxesFret = ({ note, showNotes }) =>
  <Wrapper>
    {showNotes &&
      <BoxesContent note={note} />
    }
  </Wrapper>

BoxesFret.propTypes = {
  note: pt.string.isRequired,
  showNotes: pt.bool.isRequired,
}

export default BoxesFret
