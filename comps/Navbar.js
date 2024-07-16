import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/ninja-logo.png" width={150} height={90} />
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/about"> About</Link>
        </li>

        <li>
          {" "}
          <Link href="/53"> Error page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
