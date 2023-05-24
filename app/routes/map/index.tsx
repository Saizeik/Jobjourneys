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
 const maptilerProvider = maptiler('5ggIxxFRzBPeRaG8yvf5', 'streets');
  
 


  const { posts } = useLoaderData() as LoaderData;
  console.log("posts", posts);
  

  const postsWithNumbers = posts.map(
    ({ coordinateLat: lat, coordinateLong: long, appStatus: appStatus, ...rest }) => {
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
        color:color,
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
        <header className="flex flex-col md:flex-row items-center justify-between bg-teal-400 p-4 text-white">
          <h1 className="text-3xl font-bold mb-4 md:hidden">
            <Link to=".">Map Journey</Link>
          </h1>
          <button className ="sm:hidden">
            {" "}
            {user ? (
              <Link
                to="/notes"
                className="flex items-center justify-center rounded-md border border-transparent mb-4 md:mb-0 bg-white  px-4 py-3 text-base font-medium text-teal-400 shadow-sm hover:bg-black hover:text-white md:hidden"
              >
                View Notes
              </Link>
            ) : null}
          </button>
          <button className ="sm:hidden">
            {user ? (
              <Link
                to="/posts"
                className="flex items-center justify-center rounded-md border border-transparent mb-4 md:mb-0 bg-white px-4 py-3 text-base font-medium text-teal-400 shadow-sm hover:bg-black hover:text-white sm:hidden"
              >
                View Posts
              </Link>
            ) : null}
          </button>
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="m-2 rounded bg-white py-2 px-4 text-teal-400 font-medium mb-4 md:mb-0 hover:bg-black active:bg-black hover:text-white"
            >
              Logout
            </button>
          </Form>
          <p className="hidden md:block ">{username.email}</p>
        </header>
        <div>
  
        <div>
        <div className="map-key bg-black">
    <div className="map-key-item">

      <div className="map-key-labe ml-2 text-white 600 font-bold">Applied = 🔵</div>
    </div>
    <div className="map-key-item">
      
      <div className="map-key-label ml-2 text-white 600 font-bold">Interviewing = 🟡</div>
    </div>
    <div className="map-key-item">
      
      <div className="map-key-label ml-2 text-white 600 font-bold">Hired = 🟢</div>
    </div>
    <div className="map-key-item">

      <div className="map-key-label ml-2 text-white 600 font-bold">Not-selected = 🔴</div>
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
                  onClick ={()=>handleClick(post.title)}
                />
              ))}

{postsWithNumbers.map((post) => (
              <Overlay 
              anchor = {[post.coordinateLat, post.coordinateLong]}
              offset = {[5,5]}>
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
