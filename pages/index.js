import { Button } from "../componets";

const Home = () => {
  return (
    <>
      <div id="hero" className="flex justify-center">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row max-w-3xl hero shadow-lg rounded-lg p-3 my-8 items-center">
          <div className="flex flex-col m-5 items-center">
            <h2 className="text-3xl text-center text-white font-bold italic mb-4">
              Hey there!
            </h2>
            <p className="sm:text-sm md:text-sm lg:text-lg text-center text-white font-semibold mb-4">
              I am an enthusastic software engineer who enjoys rock climbing,
              running, spikeball, tech, golf and reading. I have a deep passion
              for problem solving. I have been focused on technology and coding
              since{" "}
              <a className="text-red-600 font-bold" href="#timeline">
                2004!
              </a>
            </p>
            <Button to="#timeline" label="Learn more" />
          </div>
          <img
            alt="Picture of Jack"
            className="flex-1 h-64 m-1 rounded-lg shadow-md"
            src="/assets/headshot.jpg"
            style={{ marginRight: -50 }}
          />
        </div>
      </div>
      <div id="timeline" className="flex flex-col">
        <h1 className="text-center italic font-bold uppercase text-6xl half_background mb-6">
          Timeline
        </h1>

        <div className="flex items-center px-12 flex-col sm:flex-col md:flex-row lg:flex-row sm:my-4 md:my-4">
          <img
            className="h-64 m-1 rounded-lg shadow-md"
            alt="Jack on computer at an early age"
            src="/assets/2004.jpg"
          />
          <div className="flex-1 xs:m-2 sm:m-3 md:m-3 lg:m-10">
            <div className="flex items-center justify-between pb-3">
              <h2 className="font-semibold text-xl">Curiosity Brews</h2>
              <h4 className="underline">June 2004</h4>
            </div>
            <p>
              At an early age I grew an extreme curiosity for how things worked.
              My dad being an engineer and handy man, I followed him around
              watching him and asking millions of questions. Because my size and
              strength I wasn't allowed to use the hand saw alone, I began
              taking to the computer. I started learning how to manipulate
              Windows to make it faster and started solving the families IT
              problems.
            </p>
          </div>
        </div>

        <div className="flex items-center px-12 flex-col sm:flex-col md:flex-row lg:flex-row sm:my-4 md:my-4">
          <div className="flex-1 xs:m-2 sm:m-3 md:m-3 lg:m-10 pb-3">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Summer @ Stanford</h2>
              <h4 className="underline">August 2013</h4>
            </div>
            <p>
              Over a few years my love for computers increased. From IT, to
              gaming, to web design with Wordpress and HTML. I was fortunate
              enough to be able to go to ID Tech at Stanford in 2013. Here I
              learned <em>C++</em> creating automation tools in the terminal.
            </p>
          </div>
          <img
            className="h-64 m-1 rounded-lg shadow-md"
            alt="Jack on computer at an early age"
            src="/assets/2013.jpg"
          />
        </div>

        <div className="flex items-center px-12 flex-col sm:flex-col md:flex-row lg:flex-row sm:my-4 md:my-4">
          <img
            className="h-64 m-1 rounded-lg shadow-md"
            alt="Jack on computer at an early age"
            src="./assets/2017.png"
          />
          <div className="flex-1 xs:m-2 sm:m-3 md:m-3 lg:m-10">
            <div className="flex items-center justify-between pb-3">
              <h2 className="font-semibold text-xl">
                San Jose State University
              </h2>
              <h4 className="underline">August 2017</h4>
            </div>
            <p>
              Throughout high school I began working on freelance projects and
              starting many apps. Things ranged from: Political sites,
              Musician's portfolios, Shopify stores, and many many blogs for new
              content creators. Along with this I began learning native iOS
              development and web development. I have alawys had a strong desire
              to build products that can run on phones because of the barrier to
              users is so low.
            </p>
          </div>
        </div>
      </div>

      <div id="tech" className="flex flex-col">
        <h1 className="text-center italic font-bold uppercase text-6xl half_background mb-6">
          Tech
        </h1>
        <div className="flex flex-wrap justify-center">
          <img className="h-20 m-2" src="/assets/tech/aws.png" />
          <img className="h-20 m-2" src="/assets/tech/docker.png" />
          <img className="h-20 m-2" src="/assets/tech/firebase.png" />
          <img className="h-20 m-2" src="/assets/tech/java.jpg" />
          <img className="h-20 m-2" src="/assets/tech/js.png" />
          <img className="h-20 m-2" src="/assets/tech/mysql.png" />
          <img className="h-20 m-2" src="/assets/tech/rails.png" />
          <img className="h-20 m-2" src="/assets/tech/react-native.jpg" />
          <img className="h-20 m-2" src="/assets/tech/react.png" />
          <img className="h-20 m-2" src="/assets/tech/redux.png" />
          <img className="h-20 m-2" src="/assets/tech/sqlite.png" />
        </div>
      </div>
    </>
  );
};

export default Home;
