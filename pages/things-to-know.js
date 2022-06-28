import Head from "next/head";

function Page() {
  return (
    <div class="padded-content">
      <Head>
        <title>Things to Know | Georgina & Chris</title>
      </Head>
      <h1>Things to know</h1>
      <section>
        <h2>Accommodation Options</h2>
        <p>
          There is no accommodation at Boomrock itself. 
          We recommend finding accommodation in central Wellington
          (try Airbnb, Booking.com) or Johnsonville. We don’t have any
          particular recommendations for places to stay but{" "}
          <a href="https://www.myguidewellington.com/regionalinfo/wellington-suburb">
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
        <p>
          <h3>Links:</h3>
          <ul>
            <li>
              Public transport - you’ll need to get a snapper card to ride on
              buses, these can be purchased and topped up at a variety of
              locations: https://www.snapper.co.nz/locations/
            </li>
            <li>
              Ebike hire - switched on bikes are located on the waterfront and
              offer ebike hire for short or long term:
              https://switchedonbikes.co.nz/
            </li>
            <li>
              Car share - https://mevo.co.nz/wellington/ and
              https://www.cityhop.co.nz/ Follow the instructions on their
              website to join online. You can even join with an Australian
              driver’s license and could save you needing to hire a car.{" "}
            </li>
          </ul>
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
          Central Railway Station at approximately 60mins prior to the ceremony;
          and Johnsonville Railway Station at approximately 45mins prior to the
          ceremony (exact times TBA). <br></br> At the end of the night, buses
          will be leaving Boomrock to take guests back to Wellington at two different times. 
        </p>
      </section>
      <section>
        <h2>Children</h2>

        <h3>What if I have children? Can they come to the wedding?</h3>
        <p>
          We would be delighted to have your children at the  
          ceremony.
          Unfortunately we cannot accommodate them at the reception. 
        </p>
        <h3>Are there childcare options available?</h3>
        <p>
          We will arrange babysitting for your children. 
          This will be available for the whole event, or if you would like
          to bring your children to the ceremony we will arange transport back to the babysitting location.
          See the RSVP form, and if you have any concerns 
          please get in touch with us.



        </p>
      </section>
      <section>
        <h2>Gifts</h2>
        <p>
          We do not expect gifts - your efforts to join us on our big day are
          more than enough and greatly appreciated! However, if you would like
          the option, you could make a contribution to our wishing well at the reception. We'd
          like to put this towards a piece of art or an adventure in NZ.
        </p>
      </section>
    </div>
  );
}

export default Page;
