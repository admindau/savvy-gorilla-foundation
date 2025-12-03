// app/(marketing)/work/page.tsx
import Link from "next/link";

const pillars = [
  {
    key: "gender",
    label: "Pillar 1",
    title: "Gender Equality & Safety",
    color: "bg-rasta-red",
    description:
      "We challenge harmful norms and behaviours that normalise violence against women and girls, both online and offline.",
    focusPoints: [
      "Campaigns on GBV, consent and respect",
      "Safe spaces for women and girls to speak",
      "Engaging men and boys as allies",
    ],
  },
  {
    key: "health",
    label: "Pillar 2",
    title: "Health & Wellbeing",
    color: "bg-rasta-gold",
    description:
      "We amplify conversations around mental health, reproductive health, and everyday wellbeing so people can make informed choices.",
    focusPoints: [
      "Community dialogues on mental health",
      "Access to accurate reproductive health information",
      "Story-based awareness campaigns",
    ],
  },
  {
    key: "youth",
    label: "Pillar 3",
    title: "Youth Empowerment",
    color: "bg-rasta-green",
    description:
      "We believe young Africans are already leaders. We create spaces for them to learn, organise, and lead with confidence.",
    focusPoints: [
      "Youth storytelling and leadership labs",
      "Mentorship and peer-support circles",
      "Practical tools for organising and advocacy",
    ],
  },
  {
    key: "digital",
    label: "Pillar 4",
    title: "Digital Literacy & Innovation",
    color: "bg-white",
    description:
      "We turn phones and laptops into tools for creation, not just consumption—grounded in digital safety and African realities.",
    focusPoints: [
      "Introductory digital skills trainings",
      "Online safety and digital wellbeing",
      "Experimenting with creative tech tools",
    ],
  },
];

const sampleInitiatives = [
  {
    tag: "Campaign",
    title: "16 Voices, One Matriline",
    description:
      "A storytelling series featuring women, girls, and allies speaking openly about digital violence, courage, and support.",
    pillar: "Gender Equality & Safety",
  },
  {
    tag: "Youth Circles",
    title: "Young Minds, Safe Spaces",
    description:
      "Youth-led conversations on mental health, identity, masculinity, and allyship—held in person and online.",
    pillar: "Health & Wellbeing / Youth Empowerment",
  },
  {
    tag: "Training",
    title: "Digital Basics for Community Leaders",
    description:
      "Hands-on sessions that introduce email, collaboration tools, and safe internet use for grassroots leaders and organisers.",
    pillar: "Digital Literacy & Innovation",
  },
];

const approachSteps = [
  {
    step: "01",
    title: "Listen",
    description:
      "We start with the stories, realities, and priorities of communities—especially women, girls, and young people.",
  },
  {
    step: "02",
    title: "Co-create",
    description:
      "We design programmes together with local partners, not for them. Language, timing, and content are all co-owned.",
  },
  {
    step: "03",
    title: "Support",
    description:
      "We provide tools, facilitation, and platforms—while centring local leadership and knowledge.",
  },
  {
    step: "04",
    title: "Share & Learn",
    description:
      "We document lessons, celebrate wins, and adapt. Stories and data feed back into stronger, more grounded work.",
  },
];

export default function WorkPage() {
  return (
    <div className="bg-black text-white">
      {/* TOP HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rasta-gold">
              Our Work
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Programmes rooted in community, built for African futures.
            </h1>
            <p className="text-sm text-white/70 sm:text-base">
              Savvy GoRilla Foundation works at the intersection of gender
              equality, health, youth empowerment, and digital literacy. Our
              programmes are small by design, deeply community-led, and
              intentionally Pan-African.
            </p>
            <p className="text-sm text-white/70 sm:text-base">
              Below is how we organise our work today—and how partners can walk
              alongside us.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center rounded-full bg-rasta-gold px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-rasta-gold/90"
              >
                Support a project
              </Link>
              <Link
                href="/stories"
                className="inline-flex items-center justify-center rounded-full border border-rasta-green px-7 py-3 text-sm font-medium text-rasta-green transition hover:bg-rasta-green hover:text-black"
              >
                Explore stories &amp; voices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS GRID */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Four pillars, one liberation story.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                Each pillar is connected. Work in one area strengthens the
                others. Together, they build safer, healthier, more digital
                futures in Africa—starting from South Sudan.
              </p>
            </div>
            <p className="text-xs text-white/60">
              Colour bars show how each pillar is represented in our programmes.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.key}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
                        {pillar.label}
                      </p>
                      <h3 className="mt-1 text-sm font-semibold">
                        {pillar.title}
                      </h3>
                    </div>
                    <span
                      className={`h-1.5 w-12 rounded-full ${pillar.color}`}
                    />
                  </div>
                  <p className="mt-3 text-xs text-white/70">
                    {pillar.description}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[11px] text-white/70">
                    {pillar.focusPoints.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-white/60" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 text-[11px] text-white/50">
                  Designed with communities; refined through practice.
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE INITIATIVES */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Current and emerging initiatives.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                These examples show how the pillars come alive in real spaces—
                online, in communities, and through partnerships with youth
                groups, women&apos;s collectives, and institutions.
              </p>
            </div>
            <p className="text-xs text-white/60">
              More details and stories will appear as programmes grow.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {sampleInitiatives.map((item) => (
              <article
                key={item.title}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-black/70 p-5"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rasta-gold">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-3 text-xs text-white/70">
                    {item.description}
                  </p>
                </div>
                <p className="mt-4 text-[11px] text-white/60">
                  Pillars: {item.pillar}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold sm:text-2xl">
                How we work with partners.
              </h2>
              <p className="text-sm text-white/70">
                Savvy GoRilla Foundation is intentionally lean. We work with
                partners who are close to communities—and bring facilitation,
                storytelling, and digital tools to the table.
              </p>
              <p className="text-sm text-white/70">
                Whether you are a grassroots group, NGO, UN agency, or private
                sector partner, our approach keeps dignity, agency, and safety
                at the centre.
              </p>
              <div className="mt-4 rounded-3xl border border-white/15 bg-gradient-to-r from-rasta-red/25 via-rasta-gold/20 to-rasta-green/25 px-5 py-4 text-xs text-white/80">
                <p className="font-semibold">
                  Looking to collaborate or sponsor a programme?
                </p>
                <p className="mt-2">
                  Start with a conversation. Share the communities you work
                  with, the challenges you see, and the resources you can bring.
                  We&apos;ll explore if there is a fit—and if not, we&apos;ll
                  still try to point you in the right direction.
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center justify-center rounded-full bg-rasta-green px-5 py-2 text-[11px] font-semibold text-black shadow shadow-black/40 transition hover:bg-rasta-green/90"
                  >
                    Partner with us
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-rasta-gold px-5 py-2 text-[11px] font-medium text-rasta-gold transition hover:bg-rasta-gold hover:text-black"
                  >
                    Contact the team
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {approachSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
                      Step {step.step}
                    </span>
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
                  <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
                  <p className="mt-2 text-xs text-white/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
