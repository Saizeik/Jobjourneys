import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import { useRevalidator } from "react-router-dom";

import { useEffect, useState } from "react";

import { animateScroll as scroll } from "react-scroll";
import type { LoaderFunction } from "@remix-run/node";
import { getPostListings } from "~/models/post.server";
import { json } from "@remix-run/node";
import { requireUser, requireUserId } from "~/session.server";
import { useOptionalUser } from "~/utils";
import { useUser } from "~/utils";
import { motion } from "framer-motion";

import { images } from "../../images.js";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUser(request);
  const userId = await requireUserId(request);

  return json<LoaderData>({ posts: await getPostListings({ userId: userId }) });
};

export interface ImageInfo {
  src: string;
  alt: string;
}

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

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
  const [randomImage, setRandomImage] = useState<ImageInfo>();
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
  };

  useEffect(() => {
    const image = getRandomImage();
    setRandomImage(image);
  }, []);

  function WindowFocusRevalidator() {
    let revalidator = useRevalidator();

    return <div hidden={revalidator.state === "idle"}></div>;
  }

  return (
    <div className="flex-col sm:overflow-x-hidden">
      <header className="flex flex-col items-center justify-between bg-teal-400 p-4 text-white sm:hidden md:flex-row">
        <h1 className="mb-4 text-3xl font-bold md:mb-0">
          <Link to=".">Dashboard</Link>
        </h1>
        <div className="flex flex-col  md:flex-row">
          <button
            type="submit"
            className="hover: mb-4 mr-4 mt-2 rounded bg-indigo-900 px-4 py-2 font-bold text-white text-white hover:bg-black active:bg-black sm:hidden md:mb-0"
          >
            <Link to="/map" className="text-md text-white-600">
              Map Journey
            </Link>
          </button>

          <button
            type="submit"
            className="mb-4 mr-4 mt-2  rounded bg-indigo-900  px-4 py-2 font-bold text-white hover:bg-black hover:text-white active:bg-black sm:hidden md:mb-0"
          >
            <Link to="/notes" className="text-md text-white-600">
              Notes
            </Link>
          </button>
          <button
            type="submit"
            className="hover: mb-4 mr-4 mt-2  rounded bg-indigo-900 px-4  py-2 font-bold text-white  hover:bg-black active:bg-black sm:hidden md:mb-0"
          >
            <Link to="/jobappnotes" className="text-md text-white-600">
              Job App Notes
            </Link>
          </button>

          <button
            type="submit"
            className="mb-4 mr-4 mt-2 rounded bg-indigo-900 px-4 py-2 font-bold text-white hover:bg-black hover:text-white active:bg-black sm:hidden md:mb-0"
          >
            <Link to="/posts" className="text-md text-white-600">
              Job Posts
            </Link>
          </button>
          <Form action="/logout" method="post">
            <button
              type="submit"
              className=" m-2 rounded bg-indigo-900 px-4 py-2 font-bold text-white hover:bg-black hover:text-white active:bg-black md:mb-0"
            >
              Logout
            </button>
          </Form>
          <p className="hidden font-medium md:hidden">{username.email}</p>
        </div>
      </header>
      <section className="mx-auto mb-6 mt-4 rounded bg-[#F3F4F6] pb-0 pt-0 lg:pb-0 lg:pt-[0px]">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-full xl:w-full">
              <div className="overflow-hidden rounded-lg bg-white">
                {randomImage && (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: imageLoading ? 0 : 1,
                    }}
                    onLoad={imageLoaded}
                    transition={{ delay: 0, duration: 1 }}
                    src={randomImage.src}
                    alt={randomImage.alt}
                    className="h-full w-full"
                  />
                )}
                <div className="-lg bg-opacity-78  mx-auto mb-10  max-w-screen-xl flex-col space-y-6 overflow-hidden rounded-b-xl bg-gradient-to-r from-teal-400 to-white p-6 font-bold text-black shadow-md">
                  {user ? (
                    <motion.ul
                      variants={container}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.li variants={item}>
                        <h1 className="font-primary my-6 mb-2 border-b-2 text-center text-3xl">
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
                              <div className="curser-pointer hover:scale-102  bg-custom-spaceBlack my-4 rounded text-center transition duration-300 ease-in-out  hover:transform">
                                <li key={post.slug} className="my-2 ">
                                  <Link
                                    to={post.slug}
                                    className="px-2 text-xl  font-bold  text-white "
                                    onClick={WindowFocusRevalidator}
                                  >
                                    {post.title}
                                  </Link>
                                </li>
                              </div>
                            ))
                          : null}
                        <div className="my-2 mb-4 "></div>
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
