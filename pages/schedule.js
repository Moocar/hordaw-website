import Image from "next/image";
import Head from "next/head";
import Photo from "./couple-photo2.jpg";

function Schedule() {
  return (
    <div>
      <Image src={Photo} width="732" height="549" placeholder="blur" />
      <Events>
        <Head>
          <title>Schedule | Georgina & Chris</title>
        </Head>
        <Event
          title="Pre-Wedding gathering"
          date="Friday, October 14, 2022"
          time="7:30pm onwards"
          dressCode="Dinner and drinks will be provided"
          imageName="/placeholder-wedding-svgrepo-com.svg"
          address={<Address 
            content={[
            "Dockside Restaurant and Bar",
            "3 Queens Wharf",
            "Wellington Central",
            ]} />}
          mapHref="https://goo.gl/maps/v7BMgBEb76v9i4VH9"
        />
        <Event
          title="Wedding"
          date="Saturday, October 15, 2022"
          time="3:00 pm"
          dressCode="Lounge suit"
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
          mapHref="https://g.page/boomrock?share"
        />
        <Event
          title="Post wedding brunch"
          date="Sunday, October 16, 2022"
          time="10:00 am onwards"
          imageName="/wedding-bells-svgrepo-com.svg"
          address={<Address 
            content={[
            "Coene's Bar & Eatery",
            "103 Oriental Parade",
            "Oriental Bay",
            "Wellington", 
            ]} />}
          mapHref="https://goo.gl/maps/caGpmNqCZ1askeLi8"  
        />
      </Events>
    </div>
  );
}

function Events(props) {
  return <div>{props.children}</div>;
}

function Event({ title, date, time, address, dressCode, imageName, mapHref }) {
  return (
    <section className="event" key={title}>
      <h2 className="title">{title}</h2>
      <div className="event date-and-time">
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <Image src={imageName} width="80" height="80" />
      {address}
      {dressCode ? <div className="dress-code">{dressCode}</div> : ""}
      {mapHref ? (
        <a
          href={mapHref}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Map
        </a>
      ) : (
        ""
      )}
    </section>
  );
}

function Address({ content }) {
  return (
    <div className="address">
      {content.map((line) => (
        <div key={line}>{line}</div>
      ))}
    </div>
  );
}

export default Schedule;
