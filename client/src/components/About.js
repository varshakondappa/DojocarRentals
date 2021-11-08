import { Link } from "@reach/router";
const About = () => {
  return (
    <>
      <Link style={{ color: "black", marginLeft: "700px" }} to="/main">
        Back to main
      </Link>
      <div class="main">
        <h1>About</h1>
        <p>
          <span style={{ marginLeft: "230px" }}></span>The earliest known
          example of cars being offered for rent dates back to 1906.[1] The
          German company Sixt was established in 1912 under the name Sixt
          Autofahrten und Selbstfahrer (Sixt Car Cruises and Self
          Drivers).[2][better source needed] Joe Saunders of Omaha, Nebraska
          first started with only one borrowed Model T Ford in 1916, but by
          1917, his Ford Livery Company was renting out 18 Model Ts at 10 cents
          per mile. The company name became Saunders Drive-It-Yourself System
          and then Saunders System. By 1926, Saunders had expanded to 56
          cities.[3] Saunders' company was bought by Avis in 1955.[3] An early
          competitor to Saunders was Walter L. Jacobs, whose Chicago-based
          Rent-a-Car opened in 1918 with twelve Ford Model T.[4] The company was
          bought in 1923 by John Hertz. In Britain, car rental started with
          Godfrey Davis, established in 1920, and bought by Europcar in
          1981.[citation needed] The sector expanded rapidly in the US; in 1926,
          the American Driveurself Association assembled over 1200 delegates in
          Chicago.[1] The growth in travel after World War II led to the
          establishment of several well known international companies, including
          National Car Rental (1947), Europcar (1949), Enterprise Rent-A-Car
          (1957), Thrifty Rent A Car (1958), and Budget Rent a Car .
        </p>
      </div>
    </>
  );
};
export default About;
