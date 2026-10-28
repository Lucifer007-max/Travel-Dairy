export default function PageHead({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: React.ReactNode }) {
  return (
    <header className="page-head wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 3.6rem)" }}>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </header>
  );
}
