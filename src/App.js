import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

// non è al momento possibile condividere lo stato di Table anche a Detail.
// Questo perchè i due componenti sono "siblings" tra di loro, e un'informazione in React si può passare solamente da PADRE a FIGLIO (tramite le props!)
// Quindi, una soluzione potrebbe essere ELEVARE LO STATO: spostare lo state al componente PIÙ VICINO che sia contemporaneamente padre di tutti i componenti a cui volete fornire questo stato condiviso.

class App extends Component {
  state = {
    selected: undefined, // può diventare "Uno", "Due" o "Tre"
  }

  // questo state ora dev'essere settato dal componente Table, perchè gli elementi cliccabili vivono lì!

  changeAppState = (clickedElement) => {
    // clickedElement è "Uno", "Due" o "Tre"
    this.setState({
      selected: clickedElement, // "Uno", "Due" o "Tre"
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  selected={this.state.selected}
                  changeAppState={this.changeAppState}
                  // occhio, this.changeAppState SENZA parentesi tonde!
                  // devo passare un riferimento a Table per utilizzarla,
                  // se mettessi le () la invocherei automaticamente alla riga 33!
                />
              </Col>
              <Col className="my-auto">
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
