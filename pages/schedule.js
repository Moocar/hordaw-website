import Image from "next/image";

function Schedule() {
  return (
    <Events>
      <Event
        title="Boomrock day"
        date="Friday, October 14, 2022"
        time="10:00 am"
        imageName="/placeholder-wedding-svgrepo-com.svg"
        address={
          <Address
            content={[
              "Boomrock",
              "292 Boom Rock Rd",
              "Ohariu Valley",
              "Wellington",
              "6037 New Zealand",
            ]}
          />
        }
      />
      <Event
        title="Wedding"
        date="Saturday, October 15, 2022"
        time="5:00 pm"
        dressCode="Formal Dress Code"
        imageName="/wedding-ring-svgrepo-com.svg"
        address={
          <Address
            content={[
              "Boomrock",
              "292 Boom Rock Rd",
              "Ohariu Valley",
              "Wellington",
              "6037 New Zealand",
            ]}
          />
        }
      />
      <Event
        title="BBQ"
        date="Sunday, October 16, 2022"
        time="10:00 an"
        imageName="/wedding-bells-svgrepo-com.svg"
        address={
          <Address
            content={[
              "Boomrock",
              "292 Boom Rock Rd",
              "Ohariu Valley",
              "Wellington",
              "6037 New Zealand",
            ]}
          />
        }
      />
    </Events>
  );
}

function Events(props) {
  return <div>{props.children}</div>;
}

function Event({ title, date, time, address, dressCode, imageName }) {
  return (
    <section class="event">
      <h2 class="title">{title}</h2>
      <div class="event date-and-time">
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <Image src={imageName} width="80" height="80" />
      {address}
      {dressCode ? <div class="dress-code">{dressCode}</div> : ""}
      <a
        href="https://g.page/boomrock?share"
        class="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Map
      </a>
    </section>
  );
}

function Address({ content }) {
  return (
    <div class="address">
      {content.map((line) => (
        <div>{line}</div>
      ))}
    </div>
  );
}

export default Schedule;
