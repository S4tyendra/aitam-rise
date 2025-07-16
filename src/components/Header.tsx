import NavBar from "./navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-border">
      <NavBar/>
    </header>
  );
};

export default Header;