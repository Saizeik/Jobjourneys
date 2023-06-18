import { redirect} from "@remix-run/node";

// Set the session cookie with an expiration time
export function action() {
  const cookieOptions = {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 1), // 15 minutes expiration
    httpOnly: true,
    secure: true, // Set to true if using HTTPS
  };

  const cookieHeaderValue = `session=value; Path=${
    cookieOptions.path
  }; Expires=${cookieOptions.expires.toUTCString()}; HttpOnly=${
    cookieOptions.httpOnly
  }; Secure=${cookieOptions.secure}`;

  return redirect("/", {
    headers: {
      "Set-Cookie": cookieHeaderValue,
    },
  });
}

// Handle sign-out action
export function signOut() {
  const cookieOptions = {
    path: "/",
    expires: new Date(0), // Expire immediately
    httpOnly: true,
    secure: true, // Set to true if using HTTPS
  };

  const cookieHeaderValue = `session=; Path=${
    cookieOptions.path
  }; Expires=${cookieOptions.expires.toUTCString()}; HttpOnly=${
    cookieOptions.httpOnly
  }; Secure=${cookieOptions.secure}`;

  return redirect("/", {
    headers: {
      "Set-Cookie": cookieHeaderValue,
    },
  });
}

export const actions = {
  action,
  signOut,
};
