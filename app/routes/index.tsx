import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

import { json, redirect } from "@remix-run/node";
import { useOptionalUser } from "~/utils";
import { useEffect, useState } from "react";
import { loginImages } from "../loginImages";
import { getUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/");
  }

  return json({});
};

export interface loginInfo {
  src: string;
  alt: string;
}

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * loginImages.length);
  return loginImages[randomIndex];
}

export default function Index() {
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
  };

  const [randomImage, setRandomImage] = useState<loginInfo>();

  useEffect(() => {
    const image = getRandomImage();
    setRandomImage(image);
  }, []);

  const user = useOptionalUser();
  return (
    <>
      <main className="relative flex min-h-screen items-center justify-center overflow-y-auto bg-white sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className=" absolute inset-0">
                {randomImage && (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: imageLoading ? 0 : 1,
                    }}
                    transition={{ delay: 0, duration: 2 }}
                    onLoad={imageLoaded}
                    src={randomImage.src}
                    alt={randomImage.alt}
                    className="h-full w-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-teal-400 mix-blend-multiply"></div>
              </div>

              <div className=" lg:pb-18 relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pt-32">
                <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                  <span className="block uppercase text-white drop-shadow-md">
                    Job Journey
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                  Document your journey to finding that new job you have been
                  dreaming of, chasing and seeking after. Build a road map and
                  see how far you have come!
                </p>
                <div className="z-10 mx-auto mt-10  max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  {user ? (
                    <Link
                      to="/posts/user"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-black hover:text-white sm:px-8"
                    >
                      View Dashboard for {user.email}
                    </Link>
                  ) : (
                    <div className="sm:mx- space-y-4 sm:flex sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link
                        to="/join"
                        className="hover:bg-custom-spaceBlack mb-4 mr-4 flex  items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-teal-400 shadow-sm hover:text-white sm:mb-0 sm:flex-shrink-0 sm:px-8 sm:py-0"
                      >
                        Sign up
                      </Link>
                      <Link
                        to="/login"
                        className=" bg-custom hover:bg-custom-spaceBlack mb-4 mr-4  flex items-center justify-center rounded-md px-4 py-3 font-medium text-white sm:mb-0 sm:flex-shrink-0 sm:py-0"
                      >
                        Log In
                      </Link>
                
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
