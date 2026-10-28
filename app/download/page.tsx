import type { Metadata } from "next";
import StoreButtons from "@/components/StoreButtons";

export const metadata: Metadata = {
  title: "Download",
  description: "Get TravelDiary for Android. Free, with no ads.",
};

export default function DownloadPage() {
  return (
    <section className="cta" style={{ paddingTop: 80 }}>
      <div className="wrap">
        <img className="mark" src="/app-mark.png" alt="" width={72} height={72} />
        <p className="eyebrow">download</p>
        <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 3.6rem)" }}>Start your travel diary.</h1>
        <p className="lede" style={{ margin: "18px auto 0" }}>
          Free on Android. Sign in with Google and add your first trip in a minute.
        </p>
        <StoreButtons />
        <div style={{ position: "relative", height: 260, maxWidth: 520, margin: "60px auto 0" }}>
          <figure className="polaroid" style={{ left: "4%", top: 10, transform: "rotate(-9deg)" }}>
            <img src="/photos/goa_window_1.jpg" alt="" />
            <figcaption>morning in Goa</figcaption>
          </figure>
          <figure className="polaroid" style={{ left: "34%", top: 40, transform: "rotate(3deg)" }}>
            <img src="/photos/manali_forest_1.jpg" alt="" />
            <figcaption>pine walk</figcaption>
          </figure>
          <figure className="polaroid" style={{ right: "4%", top: 0, transform: "rotate(10deg)" }}>
            <img src="/photos/goa_boats_1.jpg" alt="" />
            <figcaption>boats</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
