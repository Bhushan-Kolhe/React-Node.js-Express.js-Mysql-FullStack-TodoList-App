import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <span>Todo List App</span>
        </header>
    )
}

const headerStyle = {
    background: "#222",
    color: "#FFF",
    textAlign: 'center',
    padding: '5px 5px 2px 5px',
    fontSize: "1.5em"
}
