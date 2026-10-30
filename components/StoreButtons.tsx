import { site } from "@/lib/site";


function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.5 1.2-.1 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.6-1-2.6-4.2ZM13.9 4.9c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z" />
    </svg>
  );
}

export default function StoreButtons() {
  return (
    <div className="stores">
      <a className="store" href={site.apkUrl} download>
        <img className="store-mark" src="/app-mark.png" alt="" width={26} height={26} />
        <span>
          <small>Download for</small>
          <strong>Android</strong>
        </span>
      </a>
      {site.appStoreUrl ? (
        <a className="store" href={site.appStoreUrl} target="_blank" rel="noopener noreferrer">
          <AppleIcon />
          <span>
            <small>Download on the</small>
            <strong>App Store</strong>
          </span>
        </a>
      ) : (
        <span className="store soon" aria-label="iPhone app coming soon">
          <AppleIcon />
          <span>
            <small>iPhone</small>
            <strong>Coming soon</strong>
          </span>
        </span>
      )}
    </div>
  );
}
