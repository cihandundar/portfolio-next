import Hero from "@/components/hero/Hero";
import "@/styles/main.scss";
export default function Home() {
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

        <a
          href="https://drive.google.com/file/d/1z9gXOAULGTkAIsSW26IRgpTyce7hj2us/view?usp=drive_link"
          target="_blank"
        >
          <button>CV</button>
        </a>
        <a href="mailto:dundarcihan97@hotmail.com">
          <button>Email</button>
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
