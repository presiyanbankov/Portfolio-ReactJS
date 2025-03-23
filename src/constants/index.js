import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/project-2.png'
import project3 from '../assets/projects/project-3.jpg'
import project4 from '../assets/projects/project-4.jpg'

export const HERO_CONTENT = `I’m a full-stack developer who geeks out over turning ideas into clean, functional apps. Whether I’m polishing a front-end with technologies like React and Tailwind or tinkering with a back-end using Node.js, Express, and MongoDB, I thrive on building tools that work—not just for users, but for the teams scaling them. My goal? Code that's simple to maintain, interfaces that feel effortless, and solutions that quietly make everyone's day a little easier.`

export const ABOUT_TEXT = `I am a dedicated full-stack developer with a passion for finding efficient solutions and creating user-friendly web applications. While I mainly develop web applications with a variety of technologies like React, Tailwind, Node.js, and MongoDB, I've also become familiar with other languages like Java, Python, and C# for everything from automating tasks to game mods. My coding journey began with a deep curiosity for how things work, and I am currently evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. When I'm not at my desk, I'm probably shooting hoops, getting way too competitive at chess, or watching One Piece.`

let projectsData = []

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'

const fetchProjects = fetch(`${API_URL}/public`)
  .then((response) => response.json())
  .then((data) => {
    projectsData = data.projects

    const PROJECTS = projectsData.map((project, index) => {
      const images = [project1, project2, project3, project4]
      const technologies = [
        ['HTML', 'Tailwind', 'React', 'Node.js', 'Express', 'MongoDB'],
        ['HTML', 'CSS', 'React', 'Firebase'],
        ['HTML', 'Tailwind', 'React'],
        ['HTML', 'Tailwind', 'React', 'Node.js', 'Express', 'MongoDB'],
      ]
      const links = [
        'https://projectman.up.railway.app/',
        'https://prezko-coffee-tracker.netlify.app/',
        '/',
        'https://github.com/PreZko/Movie-App-React-JS',
      ]
      return {
        title: project.title,
        description: project.description,
        image: images[index] || null,
        technologies: technologies[index] || null,
        link: links[index] || null,
      }
    })

    return PROJECTS
  })
  .catch((err) => {
    console.log('Error fetching projects: ', err)
    return []
  })

export const EXPERIENCES = []

export const PROJECTS_PROMISE = fetchProjects

export const CONTACT = {
  address: 'Ullmannstraße 54, Vienna 1150 ',
  phoneNo: '+359 88 5745 587',
  email: 'presiyan.bankov@gmail.com',
}
