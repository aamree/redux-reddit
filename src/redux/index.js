import { createStore } from 'redux'
import redditApp from './reducers'

const store = createStore(redditApp)

export default store