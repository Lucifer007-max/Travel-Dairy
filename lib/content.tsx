import { site } from "./site";

const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const icons = {
  camera: <svg viewBox="0 0 24 24" {...s}><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>,
  photos: <svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="14" height="14" rx="2" /><path d="M7 3h12a2 2 0 0 1 2 2v12" /><path d="m3 16 4-4 4 4 2-2 4 4" /></svg>,
  pin: <svg viewBox="0 0 24 24" {...s}><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>,
  calendar: <svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>,
  route: <svg viewBox="0 0 24 24" {...s}><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="6" r="2.5" /><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" /></svg>,
  play: <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9" /><path d="m10 8.5 5 3.5-5 3.5z" /></svg>,
  people: <svg viewBox="0 0 24 24" {...s}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6" /></svg>,
  pen: <svg viewBox="0 0 24 24" {...s}><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="m13.5 6.5 4 4" /></svg>,
  share: <svg viewBox="0 0 24 24" {...s}><path d="M12 15V3M7 8l5-5 5 5" /><path d="M5 12v8h14v-8" /></svg>,
  bell: <svg viewBox="0 0 24 24" {...s}><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z" /><path d="M10 21h4" /></svg>,
  filter: <svg viewBox="0 0 24 24" {...s}><path d="M4 5h16l-6 8v6l-4-2v-4z" /></svg>,
  cloud: <svg viewBox="0 0 24 24" {...s}><path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 10a4 4 0 0 1-1 8z" /></svg>,
  lock: <svg viewBox="0 0 24 24" {...s}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>,
  trash: <svg viewBox="0 0 24 24" {...s}><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" /></svg>,
};

export const features = [
  { icon: icons.photos, title: "Bring your camera roll", body: "Pick photos from your gallery and each one joins the trip its date falls in. Tap any photo to leave it out." },
  { icon: icons.photos, title: "Import from Google Photos", body: "Open the Google Photos picker, choose what belongs, and come back to a trip that is already sorted." },
  { icon: icons.camera, title: "Capture on the go", body: "The built-in camera adds a moment to today's page with the place filled in. One photo of the moment is enough." },
  { icon: icons.pin, title: "Places found for you", body: "Where and when come straight from your photos — no typing. Change a place name any time." },
  { icon: icons.calendar, title: "Days become chapters", body: "Your trip is laid out day by day, with each stop keeping its own pile of photos and notes." },
  { icon: icons.pen, title: "A line for each moment", body: "Add a title, a note, or an emoji to any memory. Short or long, nothing here is required." },
  { icon: icons.route, title: "Your route, drawn", body: "Every stop pinned on a map in the order you went. Tap a pin to jump back to that moment." },
  { icon: icons.play, title: "Relive a trip", body: "A short story of every trip — the places, the light, the people — that plays like a little film." },
  { icon: icons.people, title: "Trips with friends", body: "Invite people by email. They can see the trip and add their own memories, but cannot rename or delete it." },
  { icon: icons.filter, title: "Beach, mountains, city", body: "Each trip gets a kind, so your home screen can show just the beach holidays or just the road trips." },
  { icon: icons.bell, title: "Gentle notifications", body: "When someone adds you to a trip, it shows up in your notifications, ready to open." },
  { icon: icons.cloud, title: "On every device", body: "Sign in with Google and your journals are kept safe in your TravelDiary account, on every phone you use." },
];

export const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is TravelDiary?",
    a: "A travel journal that builds itself from your photos. Add pictures from a trip and TravelDiary sorts them by day and place, draws your route, and lets you write a line about each moment.",
  },
  {
    q: "Do I have to write anything?",
    a: "No. Titles, notes and emoji are all optional. A trip made only of photos still gets its days, places and route.",
  },
  {
    q: "How does it know where a photo was taken?",
    a: "It reads the date and location your camera already saved inside the photo. If a photo has no location, you can type one in or leave it blank.",
  },
  {
    q: "Can I add photos I took before I installed the app?",
    a: "Yes. Pick them from your gallery or import them from Google Photos. Each one joins the trip whose dates it falls in.",
  },
  {
    q: "Do I need an account?",
    a: "You sign in with your Google account. That is what keeps your journals safe if you lose your phone, and lets you open them on another device.",
  },
  {
    q: "Who can see my trips?",
    a: "Only you, unless you invite someone to a trip by email. People you invite can add memories but cannot rename or delete the trip.",
  },
  {
    q: "Is TravelDiary free?",
    a: "Yes. TravelDiary is free to download and use, with no ads.",
  },
  {
    q: "Is it on iPhone?",
    a: site.appStoreUrl
      ? "Yes, TravelDiary is on the App Store, and Android users can download it from this site."
      : "TravelDiary is on Android today. The iPhone version is on its way — write to us and we will tell you when it lands.",
  },
  {
    q: "How do I delete my account?",
    a: (
      <>
        Open Profile in the app and choose <b>Delete account</b>. Your trips, memories and photos are deleted for good. You can also{" "}
        <a className="link" href={`mailto:${site.email}?subject=Delete%20my%20account`}>email us</a> and we will do it for you.
      </>
    ),
  },
];
