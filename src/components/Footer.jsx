import footer from "../assets/img/footer.webp";

const Footer = () => {
  return (
    <footer className="py-4 mb-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center flex-col">
        <h1 className="font-RDRLino fbold text-xl xl:text-2xl">
          Thanks for Scrolling
        </h1>
        <img
          draggable="false"
          className="h-auto max-w-full"
          src={footer}
          alt="Footer Pradipta R. Sandri"
        />
      </div>
    </footer>
  );
};
export default Footer;
