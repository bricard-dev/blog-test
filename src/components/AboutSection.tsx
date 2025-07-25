import PictureCollection from "./PictureCollection";
import { Button } from "./ui/button";

export default function AboutSection() {
  return (
    <section className="my-[100px] px-6 md:my-[150px]">
      <PictureCollection className="mb-10 md:mb-20" />
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
        <h2 className="text-primary mb-8 font-mono text-3xl font-bold md:text-4xl">
          Curieux voyageur
        </h2>
        <p className="mb-8 text-center font-mono leading-6 font-medium text-[#6C757D] md:text-lg/8">
          Je passe de ruelles andalouses aux chemins du bout du monde pour
          écouter, goûter et raconter ce que chaque culture a de plus vivant.
        </p>
        <Button>Qui suis-je ?</Button>
      </div>
    </section>
  );
}
