import Image from "next/image";
import Head from "next/head";
import Photo from "./couple-photo1.jpg";

function Page() {
  return (
    <div className="padded-content">
      <Head>
        <title>Things to Know | Georgina & Chris</title>
      </Head>
      <Image src={Photo} width="732" height="549" placeholder="blur" />
      <h1>Things to know</h1>
      <section>
        <h2>Accommodation Options</h2>
        <p>
          There is no accommodation at Boomrock itself. We recommend finding
          accommodation in central Wellington (try Airbnb, Booking.com) or
          Johnsonville. We don’t have any particular recommendations for places
          to stay but{" "}
          <a
            href="https://www.myguidewellington.com/regionalinfo/wellington-suburb"
            target="_blank"
          >
            this guide
          </a>{" "}
          to Wellington suburbs gives a sense of the different parts of town.
        </p>
      </section>
      <section>
        <h2>Getting around Wellington</h2>
        <p>
          Public transport is pretty good. eBikes are even better! There are
          also a number of handy car share schemes in Wellington which can save
          you hiring a car, they will even let you sign up with an overseas
          drivers license.
        </p>
        <div>
          <h3>Links:</h3>
          <ul>
            <li>
              Public transport - you’ll need to get a snapper card to ride on
              buses, these can be purchased and topped up at a variety of
              locations:{" "}
              <a href=" https://www.snapper.co.nz/locations/" target="_blank">
                Snapper card
              </a>{" "}
            </li>
            <li>
              Ebike hire - Switched on Bikes are located on the waterfront and
              offer ebike hire for short or long term:
              <a href="https://switchedonbikes.co.nz/" target="_blank">
                Switched on Bikes
              </a>{" "}
            </li>
            <li>
              Car share -{" "}
              <a href="https://mevo.co.nz/wellington" target="_blank">
                Mevo
              </a>{" "}
              and
              <a href="https://www.cityhop.co.nz/ " target="_blank">
                {" "}
                City Hop
              </a>
              . Follow the instructions on their website to join online. You can
              even join with an Australian driver’s license and could save you
              needing to hire a car.{" "}
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Weather</h2>
        <p>
          Wellington can be a cold, windy place! Please make sure you bring your
          warm layers. As much as possible we'll be doing wedding activies
          outdoors, although we do have weather contingency plans in place.
          Check the{" "}
          <a
            href="https://www.metservice.com/rural/regions/wellington/locations/ohariu-valley/7-days"
            target="_blank"
          >
            Metservice website
          </a>{" "}
          for the upcoming weather.
        </p>
      </section>
      <section>
        <h2>Transport on the day</h2>
        <p>
          We will organise a shuttle bus to transport guests to and from the
          wedding venue. The bus will stop at two locations to collect guests
          and take them to the wedding venue. We kindly ask all guests to use
          the shuttle option, as there is very limited parking at the venue and
          roads are tricky. These locations and pick up times are: Wellington
          Central Railway Station at 1:45pm; and Johnsonville Railway Station at
          1:55pm. Please be on time to avoid any delays to the ceremony going
          ahead.
          <br></br>
          At the end of the night, buses will be leaving Boomrock to take guests
          back to these same locations, leaving at approximately 9:30pm and
          midnight.
        </p>
      </section>
      <section>
        <h2>Children</h2>

        <h3>What if I have children? Can they come to the wedding?</h3>
        <p>
          We would be delighted to have your children at the ceremony.
          Unfortunately we cannot accommodate them at the reception. If you do
          wish to bring your children to the ceremony please let us know as we
          will need to arrange transport for them back to a location of your
          choosing.
        </p>
        <h3>Are there childcare options available?</h3>
        <p>
          We have had{" "}
          <a href="https://www.jugglestreet.co.nz/" target="_blank">
            Juggle Street
          </a>{" "}
          and{" "}
          <a
            href="https://karitanenannies.co.nz/families/babysitting-services/"
            target="_blank"
          >
            Karitane
          </a>{" "}
          recommended to us. If you are having difficulties arranging childcare
          through these agencies please let us know and we may be able to help
          you find alternative arrangements.
        </p>
      </section>
      <section>
        <h2>Gifts</h2>
        <p>
          We do not expect gifts - your efforts to join us on our big day are
          more than enough and greatly appreciated! However, if you would like
          the option, you could make a contribution to our wishing well at the
          reception. We'd like to put this towards a piece of art or an
          adventure in NZ.
        </p>
      </section>
    </div>
  );
}

export default Page;
