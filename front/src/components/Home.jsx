import React from 'react'

export default function Home(env) {
    return (
        <div className="container">
            <h1>{process.env.NODE_ENV}-ooo</h1>
            <h1 className="text-center mt-3" style={{ color: "#af9abbde" }}>Welcome</h1>
        </div>
    )
}
