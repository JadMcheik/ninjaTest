import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 

<nav>

<div className="logo">

<Image src="/ninja-logo.png" width={150} height={90}/>


</div>
<Link href="/"> home</Link>
<Link href="/about"> about</Link>
<Link href="/53"> Error page</Link>





</nav>





     );
}
 
export default Navbar;