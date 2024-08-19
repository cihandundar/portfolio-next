"use client";
import Hero from "@/components/hero/Hero";
import "@/styles/main.scss";
export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1z9gXOAULGTkAIsSW26IRgpTyce7hj2us";
    link.download = "MyCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <main>
      <Hero />
      <section>
        <span>About</span>
        <article>
          I'm a self-taught Frontend Developer who builds interfaces for users
          to have great experiences, trying to improve myself on the web since
          December 2021 and enjoying it!
        </article>
      </section>
      <section>
        <span>Contact</span>

        <button onClick={handleDownload}>Download CV</button>
        <a href="mailto:dundarcihan97@hotmail.com">
          <button>Send me an email</button>
        </a>
        <a href="https://github.com/cihandundar" target="_blank">
          <button>Github</button>
        </a>
        <a href="https://www.linkedin.com/in/cihandundar/" target="_blank">
          <button>Linkedin</button>
        </a>
      </section>
    </main>
  );
}
