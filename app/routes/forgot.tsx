import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import nodemailer from "nodemailer";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useNavigate } from "@remix-run/react";
import React from "react";
import {
  getUserByEmail,
  sendResetPasswordEmail,
  createPasswordResetToken,
} from "~/models/user.server";

import { validateEmail } from "~/utils";
import { loginImages } from "../loginImages";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { User, PasswordReset } from "~/models/user.server";

interface ActionData {
  errors: {
    email?: string;
    password?: string;
    user?: string;
    token?: string;
  };
}

export interface loginInfo {
  src: string;
  alt: string;
}

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * loginImages.length);
  return loginImages[randomIndex];
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");

  try {
    if (!validateEmail(email)) {
      return json<ActionData>(
        { errors: { email: "Email is invalid" } },
        { status: 400 }
      );
    }

    const user: User | null = await getUserByEmail(email);
    if (!user) {
      return json<ActionData>(
        { errors: { email: "No user found with this email" } },
        { status: 400 }
      );
    }
    const token: PasswordReset | null = await createPasswordResetToken(user.id);

    // If the token is null, handle the error
    if (!token) {
      return json<ActionData>(
        { errors: { token: "Failed to create password reset token" } },
        { status: 500 }
      );
    }

    // Call the function to send the reset password email
    await sendResetPasswordEmail(user, token);

    // Handle success case here, for example, redirect to PasswordResetSuccess
    return redirect("/PasswordResetSuccess");
  } catch (error) {
    // Handle error case here (e.g., show error message or redirect to an error page)
    console.error("Error sending reset password email:", error);
    // You can return an error response here if needed
    return json<ActionData>(
      { errors: { email: "Failed to send reset password email" } },
      { status: 500 }
    );
  }
};

export default function ResetPassword() {
  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
  };

  useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    }
  }, [actionData]);

  const [randomImage, setRandomImage] = useState<loginInfo>();

  useEffect(() => {
    const image = getRandomImage();
    setRandomImage(image);
  }, []);

  return (
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
              <div className="flex min-h-full flex-col justify-center">
                <div className="mx-auto w-full max-w-md px-8">
                  <Form method="post" className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-white"
                      >
                        Email Address
                      </label>
                      <div className="mt-1">
                        <input
                          ref={emailRef}
                          id="email"
                          required
                          autoFocus={true}
                          name="email"
                          type="email"
                          autoComplete="email"
                          aria-invalid={
                            actionData?.errors?.email ? true : undefined
                          }
                          aria-describedby="email-error"
                          className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                        />
                        {actionData?.errors?.email && (
                          <div className="pt-1 text-red-700" id="email-error">
                            {actionData.errors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-custom-newColor hover:bg-custom-spaceBlack focus:bg-custom-newColor  hover: w-full rounded px-4 py-2 font-medium text-white text-white"
                    >
                      Reset Password
                    </button>

                    <div className="flex items-center justify-center">
                      <div className="text-center text-sm font-bold text-white">
                        Remember your password?{" "}
                        <Link
                          className="text-lg font-bold text-white underline"
                          to="/login"
                        >
                          Log in
                        </Link>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
