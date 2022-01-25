import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";

function Main({ isDarkMode }) {
  return (
    <>
      {/* <Title text="Text Component" isDarkMode={isDarkMode} />
      <Paragraph isDarkMode={isDarkMode} />
      <Title text="Card Component" isDarkMode={isDarkMode} />
      <Cards />
      <Title text="Banner Component" isDarkMode={isDarkMode} />
      <Banner isDarkMode={isDarkMode} /> */}
      <Title text="Text Component"  />
      <Paragraph  />
      <Title text="Card Component"  />
      <Cards />
      <Title text="Banner Component" />
      <Banner  />
    </>
  );
}

export default Main;
