import { useState } from "react";
import "../styles/EnvelopeAnimation.css";

type Props = {
  onOpen: () => void;
};

export default function EnvelopeAnimation({ onOpen }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    // wait for flap + fade animation before showing rest of site
    setTimeout(onOpen, 2000);
  };

  return (
    <div className="envelope-screen">
      <div className={`letter-card ${open ? "open" : ""}`} onClick={handleOpen}>
        <div className="letter-flap"></div>

        <div className="letter-text">You're Invited</div>
        <div className="tap-text">Tap to open</div>

        <div className="wax-seal">❤</div>
      </div>
    </div>
  );
}
