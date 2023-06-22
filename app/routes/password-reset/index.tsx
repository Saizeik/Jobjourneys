import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import * as React from "react";
import {
  createPasswordResetToken,
  createUser,
  getUserByEmail,
  getUserById,
} from "~/models/user.server";
import { useEffect, useState } from "react";
import { getUserId, createUserSession } from "~/session.server";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { motion } from "framer-motion";
import { safeRedirect, validateEmail } from "~/utils";
import type { Password, User, PasswordReset } from "@prisma/client";
import { loginImages } from "../../loginImages";
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
  const queryParams = new URLSearchParams(request.url.split("?")[1]);
  const id = parseInt(queryParams.get("id") || "", 10);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const token = queryParams.get("token");

  if (!token) {
    // Token is missing, handle the error
    return redirect("/error");
  }

  const passwordReset = await createPasswordResetToken(token);

  if (!passwordReset || passwordReset.expiresAt) {
    // Invalid token or expired token, handle the error
    return redirect("/error");
  }

  const user = await getUserById(passwordReset.userId);

  if (!user) {
    // User not found, handle the error
    return redirect("/error");
  }

  if (!user) {
    // Invalid token, handle the error
    return redirect("/error");
  }

  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email is invalid" } },
      { status: 400 }
    );
  }

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

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json<ActionData>(
      { errors: { email: "A user already exists with this email" } },
      { status: 400 }
    );
  }

  return json({ user });
};

export default function ResetPasswordForm() {
  const actionData = useActionData();
  const [imageLoading, setImageLoading] = useState(true);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const imageLoaded = () => {
    setImageLoading(false);
  };

  const [randomImage, setRandomImage] = useState<loginInfo>();

  useEffect(() => {
    const image = getRandomImage();
    setRandomImage(image);
  }, []);

  if (actionData?.success) {
    return (
      <p>
        Password reset successful. You can now log in with your new password.
      </p>
    );
  }

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

                    <div className="mt-1">
                      <input
                        id="password"
                        required
                        autoFocus={true}
                        name="password"
                        type="password"
                        autoComplete="password"
                        aria-invalid={
                          actionData?.errors?.password ? true : undefined
                        }
                        aria-describedby="password-error"
                        className="w-full rounded border border-gray-500  px-2 py-1 text-lg"
                      />
                      {actionData?.errors?.password && (
                        <div className="pt-1 text-red-700" id="password-error">
                          {actionData.errors.password}
                        </div>
                      )}
                    </div>
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
