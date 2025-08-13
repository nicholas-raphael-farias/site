import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/me.jpeg"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Hi!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm <b>Nico</b> a software engineer based in Mexico, currently enjoying deep diving
          into the world of cloud and devops. I enjoy the process of creating products
          that solve real problems, here trying to learn in public and share
          my knowledge with the community.
        </p>
      </div>
    </section>
  );
}
