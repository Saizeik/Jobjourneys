import React, { useState } from "react";
import {
  Form,
  useActionData,
  useCatch,
  useLoaderData,
  useParams,
  useTransition,
} from "@remix-run/react";

import { redirect, json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { Post } from "~/models/post.server";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "~/models/post.server";

import invariant from "tiny-invariant";
import { requireAdminUser, requireUserId } from "~/session.server";

type LoaderData = { post?: Post };

export const loader: LoaderFunction = async ({ request, params }) => {
  await requireAdminUser(request);
  invariant(params.slug, "slug is required");
  if (params.slug === "new") {
    return json<LoaderData>({});
  }
  const post = await getPost(params.slug);
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  return json<LoaderData>({ post });
};

type ActionData =
  | {
      title: null | string;
      slug: null | string;
      address: null | string;
      date: null | string;
      coordinateLat: null | string;
      coordinateLong: null | string;
      markdown: null | string;
      jobAppLink: null | string;
      appStatus: null | string;
    }
  | undefined;


export const action: ActionFunction = async ({ request, params }) => {
  await requireAdminUser(request);
  invariant(params.slug, "slug is required");
  const formData = await request.formData();
  const intent = formData.get("intent");
  const userId = await requireUserId(request);
  if (intent === "delete") {
    await deletePost(params.slug);
    return redirect("/posts/admin");
  }

  const title = formData.get("title");

  const jobTitle = formData.get("slug");
  const slug = `${jobTitle}-${title}`;
  const date = formData.get("date");
  const address = formData.get("address");

  let coordinateLat = formData.get("latitude");
  let coordinateLong = formData.get("longitude");
  const markdown = formData.get("markdown");
  const jobAppLink = formData.get("jobAppLink");

  const appStatus = formData.get("appStatus");

  const errors: ActionData = {
    title: title ? null : "Company Name  is required",
    slug: slug ? null : "Job Title is required",
    address: address ? null : "Company Address is required",
    date: date ? null : "date is required",
    jobAppLink: jobAppLink ? null : "Job Application website link is required",
    appStatus: appStatus ? null : "Application status is required",
    coordinateLat: coordinateLat ? null : "Coordinate latitude is required",
    coordinateLong: coordinateLong ? null : "Coordinate longitude is required",
    markdown: markdown ? null : "Markdown is required",
  };

  if (
    typeof slug !== "string" ||
    /[\{\}\[\]\(\)\#\@\!\$\%\^\&\*\+\=\<\>\?\,\'\"\;\:\\\/]/g.test(slug)
  ) {
    errors.slug = "Please use alphanumeric characters only";
  }

  // return data if we have errors

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>(errors);
  }

  invariant(typeof title === "string", "title must be a string");
  invariant(typeof slug === "string", "slug must be a string");
  invariant(typeof address === "string", "address must be a string");
  invariant(typeof date === "string", "date must be a date");
  invariant(typeof jobAppLink === "string", "website address must be a string");
  invariant(
    typeof appStatus === "string",
    "Application status must be a string"
  );
  invariant(
    typeof coordinateLat === "string",
    "coordinate latitude must be a number"
  );
  invariant(
    typeof coordinateLong === "string",
    "coordinates longitude must be a number"
  );
  invariant(typeof markdown === "string", "markdown must be a string");
  invariant(typeof userId === "string", "userId must be a string");

  if (params.slug === "new") {
    await createPost({ title,
      slug,
      address,
      date,
      jobAppLink,
      appStatus,
      coordinateLat,
      coordinateLong,
      markdown,
      userId, });
  } else {
    await updatePost(params.slug, {
      title,
      slug,
      address,
      date,
      jobAppLink,
      appStatus,
      coordinateLat,
      coordinateLong,
      markdown,
      userId,
    });
  }

  return redirect("/posts/admin");
};

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg text-blue-500`;

export default function NewPostRoute() {
  const data = useLoaderData() as LoaderData;
  const errors = useActionData() as ActionData;

  const transition = useTransition();
  const isCreating = transition.submission?.formData.get("intent") === "create";
  const isUpdating = transition.submission?.formData.get("intent") === "update";
  const isDeleting = transition.submission?.formData.get("intent") === "delete";
  const isNewPost = !data.post;

  const [address, setAddress] = useState(data.post?.address || "");
  const [latitude, setLatitude] = useState(data.post?.coordinateLat || "");
  const [longitude, setLongitude] = useState(data.post?.coordinateLong || "");

  const [statusError, setStatusError] = useState<string>("");

  function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
    const address = event.target.value;
    setAddress(address);
  }

  function handleLatitudeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setLatitude(value);
  }

  function handleLongitudeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setLongitude(value);
  }

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

  return (
    

          <div className="mt-4 rounded-xl bg-custom-newColor p-6 text-lg font-bold text-white shadow-lg md:mt-0 md:flex md:w-full md:max-w-none md:flex-col">
            <Form method="post" key={data.post?.slug ?? "new"}>
              <p>
                <label>
                  Company Name:{" "}
                  {errors?.title ? (
                    <em className="text-red-600">{errors.title}</em>
                  ) : null}
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className={inputClassName}
                    defaultValue={data.post?.title}
                  />
                </label>
              </p>
              <p>
                <label>
                  Job Title:{" "}
                  <input
                    type="text"
                    name="slug"
                    id="slug"
                    className={inputClassName}
                    defaultValue={data.post?.slug.split("-")[0]} // display only the jobTitle part of the slug on form update/edit
                  />
                  {errors?.slug ? (
                    <em className="text-red-600">{errors.slug}</em>
                  ) : null}
                </label>
              </p>

              <p>
                <label>
                  Date Applied:{" "}
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className={inputClassName}
                    defaultValue={data.post?.date}
                    required
                  />
                  {errors?.date ? (
                    <em className="text-red-600">{errors.date}</em>
                  ) : null}
                </label>
              </p>
              <p>
                <label>
                  Job Application Website Link:{" "}
                  <input
                    type="text"
                    name="jobAppLink"
                    id="jobAppLink"
                    className={inputClassName}
                    defaultValue={data.post?.jobAppLink}
                  />
                  {errors?.jobAppLink ? (
                    <em className="text-red-600">{errors.jobAppLink}</em>
                  ) : null}
                </label>
              </p>
              <p>
                <label>
                  Company Address:{" "}
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={address ?? ""}
                    onChange={handleAddressChange}
                    className={inputClassName}
                    defaultValue={data.post?.address}
                  />
                  {errors?.address ? (
                    <em className="text-red-600">{errors.address}</em>
                  ) : null}
                </label>
              </p>
              <p>
                <label htmlFor="coordinateLat">
                  Job Coordinate Latitude:{" "}
                  {errors?.coordinateLat ? (
                    <em className="text-red-600">{errors.coordinateLat}</em>
                  ) : null}
                </label>
                <input
                  type="number"
                  name="latitude"
                  id="latitude"
                  value={latitude ?? ""}
                  onChange={handleLatitudeChange}
                  className={`${inputClassName} font-mono`}
                  defaultValue={data.post?.coordinateLat}
                />
              </p>

              <p>
                <label htmlFor="coordinateLong">
                  Job Coordinate Longitude:{" "}
                  {errors?.coordinateLong ? (
                    <em className="text-red-600">{errors.coordinateLong}</em>
                  ) : null}
                </label>
                <input
                  type="number"
                  name="longitude"
                  id="longitude"
                  value={longitude ?? ""}
                  onChange={handleLongitudeChange}
                  className={`${inputClassName} font-mono`}
                  defaultValue={data.post?.coordinateLong}
                />
              </p>
              <div>
                Job Application Status
                <p>
                  <label>
                    Applied{" "}
                    <input
                      type="radio"
                      name="appStatus"
                      id="applied"
                      value="Applied"
                      defaultChecked={data.post?.appStatus === "Applied"}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    Interviewing{" "}
                    <input
                      type="radio"
                      name="appStatus"
                      id="interviewing"
                      value="Interviewing"
                      defaultChecked={data.post?.appStatus === "Interviewing"}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    Hired{" "}
                    <input
                      type="radio"
                      name="appStatus"
                      id="hired"
                      value="Hired"
                      defaultChecked={data.post?.appStatus === "Hired"}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    Not Selected{" "}
                    <input
                      type="radio"
                      name="appStatus"
                      id="not-selected"
                      value="Not-selected"
                      defaultChecked={data.post?.appStatus === "Not-selected"}
                    />
                  </label>
                </p>
                {errors?.appStatus && (
                  <p className="text-red-500">{errors.appStatus}</p>
                )}
              </div>

              <p>
                <label htmlFor="markdown">
                  Details and Notes:{" "}
                  {errors?.markdown ? (
                    <em className="text-red-600">{errors.markdown}</em>
                  ) : null}
                </label>
                <textarea
                  id="markdown"
                  rows={20}
                  name="markdown"
                  className={`${inputClassName} font-mono`}
                  defaultValue={data.post?.markdown}
                />
              </p>
              <div className="flex justify-end gap-4">
                {isNewPost ? null : (
                  <button
                    type="submit"
                    name="intent"
                    value="delete"
                    className="rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600 focus:bg-red-400 disabled:bg-red-300"
                    disabled={isDeleting}
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                )}
                <button
                  type="submit"
                  name="intent"
                  value={isNewPost ? "create" : "update"}
                  className="rounded bg-teal-400 py-2 px-4 text-white hover:bg-custom focus:bg-indigo-900 disabled:bg-gray-300"
                  disabled={isCreating || isUpdating}
                >
                  {isNewPost
                    ? isCreating
                      ? "Creating..."
                      : "Create Post"
                    : null}
                  {isNewPost ? null : isUpdating ? "Updating..." : "Update"}
                </button>
              </div>
            </Form>
          </div>
      
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  if (caught.status === 404) {
    return (
      <div className="text-red-500">
        Uh oh! The post with the slug "{params.slug}" does not exist!
      </div>
    );
  }
  throw new Error(`Unsupported thrown response status code: ${caught.status}`);
}

export function ErrorBoundary({ error }: { error: unknown }) {
  if (error instanceof Error) {
    return (
      <div className="text-red-500">
        Oh no, something went wrong!
        <pre>{error.message}</pre>
      </div>
    );
  }
  return <div className="text-red-500">Oh no, something went wrong!</div>;
}
