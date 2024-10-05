import Head from "next/head";

export default function ProjectSlug({ slug }) {
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>

      <div className="projectslug">
        {/* render project details here */}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  // fetch data for the project with the given slug
  // ...
  return {
    props: { slug },
  };
}
