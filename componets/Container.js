import Header from "./Header";
import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <div>
      <div className="container mx-auto px-4 min-h-full">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Container;
