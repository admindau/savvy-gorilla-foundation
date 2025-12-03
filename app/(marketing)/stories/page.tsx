// app/(marketing)/stories/page.tsx
import Link from "next/link";

const campaigns = [
  {
    label: "Campaign",
    title: "16 Voices, One Matriline",
    description:
      "A storytelling series unpacking digital violence, resilience, and solidarity across generations of African women.",
    status: "Launching in phases during the 16 Days of Activism.",
  },
  {
    label: "Podcast",
    title: "Our Matriline",
    description:
      "Conversations held by women, for women – tracing stories from girlhood to womanhood across cultures and borders.",
    status: "Stories shared with consent, care, and boundaries.",
  },
  {
    label: "Series",
    title: "Voices from the Timeline",
    description:
      "Short digital stories on how online harassment, misinformation, and pressure show up in everyday life.",
    status: "Designed to spark honest conversations and safer habits online.",
  },
];

const voicesWeCenter = [
  {
    title: "Women & girls navigating digital spaces",
    description:
      "From Facebook inboxes to WhatsApp groups and TikTok trends – we listen to how online life shapes self-worth, safety, and opportunity.",
  },
  {
    title: "Male allies willing to reflect",
    description:
      "Men who are ready to unlearn harmful norms, speak up among peers, and model different ways of holding power.",
  },
  {
    title: "Youth on the frontline of change",
    description:
      "Young Africans building new cultures of care, consent, and community – both on-screen and offline.",
  },
];

const storyPractices = [
  "We seek consent before, during, and after the storytelling process.",
  "We avoid graphic detail when it risks retraumatising the storyteller or audience.",
  "We prioritise anonymity when safety, privacy, or comfort require it.",
  "We share resources and referral options where possible – not just the story.",
];

export default function StoriesPage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-[#110305] to-black">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] lg:items-center">
            {/* Left: intro */}
            <div className="space-y-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rasta-gold">
                Stories &amp; Voices
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Stories that tell the truth and still hold dignity.
              </h1>
              <p className="max-w-xl text-sm text-white/70 sm:text-base">
                Savvy GoRilla Foundation uses storytelling as a tool for
                healing, visibility, and change. These are not just “case
                studies” – they are real experiences from women, girls, and
                allies navigating digital spaces, mental health, and everyday
                safety.
              </p>
              <p className="max-w-xl text-sm text-white/70 sm:text-base">
                Our promise: we do not sensationalise pain. We tell stories with
                consent, care, and intention – centring the people behind the
                words.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full bg-rasta-gold px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-rasta-gold/90 hover:shadow-black/60"
                >
                  See how stories shape our work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-rasta-green px-7 py-3 text-sm font-medium text-rasta-green transition hover:bg-rasta-green hover:text-black"
                >
                  Share a story or idea
                </Link>
              </div>
            </div>

            {/* Right: small explainer card */}
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-rasta-gold/80 hover:bg-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Why stories?
              </p>
              <p className="text-sm text-white/80">
                Stories cut through jargon and reports. They remind us that
                policies, programmes, and platforms all land in real people&apos;s
                lives. When told well, stories can soften hearts, influence
                decisions, and open up safer spaces for others to speak.
              </p>
              <p className="text-xs text-white/60">
                Every story we share is part of a bigger liberation journey –
                for individuals, communities, and the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGNS & SERIES */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Campaigns and series under Stories &amp; Voices.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/70">
                These are starting points – each campaign can grow into workshops,
                digital content, or youth-led actions as partners come on board.
              </p>
            </div>
            <Link
              href="/get-involved"
              className="text-sm font-medium text-rasta-gold underline underline-offset-4"
            >
              Explore ways to collaborate
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {campaigns.map((campaign) => (
              <article
                key={campaign.title}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_16px_35px_rgba(0,0,0,0.65)] transition duration-300 hover:-translate-y-1 hover:border-rasta-gold/80 hover:bg-white/10"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rasta-gold">
                    {campaign.label}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold">
                    {campaign.title}
                  </h3>
                  <p className="mt-3 text-xs text-white/70">
                    {campaign.description}
                  </p>
                </div>
                <p className="mt-4 text-[11px] text-white/60">
                  {campaign.status}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOICES WE CENTRE */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-[#050b04] to-black">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Whose voices do we centre?
            </h2>
            <p className="mt-3 text-sm text-white/70">
              We prioritise people whose experiences are often dismissed,
              mocked, or misunderstood – especially in online spaces and
              conversations about gender, power, and mental health.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {voicesWeCenter.map((voice) => (
              <div
                key={voice.title}
                className="rounded-3xl border border-white/10 bg-black/70 p-5 shadow-[0_16px_35px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-1 hover:border-rasta-green/80"
              >
                <h3 className="text-sm font-semibold">{voice.title}</h3>
                <p className="mt-3 text-xs text-white/70">
                  {voice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY PRACTICES */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold sm:text-2xl">
                How we tell stories safely.
              </h2>
              <p className="max-w-xl text-sm text-white/70">
                Storytelling around GBV, mental health, and digital violence
                requires care. We follow simple principles to protect both the
                storyteller and those listening.
              </p>

              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {storyPractices.map((practice) => (
                  <li key={practice} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-rasta-gold" />
                    <span className="text-xs sm:text-sm">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)] transition duration-300 hover:-translate-y-1 hover:border-rasta-red/80 hover:bg-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Safeguarding &amp; boundaries
              </p>
              <p className="text-sm text-white/80">
                Some stories are not meant for public timelines. When a story
                feels too raw, risky, or identifying, we may keep it within
                closed circles, anonymise it heavily, or not share it at all.
              </p>
              <p className="text-xs text-white/60">
                Our goal is not to collect every story. Our goal is to honour
                the people who trust us with theirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/15 bg-gradient-to-r from-rasta-red/20 via-rasta-gold/15 to-rasta-green/20 px-6 py-8 sm:flex-row sm:items-center sm:px-10">
            <div>
              <h2 className="text-lg font-semibold sm:text-xl">
                Want to build a campaign or series with us?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                From digital safety animations to community dialogues and
                podcast-style storytelling, we&apos;re open to collaborations
                that put dignity first.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center rounded-full bg-rasta-green px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-rasta-green/90"
              >
                Explore collaboration ideas
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-rasta-gold px-7 py-3 text-sm font-medium text-rasta-gold transition hover:bg-rasta-gold hover:text-black"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
