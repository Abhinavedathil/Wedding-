import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // if user is near bottom
      setAtBottom(scrollTop + windowHeight >= docHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (atBottom) {
      // scroll back to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // scroll to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-indicator">
      <button onClick={handleClick}>
        {atBottom ? "↑" : "↓"}
      </button>
    </div>
  );
}
