import React from 'react'
import pt from 'prop-types'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'themes/fretboard-theme'
import ViewPort from './ViewPort'
import BoxesGraphic from './BoxesGraphic'
import StringsGraphic from './StringsGraphic'
import Board from './Board'
import Wrapper from './Wrapper'


const boardGraphicTypes = {
  boxes: BoxesGraphic,
  strings: StringsGraphic,
}

class Fretboard extends React.Component {
  getChildContext() {
    return {
      type: this.props.type,
      showNotes: this.props.showNotes,
    }
  }

  render() {
    const { tuning, nrOfFrets, type } = this.props
    const BoardGraphic = boardGraphicTypes[type]

    return (
      <ThemeProvider theme={defaultTheme}>
        <Wrapper>
          <ViewPort>
            <BoardGraphic {...{ tuning, nrOfFrets }} />
            <Board {...{ tuning, nrOfFrets }} />
          </ViewPort>
        </Wrapper>
      </ThemeProvider>
    )
  }
}


Fretboard.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
  type: pt.string,
  showNotes: pt.bool,
}

Fretboard.defaultProps = {
  type: 'boxes',
  showNotes: true,
}

Fretboard.childContextTypes = {
  type: pt.string,
  showNotes: pt.bool,
}

export default Fretboard
