import { Alert } from 'react-bootstrap'

// Detail non ha idea di quale sia lo stato di Table

const Detail = (props) => {
  // App passa la prop "selected" (con il valore di "Uno", "Due" o "Tre") a Detail
  return (
    <Alert variant="success">{props.selected || 'Seleziona un valore'}</Alert>
  )
}

export default Detail
