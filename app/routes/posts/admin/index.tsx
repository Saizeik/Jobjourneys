
import { Link } from "@remix-run/react";



  export default function AdminIndexRoute() {
    return (
      <div className="flex justify-end">
      <p>
      
         <Link to="new" className="text-white font-medium underline hover:text-custom-spaceBlack font-bold">
          Create a New Post
        </Link>
      </p>
      </div>
    );
  }