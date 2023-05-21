import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";
import { getPostListings } from "~/models/post.server";
import { json } from "@remix-run/node";
import { requireUser, requireUserId } from "~/session.server";
import { useOptionalUser } from "~/utils";
import { useUser } from "~/utils";
import { motion } from "framer-motion";
import dashboard from "dashboard.jpg"

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUser(request);
  const userId = await requireUserId(request);

  return json<LoaderData>({ posts: await getPostListings({ userId: userId }) });
};

export default function UserRoute() {
  const user = useOptionalUser();
  const { posts } = useLoaderData() as LoaderData;
  const username = useUser();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const imageHeight = 300; // Desired height value

  // Function to handle height changes
 

  return (
    <div className="flex-col">
      <header className="flex flex-col md:flex-row items-center justify-between bg-teal-400 p-4 text-white">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">
          <Link to=".">Dashboard</Link>
        </h1>

        <button
          type="submit"
          className="hover: mt-2 rounded bg-indigo-900 py-2 px-4 mb-4 md:mb-0 font-bold text-white text-white hover:bg-black active:bg-black"
        >
          <Link to="/map" className="text-md text-white-600">
            Map Journey
          </Link>
        </button>

        <button
          type="submit"
          className="mt-2 rounded bg-indigo-900 py-2  mb-4 md:mb-0 px-4 font-bold text-white hover:bg-black hover:text-white active:bg-black"
        >
          <Link to="/notes" className="text-md text-white-600">
            Notes
          </Link>
        </button>
        <button
          type="submit"
          className="hover: mt-2 rounded bg-indigo-900 mb-4 md:mb-0  py-2 px-4 font-bold  text-white hover:bg-black active:bg-black"
        >
          <Link to="/jobappnotes" className="text-md text-white-600">
            Job App Notes
          </Link>
        </button>

        <button
          type="submit"
          className="mt-2 rounded bg-indigo-900 mb-4 md:mb-0 py-2 px-4 font-bold text-white hover:bg-black hover:text-white active:bg-black"
        >
          <Link to="/posts" className="text-md text-white-600">
            Blog Posts
          </Link>
        </button>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="m-2 rounded bg-indigo-900 py-2 px-4 font-bold text-white hover:bg-black hover:text-white active:bg-black"
          >
            Logout
          </button>
        </Form>
        <p className="font-medium hidden md:block">{username.email}</p>
      </header>
      <section className="mx-auto mt-4 mb-2 rounded bg-[#F3F4F6] pt-0 pb-0 lg:pt-[0px] lg:pb-0">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-full xl:w-full">
              <div className="overflow-hidden rounded-lg bg-white">
                <img
                  src={dashboard}
                  alt="image"
                  className="w-full  h-28"
                />

                <div className="-lg bg-opacity-78  mx-auto mb-10  max-w-screen-xl flex-col space-y-6 overflow-hidden rounded-b-xl bg-gradient-to-r from-teal-400 to-white p-6 font-bold text-black shadow-md">
                  {user ? (
                    <motion.ul
                      variants={container}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.li variants={item}>
                        <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
                          {" "}
                          {`${user?.email} Job Posts`}
                        </h1>
                      </motion.li>
                    </motion.ul>
                  ) : null}
                  <div className="grid grid-cols-4 gap-6 ">
                    <nav className="from indigo-700 to purple-600 col-span-4 mb-auto flex w-full  rounded rounded bg-gray-900 bg-gradient-to-br px-5 shadow-lg md:col-span-1">
                      <ol className="mx-4 mr-4 list-decimal text-lg font-bold text-white ">
                        {user
                          ? posts.map((post) => (
                              <div className="curser-pointer hover:scale-102  my-4 rounded bg-custom-spaceBlack text-center transition duration-300 ease-in-out  hover:transform hover:bg-white">
                                <li key={post.slug} className="my-2 ">
                                  <Link
                                    to={post.slug}
                                    className="px-2 text-xl  font-bold  text-white hover:text-black"
                                  >
                                    {post.title}
                                  </Link>
                                </li>
                              </div>
                            ))
                          : null}
                      </ol>
                    </nav>

                    <main className="col-span-4 md:col-span-3">
                      <Outlet />
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-red-500">
      Oh no, something went wrong!
      <pre>{error.message}</pre>
    </div>
  );
}
