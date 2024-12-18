import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useSearchParams,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import React from "react";

import { loginImages } from "../loginImages";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getSession, commitSession } from "~/sessions";
import { createUserSession, getUserId } from "~/session.server";
import { verifyLogin } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/");
  }
  const session = await getSession(request.headers.get("Cookie"));
  // Retrieve the session value set in the previous request
  const message = session.get("message") || "Welcome!";
  return json(
    { message },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

interface ActionData {
  errors?: {
    email?: string;
    password?: string;
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
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/posts/user");
  const remember = formData.get("remember");

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

  const user = await verifyLogin(email, password);

  if (!user) {
    return json<ActionData>(
      { errors: { email: "Invalid email or password" } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo,
  });
};

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/posts/user";
  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const { message } = useLoaderData<typeof loader>();
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

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  const [randomImage, setRandomImage] = useState<loginInfo>();

  useEffect(() => {
    const image = getRandomImage();
    setRandomImage(image);
  }, []);

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
                <motion.div
                  className="mb-2 flex min-h-full flex-col justify-center"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  <p className="text-center text-xl font-bold text-white">
                    {message}
                  </p>
                </motion.div>
                <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                  <span className="mb-4 block uppercase text-white drop-shadow-md">
                    Job Journey
                  </span>
                </h1>

                <div className="flex min-h-full flex-col justify-center">
                  <div className="mx-auto w-full max-w-md px-8">
                    <Form method="post" className="space-y-6">
                      <div className="mt-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold  text-white"
                        >
                          Email address
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
                            className="w-full rounded border border-gray-500  px-2 py-1 text-lg"
                          />
                          {actionData?.errors?.email && (
                            <div className="pt-1 text-red-700" id="email-error">
                              {actionData.errors.email}
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm font-bold text-white"
                        >
                          Password
                        </label>
                        <div className="mt-1">
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

                      <input
                        type="hidden"
                        name="redirectTo"
                        value={redirectTo}
                      />
                      <button
                        type="submit"
                        className="bg-custom-newColor hover:bg-custom-spaceBlack focus:bg-custom-spaceBlack   hover: w-full rounded px-4 py-2 font-medium text-white text-white"
                      >
                        Log in
                      </button>
                      <div className="sm: flex items-center justify-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <label
                            htmlFor="remember"
                            className="mx-4  border-blue-400 text-sm font-bold text-white"
                          >
                            Remember me
                          </label>
                        </div>
                        <div className="text-md text-center font-bold text-white">
                          Don't have an account?{" "}
                          <div>
                            <Link
                              className="text-lg font-bold text-white underline"
                              to={{
                                pathname: "/join",
                                search: searchParams.toString(),
                              }}
                            >
                              Sign up
                            </Link>
                          </div>
                        </div>

                        <Link
                          className="mx-4 inline text-lg font-bold text-white underline"
                          to="/forgot"
                        >
                          Reset Password
                        </Link>
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
