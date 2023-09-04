import { Form, Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPostListings } from "~/models/post.server";
import { useOptionalUser } from "~/utils";
import { requireUserId } from "~/session.server";
import { useState } from "react";
import { useUser } from "~/utils";
import { motion } from "framer-motion";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const posts = await getPostListings({ userId: userId });
  return json<LoaderData>({ posts });
};

const variants = {
  open: { opacity: 1, y: "30%" },
  closed: { opacity: 1, x: "0%" },
};

export default function PostsRoute() {
  const { posts } = useLoaderData() as LoaderData;

  const user = useOptionalUser();
  const username = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <main>
      <div className="flex h-full min-h-screen flex-col">
        <header className="flex flex-col items-center justify-between bg-teal-400 p-4 text-white md:flex-row">
          <h1 className="mb-4 text-3xl font-bold md:mb-0">
            <Link to=".">Job Posts</Link>
          </h1>
          <div className="flex flex-col md:flex-row">
            <button className="sm:hidden">
              {" "}
              {user ? (
                <Link
                  to="/posts/user"
                  className="mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0"
                >
                  Dashboard
                </Link>
              ) : null}
            </button>
            <button className="sm:hidden">
              {" "}
              {user ? (
                <Link
                  to="/map"
                  className="mb-4  mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0"
                >
                  Map Journey
                </Link>
              ) : null}
            </button>
            <button className="sm:hidden">
              {" "}
              {user ? (
                <Link
                  to="/notes"
                  className="mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0"
                >
                  Notes
                </Link>
              ) : null}
            </button>
            <button className="sm:hidden">
              {" "}
              {user ? (
                <Link
                  to="/jobappnotes"
                  className="mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0"
                >
                  Job App Notes
                </Link>
              ) : null}
            </button>
            <Form action="/logout" method="post">
              <button
                type="submit"
                className="m-2  mr-4 rounded bg-white px-4 py-2 font-medium text-black hover:bg-black hover:text-white active:bg-black"
              >
                Logout
              </button>
            </Form>
            <p className=" ml-4 hidden font-medium text-white md:hidden">
              {username.email}
            </p>
          </div>
        </header>

        <div
          className="max-w-screen-3xl my-14 flex w-full flex-col items-center rounded bg-gradient-to-r from-indigo-900  
        to-white px-4 py-6"
        >
          <motion.ul variants={container} initial="hidden" animate="show">
            <motion.li>
              {" "}
              <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={variants}
              >
                <div
                  className="flex-col-2 mt-4 flex flex w-full max-w-3xl items-center space-y-1 rounded-lg bg-white px-4 py-6 text-center shadow-lg"
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  <div className="flex-col-2 mt-4  flex space-y-1 hover:cursor-pointer">
                    <details className="group">
                      <summary className="flex items-center rounded-md  bg-gray-700 px-2 py-2 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>

                        <span className="ml-3 text-sm font-medium">
                          Job Posts
                        </span>

                        <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <ol className="m-2 list-decimal">
                        {posts.map((post) => (
                          <li key={post.slug}>
                            <div className="flex items-center">
                              <Link
                                to={post.slug}
                                prefetch="intent"
                                className="text-black-600 font-bold underline"
                              >
                                {post.title}
                              </Link>
                              :{" "}
                              <em
                                className="ml-1 rounded-sm bg-gray-100 p-1 text-center font-bold "
                                style={{
                                  color:
                                    post.appStatus === "Applied"
                                      ? "blue"
                                      : post.appStatus === "Interviewing"
                                      ? "orange"
                                      : post.appStatus === "Hired"
                                      ? "green"
                                      : post.appStatus === "Not-selected"
                                      ? "red"
                                      : "",
                                }}
                              >
                                {post.appStatus}
                              </em>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </details>
                  </div>
                </div>
              </motion.nav>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </main>
  );
}
