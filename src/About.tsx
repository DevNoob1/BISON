import React from 'react';
import { AnimatedTooltip } from "../src/components/ui/animated-tooltip";

import './about.css';
import { StickyScroll } from "../src/components/ui/sticky-scroll-reveal";

import { PinContainer } from '../src/components/ui/3d-pin';
import Image from "next/image";


const About = () => {


  // const content = [
  //   {
  //     title: "Collaborative Editing",
  //     description:
  //       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  //     content: (
  //       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //         Collaborative Editing
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Real time changes",
  //     description:
  //       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  //     content: (
  //       <div className="h-full w-full  flex items-center justify-center text-white">
  //         <img
  //           src="/https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbQuWfEoVMD17gUxpL66olQpc-EMqYuFtANY68YDyniIxgb9Yu_y6hQowXAgbohbmRI5lncq58IE9dfoq_ENCDgV0za=w1920-h977"
  //           width={300}
  //           height={300}
  //           className="h-full w-full object-cover"
  //           alt="linear board demo"
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Version control",
  //     description:
  //       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //     content: (
  //       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //         Version control
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Running out of content",
  //     description:
  //       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //     content: (
  //       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //         Running out of content
  //       </div>
  //     ),
  //   },
  // ];
  const features = [
    {
      title: 'Gesture Recognition',
      description: 'Real-time recognition for drawing and erasing actions with dynamic adjustments.',
    },
    {
      title: 'Dynamic Pen Settings',
      description: 'Adjust pen color and size based on gestures for a personalized experience.',
    },
    {
      title: 'Multi-User Interaction',
      description: 'Enable simultaneous interaction for collaborative engagement with multiple users.',
    },
    {
      title: 'Speech Transcription',
      description: 'Utilize Google Cloud Speech-to-Text API for accurate and real-time transcription.',
    },
    {
      title: 'Responsive Interface',
      description: 'Experience seamless interaction across devices with a responsive web interface.',
    },
    {
      title: 'TensorFlow Integration',
      description: 'Incorporate TensorFlow for advanced machine learning-based gesture recognition.',
    },
    {
      title: 'Flask Backend',
      description: 'Implement a Flask backend for efficient handling of requests and responses.',
    },
    {
      title: 'Node.js Frontend',
      description: 'Build and serve the React application using Node.js for enhanced frontend functionality.',
    },
  ];




  return (
    <body>
      <div className="p-8 ">
        <p className=' text-4xl font-extrabold text-white'>About</p>
        <p className=' text-2xl  text-white'><br />
          Our solution is to develop a versatile and innovative platform called "Virtual Palette.ai" that aims to enhance remote collaboration, education, creativity, accessibility, remote assistance, and interactive events. Virtual Palette.ai leverages cutting-edge technologies such as computer vision, natural language processing, machine learning, and real-time communication to create a seamless and immersive experience for users.
        </p>
        <p className=' text-4xl mt-16 ml-5 font-extrabold text-white'>Features</p>

        <div className="container">
          {features.map((feature, index) => (

            <div className="card">
              <h3 className="title">{feature.title}</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <div className="circle">
                <p className=' text-white'>{feature.description}</p>
              </div>
            </div>))}
        </div>
      </div>
      {/* <div className='pt-[400px] overflow-hidden'>

        <PinContainer
          title="Virtual Palette"
          href="www.google.com"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                write some shezzz
              </span>
            </div>
            <div id='letja' className="flex flex-1 w-full rounded-lg mt-4 " />
          </div>
        </PinContainer>
      </div> */}
      {/* <div className="pt-[400px]">
        <StickyScroll content={content} />
      </div> */}


    </body>
  );
};

export default About;