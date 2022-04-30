function Schedule() {
  return (
    <div>
      <h1>Schedule</h1>
      <Event
        title="Welcome Drinks"
        date="Thursday, January 2, 2020"
        time="5:00 pm"
      />
    </div>
  );
}

function Event({ title, date, time }) {
  return (
    <section class="event">
      <div class="event-date-and-time">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <h3>{time}</h3>
      </div>
      <div class="event-details">
        <div>
          <p>Caves House hotel Yallingup</p>
          <p>18 Yallingup Beach Road</p>
          <p>Yallingup, WA 6286</p>
          <p>New Zealand</p>
          <p>Casual Dress Code</p>
        </div>
        <button>Map</button>
        <button>Add to Calendar</button>
      </div>
    </section>
  );
}

export default Schedule;
