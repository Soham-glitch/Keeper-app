import "./footer.css";
const Footer = (): JSX.Element => {
  const currTime = new Date();
  const currYear = currTime.getFullYear();
  return (
    <>
      <footer>
        <p>copyright © {currYear}</p>
        <p>
          {" "}
          follow me on twitter
          <a href="https://twitter.com/Soham_eery" target="_blank">
            {" "}
            @Soham_eery
          </a>
        </p>
      </footer>
    </>
  );
};
export default Footer;
