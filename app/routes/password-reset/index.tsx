import { json, redirect, Headers } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { safeRedirect, validateEmail } from "~/utils";
import { loginImages } from "../../loginImages";
import {
  getUserByEmail,
  getUserById,
  updatePassword,
} from "~/models/user.server";
import { getUserId } from "~/session.server";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";

import type { User, PasswordReset } from "@prisma/client";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

interface ActionData {
  errors: {
    email?: string;
    password?: string;
    id?: string;
    confirmPassword?: string;
    userId?: string;
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
  const email = formData.get("email") || "";
  if (typeof email !== "string") {
    return json<ActionData>(
      { errors: { email: "Email is required" } },
      { status: 400 }
    );
  }

  const password = formData.get("password");

  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (typeof password !== "string" || password.length === 0) {
    return json<ActionData>(
      { errors: { password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json<ActionData>(
      { errors: { password: "Password is too short" } },
      { status: 400 }
    );
  }
  const confirmPassword = formData.get("confirmPassword")?.toString() || "";
  if (password !== confirmPassword) {
    return json<ActionData>(
      { errors: { confirmPassword: "Passwords do not match" } },
      { status: 400 }
    );
  }

  // Update the password using the `updatePassword` function
  await updatePassword(email, password);

  return json({ success: true }), redirectTo;
};
export default function ResetPasswordForm() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  
  const [searchParams] = useSearchParams();
  const actionData = useActionData();
  const [imageLoading, setImageLoading] = useState(true);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null);
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const imageLoaded = () => {
    setImageLoading(false);
  };

  // Handle the response

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
              <div className="absolute inset-0 bg-teal-400 mix-blend-multiply" />
            </div>
            <div className=" lg:pb-18 relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="mb-4 block uppercase text-white drop-shadow-md">
                  Job Journey
                </span>
              </h1>
              <div className="flex min-h-full flex-col justify-center">
                <div className="mx-auto w-full max-w-md px-8">
                  <Form method="post" className="space-y-6">
                    <div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold text-white"
                        >
                          Email Address
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            ref={emailRef}
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

                      <label
                        htmlFor="password"
                        className="block text-sm font-bold text-white"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          type="hidden"
                          name="token"
                          value={actionData?.token}
                        />
                        <input
                          id="password"
                          ref={passwordRef}
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          aria-invalid={
                            actionData?.errors?.password ? true : undefined
                          }
                          aria-describedby="password-error"
                          className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                        />
                        {actionData?.errors?.password && (
                          <div
                            className="pt-1 text-red-700"
                            id="password-error"
                          >
                            {actionData.errors.password}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-bold text-white"
                      >
                        Confirm Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="confirmPassword"
                          ref={confirmPasswordRef}
                          name="confirmPassword"
                          type="password"
                          autoComplete="current-password"
                          aria-invalid={
                            actionData?.errors?.confirmPassword
                              ? true
                              : undefined
                          }
                          aria-describedby="confirmPassword-error"
                          className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                        />
                        {actionData?.errors?.confirmPassword && (
                          <div
                            className="pt-1 text-red-700"
                            id="confirmPassword-error"
                          >
                            {actionData.errors.confirmPassword}
                          </div>
                        )}
                      </div>
                    </div>

                    <input type="hidden" name="redirectTo" value={redirectTo} />
                    <button
                      type="submit"
                      className="bg-custom-newColor hover:bg-custom-spaceBlack focus:bg-custom-spaceBlack   hover: w-full rounded px-4 py-2 font-medium text-white text-white"
                    >
                      Reset Password
                    </button>

                    <input type="hidden" />
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
