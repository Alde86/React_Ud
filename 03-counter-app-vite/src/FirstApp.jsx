import PropTypes from "prop-types";

// const newMessage = {
//   message: "Hola Mundo",
//   tittle: "Aldemar",
// };

// const getResult = () => {
//   return 4 + 4;
// };

export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      {/* <h1>{getResult()} </h1> */}
      {/* <h1> Aldemar</h1>

      <p> Soy un titulo mas pequeño</p> */}
      <h1>{title}</h1>;<p>{subTitle}</p>;
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
  name: "Aldemar Aguilera",
};

// const FirstApp = () => {
//   return <h2>Aldemar Aguilera</h2>;
// };

// export default FirstApp;
