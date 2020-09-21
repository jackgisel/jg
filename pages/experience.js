import { Container } from "../componets";

const Experience = () => {
  return (
    <Container>
      <div id="experience" className="flex flex-col">
        <h1 className="text-center italic font-bold uppercase text-6xl half_background mb-6">
          Experience
        </h1>

        {/* NEXUS */}
        <div id="nexus" className="flex justify-center">
          <div className="flex-1 flex max-w-xl">
            <img
              src="./assets/companies/nexus.png"
              alt="Nexus company logo"
              className="h-20 w-20 m-1 rounded-sm shadow-md m-2"
            />
            <div className="flex-1 m-2">
              <div className="flex justify-between">
                <h2 className="font-semibold text-xl">Nexus</h2>
                <h4 className="underline">May 2020 - Present</h4>
              </div>
              <h3>Contracted Full Stack Engineer</h3>
              <ul className="m-5 list-disc">
                <li>
                  Maintaining a mobile and web app for a growing social
                  networking company by using NextJS, React and React Native
                </li>
                <li>
                  Independently built a highly scalable architecture with an
                  average cost per user of $0.0005/m
                </li>
                <li>
                  Architectured a NoSQL and serverless backend to optimize for
                  speed and scalability for the 10,000 users
                </li>
                <li>
                  Implemented a NFC protocol to efficiently share profile data
                  between users by leveraging Universal Linking
                </li>
                <li>
                  Created the Shopify ecommerce landing page using Bootstrap,
                  SCSS and vanilla Javascript
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END NEXUS */}

        {/* SAVVY */}
        <div id="nexus" className="flex justify-center">
          <div className="flex-1 flex max-w-xl">
            <img
              src="./assets/companies/savvy.png"
              alt="Ascend company logo"
              className="h-20 w-20 m-1 p-2 rounded-sm shadow-md m-2"
            />
            <div className="flex-1 m-2">
              <div className="flex justify-between">
                <h2 className="font-semibold text-xl">Ascend</h2>
                <h4 className="underline">October 2019 - Present</h4>
              </div>
              <h3>Full Stack Engineer</h3>
              <ul className="m-5 list-disc">
                <li>
                  Building a mobile app directed to helping customers get out of
                  debt for many different screen sizes by using React Native,
                  AWS Lambda, Firebase and ExpressJS
                </li>
                <li>
                  Developing an algorithm for debt payoff saving users on
                  average $2,210.98 by using preformant data structures
                </li>
                <li>
                  Creating a debt forecasting tool to predict payment completion
                </li>
                <li>
                  Constructing informative screens with data visualization to
                  aid in the understanding of personal finance for our customers
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END SAVVY */}

        {/* VINETI */}
        <div id="nexus" className="flex justify-center">
          <div className="flex-1 flex max-w-xl">
            <img
              src="./assets/companies/vineti.webp"
              alt="Ascend company logo"
              className="h-20 w-20 m-1 p-2 rounded-sm shadow-md m-2"
            />
            <div className="flex-1 m-2">
              <div className="flex justify-between">
                <h2 className="font-semibold text-xl">Vineti</h2>
                <h4 className="underline">May 2019 - August 2019</h4>
              </div>
              <h3>Software Engineer Intern</h3>
              <ul className="m-5 list-disc">
                <li>
                  Building a mobile app directed to helping customers get out of
                  debt for many different screen sizes by using React Native,
                  AWS Lambda, Firebase and ExpressJS
                </li>
                <li>
                  Developing an algorithm for debt payoff saving users on
                  average $2,210.98 by using preformant data structures
                </li>
                <li>
                  Creating a debt forecasting tool to predict payment completion
                </li>
                <li>
                  Constructing informative screens with data visualization to
                  aid in the understanding of personal finance for our customers
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END VINETI */}

        {/* LYTE */}
        <div id="nexus" className="flex justify-center">
          <div className="flex-1 flex max-w-xl">
            <img
              src="./assets/companies/lyte.png"
              alt="Lyte ai company logo"
              className="h-20 w-20 m-1 p-2 rounded-sm shadow-md m-2"
            />
            <div className="flex-1 m-2">
              <div className="flex justify-between">
                <h2 className="font-semibold text-xl">Lyte AI</h2>
                <h4 className="underline">June 2018 - August 2018</h4>
              </div>
              <h3>Software Developer Intern</h3>
              <ul className="m-5 list-disc">
                <li>
                  Building a mobile app directed to helping customers get out of
                  debt for many different screen sizes by using React Native,
                  AWS Lambda, Firebase and ExpressJS
                </li>
                <li>
                  Developing an algorithm for debt payoff saving users on
                  average $2,210.98 by using preformant data structures
                </li>
                <li>
                  Creating a debt forecasting tool to predict payment completion
                </li>
                <li>
                  Constructing informative screens with data visualization to
                  aid in the understanding of personal finance for our customers
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END LYTE */}
      </div>
    </Container>
  );
};

export default Experience;
