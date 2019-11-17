import React, { Component } from 'react'
import Layout from 'UI/Layout'
import Field from 'UI/Field'
import ControllPanel from 'UI/ControllPanel'
import { Grid, Button } from '@material-ui/core'
import Header from './UI/Header/Header'
import Rules from './UI/Rules/Rules'
import {
  moveCells,
  directions,
  initCells,
  removeAndIncreaseCells,
  populateField,
} from 'logic'

class App extends Component {
  state = this.getNewState()

  mapKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyS: directions.DOWN,
    KeyD: directions.RIGHT,
    KeyW: directions.UP,
  }

  newGame = () => {
    this.setState(this.getNewState())
  }

  getNewState() {
    return {
      cells: initCells(),
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  handleKeyPress = async event => {
    if (!['KeyA', 'KeyS', 'KeyD', 'KeyW'].includes(event.code))
      return
    
    this.setState(state => ({
      ...state,
      cells: moveCells(state.cells, this.mapKeyCodeToDirection[event.code]),
    }))

    await delay(100)
    this.setState(state => ({
      ...state,
      cells: removeAndIncreaseCells(state.cells),
    }))
    this.setState(state => ({
      ...state,
      cells: populateField(state.cells),
    }))
  }

  render() {
    const { cells } = this.state

    return (
      
      <Layout>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <Header /> 
        </Grid>
        <Grid item xs={6}>
        <ControllPanel>
          <Button  variant="outlined" onClick={this.newGame}>New Game</Button>
        </ControllPanel>
        </Grid>
        <Field cells={cells} />
        <Rules />
        </Grid>
      </Layout>
    )
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default App
