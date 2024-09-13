'use client'
import * as React from "react";
import Welcome from "@/components/videoResume/welcome";
import ProgressBar from "@/components/videoResume/progressbar";
import StoryStudio from "@/components/videoResume/storyStudio";

const VideoResumeStudio = () => {
  const [ next , setNext ] = React.useState(false);

  return (
    <>
      { !next && <ProgressBar/>}
      { next ? <StoryStudio/> : <Welcome setNext={setNext}/> }
    </>
  );
};

export default VideoResumeStudio;