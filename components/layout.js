import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div class="container">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
