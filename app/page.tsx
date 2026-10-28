import Link from "next/link";
import StoreButtons from "@/components/StoreButtons";
import ContactForm from "@/components/ContactForm";
import { faqs, features, icons } from "@/lib/content";
import { site } from "@/lib/site";

function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <b>{n}</b> {children}
    </p>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <Link href="/whats-new" className="badge">
            <span>New</span> TravelDiary {site.version} is here — see what&apos;s inside
          </Link>
          <h1>
            Every trip,
            <br />
            <em>beautifully kept.</em>
          </h1>
          <p className="lede">
            TravelDiary turns your travel photos into simple, beautiful journals. Bring your camera roll — the days, the
            places and the route sort themselves out.
          </p>
          <StoreButtons />
          <p className="trust">
            <span>Free</span>
            <span>No ads</span>
            <span>Sign in with Google</span>
            <span>
              <a className="link" href="#how">
                See how it works ↓
              </a>
            </span>
          </p>
        </div>
        <div className="hero-art" aria-label="The TravelDiary home screen, with polaroids from a trip to Goa">
          <div className="phone">
            <div className="screen">
              <p className="screen-title">Your trips</p>
              <p className="screen-sub">3 journeys · 128 memories</p>
              <div className="chips">
                <span className="chip on">All</span>
                <span className="chip">Beach</span>
                <span className="chip">Mountains</span>
                <span className="chip">City</span>
              </div>
              <div className="trip-card">
                <img src="/photos/goa_sunset_1.jpg" alt="" />
                <div>
                  <b>Goa</b>
                  <span>Beach · 46 memories</span>
                </div>
              </div>
              <div className="trip-card">
                <img src="/photos/manali_mountains_1.jpg" alt="" />
                <div>
                  <b>Manali</b>
                  <span>Mountains · 82 memories</span>
                </div>
              </div>
            </div>
          </div>
          <figure className="polaroid" style={{ left: "-2%", top: "8%", transform: "rotate(-8deg)" }}>
            <img src="/photos/goa_beach_1.jpg" alt="Vagator beach in the afternoon" />
            <figcaption>Vagator, day 1</figcaption>
          </figure>
          <figure className="polaroid" style={{ right: "-2%", bottom: "6%", transform: "rotate(7deg)" }}>
            <img src="/photos/manali_snow_1.jpg" alt="Snow on the road out of Manali" />
            <figcaption>first snow!</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <Eyebrow n="01">how it works</Eyebrow>
        <h2>Add photos. Get a journal.</h2>
        <p className="lede">Your first photo becomes the first page. Every trip after that writes itself.</p>
        <ol className="steps" style={{ listStyle: "none", padding: 0 }}>
          <li className="step" data-reveal>
            <h3>Bring your camera roll</h3>
            <p>Pick photos from your gallery or Google Photos, or shoot with the in-app camera while you travel.</p>
          </li>
          <li className="step" data-reveal>
            <h3>Photos find their places</h3>
            <p>Dates and locations are read straight from your photos, so each one lands on the right day, at the right stop.</p>
          </li>
          <li className="step" data-reveal>
            <h3>Relive it whenever</h3>
            <p>Flip through days, follow your route on the map, or play the trip back as a short story.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Sorting() {
  const photos = ["goa_beach_2", "goa_boats_1", "goa_fort_1", "goa_houses_1", "goa_palms_1", "goa_window_1", "goa_sunset_2", "manali_road_1"];
  return (
    <section className="section">
      <div className="wrap split">
        <div>
          <Eyebrow n="02">your camera roll</Eyebrow>
          <h2>Every photo joins the right trip.</h2>
          <p className="lede">
            Choose a few hundred pictures at once. Each one joins the trip its date falls in, and anything that doesn&apos;t
            belong is one tap away from being left out.
          </p>
          <ul className="ticks">
            <li><b>From your gallery</b> — pick as many as you like.</li>
            <li><b>From Google Photos</b> — use the picker, then come straight back.</li>
            <li><b>From the camera</b> — add today&apos;s moment as it happens.</li>
          </ul>
        </div>
        <div className="panel" data-reveal>
          <div className="sort-row">
            <strong>Goa · 7 photos</strong>
            <span className="tag">Mar 14 – 18</span>
          </div>
          <div className="photo-grid">
            {photos.map((p, i) => (
              <figure key={p} className={i === 7 ? "off" : undefined}>
                <img src={`/photos/${p}.jpg`} alt="" loading="lazy" />
              </figure>
            ))}
          </div>
          <p className="panel-note">Tap any photo to leave it out.</p>
        </div>
      </div>
    </section>
  );
}

function Places() {
  return (
    <section className="section">
      <div className="wrap split flip">
        <div>
          <Eyebrow n="03">places &amp; days</Eyebrow>
          <h2>Where and when, no typing.</h2>
          <p className="lede">
            Your camera already knows where you were. TravelDiary reads it, names the place, and turns your trip into
            chapters — one for every day.
          </p>
          <ul className="ticks">
            <li><b>Found automatically</b> — type to change it if you like.</li>
            <li><b>Days turn into chapters</b> — each stop keeps its own pile.</li>
            <li><b>A line, if you want</b> — a title, a note or an emoji.</li>
          </ul>
        </div>
        <div className="panel" data-reveal>
          <div className="place-card" style={{ marginBottom: 26 }}>
            <img src="/photos/goa_sunset_2.jpg" alt="Sunset over the sea at Vagator" loading="lazy" />
            <div>
              <div className="field">
                <small>Place</small>
                <span>Vagator Beach, Goa</span>
                <br />
                <span className="found">Found automatically</span>
              </div>
              <div className="field">
                <small>When</small>
                <span>Fri, 15 Mar · 6:42 PM</span>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="day">
              <p className="day-label">Day 1<small>Thu 14</small></p>
              <div>
                <div className="day-photos">
                  <img src="/photos/goa_houses_1.jpg" alt="" loading="lazy" />
                  <img src="/photos/goa_window_1.jpg" alt="" loading="lazy" />
                  <img src="/photos/goa_palms_1.jpg" alt="" loading="lazy" />
                </div>
                <p className="day-note">Fontainhas, all yellow and blue</p>
              </div>
            </div>
            <div className="day">
              <p className="day-label">Day 2<small>Fri 15</small></p>
              <div>
                <div className="day-photos">
                  <img src="/photos/goa_fort_1.jpg" alt="" loading="lazy" />
                  <img src="/photos/goa_boats_1.jpg" alt="" loading="lazy" />
                  <img src="/photos/goa_sunset_1.jpg" alt="" loading="lazy" />
                </div>
                <p className="day-note">The sky went pink for ten minutes…</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Relive() {
  return (
    <section className="section">
      <div className="wrap split">
        <div>
          <Eyebrow n="04">relive</Eyebrow>
          <h2>Then relive it, whenever you miss it.</h2>
          <p className="lede">
            Every trip becomes a short story — the places, the light, the people. It plays like a little film made from
            your own photos and your own words.
          </p>
          <ul className="ticks">
            <li><b>The trip started like this.</b> It opens on your first photo.</li>
            <li><b>Then came the sunsets.</b> Days roll by, chapter by chapter.</li>
            <li><b>Weightless, like the last lazy day.</b> It ends where you did.</li>
          </ul>
        </div>
        <div data-reveal>
          <div className="phone">
            <div className="screen" style={{ padding: 0 }}>
              <div className="story">
                <img src="/photos/goa_sunset_1.jpg" alt="Sunset in Goa, shown as part of a replayed trip" loading="lazy" />
              </div>
              <div className="story-bars">
                <i className="done" />
                <i className="done" />
                <i className="now" />
                <i />
                <i />
              </div>
              <p className="story-text">
                Then came
                <br />
                the sunsets.
                <small>Vagator Beach · 6:42 PM</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Route() {
  const stops = [
    { x: 92, y: 248, name: "Panjim" },
    { x: 168, y: 176, name: "Fort Aguada" },
    { x: 262, y: 120, name: "Anjuna" },
    { x: 330, y: 64, name: "Vagator" },
  ];
  const d = "M92 248 C 120 220, 140 190, 168 176 S 230 150, 262 120 S 310 80, 330 64";
  return (
    <section className="section">
      <div className="wrap split flip">
        <div>
          <Eyebrow n="05">the map</Eyebrow>
          <h2>Your route, drawn for you.</h2>
          <p className="lede">
            Every stop is pinned in the order you went. Tap a pin to open that moment, or replay the whole route from the
            first morning to the last night.
          </p>
        </div>
        <div className="panel" data-reveal>
          <div className="map">
            <svg viewBox="0 0 420 320" role="img" aria-label="A route through four stops in Goa">
              <defs>
                <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                  <path d="M28 0H0V28" fill="none" stroke="#2c231e" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="420" height="320" fill="url(#grid)" />
              <path d="M0 300 C 80 260, 60 200, 140 150 S 300 60, 420 20 L420 320 L0 320Z" fill="#1a2a2c" opacity=".55" />
              <path d={d} fill="none" stroke="#d08159" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
              {stops.map((s, i) => (
                <g key={s.name}>
                  <circle cx={s.x} cy={s.y} r="13" fill="#d08159" />
                  <text x={s.x} y={s.y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#1b120d">
                    {i + 1}
                  </text>
                  <text className="pin-label" x={s.x + 18} y={s.y + 4}>
                    {s.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <p className="panel-note">Every stop pinned in the order you went. Tap to replay.</p>
        </div>
      </div>
    </section>
  );
}

function Together() {
  return (
    <section className="section">
      <div className="wrap split">
        <div>
          <Eyebrow n="06">together</Eyebrow>
          <h2>One trip, everyone&apos;s photos.</h2>
          <p className="lede">
            Add the people you travelled with. They see the trip and add their own memories to it, so the journal has
            every angle — not just yours.
          </p>
          <ul className="ticks">
            <li><b>Invite by email</b> — it shows up for them when they sign in.</li>
            <li><b>Shared, not handed over</b> — they can add, but can&apos;t rename or delete.</li>
          </ul>
        </div>
        <div className="panel" data-reveal>
          <p className="sort-row">
            <strong>People on this trip</strong>
            <span className="tag">Manali</span>
          </p>
          <div className="people">
            <div className="person">
              <span className="avatar" style={{ background: "#d08159" }}>A</span>
              <div>Aarav<small>Started this trip</small></div>
              <span className="tag">Owner</span>
            </div>
            <div className="person">
              <span className="avatar" style={{ background: "#9fb7a4" }}>M</span>
              <div>Meera<small>Added 24 memories</small></div>
            </div>
            <div className="person">
              <span className="avatar" style={{ background: "#c9b48a" }}>K</span>
              <div>kabir@…<small>Invited · appears when they sign in</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Play() {
  const cards = [
    { src: "manali_river_1", cap: "river walk", style: { left: "6%", top: "14%", transform: "rotate(-11deg)" } },
    { src: "goa_boats_1", cap: "boats at dawn", style: { left: "34%", top: "34%", transform: "rotate(5deg)" } },
    { src: "manali_village_1", cap: "Old Manali", style: { right: "6%", top: "8%", transform: "rotate(12deg)" } },
    { src: "goa_palms_1", cap: "lazy day", style: { left: "18%", bottom: "-6%", transform: "rotate(9deg)" } },
    { src: "manali_sunrise_1", cap: "5 am, worth it", style: { right: "14%", bottom: "-4%", transform: "rotate(-6deg)" } },
  ];
  return (
    <section className="section">
      <div className="wrap">
        <div style={{ maxWidth: 640 }}>
          <Eyebrow n="07">just for fun</Eyebrow>
          <h2>Some days, just play.</h2>
          <p className="lede">
            Your trip can drift, drop, or gather in your hands. Fling a photo and it lands where it falls; hold anywhere to
            pull them close.
          </p>
        </div>
        <div className="play-field" style={{ marginTop: 40 }} data-reveal>
          {cards.map((c) => (
            <figure key={c.src} className="polaroid" style={c.style}>
              <img src={`/photos/${c.src}.jpg`} alt="" loading="lazy" />
              <figcaption>{c.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Everything() {
  return (
    <section className="section">
      <div className="wrap">
        <Eyebrow n="08">everything in the app</Eyebrow>
        <h2>All of it, free.</h2>
        <div className="grid">
          {features.slice(0, 9).map((f) => (
            <div className="card" key={f.title} data-reveal>
              <span className="icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28 }}>
          <Link className="link" href="/features">
            See every feature →
          </Link>
        </p>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section className="section">
      <div className="wrap">
        <Eyebrow n="09">privacy</Eyebrow>
        <h2>Your trips are yours.</h2>
        <p className="lede">A travel journal is personal. We built TravelDiary so it stays that way.</p>
        <div className="privacy-band">
          <div className="card">
            <span className="icon">{icons.lock}</span>
            <h3>Private by default</h3>
            <p>Photos live in private storage and are only ever opened through short-lived links. Nobody sees a trip unless you invite them.</p>
          </div>
          <div className="card">
            <span className="icon">{icons.pin}</span>
            <h3>Location stays in the journal</h3>
            <p>We use a photo&apos;s location to place it on your trip. It is never sold, shared with advertisers, or used to track you.</p>
          </div>
          <div className="card">
            <span className="icon">{icons.cloud}</span>
            <h3>No ads, no selling data</h3>
            <p>TravelDiary has no ads and no ad trackers. We don&apos;t sell your personal information to anyone.</p>
          </div>
          <div className="card">
            <span className="icon">{icons.trash}</span>
            <h3>Leave any time</h3>
            <p>Delete your account from the app and every trip, memory and photo goes with it — for good.</p>
          </div>
        </div>
        <p style={{ marginTop: 28 }}>
          <Link className="link" href="/privacy">
            Read the privacy policy →
          </Link>
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Eyebrow n="10">questions</Eyebrow>
        <h2>Before you pack.</h2>
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
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap split">
        <div>
          <Eyebrow n="11">say hello</Eyebrow>
          <h2>Postcards welcome.</h2>
          <p className="lede">
            Found a bug, have an idea, or just came back from a trip you loved? Write to us. A real person reads every
            message.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="cta" id="get">
      <div className="wrap">
        <img className="mark" src="/app-mark.png" alt="" width={72} height={72} />
        <h2>Your next adventure will look good here.</h2>
        <p className="lede" style={{ margin: "18px auto 0" }}>
          Start your travel diary today. It takes one photo.
        </p>
        <StoreButtons />
      </div>
    </section>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: site.name,
  operatingSystem: "Android",
  applicationCategory: "TravelApplication",
  description: site.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  installUrl: site.playStoreUrl,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <How />
      <Sorting />
      <Places />
      <Relive />
      <Route />
      <Together />
      <Play />
      <Everything />
      <Privacy />
      <Faq />
      <Contact />
      <Cta />
    </>
  );
}
