import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiPython, SiJavascript } from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
})

const technologies = [
  {
    icon: RiReactjsLine,
    color: 'text-cyan-400',
    title: 'React',
    duration: 2.5,
  },
  {
    icon: SiMongodb,
    color: 'text-green-500',
    title: 'MongoDB',
    duration: 3,
  },
  {
    icon: DiJava,
    color: 'text-rose-500',
    title: 'Java',
    duration: 5,
  },
  {
    icon: FaNodeJs,
    color: 'text-green-500',
    title: 'NodeJS',
    duration: 2,
  },
  {
    icon: SiJavascript,
    color: 'text-yellow-300',
    title: 'JavaScript',
    duration: 6,
  },
  {
    icon: SiPython,
    color: 'text-sky-700',
    title: 'Python',
    duration: 4,
  },
]

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        {technologies.map((tech, index) => {
          const Icon = tech.icon
          return (
            <motion.div
              key={index}
              variants={iconVariants(tech.duration)}
              initial='initial'
              animate='animate'
              className='rounded-2xl border-4 border-neutral-800 p-4'
            >
              {' '}
              <Icon className={`text-7xl ${tech.color}`} title={tech.title} />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Technologies
