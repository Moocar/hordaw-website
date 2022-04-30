import Link from "next/link";

function Navbar() {
  return (
    <div class="navbar">
      <h1 class="navbar-title">
        <Link href="/">Georgina & Chris</Link>
      </h1>
      <menu class="navbar-menu">
        <Item title="Things To Know" href="/things-to-know" />
        <Item title="Schedule" href="/schedule" />
        <Item title="Contact" href="/contact" />
      </menu>
    </div>
  );
}

function Item({ title, href }) {
  return (
    <li class="navbar-item">
      <Link href={href}>{title}</Link>
    </li>
  );
}

export default Navbar;
