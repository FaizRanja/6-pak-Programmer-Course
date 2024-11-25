import {configureStore} from '@reduxjs/toolkit'
import { firstReducer } from './reducers'



const Store=configureStore ({
reducer:{
first:firstReducer
}

})



export default Store