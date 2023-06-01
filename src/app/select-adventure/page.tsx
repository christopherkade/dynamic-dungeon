import ImageCard from "components/ImageCard/ImageCard";

import ADVENTURES from "constants/adventures";

export default function Page() {
  const adventuresArray = Object.values(ADVENTURES);

  return (
    <section className="py-10">
      <div className="container m-auto">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-4xl font-light mb-8">
            Where will this adventure take you?
          </h1>

          <div className="grid gap-4 grid-cols-2">
            {adventuresArray.map((adventure) => (
              <ImageCard key={adventure.title} {...adventure} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
