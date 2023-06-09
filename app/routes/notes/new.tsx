import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import * as React from "react";

import { createNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";
import { motion } from "framer-motion";

type ActionData = {
  errors?: {
    title?: string;
    body?: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");

  if (typeof title !== "string" || title.length === 0) {
    return json<ActionData>(
      { errors: { title: "Title is required" } },
      { status: 400 }
    );
  }

  if (typeof body !== "string" || body.length === 0) {
    return json<ActionData>(
      { errors: { body: "Body is required" } },
      { status: 400 }
    );
  }

  const note = await createNote({ title, body, userId });

  return redirect(`/notes/${note.id}`);
};

export default function NewNotePage() {
  const actionData = useActionData() as ActionData;
  const titleRef = React.useRef<HTMLInputElement>(null);
  const bodyRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.body) {
      bodyRef.current?.focus();
    }
  }, [actionData]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "-2vh" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Form
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "100%",
        }}
      >
        <div>
          <label className="mb-2 block flex w-full flex-col gap-1 font-bold text-gray-700">
            <span>Title: </span>
            <input
              ref={titleRef}
              name="title"
              className="border-custom-newColor focus:shadow-outline w-full flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              aria-invalid={actionData?.errors?.title ? true : undefined}
              aria-errormessage={
                actionData?.errors?.title ? "title-error" : undefined
              }
            />
          </label>
          {actionData?.errors?.title && (
            <div className="pt-1 text-red-700" id="title-error">
              {actionData.errors.title}
            </div>
          )}
        </div>

        <div>
          <label className="mb-2 block flex w-full flex-col gap-1 font-bold text-gray-700">
            <span>Body: </span>
            <textarea
              ref={bodyRef}
              name="body"
              rows={8}
              className="border-custom-newColor focus:shadow-outline w-full flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              aria-invalid={actionData?.errors?.body ? true : undefined}
              aria-errormessage={
                actionData?.errors?.body ? "body-error" : undefined
              }
            />
          </label>
          {actionData?.errors?.body && (
            <div className="pt-1 text-red-700" id="body-error">
              {actionData.errors.body}
            </div>
          )}
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-custom-newColor focus:bg--teal-400 rounded px-4 py-2 font-bold text-white hover:bg-teal-400"
          >
            Save
          </button>
        </div>
      </Form>
    </motion.div>
  );
}
