import React from 'react'
import { FaGithub } from 'react-icons/fa'
import CPU from '../assets/CPU.png'
import MotorBoard from '../assets/MotorBoard.png'
import PlantMonitor from '../assets/PlantMonitor.png'
import Recommend from '../assets/Recommend.png'

const Project = () => {
    const projects = [
        {
          title: "Five Staged Pipelined ARM CPU",
          description:
            "Designed and Implemented a 64-bit ARM CPU with a five-staged pipeline architecture (Fetch, Decode, Execute, Memory, Writeback).",
          techStack: ["SystemVerilog", "ModelSim", "ARM Assembly", "FPGA", "Intel Quartus"],
          link: "https://github.com/evanzhaodev/CSE_EE-469-Labs",
          github: 'https://github.com/evanzhaodev/CSE_EE-469-Labs',
          image: CPU, // Replace with your project screenshot
        },
        {
          title: "BLDC Motor Board",
          description:
            "Implemented a CAN-FD communication protocol to achieve real-time motor control with low latency.",
          techStack: ["Embedded C", "PuTTY", "PSoc Creator", "Altium Designer", "Moteus Controller"],
          link: "https://github.com/huskyroboticsteam/Moteus_Breakout",
          github: 'https://github.com/huskyroboticsteam/Moteus_Breakout',
          image: MotorBoard, // Replace with your project screenshot
        },
        {
          title: "Plant Monitoring System",
          description:
            "Developed a multi-functional IoT system capable of monitoring 3 environmental parameters simultaneously.",
          techStack: ["Arduino ESP32", "RTOS", "Embedded C", "Hardware Sensors"],
          link: "https://github.com/FLinLan/Plant-Monitoring-System",
          github: 'https://github.com/FLinLan/Plant-Monitoring-System',
          image: PlantMonitor, // Replace with your project screenshot
        },
        {
          title: "Recommendation Buddy System",
          description:
            "Implemented a collaborative filtering algorithm that analyzes users' dining preferences, scheduling patterns, and past meal interactions to suggest compatible dining companions.",
          techStack: ["React Native", "Node.js", "Expo", "Firebase", "Javascript", "HTML/CSS"],
          link: "https://github.com/eat-together-team/eat-together",
          github: 'https://github.com/eat-together-team/eat-together',
          image: Recommend, // Replace with your project screenshot
        },
      ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project, index) => (
                <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                    <div className='p-6'>
                        <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.techStack.map((tech, idx) => (
                                <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Project
