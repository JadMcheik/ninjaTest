import Link from 'next/link'


const Navbar = () => {
    return ( 

<nav>

<div className="logo">

<h1>Heroes list</h1>


</div>
<Link href="/"> home</Link>
<Link href="/about"> about</Link>
<Link href="/53"> Error page</Link>





</nav>





     );
}
 
export default Navbar;