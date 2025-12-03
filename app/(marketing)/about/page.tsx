// app/(marketing)/about/page.tsx
import Link from "next/link";

const values = [
  {
    title: "Dignity first",
    description:
      "People are not stories or statistics. We protect names, faces, and details when needed – and always share with consent.",
  },
  {
    title: "Community-led",
    description:
      "We listen before we design. Programmes are shaped with women, girls, and youth, not dropped onto them.",
  },
  {
    title: "Pan-African lens",
    description:
      "We honour South Sudan’s story while seeing ourselves as part of a wider African struggle for liberation and joy.",
  },
  {
    title: "Digital with depth",
    description:
      "Technology is a tool, not the whole answer. We care about emotions, culture, and context as much as apps and platforms.",
  },
];

const ecosystem = [
  {
    title: "Savvy Gorilla Technologies",
    description:
      "The tech backbone – building digital tools, platforms, and data services that support African-led solutions.",
  },
  {
    title: "Savvy Rilla Studios",
    description:
      "The storytelling home – podcasts, animations, campaigns, and visual content that carry the voices of the continent.",
  },
  {
    title: "Savvy GoRilla Foundation",
    description:
      "The impact arm – connecting stories, skills, and technology to real programmes in communities.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-rasta-red/10 via-black to-black">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-6 lg:space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rasta-gold">
              About
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              From stories and screens to real, grounded impact.
            </h1>
            <p className="text-sm text-white/70 sm:text-base">
              Savvy GoRilla Foundation was born from a simple observation:
              powerful stories and clever tech mean little if they don&apos;t
              translate into safer, healthier everyday lives for people on the
              ground – especially women, girls, and young people.
            </p>
            <p className="text-sm text-white/70 sm:text-base">
              Rooted in South Sudan and connected to the wider Savvy Gorilla
              ecosystem, the foundation sits at the meeting point of gender
              equality, health, youth empowerment, and digital literacy.
            </p>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Vision block */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Our vision.
              </h2>
              <p className="text-sm text-white/70 sm:text-base">
                A continent where African youth – especially young women and
                girls – can move through digital and physical spaces with
                safety, confidence, and support.
              </p>
              <p className="text-sm text-white/70 sm:text-base">
                Where stories are not silenced or weaponised, but used to heal,
                to organise, and to build more just communities.
              </p>
            </div>

            {/* Mission card */}
            <div className="group space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black to-rasta-green/10 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.6)] transition duration-300 hover:border-rasta-gold/70 hover:shadow-[0_22px_55px_rgba(0,0,0,0.8)]">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Our mission.
              </h2>
              <p className="text-sm text-white/75">
                To connect stories, skills, and technology into practical
                programmes that:
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white/75">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-5 rounded-full bg-rasta-red transition group-hover:shadow-[0_0_20px_rgba(229,57,53,0.6)]" />
                  <span>Challenge harmful gender norms and violence.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-5 rounded-full bg-rasta-gold transition group-hover:shadow-[0_0_20px_rgba(251,192,45,0.55)]" />
                  <span>
                    Improve mental, reproductive, and everyday wellbeing.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-5 rounded-full bg-rasta-green transition group-hover:shadow-[0_0_20px_rgba(67,160,71,0.55)]" />
                  <span>Equip youth with digital and leadership skills.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-5 rounded-full bg-white transition group-hover:shadow-[0_0_16px_rgba(255,255,255,0.6)]" />
                  <span>
                    Strengthen community-led and Pan-African approaches to
                    change.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-xl font-semibold sm:text-2xl">
            What keeps us grounded.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70">
            These values guide how we design programmes, tell stories, and work
            with partners. They also guide what we say “no” to.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-rasta-gold/70 hover:bg-white/10 hover:shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
              >
                <h3 className="text-sm font-semibold">{value.title}</h3>
                <p className="mt-3 text-xs text-white/70">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-gradient-to-b from-black via-black to-rasta-green/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.4fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Part of the wider Savvy Gorilla ecosystem.
              </h2>
              <p className="text-sm text-white/70">
                The foundation does not work alone. It is one branch of a wider
                ecosystem that includes technology, storytelling, and impact
                work – all connected by a commitment to African futures.
              </p>
              <p className="text-sm text-white/70">
                This means we can move between podcasts, web platforms, data
                tools, and community spaces without losing the heart of the
                work.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-rasta-gold px-6 py-2.5 text-xs font-medium text-rasta-gold transition duration-300 hover:-translate-y-0.5 hover:bg-rasta-gold hover:text-black hover:shadow-[0_0_26px_rgba(251,192,45,0.6)]"
              >
                See how this shows up in our programmes
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ecosystem.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-rasta-gold/70 hover:bg-white/10 hover:shadow-[0_18px_40px_rgba(0,0,0,0.8)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <span
                      className={[
                        "h-1.5 w-8 rounded-full transition duration-300",
                        index === 0 && "bg-rasta-green group-hover:shadow-[0_0_20px_rgba(67,160,71,0.7)]",
                        index === 1 && "bg-rasta-red group-hover:shadow-[0_0_20px_rgba(229,57,53,0.7)]",
                        index === 2 && "bg-rasta-gold group-hover:shadow-[0_0_20px_rgba(251,192,45,0.7)]",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                  </div>
                  <p className="mt-3 text-xs text-white/70">
                    {item.description}
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
