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
      <section className="border-b border-white/10 section-fade">
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
                className="inline-flex items-center justify-center rounded-full bg-rasta-green px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:bg-rasta-green/90"
              >
                Start a conversation
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-rasta-gold px-7 py-3 text-sm font-medium text-rasta-gold transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:bg-rasta-gold hover:text-black"
              >
                See programmes you can support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER OPTIONS */}
      <section className="border-b border-white/10 section-fade section-delay-1">
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
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 transition-transform transition-colors duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
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
      <section className="border-b border-white/10 section-fade section-delay-2">
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

            <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-rasta-red/25 via-rasta-gold/20 to-rasta-green/25 px-6 py-6 text-sm text-white/85 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] transition-shadow transition-transform duration-300 sm:px-8 sm:py-8 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] hover:-translate-y-1">
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
                  className="inline-flex items-center justify-center rounded-full bg-black/80 px-6 py-2.5 text-xs font-semibold text-white shadow shadow-black/40 transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:bg-black"
                >
                  Use the contact page
                </Link>
                <Link
                  href="/stories"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-2.5 text-xs font-medium text-white/80 transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
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

      {/* DONATION / SUPPORT STRIP */}
      <section className="border-b border-white/10 section-fade section-delay-3">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/15 bg-gradient-to-r from-rasta-red/20 via-rasta-gold/15 to-rasta-green/20 px-6 py-8 shadow-[0_0_0_1px_rgba(0,0,0,0.5)] transition-shadow transition-transform duration-300 sm:flex-row sm:items-center sm:px-10 hover:shadow-[0_0_40px_rgba(0,0,0,0.9)] hover:-translate-y-1">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold sm:text-xl">
                Support the work financially.
              </h2>
              <p className="max-w-xl text-sm text-white/80">
                If you’d like to contribute directly to Savvy GoRilla
                Foundation, you can start with a simple transfer. As the
                foundation grows, this section can evolve into a full donations
                page or online giving platform.
              </p>
              <div className="mt-3 rounded-2xl border border-white/20 bg-black/60 p-4 text-xs text-white/80">
                <p className="font-semibold">Bank / mobile money details</p>
                <p className="mt-2 text-white/70">
                  Replace these placeholders with your official details when
                  ready:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    Account name:{" "}
                    <span className="text-white">
                      Savvy GoRilla Foundation
                    </span>
                  </li>
                  <li>
                    Bank:{" "}
                    <span className="text-white/70">[Your bank name here]</span>
                  </li>
                  <li>
                    Account number / IBAN:{" "}
                    <span className="text-white/70">[To be added]</span>
                  </li>
                  <li>
                    Mobile money:{" "}
                    <span className="text-white/70">
                      [MTN / Zain details, if applicable]
                    </span>
                  </li>
                  <li>
                    Reference:{" "}
                    <span className="text-white/70">“Foundation support”</span>
                  </li>
                </ul>
                <p className="mt-3 text-[11px] text-white/60">
                  Once these details are confirmed, you can also share them in
                  your email signatures, social media, and campaign materials.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-xs text-white/80">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">
                Transparency
              </p>
              <p>
                We aim to keep finances simple and accountable. Donors can
                request a brief summary of how funds are used across campaigns
                and programmes.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-rasta-green px-7 py-3 text-xs font-semibold text-black shadow-lg shadow-black/40 transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:bg-rasta-green/90"
              >
                Ask about funding or reporting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="section-fade section-delay-4">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/15 bg-gradient-to-r from-rasta-red/20 via-rasta-gold/15 to-rasta-green/20 px-6 py-8 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] transition-shadow transition-transform duration-300 sm:flex-row sm:items-center sm:px-10 hover:shadow-[0_0_40px_rgba(0,0,0,0.9)] hover:-translate-y-1">
            <div>
              <h2 className="text-lg font-semibold sm:text-xl">
                Ready to support community-led change?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                Partner with us, sponsor a campaign, or share your skills. From
                storytelling to digital training, there&apos;s always room at
                the table.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center rounded-full bg-rasta-green px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:bg-rasta-green/90"
              >
                Get involved
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-rasta-gold px-7 py-3 text-sm font-medium text-rasta-gold transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:bg-rasta-gold hover:text-black"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
