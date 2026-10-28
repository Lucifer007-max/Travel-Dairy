import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { photoCredits } from "@/lib/photoCredits";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "The photographers whose pictures of Goa and Manali appear on this site.",
};

export default function CreditsPage() {
  return (
    <>
      <PageHead
        eyebrow="credits"
        title="Photo credits"
        lede="The photos of Goa and Manali on this site are real pictures, shared by their photographers on Wikimedia Commons. Thank you to each of them."
      />
      <div className="wrap">
        <div className="prose">
          <ul>
            {photoCredits.map((c) => (
              <li key={c.file}>
                <a href={c.url} target="_blank" rel="noopener noreferrer">{c.title}</a> by {c.author}, {c.license}.
                Cropped to fit.
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
