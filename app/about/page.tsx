import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Why TravelDiary exists, and what we will and won't do with it.",
};

export default function AboutPage() {
  return (
    <>
      <PageHead eyebrow="about" title="Why we made TravelDiary." />
      <div className="wrap">
        <div className="prose">
          <p>
            Most of us come home from a trip with a few hundred photos and the best intentions. We mean to sort them, write
            something down, make an album. Then the next week happens, and the trip becomes a long scroll in the camera
            roll, somewhere between screenshots and receipts.
          </p>
          <p>
            TravelDiary started from a simple idea: the photos already know most of the story. They know the day, and
            usually the place. If an app can read that, the journal can almost write itself — and you only add the parts a
            camera can&apos;t catch, like why that sunset mattered.
          </p>
          <figure className="polaroid" style={{ position: "relative", margin: "40px auto", transform: "rotate(-3deg)", width: 260 }}>
            <img src="/photos/manali_road_1.jpg" alt="A mountain road outside Manali" />
            <figcaption>where it started</figcaption>
          </figure>
          <h2>What we care about</h2>
          <ul>
            <li><b>Calm, not busy.</b> No streaks, no badges, no feeds. A journal you open because you want to.</li>
            <li><b>Your effort is optional.</b> A trip with zero words should still look good. Everything you write is a bonus.</li>
            <li><b>Your trips stay yours.</b> No ads, and we don&apos;t sell personal data. Read the <Link href="/privacy">privacy policy</Link>.</li>
            <li><b>Made to last.</b> You should be able to open a trip in ten years and feel the same thing.</li>
          </ul>
          <h2>Who&apos;s behind it</h2>
          <p>
            TravelDiary is built by a small, independent team of people who travel a lot and take too many photos. We
            read every message, and a lot of what&apos;s in the app came from someone writing in.
          </p>
          <p>
            Say hello at <a href={`mailto:${site.email}`}>{site.email}</a>, or see <Link href="/whats-new">what we&apos;ve shipped lately</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
