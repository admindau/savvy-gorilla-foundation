// app/(marketing)/stories/page.tsx
import Link from "next/link";

const series = [
  {
    slug: "16-voices-one-matriline",
    label: "Campaign",
    title: "16 Voices, One Matriline",
    description:
      "A digital storytelling campaign where women, girls, and allies speak honestly about online harassment, GBV, and resilience.",
    highlight:
      "Built for the 16 Days of Activism – rooted in South Sudan, echoing across Africa.",
    tagColor: "bg-rasta-gold",
  },
  {
    slug: "youth-minds-safe-spaces",
    label: "Youth circles",
    title: "Young Minds, Safe Spaces",
    description:
      "Reflections from youth circles on mental health, masculinity, identity, and what it means to stand as allies.",
    highlight:
      "Creating room for boys and young men to unlearn harmful norms and choose courage instead.",
    tagColor: "bg-rasta-green",
  },
  {
    slug: "our-matriline-podcast",
    label: "Podcast",
    title: "Our Matriline Podcast",
    description:
      "Conversations held by African women about girlhood, womanhood, intergenerational healing, and digital life.",
    highlight:
      "Stories that honour mothers, aunties, sisters, and daughters across the continent.",
    tagColor: "bg-rasta-red",
  },
];

const voicePreviews = [
  {
    id: 1,
    role: "Host voice",
    name: "Achom – ‘The Facebook pokes’",
    summary:
      "A funny but honest story about how constant ‘hi hi hi’ messages, pokes, and online stalking slowly turned from annoying to unsafe.",
    themeTags: ["Digital harassment", "Boundaries", "Humour"],
  },
  {
    id: 2,
    role: "Host voice",
    name: "Doris – ‘The view once surprise’",
    summary:
      "A ‘view once’ message that turned into an unsolicited nude – and what it taught her about consent and courage.",
    themeTags: ["Consent", "Unsolicited nudes", "Self-respect"],
  },
  {
    id: 3,
    role: "Ally voice",
    name: "Dau – ‘Learning to listen as a man’",
    summary:
      "Reflections on masculinity, ego, and what shifted when he began to truly listen to women’s experiences online and offline.",
    themeTags: ["Male allyship", "Masculinity", "Listening"],
  },
  {
    id: 4,
    role: "Ally voice",
    name: "Majok – ‘GBV is not distant’",
    summary:
      "A reminder that violence is not only physical – it lives in our jokes, comments, and the silence of men who say nothing.",
    themeTags: ["Accountability", "Everyday violence", "Digital safety"],
  },
];

const themes = [
  "Online harassment & digital violence",
  "Consent, safety, and boundaries",
  "Masculinity, allyship, and unlearning",
  "Mental health and emotional honesty",
  "Pan-African girlhood and womanhood",
  "Community care and solidarity",
];

export default function StoriesPage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rasta-gold">
              Stories &amp; Voices
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Stories that tell the truth and still hold dignity.
            </h1>
            <p className="text-sm text-white/70 sm:text-base">
              Savvy GoRilla Foundation uses storytelling as a tool for healing,
              visibility, and change. These are not just “case studies” – they
              are real experiences from women, girls, and allies navigating
              digital spaces, mental health, and everyday safety.
            </p>
            <p className="text-sm text-white/70 sm:text-base">
              Our promise: we do not sensationalise pain. We tell stories with
              consent, care, and intention – centring the people behind the
              words.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#sixteen-voices"
                className="inline-flex items-center justify-center rounded-full bg-rasta-gold px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-rasta-gold/90"
              >
                Read 16 Voices series
              </a>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-rasta-green px-7 py-3 text-sm font-medium text-rasta-green transition hover:bg-rasta-green hover:text-black"
              >
                See how stories shape our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERIES OVERVIEW */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Campaigns and series under Stories &amp; Voices.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                These strands hold the different ways we share stories – written
                pieces, voice notes, animations, and podcast episodes. Each one
                can live on social media, YouTube, or here on the website.
              </p>
            </div>
            <p className="text-xs text-white/60">
              All content is shared with consent and with safety in mind.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {series.map((item) => (
              <article
                key={item.slug}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
                      {item.label}
                    </p>
                    <span
                      className={`h-1.5 w-10 rounded-full ${item.tagColor}`}
                    />
                  </div>
                  <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-3 text-xs text-white/70">
                    {item.description}
                  </p>
                </div>
                <p className="mt-4 text-[11px] text-white/60">
                  {item.highlight}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 16 VOICES HIGHLIGHT */}
      <section
        id="sixteen-voices"
        className="border-b border-white/10 bg-gradient-to-b from-rasta-red/10 via-black to-rasta-green/10"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.3fr)] lg:items-start">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rasta-gold">
                16 Voices, One Matriline
              </p>
              <h2 className="text-xl font-semibold sm:text-2xl">
                A chorus of voices speaking against digital violence.
              </h2>
              <p className="text-sm text-white/70">
                16 Voices, One Matriline is a storytelling campaign created for
                the 16 Days of Activism. Each “voice” is a short, powerful
                reflection from a woman, girl, or ally about how digital
                violence has touched their life – and how they are responding.
              </p>
              <p className="text-sm text-white/70">
                Some pieces are serious, some are humorous, but all are honest.
                Together they show that digital violence is not just a “social
                media problem” – it sits inside culture, gender norms, and the
                way we treat each other.
              </p>
              <div className="mt-4 rounded-3xl border border-white/15 bg-black/60 p-5 text-xs text-white/80">
                <p className="font-semibold">
                  How this series can grow on the website:
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-rasta-gold" />
                    <span>
                      Each voice can have its own page or embed (text, audio, or
                      animation).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-rasta-gold" />
                    <span>
                      We can group voices by theme – survivors, youth, male
                      allies, etc.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-rasta-gold" />
                    <span>
                      Future seasons can expand beyond the 16 Days, archiving a
                      living library of African digital experiences.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-white/10 bg-black/70 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
                Sample voices from the series
              </p>
              <div className="space-y-4">
                {voicePreviews.map((voice) => (
                  <article
                    key={voice.id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rasta-gold">
                      {voice.role}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold">
                      {voice.name}
                    </h3>
                    <p className="mt-2 text-xs text-white/70">
                      {voice.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {voice.themeTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/60 px-2 py-1 text-[10px] text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
              <p className="pt-1 text-[11px] text-white/60">
                These are examples. As we publish the full 16 voices, each one
                can link out to its own page, animation, or audio clip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THEMES & INVITE */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.4fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold sm:text-2xl">
                What our stories talk about.
              </h2>
              <p className="text-sm text-white/70">
                Across campaigns, podcasts, and youth spaces, some themes keep
                repeating. They show us where the pain is – and where the
                healing can begin.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {themes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-4 rounded-full bg-rasta-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-rasta-red/25 via-rasta-gold/20 to-rasta-green/25 px-6 py-6 text-sm text-white/85 sm:px-8 sm:py-8">
              <h3 className="text-base font-semibold sm:text-lg">
                Want to share a story or host a listening space?
              </h3>
              <p className="mt-3 text-sm text-white/80">
                Stories &amp; Voices is not a one-way platform. We can co-create
                storytelling sessions, digital safety conversations, or podcast
                recordings with your organisation, school, or community group.
              </p>
              <p className="mt-3 text-sm text-white/80">
                Whether it&apos;s a youth group in Juba, a women&apos;s savings
                circle, or a university class elsewhere on the continent, we are
                open to collaboration.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center rounded-full bg-rasta-green px-6 py-2.5 text-xs font-semibold text-black shadow shadow-black/40 transition hover:bg-rasta-green/90"
                >
                  Co-create a storytelling session
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-rasta-gold px-6 py-2.5 text-xs font-medium text-rasta-gold transition hover:bg-rasta-gold hover:text-black"
                >
                  Contact the Stories &amp; Voices team
                </Link>
              </div>
              <p className="mt-4 text-[11px] text-white/75">
                All collaborations follow our safeguarding and consent
                principles. No story is shared without care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
