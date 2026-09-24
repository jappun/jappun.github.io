import drawing from "../img/name/jappun-drawing.png";
import aboutTitle from "../img/sections/about-ink.png";
import { Section } from "../components/Section";
import { PaperTapes, aboutTapes, drawingTapes } from "../components/Tape";

const About = () => {
  return (
    <Section titleSrc={aboutTitle} titleAlt="About Me" rotate={-1.1}>
      <div className="sheet relative px-5 py-8 md:px-10 md:py-10">
        <PaperTapes layout={aboutTapes} size="tape-lg" />
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
          <div className="relative w-52 shrink-0 -rotate-2 md:w-72">
            <img
              src={drawing}
              alt="Drawing of Jappun"
              className="w-full border border-black/10 bg-white"
            />
            {drawingTapes.map((style, index) => (
              <span key={index} className="tape tape-sm" style={style} aria-hidden="true" />
            ))}
          </div>
          <div className="w-full text-left text-lg leading-relaxed">
            <p className="text-xl">
              Welcome to my little corner of the Internet. Happy to have you here.
            </p>
            <br />
            <p>What I&apos;m up to right now:</p>
            <br />
            <ul className="list-disc pl-6">
              <li>
                Just graduated from UBC where I majored in Computer Science and
                English Literature
              </li>
              <li>
                Building voice AI for restaurants at{" "}
                <a
                  href="https://getpieline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  PieLine
                </a>
              </li>
              <li>
                Writing all kinds of things: plays, short stories, notes app entries, etc.
              </li>
              <li>
                Looking for a full-time role at a startup where my title doesn&apos;t limit what I get to work on
              </li>
            </ul>
            <br />
            <p>Outside all that, you can find me dilly dallying, frolicking, etc.</p>
            <br />
            <p>
              Feel free to reach out:{" "}
              <a className="text-link" href="mailto:jappun.dev@gmail.com">
                jappun.dev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
