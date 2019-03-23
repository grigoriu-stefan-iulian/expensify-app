import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <Link
        className="expenses-list__item"
        to={`/edit/${id}`}>
        <div>
            <h3 className="expenses-list__title">{description}</h3>
            <span className="expenses-list__sub-title">{moment(createdAt).format('dddd, MMMM Do YYYY')}</span>
        </div>
        <h3 className="expenses-list__amount">{numeral(amount / 100).format('$0,0.00')}</h3>

    </Link>
)

export default ExpenseListItem