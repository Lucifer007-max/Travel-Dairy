import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import StoreButtons from "@/components/StoreButtons";
import { features } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description: "Everything TravelDiary does: photo import, automatic places and days, your route on a map, trip replays and shared trips.",
};

const groups = [
  { title: "Getting photos in", items: features.slice(0, 3) },
  { title: "Turning them into a journal", items: features.slice(3, 6) },
  { title: "Looking back", items: features.slice(6, 8) },
  { title: "Travelling together", items: features.slice(8, 12) },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHead
        eyebrow="features"
        title="Everything TravelDiary does."
        lede="No plans, no tiers. Every feature below comes with the free app."
      />
      {groups.map((g) => (
        <section className="section" key={g.title} style={{ paddingTop: 56, paddingBottom: 56 }}>
          <div className="wrap">
            <h2 style={{ fontSize: "1.9rem" }}>{g.title}</h2>
            <div className="grid" style={{ marginTop: 28 }}>
              {g.items.map((f) => (
                <div className="card" key={f.title}>
                  <span className="icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="cta">
        <div className="wrap">
          <h2>Try it on your last trip.</h2>
          <p className="lede" style={{ margin: "18px auto 0" }}>
            Already have the photos? You are one minute away from a journal. <Link className="link" href="/#how">How it works</Link>
          </p>
          <StoreButtons />
        </div>
      </section>
    </>
  );
}
