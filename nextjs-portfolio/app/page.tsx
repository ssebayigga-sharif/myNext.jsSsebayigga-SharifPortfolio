import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>I AM SSEBAYIGGA SHARIF</h1>
      <p>
        A Front-End developer crafting mordern, responsive and user friendly web
        applications
      </p>
      <p>
        Passionate about turning design into reality using HTML, CSS,
        Javascript, React and modern tools like Next.js and Tailwind CSS.
      </p>
      <h2>Skills</h2>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Typescript</li>
        <li>jQuery</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
      </ol>
      <h3>For more information </h3>
      <p>
        you can visit my Github at
        <Link href={"https://github.com/ssebayigga-sharif"}> Github</Link>
      </p>
    </>
  );
}
