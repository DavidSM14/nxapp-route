import React from 'react'
import Link from 'next/link'
import { Linden_Hill } from 'next/font/google'

function Navbar2() {
    return (

        <div className="navbar2">
            
            <Link href="/tienda/electronica">Electronica</Link>
            <br></br>
            <Link href="/tienda/decoracion">Decoracion</Link>
            <br></br>
            <Link href="/tienda/mobiliario">Mobiliario</Link>
            <br></br>
            <Link href="/tienda/libros">libros</Link>
            
        </div>

    )
}

export default Navbar2