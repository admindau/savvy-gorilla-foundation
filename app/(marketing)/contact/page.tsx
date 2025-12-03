// app/(marketing)/contact/page.tsx
import Link from "next/link";

const contactBlocks = [
  {
    title: "General enquiries",
    description:
      "Questions about the foundation, our programmes, or how we work.",
    note: "Include your name, organisation (if any), and where you are based.",
  },
  {
    title: "Partnerships & funding",
    description:
      "Ideas for collaboration, sponsorship, or co-designed programmes.",
    note: "Share a short summary of your idea, timelines, and who it will serve.",
  },
  {
    title: "Media & storytelling",
    description:
      "Requests for interviews, podcast features, or speaking engagements.",
    note: "Let us know your platform, topic, and suggested dates.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rasta-gold">
              Contact
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s start with a conversation.
            </h1>
            <p className="text-sm text-white/70 sm:text-base">
              Savvy GoRilla Foundation is intentionally small and hands-on. The
              best way to reach us is through a clear, thoughtful message –
              we&apos;ll respond as soon as we can and let you know the next
              steps.
            </p>
            <p className="text-sm text-white/70 sm:text-base">
              As the foundation grows, this page can evolve into a full contact
              form. For now, it gives people a simple, respectful way to get in
              touch.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.4fr)] lg:items-start">
            {/* Instructions */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold sm:text-2xl">
                How to reach us.
              </h2>
              <p className="text-sm text-white/70">
                For now, the easiest way to contact the foundation is by email.
                You can use one address and simply add a clear subject line such
                as “Partnership idea – youth circles” or “Story proposal –
                16 Voices”.
              </p>

              <div className="mt-4 rounded-3xl border border-white/15 bg-white/5 p-5 text-sm text-white/85">
                <p className="font-semibold">Primary contact email</p>
                <p className="mt-2 text-sm text-rasta-gold">
                  {/* Replace this placeholder with your real address when ready */}
                  foundation@savvygorilla.tech
                </p>
                <p className="mt-3 text-xs text-white/70">
                  This is a placeholder. When you are ready, replace it with the
                  official foundation email and update it across your channels.
                </p>
              </div>

              <p className="text-xs text-white/60">
                Please avoid sending sensitive personal details or full case
                histories by email. If a situation requires more detailed
                follow-up, we will propose a safer channel.
              </p>
            </div>

            {/* Blocks */}
            <div className="space-y-4">
              {contactBlocks.map((block, index) => (
                <div
                  key={block.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold">{block.title}</h3>
                    <span
                      className={[
                        "h-1.5 w-8 rounded-full",
                        index === 0 && "bg-rasta-gold",
                        index === 1 && "bg-rasta-green",
                        index === 2 && "bg-rasta-red",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                  </div>
                  <p className="mt-2 text-xs text-white/75">
                    {block.description}
                  </p>
                  <p className="mt-3 text-[11px] text-white/60">
                    {block.note}
                  </p>
                </div>
              ))}

              <div className="rounded-3xl border border-white/15 bg-black/70 p-5 text-xs text-white/75">
                <p className="font-semibold">Safeguarding &amp; concerns</p>
                <p className="mt-2">
                  If your message relates to safety, harassment, or
                  safeguarding, please mention this clearly in the subject line.
                  We will prioritise reading these messages.
                </p>
              </div>
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
                Ready to reach out?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                Share who you are, the community you&apos;re thinking about, and
                what you hope we can explore together. Even if the timing isn&apos;t
                right yet, your message helps shape where we go next.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center rounded-full bg-rasta-green px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-rasta-green/90"
              >
                See ways to get involved
              </Link>
              <Link
                href="/stories"
                className="inline-flex items-center justify-center rounded-full border border-white/80 px-7 py-3 text-sm font-medium text-white/85 transition hover:bg-white hover:text-black"
              >
                Explore Stories &amp; Voices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
