import React from 'react'

import './App.css'

function Column({children}) {
  return <div className="Column">{children}</div>
}

function Section({className, children, ...rest}) {
  return (
    <div className={'Section ' + className} {...rest}>
      {children}
    </div>
  )
}

function BackgroundStripes() {
  return (
    <div className="BackgroundStripes">
      <div className="stripe-left" />
      <div className="stripe-right" />
    </div>
  )
}

function MidDot() {
  return <span>{' · '}</span>
}

function ProjectSummary({
  imageUrl,
  title,
  codeUrl,
  linkUrl,
  explanationUrl,
  tags,
}) {
  return (
    <div className="ProjectSummary">
      <a target="_blank" rel="noopener noreferrer" href={linkUrl}>
        <img alt={title} src={imageUrl} />
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
  )
}

function App() {
  return (
    <div className="App">
      <BackgroundStripes />
      <Section className="TitleSection">
        <div className="title">
          Albert Sheu <span className="text-red subtitle">{' // '}許國恆</span>
        </div>
        <div className="subtitle">and his internet presence</div>
      </Section>
      <Section className="DescriptionSection">
        <div>
          I am a <span className="text-red">fullstack engineer</span> based out
          of New York.
          <br />
          <br />
          This site is my testbed for practicing web development and indexing
          random projects. A couple of my projects are on this page, and there
          will be links to the code that I own. A lot of these projects are very
          raw and in demo form, so be warned about bugs and code quality. I am
          also not a particularly good designer, so expect programmer art at
          best.
        </div>
      </Section>
      <Section className="ProjectSection">
        <Column>
          <ProjectSummary
            imageUrl={'/images/extreme-clicking-screenshot.png'}
            title={'Extreme clicking'}
            codeUrl={'https://github.com/flubstep/extreme-clicking-demo'}
            linkUrl={'https://extreme-clicking.flubdemo.com/'}
            explanationUrl={'https://arxiv.org/abs/1708.02750'}
            tags={['react web', 'machine learning', 'image annotation']}
          />
          <ProjectSummary
            imageUrl={'/images/flubworld-screenshot.png'}
            title={'Flubworld'}
            codeUrl={'https://github.com/flubstep/deception'}
            linkUrl={'http://flubworld.com/'}
            tags={['three.js', 'collaborative']}
          />
          <ProjectSummary
            imageUrl={'/images/puppyflat-screenshot.png'}
            title={'Puppyflat'}
            codeUrl={'https://github.com/flubstep/puppyflat'}
            linkUrl={'https://github.com/flubstep/puppyflat'}
            tags={['löve2d', 'game development']}
          />
          <ProjectSummary
            imageUrl={'/images/flubchess-screenshot.png'}
            title={'Flubchess'}
            codeUrl={'https://github.com/flubstep/extreme-clicking-demo'}
            linkUrl={'http://flubchess.com/'}
            tags={['jquery', 'firebase']}
          />
        </Column>
        <Column>
          <ProjectSummary
            imageUrl={'/images/clapping-music-screenshot.png'}
            title={'Clapping music'}
            codeUrl={'https://github.com/flubstep/extreme-clicking-demo'}
            linkUrl={'https://clapping-music.flubdemo.com/'}
            explanationUrl={'https://www.youtube.com/watch?v=FcFyl8amoEE'}
            tags={['react web', 'modern minimalist music', 'steve reich']}
          />
          <ProjectSummary
            imageUrl={'/images/cropper-screenshot.png'}
            title={'Image cropper'}
            codeUrl={'https://github.com/flubstep/extreme-clicking-demo'}
            linkUrl={'https://cropper.flubdemo.com/'}
            tags={['react web', 'component', 'image annotation']}
          />
          <ProjectSummary
            imageUrl={'/images/relevant-futurama-screenshot.png'}
            title={'Futurama quotes'}
            linkUrl={'http://relevantfuturamaquote.com/'}
            tags={['futurama', 'search', 'jquery', 'ffmpeg']}
          />
        </Column>
        <Column>
          <ProjectSummary
            imageUrl={'/images/lidar-ransac-screenshot.png'}
            title={'LIDAR RANSAC'}
            codeUrl={'https://github.com/flubstep/extreme-clicking-demo'}
            linkUrl={'https://lidar-ransac.flubdemo.com/'}
            explanationUrl={
              'https://en.wikipedia.org/wiki/Random_sample_consensus'
            }
            tags={['three.js', 'computer vision', 'lidar']}
          />
          <ProjectSummary
            imageUrl={'/images/quora-screenshot.png'}
            title={'Webnode parallelization'}
            linkUrl={'https://www.quora.com/q/quora/Improving-Site-Speed'}
            tags={['python', 'parallelization', 'site speed']}
          />
          <ProjectSummary
            imageUrl={'/images/engvalues-screenshot.png'}
            title={'Engineering value cards'}
            codeUrl={'https://github.com/flubstep/extreme-clicking-demo'}
            linkUrl={'https://engvalues.herokuapp.com/'}
            tags={['react web', 'tech culture', 'engineering management']}
          />
        </Column>
      </Section>
    </div>
  )
}

export default App
