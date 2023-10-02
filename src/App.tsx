import useWindowWidth from "./hooks/useWindowWidth";

const Navbar = () => {
  const screenSize = useWindowWidth(768);

  return (
    <>
      <nav>
        {!screenSize ? (
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Project</li>
          </ul>
        ) : (
          <div className="bar">Bar</div>
        )}
      </nav>
    </>
  );
};

function App() {
  const screenSize = useWindowWidth(900);

  return (
    <>
      <Navbar />
      <div className={`${screenSize ? "small" : "medium"} main`}>
        Hello {screenSize ? "small" : "medium"}
      </div>
    </>
  );
}

export default App;
