import { useState } from "react";
import useWindowWidth from "./hooks/useWindowWidth";
import useTitleCount from "./hooks/useTitleCount";
import { useOnlineStatus } from "./hooks/useOnlineStatus";

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
  const [count, setCount] = useState(0);
  const screenSize = useWindowWidth(900);
  const isOnline = useOnlineStatus();

  useTitleCount(count);

  const handleSaveClick = () => {
    console.log("✅ Progress saved");
  };

  return (
    <>
      <Navbar />
      <div className={`${screenSize ? "small" : "medium"} main`}>
        <button className="btn" disabled={!isOnline} onClick={handleSaveClick}>
          {isOnline ? "Save progress" : "Reconnecting..."}
        </button>
        <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
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
