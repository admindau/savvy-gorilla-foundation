// app/(marketing)/get-involved/page.tsx
export default function GetInvolvedPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold sm:text-3xl">Get Involved</h1>
      <p className="mt-4 text-sm text-white/70">
        Whether you are an organisation, a creative, or an individual passionate
        about gender equality, youth empowerment, and digital literacy, there is
        space for you to plug in.
      </p>
      <ul className="mt-6 space-y-3 text-sm text-white/70">
        <li>• Partner with us on a specific campaign or programme.</li>
        <li>• Volunteer your skills in design, facilitation, storytelling, or tech.</li>
        <li>• Sponsor outreach activities, trainings, or production costs.</li>
      </ul>
      <p className="mt-6 text-sm text-white/70">
        For now, reach out via the contact form or email us directly to explore
        possibilities.
      </p>
    </div>
  );
}
