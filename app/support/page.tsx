import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Help with TravelDiary: common questions, fixes and how to reach us.",
};

const fixes = [
  {
    q: "My photos landed on the wrong day or trip",
    a: "Photos are placed by the date saved inside them. Screenshots, downloaded or edited images sometimes lose that date. Leave the photo out of this trip, then add it from the trip it belongs to.",
  },
  {
    q: "A photo has no place",
    a: "The camera may not have saved a location (common with location turned off, or photos sent over chat apps). Tap the place field and type one in.",
  },
  {
    q: "Google Photos opened, but nothing came back",
    a: "Pick your photos, tap Done in Google Photos, then switch back to TravelDiary and wait a moment. If nothing appears, tap “Open Google Photos again”.",
  },
  {
    q: "The camera won't open",
    a: "Camera access is probably off. Turn it on in your phone's Settings → Apps → TravelDiary → Permissions. You can still add photos from your gallery meanwhile.",
  },
  {
    q: "Someone I invited can't see the trip",
    a: "They need to sign in with the same email address you invited. Until then they show as “Invited · appears when they sign in”.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHead
        eyebrow="support"
        title="How can we help?"
        lede={
          <>
            Most answers are below. If not, write to <a className="link" href={`mailto:${site.email}`}>{site.email}</a> —
            we usually reply within two working days.
          </>
        }
      />
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <h2 style={{ fontSize: "1.9rem" }}>Quick fixes</h2>
          <div className="faq">
            {fixes.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 style={{ fontSize: "1.9rem" }}>Common questions</h2>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="contact">
        <div className="wrap split">
          <div>
            <h2>Still stuck?</h2>
            <p className="lede">
              Tell us your phone model and what you tapped before it went wrong — it helps us fix it faster. A real person
              reads every message.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
