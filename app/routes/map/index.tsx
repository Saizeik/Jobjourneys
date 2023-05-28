import React, { useState } from "react";
import { Link, Form } from "@remix-run/react";
import { Map, Marker, Overlay } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getPostListings } from "~/models/post.server";
import { requireUserId } from "~/session.server";
import { useOptionalAdminUser, useOptionalUser } from "~/utils";
import { useUser } from "~/utils";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const posts = await getPostListings({ userId: userId });
  return json<LoaderData>({ posts });
};

export default function MapJourney() {
  const user = useOptionalUser();
  const username = useUser();
  const maptilerProvider = maptiler("5ggIxxFRzBPeRaG8yvf5", "streets");

  const { posts } = useLoaderData() as LoaderData;
  console.log("posts", posts);

  const postsWithNumbers = posts.map(
    ({
      coordinateLat: lat,
      coordinateLong: long,
      appStatus: appStatus,
      ...rest
    }) => {
      const parsedLat = parseFloat(lat);
      const parsedLong = parseFloat(long);

      const color =
        appStatus === "Applied"
          ? "blue"
          : appStatus === "Interviewing"
          ? "orange"
          : appStatus === "Hired"
          ? "green"
          : appStatus === "Not-selected"
          ? "red"
          : "";

      return {
        color: color,
        coordinateLat: parsedLat,
        coordinateLong: parsedLong,
        appStatus: appStatus,
        ...rest,
      };
    }
  );
  const [displayTitle, setDisplayTitle] = useState("");
  const handleClick = (title: string) => {
    setDisplayTitle(title);
  };

  /*const titleDisplay = posts.map(
    ({title: titl, ...rest}) =>{
      const titleDisplayed = titl;
      return{
        title:titleDisplayed,
        ...rest,
      }
    }
  ) */

  return (
    <main>
      <div className="flex h-full min-h-screen flex-col">
        <header className="flex flex-col items-center justify-between bg-teal-400 p-4 text-white md:flex-row">
          <h1 className="mb-4 text-3xl font-bold">
            <Link to=".">Map Journey</Link>
          </h1>
          <div className="flex flex-col md:flex-row">
          <button className="sm:hidden">
            {" "}
            {user ? (
              <Link
                to="/notes"
                className="mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-teal-400 shadow-sm hover:bg-black hover:text-white md:mb-0 md:hidden"
              >
                Notes
              </Link>
            ) : null}
          </button>
          <button className="sm:hidden">
            {" "}
            {user ? (
              <Link
                to="/jobappnotes"
                className="mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-teal-400 shadow-sm hover:bg-black hover:text-white md:mb-0 md:hidden"
              >
                Job App Notes
              </Link>
            ) : null}
          </button>
          <button className="sm:hidden">
            {user ? (
              <Link
                to="/posts"
                className="mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-teal-400 shadow-sm hover:bg-black hover:text-white sm:hidden md:mb-0"
              >
                Job Posts
              </Link>
            ) : null}
          </button>
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="mb-2 mr-2 rounded bg-white px-4 py-2 font-medium text-teal-400 hover:bg-black hover:text-white active:bg-black md:mb-0"
            >
              Logout
            </button>
          </Form>
          <p className="hidden md:hidden ">{username.email}</p>
          </div>
        </header>
        <div>
          <div>
            <div className="map-key bg-black">
              <div className="map-key-item">
                <div className="map-key-labe 600 ml-2 font-bold text-white">
                  Applied = 🔵
                </div>
              </div>
              <div className="map-key-item">
                <div className="map-key-label 600 ml-2 font-bold text-white">
                  Interviewing = 🟡
                </div>
              </div>
              <div className="map-key-item">
                <div className="map-key-label 600 ml-2 font-bold text-white">
                  Hired = 🟢
                </div>
              </div>
              <div className="map-key-item">
                <div className="map-key-label 600 ml-2 font-bold text-white">
                  Not-selected = 🔴
                </div>
              </div>
            </div>
            <ol className="text-black-600 m-2 list-decimal">
              <Map
                provider={maptilerProvider}
                height={1000}
                defaultCenter={[47.116386, -101.299591]}
                defaultZoom={4.5}
                mouseEvents={true}
              >
                {postsWithNumbers.map((post) => (
                  <Marker
                    width={50}
                    color={post.color}
                    anchor={[post.coordinateLat, post.coordinateLong]}
                    onClick={() => handleClick(post.title)}
                  />
                ))}

                {postsWithNumbers.map((post) => (
                  <Overlay
                    anchor={[post.coordinateLat, post.coordinateLong]}
                    offset={[5, 5]}
                  >
                    <div>
                      {displayTitle && (
                        <li>
                          <p className="text-blue-600 ">{post.title}</p>
                        </li>
                      )}
                    </div>
                  </Overlay>
                ))}
              </Map>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
