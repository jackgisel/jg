import Link from "next/link";

const Blog = (props) => {
  return (
    <>
      <h1 className="text-center italic font-bold uppercase text-6xl half_background mb-6">
        Blog
      </h1>
      <div className="flex justify-center">
        <div className="flex-1 flex flex-col max-w-xl">
          {props.blogs?.map((blog, idx) => {
            return (
              <li key={blog.id}>
                <Link href={`/blog/${blog.slug}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}

export default Blog;
