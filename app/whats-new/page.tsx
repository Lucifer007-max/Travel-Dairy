import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import StoreButtons from "@/components/StoreButtons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "What's new",
  description: "Release notes for TravelDiary.",
};

// Newest first. Add an entry here with every store release.
const releases = [
  {
    version: site.version,
    date: "October 2026",
    title: "The first page",
    notes: [
      "Trips built from your photos — each one joins the trip its date falls in.",
      "Import from your gallery or straight from Google Photos.",
      "In-app camera that fills in the place for you.",
      "Day-by-day chapters, with a title, note or emoji for any memory.",
      "Your route on a map, every stop pinned in the order you went.",
      "Relive: play any trip back as a short story.",
      "Invite the people you travelled with to add their own memories.",
      "Filter your trips by beach, mountains, city or road trip.",
      "Notifications when someone adds you to a trip.",
    ],
  },
];

export default function WhatsNewPage() {
  return (
    <>
      <PageHead eyebrow="what's new" title="Release notes." lede="Everything that has changed in TravelDiary, newest first." />
      <div className="wrap">
        <div className="prose">
          {releases.map((r) => (
            <article className="release" key={r.version} id={`v${r.version.replace(/\./g, "-")}`}>
              <time>
                Version {r.version} · {r.date}
              </time>
              <h2>{r.title}</h2>
              <ul>
                {r.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </article>
          ))}
          <div style={{ marginTop: 20 }}>
            <StoreButtons />
          </div>
        </div>
      </div>
    </>
  );
}
