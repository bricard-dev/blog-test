import { Article } from "@/lib/definitions";
import Image from "next/image";

export default function Slide({ article }: { article: Article }) {
  return (
    <div className="h-full w-full flex-shrink-0">
      <div className="relative h-full w-full">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent hover:backdrop-opacity-75" />
      </div>
    </div>
  );
}

{
  /* <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {articles.map((article: Article, index: number) => (
          <div key={index} className="h-full w-full flex-shrink-0">
            <div className="relative h-full w-full">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute right-0 bottom-[4rem] left-0 text-white">
                <div className="mx-auto flex max-w-[1024px] items-center">
                  <div className="flex max-w-[600px] flex-col gap-4 p-6">
                    <Category category={article.category} />
                    <div className="w-full font-mono">
                      <h2 className="mb-4 text-4xl font-bold">
                        {article.title}
                      </h2>
                      <div className="flex gap-4">
                        <p className="w-fit text-sm leading-6">
                          {article.date}
                        </p>
                        <div className="mt-3 h-[1px] w-[30px] bg-white" />
                        <p className="leading-6">{article.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */
}
