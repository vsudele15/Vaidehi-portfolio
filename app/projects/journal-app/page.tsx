import TechStack from "@/app/components/TechStack";
import { ExternalLink } from "lucide-react";

function Microtube() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-highlight">Journal Web App</h2>
      <p>
      Ever wished for a digital diary that keeps up with your thoughts, moods, and random midnight epiphanies? The Journal Web App is here to be your ultimate safe space! 📝💭 
      Log in, pour your heart out, and keep track of your journey—whether it's daily reflections, creative bursts, or a list of things your cat did today. Need to make changes? Edit and delete entries effortlessly! 
      th a clean and intuitive interface, this app is like a time capsule for your thoughts—minus the dusty old box. So go ahead, write your story one entry at a time!
      </p>
      <TechStack
        stack={[
          "TypeScript",
          "React",
          "Express.js",
          "Node.js",
          "MongoDB",
          "CSS",
          "HTML",
          "GitHub",
        ]}
      />
      <div className="flex gap-2 text-accent">
        <a
          className="flex gap-1 items-center"
          href="https://github.com/Swapnanil-Gupta/microtube"
          target="_blank"
        >
          Source Code <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div>
        <p className="text-highlight">Sign Up/Login</p>
        <div className="mt-6 rounded-xl overflow-hidden">
          <video
            src="https://drive.google.com/file/d/15aAtk4R3FFPjvRMbRiIgMgkh0sen9aRQ/preview"
            controls
          />
        </div>
      </div>
      <div>
        <p className="text-highlight">Likes, dislikes and comments</p>
        <div className="mt-6 rounded-xl overflow-hidden">
          <video
            src="https://d2vwxessb8tj4z.cloudfront.net/videos/microtube_like_dislike_comment.mp4"
            controls
          />
        </div>
      </div>
      <div>
        <p className="text-highlight">Uploading and processing videos</p>
        <div className="mt-6 rounded-xl overflow-hidden">
          <video
            src="https://d2vwxessb8tj4z.cloudfront.net/videos/microtube_upload.mp4"
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default Microtube;
