import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="content">{children}</main>
    </div>
  );
}
