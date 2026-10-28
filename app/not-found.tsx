import Link from "next/link";

export default function NotFound() {
  return (
    <section className="cta">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 3.6rem)" }}>This page took a wrong turn.</h1>
        <p className="lede" style={{ margin: "18px auto 30px" }}>
          The road you followed doesn&apos;t go anywhere. Let&apos;s get you back.
        </p>
        <Link href="/" className="btn">
          Back home
        </Link>
      </div>
    </section>
  );
}
