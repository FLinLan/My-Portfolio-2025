import React from 'react'
const education = [
    {
      degree: "Bachelor of Engineering (BE) in Electrical and Computer Engineering",
      institution: "University of Washington",
      year: "September 2022 - June 2026",
      description: "Junior standing at the College of Engineering, active in various Engineering clubs and Undergraduate Research positions.",
      icon: "🎓",
    },
  ];

  const experience = [
    {
      role: "Firmware Engineer",
      company: "Husky Robotics",
      year: "October 2022 - May 2023 and October 2024 - Present",
      description: "Involved in programming PSoC microcontrollers to handle real-time data processing and communication protocols.",
      icon: "🤖",
    },
    {
      role: "Undergraduate Researcher",
      company: "Li's Research Group",
      year: "December 2024 - Present",
      description: "Focused on evaluating and implementing various local path planning algorithms for rover navigation, including Dynamic Window Approach (DWA), Timed Elastic Band (TEB), and PID controllers.",
      icon: "🤖",
    },
    {
      role: "Fullstack Engineer",
      company: "Eat Together",
      year: "December 2023 - Present",
      description: "Improved student connectivity through developing the Eat Together app, leveraging React Native and Firebase to facilitate shared meals.",
      icon: "💻",
    },
    {
      role: "Frontend Engineer",
      company: "Web Impact",
      year: "October 2023 - May 2024",
      description: "Expanded digital presence for Seattle communities by developing a dynamic web page for salmon murals.",
      icon: "💻",
    },
  ];

const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
            {/* Education section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                            <p className='text-gray-300'>{edu.institution}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Experience Section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                            <p className='text-gray-300'>{exp.company}</p>
                            <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                            <p className='text-gray-300 mt-2'>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education
