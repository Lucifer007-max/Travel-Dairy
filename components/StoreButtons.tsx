import { site } from "@/lib/site";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#34A853" d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Z" />
      <path fill="#FBBC04" d="m17.2 8.6-3.4 3.4 3.4 3.4 3.9-2.2c.8-.5.8-1.7 0-2.2l-3.9-2.4Z" />
      <path fill="#4285F4" d="M3.6 1.8c.3-.2.8-.2 1.2 0l12.4 6.8-3.4 3.4L3.6 1.8Z" />
      <path fill="#EA4335" d="m13.8 12 3.4 3.4-12.4 6.8c-.4.2-.9.2-1.2 0L13.8 12Z" />
    </svg>
  );
}

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
      <a className="store" href={site.playStoreUrl} target="_blank" rel="noopener noreferrer">
        <PlayIcon />
        <span>
          <small>Get it on</small>
          <strong>Google Play</strong>
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
