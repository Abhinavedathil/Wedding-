import Countdown from "../components/Countdown";
import ReceptionInfo from "../components/ReceptionInfo";
import WeddingInfo from "../components/WeddingInfo";

export default function EventsPage() {
    return (
        <div className="event-page-root">
            <div className="content-wrapper">
                <div className="invite-header">
                    <h1 className="invite-tagline">Invitation</h1>
                    <h1 className="invite-subtagline">Join us in celebrating our special day</h1>
                    <div className="page-divider"><span>❧</span></div>
                    <p className="invite-subtagline">We're delighted to share these special moments with you</p>
                </div>
                {/* Wedding Countdown */}
                <Countdown
                    title="Counting Down to Our Wedding Day"
                    targetDate={new Date("2026-03-29T09:00:00")}
                />

                <WeddingInfo />

                {/* Reception Countdown */}
                <Countdown
                    title="Counting Down to Our Reception Day"
                    targetDate={new Date("2026-04-05T18:00:00")}
                />

                <ReceptionInfo />
            </div>

        </div>
    );
}