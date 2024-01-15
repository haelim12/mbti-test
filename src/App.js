import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setVh();

    function onResize() {
      setVh();
    }

    window.addEventListener("resize", onResize);
  }, []);

  const [page, setPage] = useState(0);

  return (
    <div className="mbtiLayout">
      {page === 0 ? (
        <div className="startPageLayout">
          <div className="startLogo">
            <div>MBTI</div>
            <div>▼</div>
          </div>
          <div onClick={() => setPage(1)} className="startButton">
            테스트 시작하기
          </div>
        </div>
      ) : (
        <div>테스트페이지</div>
      )}
    </div>
  );
}

export default App;
