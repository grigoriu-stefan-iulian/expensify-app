import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <p><NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink></p>
        <p><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></p>
        <p><NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink></p>
        <p><NavLink to="/help" activeClassName="is-active">Help</NavLink></p>
    </header>
)

export default Header