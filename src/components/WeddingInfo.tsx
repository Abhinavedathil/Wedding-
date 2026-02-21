export default function WeddingInfo() {
  return (
    <section className="invite-card reception-card">
      <h2 className="card-title reception-title">Wedding Ceremony</h2>
      <div className="page-divider3"><span>❧</span></div>
      <h4 className="reception-text">We are getting Married on</h4>
      <div className="invite-calendar">
        <span className="calendar-day">29</span>&nbsp;
        <span className="calendar-month">March</span>&nbsp;
        <span className="calendar-year">2026</span>
      </div>
      <p className="invite-heading-time">Event Time :</p>
      <p className="invite-time">11 AM to 11:30 AM</p>
      <p className="invite-location-label">Location :</p>
      <p className="invite-location">VKH Convention Centre, Theyyala </p>
      <p className="card-text reception-text">
        <button
          className="btn-reception"
          onClick={() =>
            window.open(
              "https://maps.app.goo.gl/KBHTjpwjvfcx8n1A8",
              "_blank"
            )
          }
        >
          Get Location
        </button>
      </p>

      <div className="page-divider2"></div>

      {/* Malayalam version */}
      <div className="invite-malayalam">
        <p>ഞങ്ങൾ വിവാഹിതരാകുന്നു</p>
        <div className="invite-calendar">
          <span className="calendar-day">29</span>&nbsp;
          <span className="calendar-month">മാർച്ച്</span>&nbsp;
          <span className="calendar-year">2026</span>
        </div>
        <p className="invite-heading-time">മുഹൂർത്തം :</p>
        <p className="invite-time">11 AM to 11:30 AM</p>
        <p className="invite-location-label">സ്ഥലം :</p>
        <p className="invite-location">VKH കോൺവെൻഷൻ സെന്റർ, തെയ്യാല</p>
        <p className="card-text reception-text">
          <button
            className="btn-reception"
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/KBHTjpwjvfcx8n1A8",
                "_blank"
              )
            }
          >
            Get Location
          </button>
        </p>
      </div>
    </section>
  );
}

