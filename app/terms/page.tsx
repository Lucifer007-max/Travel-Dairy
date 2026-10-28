import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The terms for using TravelDiary.",
};

export default function TermsPage() {
  return (
    <>
      <PageHead eyebrow="legal" title="Terms of use" lede={`Last updated ${site.legalUpdated}`} />
      <div className="wrap">
        <div className="prose">
          <p>
            These terms apply when you use the TravelDiary app and website. By using TravelDiary you agree to them. If you
            don&apos;t agree, please don&apos;t use the app.
          </p>

          <h2>1. Your account</h2>
          <p>
            You sign in with a Google account. Keep it secure — you are responsible for what happens under your account.
            You must be at least 13, or the minimum age to use online services in your country.
          </p>

          <h2>2. Your content</h2>
          <p>
            Your photos, notes and trips stay yours. You give us permission to store, process and display them only so we
            can run TravelDiary for you and for the people you choose to share a trip with. That permission ends when you
            delete the content or your account.
          </p>
          <p>Only add content you have the right to use, and don&apos;t upload anything illegal, abusive or that infringes someone else&apos;s rights.</p>

          <h2>3. Shared trips</h2>
          <p>
            When you invite someone to a trip, they can view it and add memories. Only invite people you trust. Whoever
            created a trip can remove people from it.
          </p>

          <h2>4. Acceptable use</h2>
          <ul>
            <li>Don&apos;t try to break, overload or get around the security of the app or its servers.</li>
            <li>Don&apos;t access other people&apos;s trips without being invited.</li>
            <li>Don&apos;t use TravelDiary to harass anyone or to share content of someone without their consent.</li>
          </ul>
          <p>We may suspend accounts that break these rules.</p>

          <h2>5. The service</h2>
          <p>
            TravelDiary is free. We work hard to keep it running and your data safe, but the app is provided &quot;as
            is&quot;, without warranties. Please keep your original photos — TravelDiary is a journal, not your only backup.
            We may change or stop features, and will give reasonable notice before shutting the service down so you can
            save your trips.
          </p>

          <h2>6. Liability</h2>
          <p>
            To the extent the law allows, we are not liable for indirect or consequential losses, or for loss of data. Nothing
            in these terms limits rights you have under consumer law that cannot be excluded.
          </p>

          <h2>7. Ending</h2>
          <p>
            You can stop using TravelDiary and delete your account at any time from the app. See the{" "}
            <Link href="/privacy#delete">privacy policy</Link> for what happens to your data.
          </p>

          <h2>8. Changes</h2>
          <p>We may update these terms. If a change matters, we will tell you in the app before it takes effect.</p>

          <h2>9. Contact</h2>
          <p>
            Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
