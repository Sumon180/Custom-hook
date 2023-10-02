import { useState } from "react";
import useWindowWidth from "./hooks/useWindowWidth";
import useTitleCount from "./hooks/useTitleCount";

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
  const [count, setCount] = useState(0);

  useTitleCount(count);

  return (
    <>
      <Navbar />
      <div className={`${screenSize ? "small" : "medium"} main`}>
        <span>{count}</span>
        <div>Hello {screenSize ? "small" : "medium"}</div>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Count 🙂
        </button>
      </div>
    </>
  );
}

export default App;
