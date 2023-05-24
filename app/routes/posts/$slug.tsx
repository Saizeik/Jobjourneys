import { marked } from "marked";
import { Link, Form } from "@remix-run/react";
import { useUser } from "~/utils";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { json } from "@remix-run/node";
import { getPost } from "~/models/post.server";
import invariant from "tiny-invariant";

type LoaderData = {
  title: string;

  newDate: string;
  address: string;
  html: string;
  jobAppLink: string;
  appStatus: string | null;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  invariant(slug, "slug is required");
  const post = await getPost(slug);
  invariant(post, `post not found: ${slug}`);
  const html = marked(post.markdown);
  const date = post.date;
  const formattedDate = date.split("-");
  const newDate =
    formattedDate[1] + "-" + formattedDate[2] + "-" + formattedDate[0];
  return json<LoaderData>({
    title: post.title,
    newDate,
    address: post.address,
    html,
    jobAppLink: post.jobAppLink,
    appStatus: post.appStatus,
  });
};

export default function PostsRoute() {
  const user = useOptionalUser();
  const username = useUser();
  const { title, newDate, address, html, jobAppLink, appStatus } =
    useLoaderData() as LoaderData;
  return (
    <main className=" flex h-full min-h-screen flex-col">
      <header className="flex flex-col items-center justify-between bg-teal-400 p-4 text-white md:flex-row">
        <h1 className="mb-4 text-3xl font-bold md:mb-0">
          <Link to=".">Post</Link>
          {`${" "}`}
          {title}
        </h1>
        <button className="sm:hidden">
          {" "}
          {user ? (
            <Link
              to="/notes"
              className="mb-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-3 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0"
            >
              View Notes
            </Link>
          ) : null}
        </button>
        <button className="sm:hidden">
          {user ? (
            <Link
              to="/posts"
              className="mb-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-3 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0"
            >
              View Posts
            </Link>
          ) : null}
        </button>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="m-2 rounded bg-white px-4 py-2 font-medium text-black hover:bg-black hover:text-white active:bg-black"
          >
            Logout
          </button>
        </Form>
        <p>{username.email}</p>
      </header>
      <div className="bg-custom-newColor dark mx-auto  max-w-2xl rounded-lg">
        <div className=" p-6 text-center font-bold text-white">
          <article>
            <h1 className="my-6 border-b-2 text-center text-3xl font-bold">
              {title}
            </h1>
            <p className="my-6  text-center text-2xl font-bold text-blue-400">
              Date Applied: {`${" "}`}
              {`${newDate}`}
            </p>
            <p className="text-md my-6 text-center font-bold text-blue-300">
              Status: {`${" "}`}
              {`${appStatus}`}
            </p>
            <p className="my-6 text-center text-xl font-bold text-blue-200">
              Address: {`${" "}`}
              {`${address}`}
            </p>

            <a
              href={`${jobAppLink}`}
              className="my-6 text-center text-lg font-bold  text-white"
              target="_blank"
            >
              Go to Application Website {`${" "}`}
            </a>
            <p className="mt-4 ">
              <div
                className="prose lg:prose-xl text-blue-300"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
