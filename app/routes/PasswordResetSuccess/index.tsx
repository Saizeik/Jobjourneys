import { toast, Toaster } from "react-hot-toast";

import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { getUserId } from "~/session.server";
import { getUserByEmail, updatePassword } from "~/models/user.server";
import { loginImages } from "../../loginImages";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export interface loginInfo {
  src: string;
  alt: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");

  // Send reset password email and display toast message
  const sendResetPasswordEmail = async (email: string) => {
    // Your email sending logic here
    // ...
  };

  await sendResetPasswordEmail(email?.toString() || "");
};

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * loginImages.length);
  return loginImages[randomIndex];
}

export default function PasswordResetSuccessPage() {
  const [searchParams] = useSearchParams();
  const [imageLoading, setImageLoading] = useState(true);
  const imageLoaded = () => {
    setImageLoading(false);
  };

  const [randomImage, setRandomImage] = useState<loginInfo>();

  useEffect(() => {
    const image = getRandomImage();
    setRandomImage(image);
  }, []);

  const notify = () =>{
    return(
    toast(
      "If you have an account, a password reset has been sent to your email address."
    )
    )
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center"></div>
      <main className="relative flex min-h-screen items-center justify-center overflow-y-auto bg-white">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                {randomImage && (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: imageLoading ? 0 : 1,
                    }}
                    transition={{ delay: 0, duration: 1 }}
                    onLoad={imageLoaded}
                    src={randomImage.src}
                    alt={randomImage.alt}
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-teal-400 mix-blend-multiply" />
              </div>
              <div className="lg:pb-18 relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pt-32">
                <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                  <span className="mb-4 block uppercase text-white drop-shadow-md">
                    Job Journey
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                  If an account is associated with this email, an email
                  containing instructions to reset the password has been sent.
                  Please check your inbox for further instructions. If you do
                  not receive an email, it's possible that no account is
                  currently associated with this email address.
                </p>
                <div
                  className="flex min-h-full flex-col justify-center"
                  onLoad={notify}
                >
                  {" "}
                  <Toaster />
                  <div className="mx-auto w-full max-w-md px-8">
                    <button
                      type="submit"
                      className="bg-custom-newColor hover:bg-custom-spaceBlack focus:bg-custom-newColor  hover: w-full rounded px-4 py-2 font-medium text-white text-white"
                    >
                      <Link
                        className="text-lg font-bold text-white"
                        to={{
                          pathname: "/login",
                          search: searchParams.toString(),
                        }}
                      >
                        Return to Login Page
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
