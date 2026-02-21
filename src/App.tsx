

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EnvelopeAnimation from "./components/EnvelopeAnimation";
import "./styles/styles.css";
import HeroPage from "./pages/HeroPage";
import SummaryPage from "./pages/SummaryPage";
import EventsPage from "./pages/EventsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function App() {

  const [opened, setOpened] = useState(false);



  return (

    <div className="app-root">

      {!opened && <EnvelopeAnimation onOpen={() => setOpened(true)} />}



      {opened && (

        <div className="">
          <HeroPage />
          {/* <div className="page-divider"><span>❧</span></div> */}
          <EventsPage />
          {/* <div className="page-divider2"></div> */}
          {/* <StoryPage /> */}
          {/* <div className="page-divider3"><span>❧</span></div> */}
          <SummaryPage />
        </div>

      )}

    </div>

  );

}