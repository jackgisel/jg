import Header from "./Header";
import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <div>
      <div className="flex justify-center bg-blue-400">
        <h3 className="text-white">
          this site is being rebuilt, more content coming soon
        </h3>
      </div>
      <div className="container mx-auto px-4 min-h-full">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Container;
