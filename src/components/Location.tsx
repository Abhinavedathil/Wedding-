export default function Location() {
  return (
    <div className="location">
      <h2>Wedding Venue</h2>
      <button 
        onClick={() => window.open("https://maps.google.com/?q=YOUR_WEDDING_LOCATION", "_blank")}
      >
        Open Wedding Location
      </button>

      
    </div>
  );
}
