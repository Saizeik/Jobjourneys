import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useSearchParams, Link } from "@remix-run/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { safeRedirect } from "~/utils";
import { loginImages } from "../../loginImages";
import { getUserByEmail, updatePassword } from "~/models/user.server";
import { getUserId } from "~/session.server";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { prisma } from "~/db.server";
import { toast, Toaster } from "react-hot-toast";
import type { ActionArgs } from "@remix-run/node";
import { getSession, commitSession } from "~/sessions";
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

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.flash("message", "Password Reset Successfully!");
  const formData = await request.formData();
  const email = formData.get("email") || "";
  if (typeof email !== "string") {
    return json<ActionData>(
      { errors: { email: "Email is required" } },
      { status: 400 }
    );
  }

  const password = formData.get("password");

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

  // Validate the email, password, and confirmPassword as before...

  // Find the user by email
  const user = await getUserByEmail(email);

  if (!user) {
    return json<ActionData>(
      { errors: { email: "User with this email does not exist" } },
      { status: 400 }
    );
  }

  // Retrieve the associated PasswordReset record from the database based on the user's email
  const passwordReset = await prisma.passwordReset.findFirst({
    where: {
      userId: user.id,
      expiresAt: {
        gte: new Date(),
      },
    },
  });

  if (!passwordReset) {
    // Invalid token or token not found for the user
    return json<ActionData>(
      { errors: { token: "Invalid or expired token" } },
      { status: 400 }
    );
  }

  // Update the password using the `updatePassword` function
  await updatePassword(email, password);

  // Delete the PasswordReset record associated with the user
  await prisma.passwordReset.delete({
    where: { id: passwordReset.id },
  });

  // Append the success flag to the redirectTo URL
  const redirectTo = `${safeRedirect(
    formData.get("redirectTo"),
    "/login"
  )}?success=true`;

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};
export default function ResetPasswordForm() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const successParam = searchParams.get("success");
  const actionData = useActionData();
  const [imageLoading, setImageLoading] = useState(true);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null);
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const [showSuccessMessage, setShowSuccessMessage] = useState(
    successParam === "true"
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputValueVisible, setIsInputValueVisible] =
    useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleToggleVisibility = () => {
    setIsInputValueVisible(!isInputValueVisible);
  };


  const imageLoaded = () => {
    setImageLoading(false);
  };

  // Handle the response

  const [randomImage, setRandomImage] = useState<loginInfo>();

  useEffect(() => {
    const image = getRandomImage();
    setRandomImage(image);
});

  return (
    <>
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
                          <div className="my-2 mt-2">
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
                              <div
                                className="pt-1 text-red-700"
                                id="email-error"
                              >
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
                            type={isInputValueVisible ? "text" : "password"}
                            value={inputValue}
                            onChange={handleChange}
                            autoComplete="current-password"
                            aria-invalid={
                              actionData?.errors?.password ? true : undefined
                            }
                            aria-describedby="password-error"
                            className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                            style={{
                              paddingRight: "40px",
                            }}
                          />
                          <button
                            type="button"
                            onClick={handleToggleVisibility}
                            className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                            style={{
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            {isInputValueVisible ? "🙊" : "🙈"}
                          </button>
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
                            type={isInputValueVisible ? "text" : "password"}
                            value={inputValue}
                            onChange={handleChange}
                            autoComplete="current-password"
                            aria-invalid={
                              actionData?.errors?.password ? true : undefined
                            }
                            aria-describedby="password-error"
                            className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                            style={{
                              paddingRight: "40px",
                            }}
                          />
                          <button
                            type="button"
                            onClick={handleToggleVisibility}
                            className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                            style={{
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            {isInputValueVisible ? "🙊" : "🙈"}
                          </button>
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

                      <input
                        type="hidden"
                        name="redirectTo"
                        value={redirectTo}
                      />
                      <button
                        type="submit"
                        className="bg-custom-newColor hover:bg-custom-spaceBlack focus:bg-custom-spaceBlack   hover: w-full rounded px-4 py-2 font-medium text-white text-white"
                      >
                        Reset Password
                      </button>
                      {showSuccessMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: "-2vh" }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="bg-green-200 p-2 text-center text-green-800"
                        >
                          Password reset successful!
                        </motion.div>
                      )}
                      <Toaster position="top-center" />

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
    </>
  );
}
