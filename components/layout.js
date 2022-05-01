import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main class="content">{children}</main>
    </div>
  );
}
