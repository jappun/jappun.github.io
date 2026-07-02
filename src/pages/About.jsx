import picture from "../img/jappun.jpg";
import { Section } from "../components/Section";

const About = () => {
  return (
    <Section title="About Me" maxWidth="wide">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <div className="shrink-0 flex justify-center md:justify-start">
          <img
            src={picture}
            alt="Jappun Dhillon"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary shadow-xl"
          />
        </div>

        <div className="flex-1 text-primary bg-lighterSky bg-opacity-70 rounded-2xl p-6 md:p-8 font-mont text-lg text-left w-full">
          <p className="text-xl">
            Welcome to my little corner of the Internet. Happy to have you here.
          </p>
          <br />
          <p>What I&apos;m up to right now:</p>
          <br />
          <ul className="list-disc list-outside pl-6">
            <li>
              Just graduated from UBC where I majored in Computer Science and
              English Literature
            </li>
            <li>Looking for SWE roles in the USA with an August start</li>
            <li>
              Building web apps for technical depth and making art for soulful
              depth
            </li>
            <li>
              Sharing my work to my <span className="line-through">Twitter</span>{" "}
              X profile:{" "}
              <a
                className="underline rounded-sm hover:text-lighterSky hover:bg-primary p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/itsjappun"
              >
                @itsjappun
              </a>
            </li>
          </ul>
          <br />
          <p>Outside all that, you can find me dilly dallying, frolicking, etc.</p>
          <p className="mt-4">
            Feel free to reach me at{" "}
            <a
              className="underline rounded-sm hover:text-lighterSky hover:bg-primary p-1"
              href="mailto:jappun.dev@gmail.com"
            >
              jappun.dev@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
