import Story from "../components/Story";
import ThankYou from "../components/ThankYou";

export default function Summary() {
    return (
        <div className="summary-page-root">
            <div className="content-wrapper">
                <Story />
                
                <ThankYou />
            </div>
        </div>
    );
}