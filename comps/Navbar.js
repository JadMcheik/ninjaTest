import Link from 'next/link'


const Navbar = () => {
    return ( 

<nav>

<div className="logo">

<h1>Heroes list</h1>


</div>
<Link href="/"> <a>home</a></Link>
<Link href="/about"> <a>about</a></Link>
<Link href="/"> <a>heros listing</a></Link>





</nav>





     );
}
 
export default Navbar;