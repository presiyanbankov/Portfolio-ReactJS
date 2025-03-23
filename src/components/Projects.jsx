import { useEffect, useState } from 'react'
import { PROJECTS_PROMISE } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    PROJECTS_PROMISE.then((data) => {
      setProjects(data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <i className='fa-solid fa-gear animate-spin text-4xl'></i>
      </div>
    )
  }

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <img
                width={150}
                height={150}
                src={project.image}
                alt={project.title}
                className='mb-6 rounded'
              ></img>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <div className='flex justify-between'>
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                <a href={project.link} target='_blank'>
                  <i className='fa-solid fa-arrow-right text-neutral-300'></i>
                </a>
              </div>

              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                >
                  {tech}{' '}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
