import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function jobNoteIndexPage() {
  return (
    <motion.div
    initial={{ opacity: 0, x: '-2vh' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
>
    <p className ="text-xl">
      No note selected. Select a note on the left, or{" "}
      <Link to="new" className="text-custom-newColor font-medium underline">
        create a new job application note.
      </Link>
    </p>
    </motion.div>
  );
}
