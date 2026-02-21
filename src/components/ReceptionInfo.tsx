export default function ReceptionInfo() {
  return (
    <section className="invite-card reception-card">
      <div className="card-body">
        <h2 className="card-title reception-title">Reception</h2>
        <div className="page-divider3"><span>❧</span></div>
        <h5 className="reception-text">We are inviting you all to take part in the wedding Reception held on</h5>
        <div className="invite-calendar">
          <span className="calendar-day">05</span>&nbsp;
          <span className="calendar-month">April</span>&nbsp;
          <span className="calendar-year">2026</span>
        </div>
        <p className="invite-heading-time">Time :</p>
        <p className="invite-time">12 PM to 3:00 PM</p>
        <p className="invite-location-label">Location :</p>
        <p className="invite-location">St. Thomas Church Hall, Manathavady</p>
        <p className="card-text reception-text">Date: 05/04/2026</p>
        <p className="card-text reception-text">
          <button
            className="btn-reception"
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/buvshR7Litzsmv588",
                "_blank"
              )
            }
          >
            Get Location
          </button>
        </p>
      </div>

      <div className="page-divider2"></div>

      {/* Malayalam version */}
      <div className="invite-malayalam">
        <p>ഞങ്ങൾ വിവാഹിതരാകുന്നു</p>
        <div className="invite-calendar">
          <span className="calendar-day">29</span>&nbsp;
          <span className="calendar-month">മാർച്ച്</span>&nbsp;
          <span className="calendar-year">2026</span>
        </div>
        <p className="invite-heading-time">സമയം :</p>
        <p className="invite-time">12 PM to 3:00 PM</p>
        <p className="invite-location-label">സ്ഥലം :</p>
        <p className="invite-location">സെന്റ് തോമസ് ചർച്ച് ഹാൾ, മാനന്തവാടി</p>
        <p className="card-text reception-text">
          <button
            className="btn-reception"
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/buvshR7Litzsmv588",
                "_blank"
              )
            }
          >
            Get Location
          </button>
        </p>
      </div>
      <div className="page-divider2"></div>
    </section>
  );
}
