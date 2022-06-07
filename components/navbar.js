import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const navbarRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isSticky, setIsSticky] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setOffset(navbarRef.current.offsetTop);
    const onScroll = () => {
      setIsSticky(window.pageYOffset >= offset);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class={isSticky ? "navbar sticky" : "navbar"} ref={navbarRef}>
      <span class="navbar-title">
        <Link href="/">Georgina & Chris</Link>
      </span>
      <HamburgerMenu isOpen={isOpen} onClick={onClickHamburger} />
      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}></Menu>
    </div>
  );
}

function Item({ title, href, onClick }) {
  return (
    <li class="navbar-item" onClick={onClick}>
      <Link href={href}>{title}</Link>
    </li>
  );
}

function HamburgerMenu({ isOpen, onClick }) {
  return (
    <div class="hamburger-menu" onClick={onClick}>
      {isOpen ? (
        <div class="hamburger-menu-cross">X</div>
      ) : (
        <>
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
        </>
      )}
    </div>
  );
}

function Menu({ isOpen, onClick }) {
  return (
    <div class={`navbar-menu ${isOpen ? "" : "closed-menu"}`}>
      <Item title="Home" href="/" onClick={onClick} />
      <Item title="Schedule" href="/schedule" onClick={onClick} />
      <Item title="Things To Know" href="/things-to-know" onClick={onClick} />
      <Item title="Contact" href="/contact" onClick={onClick} />
    </div>
  );
}

export default Navbar;
