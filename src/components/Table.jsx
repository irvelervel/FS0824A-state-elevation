import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

// Table aveva uno state: ora non ce l'ha più, ma riceve quello stesso valore
// da App, come prop!

class Table extends Component {
  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup className="text-dark">
          <ListGroup.Item
            // setto lo stato di App nell'unico modo possibile: utilizzando la funzione "changeAppState" che mi è stata passata da App come prop!
            // l'unico modo per cambiare lo stato di App è in qualche modo invocare un this.setState dentro App
            onClick={(e) => this.props.changeAppState('Uno')}
            className={this.checkSelected('Uno')}
          >
            Uno
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeAppState('Due')}
            className={this.checkSelected('Due')}
          >
            Due
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeAppState('Tre')}
            className={this.checkSelected('Tre')}
          >
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Stato del componente: {this.props.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
