"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dna, Microscope, Code, FileText, Mail, Github, Twitter, ExternalLink, ChevronRight, Instagram, InstagramIcon } from "lucide-react"

// Static data for the blog posts
const blogPosts = [
  {
    title: "Machine Learning in Protein Structure Prediction",
    excerpt:
      "How deep learning is revolutionizing our ability to predict protein structures from amino acid sequences.",
    date: "May 15, 2023",
    category: "Machine Learning",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/machine-learning-protein-structure",
  },
  
]


// Static data for projects
const projects = [
  {
    title: "rocketfasta",
    description:
      "A quick fasta parser written in Cpp.",
    tech: ["C++"],
    image: "/Rocketfasta.jpg?height=1080&width=1080",
    link: "https://github.com/marcellobeltrami/rocketfasta",
    status:"DEVELOPMENT",
  },
  {
    title: "Blastwrapper",
    description:
      "A weightless implementation of BLAST query which only relies on an internet connection and request module",
    tech: ["Python", "RESTapi", "BLAST"],
    image: "/BlastWrapper.jpg?height=1080&width=1080",
    link: "https://github.com/marcellobeltrami/BLASTWrapper",
    status:"COMPLETED"
  },
]

// User data
const userData = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
}

export default function Blogs() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="border-b border-green-500/30 backdrop-blur-sm bg-black/70 fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Dna className="h-6 w-6 text-green-400 group-hover:text-green-300 transition-colors" />
            <span className="font-mono text-xl tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              BIO<span className="text-green-400">::</span>NEXUS
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-gray-300 hover:text-green-400 transition-colors">
              About
            </Link>
            <Link href="#blog" className="text-gray-300 hover:text-green-400 transition-colors">
              Blog
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">
              Projects
            </Link>
            <Link href="/tutorials" className="text-gray-300 hover:text-green-400 transition-colors">
              Tutorials
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
            Connect
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/40 via-black to-black"></div>
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-green-500/10"></div>
            ))}
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 border border-green-500/30 bg-green-500/10 text-green-400 rounded-full text-sm font-mono mb-2">
              Bioinformatics Researcher & Developer
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Where{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Biology</span>{" "}
              Meets{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Code</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl">
              Exploring the intersection of computational biology, genomics, and machine learning to solve complex
              biological problems.
            </p>
            <div className="flex gap-4 pt-4">
                <Link href="https://github.com/marcellobeltrami" passHref>
                <Button className="bg-green-500 hover:bg-green-600 text-black font-medium">
                  View Projects
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
              <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                Read Blog
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-green-500/30 shadow-[0_0_15px_rgba(0,255,128,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
              <Image 
                unoptimized
                src="/Fasta.gif?height=800&width=800"
                alt="DNA visualization"
                fill
                className="object-cover mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 font-mono text-xs text-green-400 border-t border-green-500/30 bg-black/50 backdrop-blur-sm">
                <div className="flex justify-between">
                  <span>// ROCKETFASTA.EXE</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-purple-500/30 rounded-lg bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-blue-500/30 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-blue-500/30 shadow-[0_0_15px_rgba(0,128,255,0.15)]">
                <Image src="/Me.jpg?height=600&width=600" alt="Profile" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 font-mono text-xs text-blue-400 border-t border-blue-500/30 bg-black/50 backdrop-blur-sm">
                  <div className="flex justify-between">
                    <span>// RESEARCHER_PROFILE</span>
                    <span className="text-blue-500">ID:AUTHENTICATED</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 space-y-6">
              <div className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-400 rounded-full text-sm font-mono mb-2">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Decoding the{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Digital Genome
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                My name is Marcello Beltrami and I am Bioiformatician at the University of York. 
                My main focus is on reproducible genomic analysis leveraging the most cutting edge 
                solutions and frameworks including Nextflow and Snakemake. 

              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about open-source development and making bioinformatics tools more accessible to
                less tech savvy researchers worldwide. When I'm not coding or analyzing data, I enjoy writing about the latest
                developments in computational biology. I am currently improving my software developer soft skills such DevOps and design patterns to create more performant and.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Microscope className="h-5 w-5 text-blue-400" />
                  <span>Cancer Genomics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-400" />
                  <span>Tool Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-400" />
                  <span>Scientific Writing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dna className="h-5 w-5 text-blue-400" />
                  <span>Pipeline Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 relative bg-gradient-to-b from-black to-green-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 border border-green-500/30 bg-green-500/10 text-green-400 rounded-full text-sm font-mono mb-2">
              Latest Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              My {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Articles</span>{" "}
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Exploring the latest developments in bioinformatics, computational biology, and biotechnology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group relative border border-green-500/20 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/80 text-black text-xs font-medium rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">{post.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Link href="#" className="text-green-400 text-sm flex items-center gap-1 group-hover:underline">
                      Read more
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
              View All Articles
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 border border-purple-500/30 bg-purple-500/10 text-purple-400 rounded-full text-sm font-mono mb-2">
              Research & Development
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A collection of my work in bioinformatics, computational biology, and software development.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                <div className={`md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-purple-500/30 shadow-[0_0_15px_rgba(128,0,255,0.15)] group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 font-mono text-xs text-purple-400 border-t border-purple-500/30 bg-black/50 backdrop-blur-sm">
                      <div className="flex justify-between">
                        <span>// PROJECT_STATUS</span>
                        <span className="text-purple-500">{project.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`md:w-1/2 space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 flex gap-4">
                
                    <Link href={project.link} passHref>
                      <Button variant="ghost" className="text-gray-400 hover:text-white">
                      <Github className="mr-2 h-4 w-4" />
                      View Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-400 rounded-full text-sm font-mono mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                  Connect
                </span>
              </h2>
              <p className="text-gray-400 mt-4">
                Interested in collaboration, have questions about my research, or just want to say hello? Feel free to
                reach out!
              </p>
            </div>

            <div className="border border-blue-500/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm">
              {/* Client-side form handling with no server actions */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-black/60 border border-blue-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-black/60 border border-blue-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 bg-black/60 border border-blue-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 bg-black/60 border border-blue-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Send Message</Button>
              </form>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:marcello-blog@gmail.com"
                className="flex flex-col items-center p-6 border border-blue-500/20 rounded-lg bg-black/30 hover:bg-blue-900/10 hover:border-blue-500/40 transition-all"
              >
                <Mail className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-gray-400 mt-1">marcello-blog@gmail.com</p>
              </a>
              <a
                href="https://github.com/marcellobeltrami"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-blue-500/20 rounded-lg bg-black/30 hover:bg-blue-900/10 hover:border-blue-500/40 transition-all"
              >
                <Github className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-gray-400 mt-1">@marcellobeltrami</p>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-blue-500/20 rounded-lg bg-black/30 hover:bg-blue-900/10 hover:border-blue-500/40 transition-all"
              >
                <Instagram className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-medium">Instagram</h3>
                <p className="text-sm text-gray-400 mt-1">@readysetg00h</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-green-500/30 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Dna className="h-5 w-5 text-green-400" />
              <span className="font-mono text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                BIO<span className="text-green-400">::</span>NEXUS
              </span>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/marcellobeltrami" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="" className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} BioNexus. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#/" className="text-gray-500 hover:text-gray-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

