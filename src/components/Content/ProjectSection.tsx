import React, { useEffect, useRef, useState } from "react";
import {
  TPT,
  github,
  feedbackIcon,
  info,
  Keyboard,
  websiteLink,
} from "../../Links_Images";
import { Box } from "@mui/material";

function MiniProjectcard() {
  return (
    <Box
      component={"div"}
      className="w-full p-2 *:size-10 flex *:active:scale-95 *:ease-in-out *:duration-300 justify-evenly bg-gray-300 rounded-2xl shadow-xl shadow-gray-500/50 lg:flex lg:gap-4 lg:justify-center lg:items-center lg:border-0 lg:shadow-none lg:bg-gray-300"
    >
      <div>
        <FeedbackBubble />
      </div>
      <div>
        <a href="https://github.com/Mohammedasif786">
          <img src={github} alt="Github link of Project" />
        </a>
      </div>
      <div>
        <a href="https://typingtest-self.vercel.app">
          <img src={websiteLink} alt="Website link of Project" />
        </a>
      </div>
      <div className="rounded-2xl relative w-16 h-22 flex justify-center items-center mx-4">
        <img
          src={Keyboard}
          alt="Project ICON"
          className="rounded-2xl p-1 border-2 h-20 max-w-32 bg-white"
        />
      </div>
      <div>
        <ProjectInfo />
      </div>
    </Box>
  );
}
function ProjectInfo() {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      {/* Info button */}
      <button
        onClick={() => setOpen((prev: any) => !prev)}
        aria-expanded={open}
      >
        <img src={info} alt="Info of Project!" />
      </button>

      {/* Bubble */}
      {open && (
        <div className="absolute -left-23.5  top-full z-10 mt-4 w-80 -translate-x-1/2 rounded-2xl bg-linear-to-b from-zinc-400 to-slate-100 p-6 text-center shadow-lg">
          {/* Pointer triangle */}
          <div className="absolute -top-2 left-68 h-4 w-4 -translate-x-1/2 rotate-45 bg-zinc-400" />

          <h2 className="text-2xl font-bold text-black">Typing Project</h2>

          <p className="mt-3 text-sm text-left text-gray-800">
            A productive web application to manage task, team and deadlines with
            a clean and modern interface
          </p>

          <div className="mt-4 flex items-center justify-center gap-4 *:mix-blend-multiply">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
              alt="TypeScript"
              className="h-10 w-10"
            />
            <img
              src="https://i.pinimg.com/474x/19/2c/7e/192c7e8637656cab675eaf9c7f3a44ee.jpg"
              alt="MUI"
              className="h-10 w-10"
            />
            <img
              src="https://img.icons8.com/color/1200/express-js.jpg"
              alt="Express"
              className="h-10 w-10"
            />
            <img
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
              alt="React"
              className="h-10 w-10"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function FeedbackBubble() {
  const [open, setOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleSubmit = () => {
    console.log({ rating, feedback }); // send to your API here
    setRating(0);
    setFeedback("");
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative inline-block">
      {/* Feedback button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Give feedback"
      >
        <img src={feedbackIcon} alt="Feedback Project by User" />
      </button>

      {/* Bubble */}
      {open && (
        <div className="absolute -right-107.5 top-full z-10 mt-4 w-80 -translate-x-1/2 rounded-2xl bg-sky-300 p-5 shadow-lg">
          {/* Pointer triangle */}
          <div className="absolute -top-2 right-69 h-4 w-4 -translate-x-1/2 rotate-45 bg-sky-300" />

          {/* Stars */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                aria-label={`${star} star${star > 1 ? "s" : ""}`}
                className="transition hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`h-9 w-9 ${
                    star <= (hover || rating) ? "fill-yellow-400" : "fill-white"
                  }`}
                >
                  <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                </svg>
              </button>
            ))}
          </div>

          {/* Feedback box */}
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="feedback..."
            rows={4}
            className="mt-4 w-full resize-none rounded-2xl border-2 border-blue-500 bg-white p-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={rating === 0 && feedback.trim() === ""}
            className="mt-3 w-full rounded-xl bg-blue-500 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}

function ProjectCard() {
  return (
    <div
      id="project"
      className="border-2 w-4/4 my-8 content-center max-h-3/4 p-4 rounded-2xl text-2xl h-96 text-center shadow-xl shadow-gray-500/50 lg:flex lg:gap-4 lg:justify-center lg:items-center lg:border-0 lg:shadow-none lg:bg-gray-300"
    >
      <img
        src={TPT}
        alt="Typing website"
        className="rounded-2xl lg:w-96 lg:h-full "
      />
      <div className="lg:flex lg:flex-col ">
        <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-start lg:py-2">
          Typing Project
        </h1>
        <p className="text-center text-lg lg:text-start">
          A productive web application to manage task, team and deadlines with a
          clean and modern interface
        </p>
        <div className="flex justify-center lg:justify-start lg:px-2 gap-4 mt-4 ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            alt="typscript"
            className="size-8"
          />
          <img
            src="https://i.pinimg.com/474x/19/2c/7e/192c7e8637656cab675eaf9c7f3a44ee.jpg"
            alt="MUI lib"
            className="size-8 mix-blend-multiply"
          />
          <img
            src="https://img.icons8.com/color/1200/express-js.jpg"
            alt="Express.js"
            className="size-8 mix-blend-multiply"
          />
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
            alt="ReactLOGO"
            className="size-8"
          />
        </div>
        <div className="flex justify-center lg:justify-start lg:px-2 gap-4 mt-4">
          <button className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mt-4">
            <a href="https://github.com/Mohammedasif786">Github</a>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            <a href="https://typingtest-self.vercel.app">Live demo</a>
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectSection() {
  return (
    <div className="flex flex-col border-2 w-4/4 content-center max-h-3/4 p-4 text-2xl text-center my-8">
      <h1 className="text-4xl underline font-bold text-center my-6 mb-12">
        -:Project List:-
      </h1>
      <div className="hidden min-[426px]:block">
        <ProjectCard />
      </div>

      <div className="block min-[426px]:hidden">
        <MiniProjectcard />
      </div>
    </div>
  );
}

export default ProjectSection;
