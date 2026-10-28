import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What TravelDiary collects, why, who processes it, and how to delete it.",
};

const sections = [
  ["summary", "The short version"],
  ["collect", "What we collect"],
  ["use", "How we use it"],
  ["share", "Who else processes it"],
  ["permissions", "Phone permissions"],
  ["sharing-trips", "Trips you share with others"],
  ["retention", "How long we keep it"],
  ["delete", "Deleting your account"],
  ["rights", "Your rights"],
  ["children", "Children"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact"],
];

export default function PrivacyPage() {
  return (
    <>
      <PageHead eyebrow="legal" title="Privacy policy" lede={`Last updated ${site.legalUpdated}`} />
      <div className="wrap">
        <div className="prose">
          <nav className="toc" aria-label="On this page">
            <strong>On this page</strong>
            <ol>
              {sections.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <h2 id="summary">The short version</h2>
          <ul>
            <li>We collect what is needed to keep your travel journal: your Google name and email, and the trips, notes and photos you add.</li>
            <li>We use a photo&apos;s date and location to place it on your trip. That&apos;s it.</li>
            <li>No ads, no ad trackers, and we never sell your personal information.</li>
            <li>Delete your account in the app and everything goes with it.</li>
          </ul>

          <h2 id="collect">What we collect</h2>
          <table>
            <thead>
              <tr><th>Data</th><th>Where it comes from</th></tr>
            </thead>
            <tbody>
              <tr><td>Name, email address, profile picture, Google account ID</td><td>Your Google account, when you sign in</td></tr>
              <tr><td>Trips: title, destination, dates, kind (beach, city…)</td><td>You, or worked out from your photos</td></tr>
              <tr><td>Memories: titles, notes, emoji, place names</td><td>You</td></tr>
              <tr><td>Photos, plus the date, place and coordinates saved in them</td><td>Your gallery, Google Photos or the in-app camera</td></tr>
              <tr><td>Email addresses of people you invite to a trip</td><td>You</td></tr>
              <tr><td>A push notification token for your device</td><td>Your phone, if you allow notifications</td></tr>
            </tbody>
          </table>
          <p>We don&apos;t collect your contacts, track your location in the background, or use advertising identifiers.</p>

          <h2 id="use">How we use it</h2>
          <ul>
            <li>To run the app: storing your trips, sorting photos by day and place, drawing your route and building trip replays.</li>
            <li>To sync your journal across your devices and keep it safe if you lose your phone.</li>
            <li>To let people you invite see a trip and add to it, and to notify them that they were added.</li>
            <li>To answer you when you write to us.</li>
          </ul>
          <p>We don&apos;t use your data for advertising, and we don&apos;t build profiles of you.</p>

          <h2 id="share">Who else processes it</h2>
          <p>We use a few trusted providers to run TravelDiary. They only process data on our behalf, to provide their service:</p>
          <ul>
            <li><b>Supabase</b> — hosts our database and stores your photos in a private bucket.</li>
            <li><b>Vercel</b> — runs the TravelDiary API that the app talks to.</li>
            <li><b>Google</b> — Sign-In; the Google Photos Picker, only for photos you choose; and Firebase Cloud Messaging for notifications.</li>
            <li><b>Your phone&apos;s geocoding service</b> — turns a photo&apos;s coordinates into a place name.</li>
            <li><b>OpenStreetMap</b> — supplies the map tiles. Your device requests map images for the area you are viewing.</li>
          </ul>
          <p>We will disclose information if the law requires it. We never sell or rent personal information.</p>

          <h2 id="permissions">Phone permissions</h2>
          <ul>
            <li><b>Photos</b> — to add pictures you pick. We only read the photos you choose.</li>
            <li><b>Camera</b> — for the in-app camera. You can turn it off and still add photos from your gallery.</li>
            <li><b>Location</b> — only while you use the camera, to name the place of a new photo.</li>
            <li><b>Notifications</b> — to tell you when someone adds you to a trip.</li>
          </ul>
          <p>Every permission is optional, and you can change them any time in your phone&apos;s settings.</p>

          <h2 id="sharing-trips">Trips you share with others</h2>
          <p>
            When you invite someone to a trip, they can see its photos, places and notes and add their own memories. They
            cannot rename or delete the trip. Memories they add are theirs as well as part of your trip. Remove someone from
            a trip and they lose access to it.
          </p>

          <h2 id="retention">How long we keep it</h2>
          <p>
            We keep your data while your account is open. When you delete a photo, memory or trip, it is removed from our
            database and storage. Backups held by our hosting provider roll over and are gone within 30 days.
          </p>

          <h2 id="delete">Deleting your account</h2>
          <p>
            In the app, open <b>Profile → Delete account</b>. Your account, trips, memories and photos are deleted for good,
            and your device&apos;s notification token is removed. You can also email{" "}
            <a href={`mailto:${site.email}?subject=Delete%20my%20account`}>{site.email}</a> from the address you signed in
            with, and we will delete it within 30 days.
          </p>

          <h2 id="rights">Your rights</h2>
          <p>
            Depending on where you live (for example under the GDPR, the UK GDPR, India&apos;s DPDP Act or US state laws),
            you can ask to see, correct, export or delete your personal data, or object to how we use it. Write to us and we
            will reply within 30 days. You can also complain to your local data protection authority.
          </p>

          <h2 id="children">Children</h2>
          <p>
            TravelDiary is not meant for children under 13 (or the minimum age in your country). If you believe a child has
            given us personal data, contact us and we will delete it.
          </p>

          <h2 id="changes">Changes to this policy</h2>
          <p>
            If we change this policy, we will update the date at the top. If a change is significant, we will tell you in
            the app before it applies.
          </p>

          <h2 id="contact">Contact</h2>
          <p>
            Questions about privacy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
