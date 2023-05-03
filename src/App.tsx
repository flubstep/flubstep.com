import "./App.css";

import puppyflatScreenshot from "./images/puppyflat-screenshot.png";
import extremeClickingScreenshot from "./images/extreme-clicking-screenshot.png";
import flubworldScreenshot from "./images/flubworld-screenshot.png";
import clappingMusicScreenshot from "./images/clapping-music-screenshot.png";
import cropperScreenshot from "./images/cropper-screenshot.png";
import releventFuturamaScreenshot from "./images/relevant-futurama-screenshot.png";
import lidarRansacScreenshot from "./images/lidar-ransac-screenshot.png";
import quoraScreenshot from "./images/quora-screenshot.png";
import engValuesScreenshot from "./images/engvalues-screenshot.png";
import pandasetLidarRendering from "./images/pandaset-lidar-rendering.png";
import dclidarScreenshot from "./images/dclidar-screenshot.png";
import { Image } from "@chakra-ui/react";

function Section({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <div className={"Section " + className}>{children}</div>;
}

function BackgroundStripes() {
  return (
    <div className="BackgroundStripes">
      <div className="stripe-left" />
      <div className="stripe-right" />
    </div>
  );
}

function MidDot() {
  return <span>{" · "}</span>;
}

function ProjectSummary({
  imageUrl,
  title,
  codeUrl,
  linkUrl,
  explanationUrl,
  tags,
}: {
  imageUrl: string;
  title: string;
  codeUrl?: string;
  linkUrl?: string;
  explanationUrl?: string;
  tags: string[];
  span?: number;
}) {
  return (
    <div className="ProjectSummary">
      <a target="_blank" rel="noopener noreferrer" href={linkUrl}>
        <Image
          boxSize={220}
          objectFit="contain"
          alt={title}
          src={imageUrl}
          bgColor="rgba(0, 0, 0, 0.5)"
        />
      </a>
      <div className="project-title">
        <a target="_blank" rel="noopener noreferrer" href={linkUrl}>
          {title}
        </a>
      </div>
      <div className="project-tags">
        {codeUrl && (
          <span className="tag">
            <a target="_blank" rel="noopener noreferrer" href={codeUrl}>
              code
            </a>
            <MidDot />
          </span>
        )}
        {tags.map((tag, index) => (
          <span key={tag} className="tag">
            {tag} {index + 1 < tags.length && <MidDot />}
          </span>
        ))}
        {explanationUrl && (
          <span className="tag">
            <MidDot />
            <a target="_blank" rel="noopener noreferrer" href={explanationUrl}>
              explanation
            </a>
          </span>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BackgroundStripes />
      <Section className="TitleSection">
        <div className="title">
          Albert Sheu <span className="text-red subtitle">{" // "}許國恆</span>
        </div>
        <div className="subtitle">and his internet presence</div>
      </Section>
      <Section className="DescriptionSection">
        <div>
          I am a <span className="text-red">generalist programmer</span> based out of New York.
          <br />
          <br />
          My work has typically been with early-stage companies and startups; I've largely been
          supporting application development across a lot of tech, including with AWS, React, Unity,
          and WebGL. I enjoy working on all sorts of problems!
        </div>
      </Section>
      <h4>➤ LiDAR Visualization</h4>
      <Section className="ProjectSection">
        <ProjectSummary
          imageUrl={dclidarScreenshot}
          title={"DC LiDAR Viewer"}
          codeUrl={"https://github.com/flubstep/washingtonthree"}
          linkUrl={"https://dclidar.space"}
          tags={["webgl", "lidar", "computational geometry"]}
        />
        <ProjectSummary
          imageUrl={pandasetLidarRendering}
          title={"Pandaset LiDAR Rendering"}
          codeUrl={"https://github.com/flubstep/extreme-clicking-demo"}
          linkUrl={"https://www.youtube.com/watch?v=TGMo-WQCqv8&ab_channel=flubstep"}
          tags={["webgl", "lidar"]}
        />
        <ProjectSummary
          imageUrl={lidarRansacScreenshot}
          title={"LiDAR RANSAC"}
          codeUrl={"https://github.com/flubstep/extreme-clicking-demo"}
          linkUrl={"https://lidar-ransac.flubdemo.com/"}
          explanationUrl={"https://en.wikipedia.org/wiki/Random_sample_consensus"}
          tags={["three.js", "computer vision", "lidar"]}
        />
      </Section>
      <Section className="ProjectSection">
        <div>
          <h4>➤ Software Development</h4>
          <Section className="ProjectSection">
            <ProjectSummary
              imageUrl={quoraScreenshot}
              title={"Webnode parallelization"}
              linkUrl={"https://www.quora.com/q/quora/Improving-Site-Speed"}
              tags={["python", "parallelization", "site speed"]}
            />
            <ProjectSummary
              imageUrl={engValuesScreenshot}
              title={"Engineering value cards"}
              codeUrl={"https://github.com/flubstep/extreme-clicking-demo"}
              linkUrl={"https://engvalues.herokuapp.com/"}
              tags={["react web", "tech culture", "engineering management"]}
            />
          </Section>
        </div>
        <div>
          <h4>➤ Early Game Development Learning</h4>
          <Section className="ProjectSection">
            <ProjectSummary
              imageUrl={flubworldScreenshot}
              title={"Flubworld"}
              codeUrl={"https://github.com/flubstep/deception"}
              linkUrl={"https://www.youtube.com/watch?v=t-6osZBE3Dc&ab_channel=flubstep"}
              tags={["three.js", "collaborative"]}
            />
            <ProjectSummary
              imageUrl={puppyflatScreenshot}
              title={"Puppyflat"}
              codeUrl={"https://github.com/flubstep/puppyflat"}
              linkUrl={"https://www.youtube.com/watch?v=pKl_-EGPlg0&ab_channel=flubstep"}
              tags={["löve2d", "game development"]}
            />
          </Section>
        </div>
      </Section>

      <h4>➤ Small Components and Experiments</h4>
      <Section className="ProjectSection">
        <ProjectSummary
          imageUrl={extremeClickingScreenshot}
          title={"Extreme clicking"}
          codeUrl={"https://github.com/flubstep/extreme-clicking-demo"}
          linkUrl={"https://extreme-clicking.flubdemo.com/"}
          explanationUrl={"https://arxiv.org/abs/1708.02750"}
          tags={["react web", "machine learning", "image annotation"]}
        />
        <ProjectSummary
          imageUrl={cropperScreenshot}
          title={"Image cropper"}
          codeUrl={"https://github.com/flubstep/cardhouse"}
          linkUrl={"https://cropper.flubdemo.com/"}
          tags={["react web", "component", "image annotation"]}
        />
        <ProjectSummary
          imageUrl={clappingMusicScreenshot}
          title={"Clapping music"}
          codeUrl={"https://github.com/flubstep/clapping-music-react"}
          linkUrl={"https://clapping-music.flubdemo.com/"}
          explanationUrl={"https://www.youtube.com/watch?v=FcFyl8amoEE"}
          tags={["react web", "modern minimalist music", "steve reich"]}
        />
        <ProjectSummary
          imageUrl={releventFuturamaScreenshot}
          title={"Futurama quotes"}
          linkUrl={"http://relevantfuturamaquote.com/"}
          tags={["futurama", "search", "jquery", "ffmpeg"]}
        />
      </Section>
    </div>
  );
}
export default App;
