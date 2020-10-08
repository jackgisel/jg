const Experience = () => {
  return (
    <>
      <div id="experience" className="flex flex-col">
        <h1 className="text-center italic font-bold uppercase text-6xl half_background mb-6">
          Experience
        </h1>

        <div className="flex justify-center">
          <a
            className="font-semibold underline text-red-700"
            href="/JackGiselResume.pdf"
          >
            Looking for my resume?
          </a>
        </div>

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
                  Independently designed and built a highly scalable
                  architecture with an average cost per user of $0.0005/m
                  through NoSQL and serverless functions
                </li>
                <li>
                  Architectured a NoSQL and serverless backend to optimize for
                  speed and scalability for the 10,000 users
                </li>
                <li>
                  Implemented NFC protocol to efficiently share profile data
                  between users by leveraging Universal Linking
                </li>
                <li>
                  Created the Shopify ecommerce landing page boosting load speed
                  19% by using Bootstrap, SCSS, and vanilla Javascript
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
                  Building a mobile app focused on consumer debt payoff using
                  React Native, AWS Lambda, Firebase, and ExpressJS
                </li>
                <li>
                  Developing an algorithm for debt payoff, saving users on
                  average $2,210.98 by using preformant data structures
                </li>
                <li>
                  Constructing actionable screens with data visualization to aid
                  in the understanding of personal finance
                </li>
                <li>
                  Integrated an application monitoring and session replay system
                  capturing over 90 bugs, helping our team develop quicker and
                  more focused
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
                  Developed a physician management component using test-driven
                  development, React, and Ruby on Rails
                </li>
                <li>
                  Assisted in a PR “war room” effort managing over 60 PRs while
                  the CI/CD infrastructure was unstable
                </li>
                <li>
                  Built an understanding of microservice architecture using
                  services like Docker and Kubernetes
                </li>
                <li>
                  Lead agile development meetings within my team and
                  demonstrated new features in company wide meetings
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
                  Built a web based collaborative text editor for small teams
                  using React, MobX, Firebase, and CSS
                </li>
                <li>
                  Developed a push notification system for 100’s of daily
                  notifications using NodeJS and Firebase Cloud functions
                </li>
                <li>
                  Learned Javascript best practices by collaborating with other
                  developers in a remote setting
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END LYTE */}
      </div>
    </>
  );
};

export default Experience;
