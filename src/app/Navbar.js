import React from 'react'
import Link from 'next/link'
import { Linden_Hill } from 'next/font/google'

function Navbar() {
    return (

        <nav className="navbar">
            <div class="Inicio">
            <Link href="/">Inicio</Link>
            <Link class="tienda" href="/tienda">Tienda</Link>
            <Link href="/blog">Blog</Link>
            </div>
            <div class="acercaDe">
            <Link class="acerca" href="/acerca-de">Acerca de...</Link>
            <Link href="/registro">Registrarme</Link>
            </div>
        </nav>



    )
}

export default Navbar