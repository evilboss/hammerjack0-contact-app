import React from 'react'
import Footer from './Footer'
import AddContact from '../containers/AddContact'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <AddContact />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App
