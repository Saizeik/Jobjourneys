import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function UserIndexRoute() {
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
    <motion.ul variants={container} initial="hidden" animate="show">
      <motion.li variants={item}>
        <p>
          <Link to="new" className="text-xl text-white hover:text-custom-newColor">
            Create a New Post
          </Link>
        </p>
      </motion.li>
    </motion.ul>
  );
}
