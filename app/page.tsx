// app/page.tsx
import Link from "next/link";

const pillars = [
  {
    title: "Gender Equality & Safety",
    description:
      "Campaigns and conversations that challenge harmful norms and promote safer spaces for women and girls, online and offline.",
  },
  {
    title: "Health & Wellbeing",
    description:
      "Community awareness on mental health, reproductive health, and everyday wellbeing so people can make informed choices.",
  },
  {
    title: "Youth Empowerment",
    description:
      "Platforms for young Africans to learn, lead, and create—from storytelling labs to leadership and life-skills sessions.",
  },
  {
    title: "Digital Literacy & Innovation",
    description:
      "Practical digital skills and safe internet use, turning phones and laptops into tools for creation, not just consumption.",
  },
];

const initiatives = [
  {
    label: "Campaign",
    title: "16 Voices, One Matriline",
    description:
      "A storytelling series unpacking digital violence, resilience, and solidarity across generations of African women.",
  },
  {
    label: "Programme",
    title: "Young Minds, Safe Spaces",
    description:
      "Youth circles that hold space for honest talks on mental health, GBV, identity, and navigating social media.",
  },
  {
    label: "Training",
    title: "Digital Basics for Community Leaders",
    description:
      "Hands-on sessions introducing email, online safety, and collaboration tools to grassroots leaders and organisers.",
  },
];

const impactStats = [
  { label: "Youth reached (and counting)", value: "150+" },
  { label: "Community dialogues held", value: "10+" },
  { label: "Core focus areas", value: "4" },
  { label: "Partner organisations engaged", value: "X" },
];

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section
        className="border-b border-white/10 soft-rasta-bg"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] lg:items-center">
            <div className="space-y-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rasta-gold">
                Savvy GoRilla Foundation
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Building safer, healthier, more digital futures in Africa.
              </h1>
              <p className="max-w-xl text-sm text-white/70 sm:text-base">
                We support community-led initiatives in gender equality, health
                awareness, youth empowerment, and digital literacy—starting in
                South Sudan and reaching across the continent. Stories, skills,
                and technology working together for social impact.
              </p>

              {/* HERO CTAS */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center rounded-full bg-rasta-gold px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-rasta-gold/90"
                >
                  Support a project
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full border border-rasta-green px-7 py-3 text-sm font-medium text-rasta-green transition hover:bg-rasta-green hover:text-black"
                >
                  Explore our work
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-white/60">
                <span className="text-rasta-red">Gender equality.</span>
                <span className="text-rasta-gold">Youth voices.</span>
                <span className="text-rasta-green">Digital literacy.</span>
                <span>Pan-African impact.</span>
              </div>
            </div>

            {/* Focus pillars card with subtle Rasta gradient */}
            <div
              className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-b from-rasta-red/10 via-black to-rasta-green/10 p-6 backdrop-blur-md"
              data-animate="fade-up"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Focus pillars
              </p>
              <div className="space-y-4">
                {pillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="card-hover rounded-2xl border border-white/10 bg-black/70 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">{pillar.title}</h3>
                      <span
                        className={[
                          "h-1.5 w-10 rounded-full",
                          index === 0 && "bg-rasta-red",
                          index === 1 && "bg-rasta-gold",
                          index === 2 && "bg-rasta-green",
                          index === 3 && "bg-white",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      />
                    </div>
                    <p className="mt-2 text-xs text-white/70">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-white/60">
                Grounded in South Sudan. Rooted in Africa&apos;s liberation
                story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED INITIATIVES */}
      <section className="border-b border-white/10" data-animate="fade-up">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Initiatives at the heart of our work.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/70">
                From storytelling campaigns to youth spaces and digital skills
                trainings, each initiative responds to real needs raised by the
                communities we work with.
              </p>
            </div>
            <Link
              href="/work"
              className="text-sm font-medium text-rasta-gold underline underline-offset-4"
            >
              View all focus areas
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="card-hover flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rasta-gold">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs text-white/70">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 text-xs text-white/60">
                  Coming soon: impact notes &amp; stories from the field.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SNAPSHOT */}
      <section className="border-b border-white/10" data-animate="fade-up">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Early impact &amp; growing reach.
              </h2>
              <p className="mt-3 max-w-lg text-sm text-white/70">
                These numbers are placeholders you can keep updating as the
                foundation grows—capturing youth reached, dialogues held, and
                partnerships formed.
              </p>
            </div>
          </div>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-hover rounded-3xl border border-white/10 bg-black/70 p-5"
              >
                <dt className="flex items-center justify-between text-xs text-white/60">
                  <span>{stat.label}</span>
                  <span
                    className={[
                      "h-1.5 w-6 rounded-full",
                      index === 0 && "bg-rasta-green",
                      index === 1 && "bg-rasta-gold",
                      index === 2 && "bg-rasta-red",
                      index === 3 && "bg-white",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  />
                </dt>
                <dd className="mt-3 text-2xl font-semibold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* VOICES FROM THE COMMUNITY */}
      <section className="border-b border-white/10" data-animate="fade-up">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Stories &amp; voices.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/70">
                We believe change starts when people feel safe enough to speak.
                Our campaigns and podcasts amplify lived experiences while
                protecting dignity and privacy.
              </p>
            </div>
            <Link
              href="/stories"
              className="text-sm font-medium text-rasta-gold underline underline-offset-4"
            >
              Explore stories
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="card-hover rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rasta-gold">
                Digital safety
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                “I thought it was just online… until it changed how I saw
                myself.”
              </h3>
              <p className="mt-3 text-xs text-white/70">
                A young woman from Juba shares how constant online harassment
                shaped her confidence—and what changed when she found a
                supportive community willing to listen.
              </p>
            </article>

            <article className="card-hover rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rasta-gold">
                Youth &amp; mental health
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                “We were told to be strong. No one taught us how to be honest.”
              </h3>
              <p className="mt-3 text-xs text-white/70">
                A youth circle reflection on masculinity, emotions, and what it
                means for young men to stand as allies against GBV in their
                communities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section data-animate="fade-up">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="card-hover flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/15 bg-gradient-to-r from-rasta-red/20 via-rasta-gold/15 to-rasta-green/20 px-6 py-8 sm:flex-row sm:items-center sm:px-10">
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
                className="inline-flex items-center justify-center rounded-full bg-rasta-green px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-rasta-green/90"
              >
                Get involved
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-rasta-gold px-7 py-3 text-sm font-medium text-rasta-gold transition hover:bg-rasta-gold hover:text-black"
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
