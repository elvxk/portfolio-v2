import contact from "../assets/img/contact.webp";
import mail_sm from "../assets/img/mail_sm.webp";
import mail from "../assets/img/mail.webp";

const Contact = () => {
  return (
    <section id="contact">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-center items-center">
        <div className="flex-grow banner"></div>
        <img
          draggable="false"
          className="h-auto max-w-full px-4"
          src={contact}
          alt="Contact Pradipta R. Sandri"
        />
        <div className="flex-grow banner"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center flex-col">
        <div className="flex items-center justify-center">
          <div className="absolute flex flex-col justify-between m-8">
            <h1 className="font-Hapna text-center p-2 sm:text-xl lg:text-sm">
              <ion-icon
                name="mail"
                className="text-black/75 text-xl "
              ></ion-icon>
              <br />
              To contact me you can send an email
              <br />
              <span className="text-2xl font-Bold fbold sm:text-3xl">
                pradiptaramadan9c@gmail.com
              </span>
            </h1>
            <a
              href="mailto:pradiptaramadan9c@gmail.com"
              className="btn-border font-Bold text-xl uppercase text-center"
            >
              Send Mail
            </a>
          </div>

          <img
            draggable="false"
            className="h-auto max-w-full block lg:hidden"
            src={mail_sm}
            alt="Mail Pradipta R. Sandri"
          />
          <img
            draggable="false"
            className="h-auto max-w-full hidden lg:block"
            src={mail}
            alt="Mail Pradipta R. Sandri"
          />
        </div>

        <div className="dotted mt-4"></div>
      </div>

      <div className="flex justify-center flex-col items-center px-4">
        <h1 className="font-RDRLino fbold text-xl">- SOCIAL MEDIA -</h1>
      </div>
      <div className="max-w-screen-xl mx-auto gap-8 flex justify-center items-center p-2">
        <div className="strip mx-4"></div>

        {/* <!-- Instagram --> */}
        <a
          href="https://instagram.com/elvxk"
          target="_blank"
          className="text-3xl text-black/75 hover:text-blue"
        >
          <ion-icon name="logo-instagram"></ion-icon>
        </a>

        {/* <!-- Twitter --> */}
        <a
          href="https://twitter.com/r_sandriii"
          target="_blank"
          className="text-3xl text-black/75 hover:text-blue"
        >
          <ion-icon name="logo-twitter"></ion-icon>
        </a>

        {/* <!-- LinkedIn --> */}
        <a
          href="https://www.linkedin.com/in/elvxk"
          target="_blank"
          className="text-3xl text-black/75 hover:text-blue"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>

        {/* <!-- Github --> */}
        <a
          href="https://github.com/elvxk"
          target="_blank"
          className="text-3xl text-black/75 hover:text-blue"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>

        <div className="strip mx-4"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center flex-col">
        <div className="dotted mt-4"></div>
      </div>
    </section>
  );
};

export default Contact;
