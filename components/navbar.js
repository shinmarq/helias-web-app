import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><h1>Helia's</h1></Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact Us</a></Link>
        </nav>
    )
}

export default Navbar