import Link from 'next/link'

const NotFound = () => {
    return (
        <div>   
            <h1>Sorry</h1>
            <h2>Page does not exist.</h2>
            <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )  
}

export default NotFound