import about from "../assets/img/about.webp";
import skill from "../assets/img/skill.webp";
import skill1 from "../assets/img/skill1.webp";
import skill2 from "../assets/img/skill2.webp";

const About = () => {
  return (
    <section id="about" className="pt-8">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-center items-center">
        <div className="flex-grow banner"></div>
        <img
          draggable="false"
          className="h-auto max-w-full px-4"
          src={about}
          alt="About Pradipta R. Sandri"
        />
        <div className="flex-grow banner"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center flex-col">
        <h1 className="borderer font-Bold text-2xl text-center uppercase py-4 xl:text-3xl">
          <ion-icon name="person" className="text-black/75"></ion-icon>
          <br />I was born in January '99 and I am a fresh graduate with an{" "}
          <span className="fbold text-2xl xl:text-3xl font-RDRLino">
            Informatics Engineering
          </span>{" "}
          degree, able to work individually or{" "}
          <span className="fbold text-2xl xl:text-3xl font-RDRLino">
            collaborate with a team
          </span>
          . I have several skills that can be relied on in today's era, such as{" "}
          <span className="fbold text-2xl xl:text-3xl font-RDRLino">
            web development
          </span>
          , UI/UX design, music production and others. I am interested in the IT
          industry with my focus on{" "}
          <span className="fbold text-2xl xl:text-3xl font-RDRLino">
            web development
          </span>
        </h1>

        <div className="dotted mt-4 "></div>
        <div className="strip"></div>

        <h1 className="font-Bold fbold text-6xl py-4 uppercase">
          "don't be afraid to be different"
        </h1>

        <div className="strip"></div>
        <div className="dotted mt-4 mb-2"></div>

        <img
          draggable="false"
          className="h-auto max-w-full px-4 pt-4"
          src={skill}
          alt="Skill Pradipta R. Sandri"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto px-4 gap-6 justify-between flex-col xl:flex-row py-4">
        <img
          draggable="false"
          className="h-auto max-w-full"
          src={skill1}
          alt="Programming Skill Pradipta R. Sandri"
        />
        <img
          draggable="false"
          className="h-auto max-w-full"
          src={skill2}
          alt="Others Skill Pradipta R. Sandri"
        />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center flex-col py-4">
        <div className="strip"></div>
        <div className="dotted mt-4"></div>
      </div>
    </section>
  );
};

export default About;
