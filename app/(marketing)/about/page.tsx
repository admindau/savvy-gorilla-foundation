// app/(marketing)/about/page.tsx
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold sm:text-3xl">
        About Savvy GoRilla Foundation
      </h1>
      <p className="mt-4 text-sm text-white/70">
        Savvy GoRilla Foundation is the social impact arm of Savvy Gorilla
        Technologies. We exist to translate tech, storytelling, and strategy
        into real change for communities across Africa—starting in South Sudan.
      </p>
      <p className="mt-4 text-sm text-white/70">
        Our vision is a continent where young Africans, especially women and
        girls, live in dignity, safety, and health, and have the digital skills
        to shape their own futures. We work through campaigns, trainings, and
        collaborations that centre lived experience and community leadership.
      </p>
    </div>
  );
}
