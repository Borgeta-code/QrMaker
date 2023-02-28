import Image from "next/image";
import github from "../public/img/github.svg";
import linkedin from "../public/img/linkedin.svg";

export function Socials() {
  return (
    <>
      <div className="flex gap-3 mt-4 md:fixed md:bottom-1">
        <a
          href={"https://github.com/Borgeta-code"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={github}
            id="primary"
            className="w-8"
            draggable="false"
            alt="github"
          />
        </a>

        <a
          href={"https://www.linkedin.com/in/matheus-borges-coder/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={linkedin}
            id="primary"
            className="w-8"
            draggable="false"
            alt="linkedin"
          />
        </a>
      </div>
    </>
  );
}
