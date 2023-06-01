import { getCurrentAdventure } from "utils/adventures";

import Chat from "components/Chat/Chat";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  console.log("params.slug", params.slug);
  const currentAdventure = getCurrentAdventure(params.slug);
  console.log("CURRENT", currentAdventure);
  return (
    <section className="py-10">
      <Chat />
    </section>
  );
}
