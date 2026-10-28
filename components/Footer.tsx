import Link from "next/link";
import { site } from "@/lib/site";

const columns = [
  {
    title: "App",
    links: [
      { href: "/features", label: "Features" },
      { href: "/#how", label: "How it works" },
      { href: "/whats-new", label: "What's new" },
      { href: "/download", label: "Download" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/support", label: "Support" },
      { href: "/support#contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of use" },
      { href: "/privacy#delete", label: "Delete your account" },
      { href: "/credits", label: "Photo credits" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <img src="/app-mark.png" alt="" width={32} height={32} />
              {site.name}
            </Link>
            <p className="muted" style={{ marginTop: 14, maxWidth: 300 }}>
              Your travel photos, turned into journals you will want to open again.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name} · kept on the road</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </footer>
  );
}
