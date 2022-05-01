import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const navbarRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isSticky, setIsSticky] = useState(0);
  useEffect(() => {
    console.log(offset);
    setOffset(navbarRef.current.offsetTop);
    console.log(offset);

    const onScroll = () => {
      console.log(offset, pageYOffset);
      setIsSticky(window.pageYOffset >= offset);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div class={isSticky ? "navbar sticky" : "navbar"} ref={navbarRef}>
      <span class="navbar-title">
        <Link href="/">Georgina & Chris</Link>
      </span>
      <HamburgerMenu />
      <MenuPanel open={false}></MenuPanel>
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

function HamburgerMenu() {
  return (
    <div class="hamburger-menu">
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
    </div>
  );
}

function MenuPanel() {
  <div>
    <menu class="navbar-menu">
      <Item title="Things To Know" href="/things-to-know" />
      <Item title="Schedule" href="/schedule" />
      <Item title="Contact" href="/contact" />
    </menu>
  </div>;
}

export default Navbar;
