// HOC = Higher Order Component
// A component that renders another component
// Reuse code 
// Render hijacking
// Prop manipulation
//Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h2>Some info</h2>
        <p>Info para: {props.info}</p>
        <p>{props.isAuthenticated} Profile</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a priviledged data</p>}

            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <div>
                    <p>Wellcome {props.isAuthenticated}
                    </p> <WrappedComponent {...props} />
                </div>
            ) : (
                    <p>Please Login</p>
                )}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={true} info="Info here" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={"Stefan"} info="Info here" />, document.getElementById('app'))