import React from 'react'

export default ({description, amount, createdAt}) => (
    <div>
        <h4>{description}</h4>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
    </div>
)