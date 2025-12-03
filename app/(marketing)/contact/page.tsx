// app/(marketing)/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold sm:text-3xl">Contact</h1>
      <p className="mt-4 text-sm text-white/70">
        Let&apos;s talk partnerships, campaigns, or ideas. Share a bit about who
        you are and how you&apos;d like to collaborate.
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="block text-xs font-medium text-white/70">
            Name
          </label>
          <input
            className="mt-1 w-full rounded-xl border border-white/20 bg-black px-3 py-2 text-sm text-white outline-none focus:border-white/60"
            type="text"
            name="name"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-white/70">
            Email
          </label>
          <input
            className="mt-1 w-full rounded-xl border border-white/20 bg-black px-3 py-2 text-sm text-white outline-none focus:border-white/60"
            type="email"
            name="email"
            placeholder="you@example.org"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-white/70">
            Organisation (optional)
          </label>
          <input
            className="mt-1 w-full rounded-xl border border-white/20 bg-black px-3 py-2 text-sm text-white outline-none focus:border-white/60"
            type="text"
            name="organisation"
            placeholder="Organisation or initiative"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-white/70">
            Message
          </label>
          <textarea
            className="mt-1 w-full rounded-xl border border-white/20 bg-black px-3 py-2 text-sm text-white outline-none focus:border-white/60"
            name="message"
            rows={5}
            placeholder="How would you like to collaborate?"
          />
        </div>
        <button
          type="submit"
          className="rounded-full border border-white bg-white px-6 py-2 text-sm font-medium text-black hover:bg-black hover:text-white"
        >
          Send message
        </button>
      </form>

      <p className="mt-6 text-xs text-white/60">
        Form wiring (email / backend) can be added later. For now this is a
        static placeholder.
      </p>
    </div>
  );
}
