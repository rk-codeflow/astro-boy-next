import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a>Contact us</a>
      </Link>
    </nav>
  );
}

export default Navbar;