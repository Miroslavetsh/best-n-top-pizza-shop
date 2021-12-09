import { connect } from 'react-redux'

import { RootState } from '../redux/store'
import { setPizza } from '../redux/actions/pizza'

import App from '../App'

const mapStateToProps = (state: RootState) => ({ items: state.pizza.items })
const mapDispatchToProps = {
  setPizza,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
