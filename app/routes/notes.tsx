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
    <header className="flex flex-col md:flex-row items-center justify-between bg-teal-400 p-4 text-white font-bold">
  <div className="flex items-center">
    <h1 className="text-3xl font-bold mr-4">
      <Link to=".">Notes</Link>
    </h1>
    <p className="hidden md:block ml-4">{user.email}</p>
  </div>
  
  <div className="flex flex-col md:flex-row">
    <button
      type="submit"
      className="rounded bg-custom-newColor m-2 py-2 px-4 text-white font-medium hover:bg-black active:bg-black sm:hidden"
    >
      <Link to="/jobappnotes" className="text-md text-whit-600 mb-4 md:mb-0">
        Job App Notes
      </Link>
    </button>

    <button
      type="submit"
      className="rounded bg-custom-newColor m-2 py-2 px-4 text-white font-medium hover:bg-black active:bg-black sm:hidden"
    >
      <Link to="/posts" className="text-md text-whit-600 mb-4 md:mb-0">
        Job Posts
      </Link>
    </button>

    <Form action="/logout" method="post">
      <button
        type="submit"
        className=" mt-2  ml-2 rounded bg-custom-newColor py-2 px-4 text-white font-medium hover:bg-black active:bg-black mb-4 md:mb-0 "
      >
        Logout
      </button>
    </Form>
  </div>
</header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
          <Link to="new" className="block p-4 font-medium text-xl text-custom-newColor">
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
