import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";

type LoaderData = {
  noteListItems: Awaited<ReturnType<typeof getNoteListItems>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json<LoaderData>({ noteListItems });
};

export default function NotesPage() {
  const data = useLoaderData() as LoaderData;
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex flex-col items-center justify-between bg-teal-400 p-4 font-bold text-white md:flex-row">
        <div className="flex items-center">
          <h1 className="mb-2 text-3xl font-bold">
            <Link to=".">Notes</Link>
          </h1>
          <p className="ml-4 hidden md:block">{user.email}</p>
        </div>

        <div className="flex flex-col md:flex-row">
          <button
            type="submit"
            className="bg-custom-newColor m-2 rounded px-4 py-2 font-medium text-white hover:bg-black active:bg-black sm:hidden"
          >
            <Link
              to="/posts/user"
              className="text-md text-whit-600 mb-4 md:mb-0"
            >
              Dashboard
            </Link>
          </button>
          <button
            type="submit"
            className="bg-custom-newColor m-2 rounded px-4 py-2 font-medium text-white hover:bg-black active:bg-black sm:hidden"
          >
            <Link
              to="/map"
              className="text-md text-whit-600 mb-4 md:mb-0"
            >
              MapJourney
            </Link>
          </button>
          <button
            type="submit"
            className="bg-custom-newColor m-2 rounded px-4 py-2 font-medium text-white hover:bg-black active:bg-black sm:hidden"
          >
            <Link
              to="/jobappnotes"
              className="text-md text-whit-600 mb-4 md:mb-0"
            >
              Job App Notes
            </Link>
          </button>

          <button
            type="submit"
            className="bg-custom-newColor m-2 rounded px-4 py-2 font-medium text-white hover:bg-black active:bg-black sm:hidden"
          >
            <Link to="/posts" className="text-md text-whit-600 mb-4 md:mb-0">
              Job Posts
            </Link>
          </button>

          <Form action="/logout" method="post">
            <button
              type="submit"
              className="bg-custom-newColor hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded px-4 py-2 font-medium text-white"
            >
              Logout
            </button>
          </Form>
        </div>
      </header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
          <Link
            to="new"
            className="text-custom-newColor block p-4 text-xl font-medium"
          >
            + New Note
          </Link>

          <hr />

          {data.noteListItems.length === 0 ? (
            <p className="p-4">No notes yet</p>
          ) : (
            <ol>
              {data.noteListItems.map((note) => (
                <li key={note.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={note.id}
                  >
                    📝 {note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
