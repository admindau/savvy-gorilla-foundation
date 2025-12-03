// app/(marketing)/get-involved/page.tsx
import Link from "next/link";

const waysToSupport = [
  {
    title: "Partner on a programme",
    audience: "Organisations, NGOs, UN agencies, community groups",
    description:
      "Co-design youth circles, storytelling sessions, digital safety campaigns, or trainings grounded in your context.",
    examples: [
      "Co-branded 16 Days of Activism campaign",
      "Youth mental health or GBV allyship circles",
      "Digital literacy sessions for staff or community members",
    ],
  },
  {
    title: "Sponsor or fund an initiative",
    audience: "Donors, foundations, private sector, individuals",
    description:
      "Support existing campaigns or help us pilot new ones. We keep budgets transparent and impact grounded.",
    examples: [
      "Cover costs for a youth cohort or community dialogues",
      "Support production of animations, podcasts, and toolkits",
      "Fund digital safety and wellbeing content in local languages",
    ],
  },
  {
    title: "Bring us to your space",
    audience: "Schools, universities, youth hubs, collectives",
    description:
      "Invite the team or collaborators to facilitate conversations on GBV, digital safety, mental health, and leadership.",
    examples: [
      "Campus talks or listening sessions",
      "Workshops with youth or women’s groups",
      "Panel conversations or podcast-style recordings",
    ],
  },
];

const individualWays = [
  "Share our campaigns and voices on your platforms.",
  "Host a small listening circle using our stories as prompts.",
  "Invite us to speak to your organisation, class, or group.",
  "Offer your skills – design, translation, research, facilitation.",
  "Support financially when you are able, at any scale.",
];

export default function GetInvolvedPage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rasta-gold">
              Get Involved
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Walk with us in building safer, more honest spaces.
            </h1>
            <p className="text-sm text-white/70 sm:text-base">
              There is room for individuals, grassroots groups, institutions,
              and funders. Whether you bring your story, your skills, or your
              resources, you&apos;re helping to build futures where young
              Africans can live, speak, and create with dignity.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-rasta-green px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-rasta-green/90"
              >
                Start a conversation
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-rasta-gold px-7 py-3 text-sm font-medium text-rasta-gold transition hover:bg-rasta-gold hover:text-black"
              >
                See programmes you can support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER OPTIONS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Ways to collaborate.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70">
            Every partnership looks a bit different – but most fall somewhere in
            these spaces. Think of them as starting points for a deeper
            conversation.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {waysToSupport.map((way, index) => (
              <article
                key={way.title}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold">{way.title}</h3>
                    <span
                      className={[
                        "h-1.5 w-8 rounded-full",
                        index === 0 && "bg-rasta-green",
                        index === 1 && "bg-rasta-gold",
                        index === 2 && "bg-rasta-red",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-white/60">
                    {way.audience}
                  </p>
                  <p className="mt-3 text-xs text-white/70">
                    {way.description}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[11px] text-white/70">
                    {way.examples.map((example) => (
                      <li key={example} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-white/60" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 text-[11px] text-white/60">
                  Interested? Use the contact page to outline your idea and
                  context.
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDIVIDUAL SUPPORT */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.4fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold sm:text-2xl">
                For individuals and small collectives.
              </h2>
              <p className="text-sm text-white/70">
                You don&apos;t need a big organisation or budget to make a
                difference. Many of our most meaningful shifts start with a few
                people choosing to take action in their circles.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {individualWays.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-4 rounded-full bg-rasta-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-rasta-red/25 via-rasta-gold/20 to-rasta-green/25 px-6 py-6 text-sm text-white/85 sm:px-8 sm:py-8">
              <h3 className="text-base font-semibold sm:text-lg">
                Not sure where you fit yet?
              </h3>
              <p className="mt-3 text-sm text-white/80">
                That&apos;s okay. Send us a short message about who you are,
                where you are based, and what is tugging at your heart – we can
                explore together.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-black/80 px-6 py-2.5 text-xs font-semibold text-white shadow shadow-black/40 transition hover:bg-black"
                >
                  Use the contact page
                </Link>
                <Link
                  href="/stories"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-2.5 text-xs font-medium text-white/80 transition hover:bg-white hover:text-black"
                >
                  Explore Stories &amp; Voices
                </Link>
              </div>
              <p className="mt-4 text-[11px] text-white/75">
                We are a lean team and may not respond instantly, but we do our
                best to acknowledge every message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
