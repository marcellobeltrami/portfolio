import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dna, Calendar, ArrowLeft, Share2, Bookmark, ChevronRight } from "lucide-react"
import {python_article} from "@/public/articles/text/content"

// This would typically come from a CMS or database
// For static export, we're using a hardcoded article
const article = {
  title: "Python for bioinformatics",
  excerpt: "How Python can be used in bionformatics tool development.",
  date: "March 31, 2025",
  author: "Marcello Beltrami",
  authorRole: "Bioinformatician",
  readTime: "10 min read",
  category: "Programming",
  tags: ["Languages", "Python","Pipelines", "Bioinformatics"],
  coverImage: "/articles/images/placeholder.svg?height=600&width=1200",
  authorImage: "/Me.png?height=100&width=100",
}

// For static export, we need to define the paths that should be generated
export function generateStaticParams() {
  // In a real app, this would come from your CMS or database
  return [
    { slug: "machine-learning-in-protein-structure-prediction" },
    { slug: "the-future-of-crispr-gene-editing-technologies" },
    { slug: "building-efficient-pipelines-for-ngs-data-analysis" },
  ]
}

export default function BlogArticle({ params }: { params: { slug: string } }) {
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
            <Link href="/#about" className="text-gray-300 hover:text-green-400 transition-colors">
              About
            </Link>
            <Link href="/#blog" className="text-gray-300 hover:text-green-400 transition-colors">
              Blog
            </Link>
            <Link href="/#projects" className="text-gray-300 hover:text-green-400 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
            Subscribe
          </Button>
        </div>
      </header>

      {/* Article Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/40 via-black to-black"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center">
            <Link
              href="/#blog"
              className="self-start flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>

            <div className="inline-block px-3 py-1 border border-green-500/30 bg-green-500/10 text-green-400 rounded-full text-sm font-mono mb-4">
              {article.category}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-center max-w-4xl mb-6">{article.title}</h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-green-500/30 bg-black shadow-[0_0_15px_rgba(0,255,128,0.5)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 animate-pulse"></div>
                </div>
                <div>
                  <p className="text-sm font-medium">{article.author}</p>
                  <p className="text-xs text-gray-400">{article.authorRole}</p>
                </div>
              </div>
              <span className="text-gray-500">|</span>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <span className="text-gray-500">|</span>
              <div className="text-gray-400 text-sm">{article.readTime}</div>
            </div>

            <div className="relative w-full max-w-4xl h-[300px] md:h-[500px] rounded-lg overflow-hidden border border-green-500/30 shadow-[0_0_15px_rgba(0,255,128,0.15)] mb-8">
              <Image src={article.coverImage || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 font-mono text-xs text-green-400 border-t border-green-500/30 bg-black/50 backdrop-blur-sm">
                <div className="flex justify-between">
                  <span>// PROTEIN_STRUCTURE.vis</span>
                  <span className="text-green-500">RENDERING:COMPLETE</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4"></div>
          <div className="max-w-3xl mx-auto">
            {/* Article sharing sidebar - desktop */}
            <div className="hidden md:flex flex-col fixed left-8 top-1/2 transform -translate-y-1/2 gap-4">
              <button className="p-3 rounded-full border border-green-500/30 bg-black/80 text-green-400 hover:bg-green-500/10 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-3 rounded-full border border-green-500/30 bg-black/80 text-green-400 hover:bg-green-500/10 transition-colors">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>

            {/* Article content */}
            <div className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-blockquote:border-green-500 prose-blockquote:bg-green-500/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-md">
              <p className="text-xl leading-relaxed">
                {python_article.b1}
             </p>

              {/* --Python for bioinformatics-- */}
              <h2>{python_article.a2}</h2>
              <p>
              {python_article.b2}
              </p>


              <div className="items-center relative w-fullength h-[350px]">
                <Image
                  src="/articles/images/TimeOfExecutions.png?height=1080&width=1920"
                  alt="Parallelization"
                  fill
                  className="object-contain"
                />
              </div>


              {/* --Performance and package management-- */}
              <h3>{python_article.a2_1}</h3>
              <p>
              {python_article.b2_1}
              </p>
              <div className="flex items-center relative w-fullength h-[350px]">
                <Image
                  src="/articles/images/Rust_vs_python.svg?height=1080&width=1920"
                  alt="Rust ferris VS Python"
                  fill
                  className="object-contain"
                />
              </div>

              {/* --Why some software developers dislike python-- */}
              <h2>{python_article.a3}</h2>
              <p>
              {python_article.b3}
              </p>

              {/* --Pipeline development using python in bioinformatics.-- */}
              <h2> {python_article.a4}</h2>
              <p>
              {python_article.b4}
              </p>


            {/* Article sharing - mobile */}
            <div className="flex md:hidden justify-center gap-4 mt-8 border-t border-gray-800 pt-8">
              <button className="p-3 rounded-full border border-green-500/30 bg-black/80 text-green-400 hover:bg-green-500/10 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-3 rounded-full border border-green-500/30 bg-black/80 text-green-400 hover:bg-green-500/10 transition-colors">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>

            {/* Author bio */}
            <div className="mt-12 border-t border-gray-800 pt-8">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-green-500/30 bg-black shadow-[0_0_15px_rgba(0,255,128,0.5)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{article.author}</h3>
                  <p className="text-gray-400 text-sm mb-2">{article.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gradient-to-b from-black to-green-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Related{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Articles</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative border border-green-500/20 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="The Future of CRISPR Gene Editing Technologies"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/80 text-black text-xs font-medium rounded">
                  Genomics
                </div>
              </div>
              <Link href="/blog/the-future-of-crispr-gene-editing-technologies" className="p-5 space-y-3 block">
                <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">
                  The Future of CRISPR Gene Editing Technologies
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Exploring the latest advancements in CRISPR technology and its implications for genetic research.
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-gray-500">April 22, 2023</span>
                  <span className="text-green-400 text-sm flex items-center gap-1 group-hover:underline">
                    Read more
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </div>

            <div className="group relative border border-green-500/20 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Building Efficient Pipelines for NGS Data Analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/80 text-black text-xs font-medium rounded">
                  Data Analysis
                </div>
              </div>
              <Link href="/blog/building-efficient-pipelines-for-ngs-data-analysis" className="p-5 space-y-3 block">
                <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">
                  Building Efficient Pipelines for NGS Data Analysis
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Best practices for developing scalable and reproducible pipelines for next-generation sequencing data.
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-gray-500">March 10, 2023</span>
                  <span className="text-green-400 text-sm flex items-center gap-1 group-hover:underline">
                    Read more
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </div>

            <div className="group relative border border-green-500/20 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Visualizing Genomic Data: Tools and Techniques"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/80 text-black text-xs font-medium rounded">
                  Visualization
                </div>
              </div>
              <Link href="/blog/visualizing-genomic-data-tools-and-techniques" className="p-5 space-y-3 block">
                <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">
                  Visualizing Genomic Data: Tools and Techniques
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  A comprehensive guide to modern approaches for visualizing complex genomic datasets.
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-gray-500">February 18, 2023</span>
                  <span className="text-green-400 text-sm flex items-center gap-1 group-hover:underline">
                    Read more
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
              View All Articles
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
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
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} BioNexus. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">
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

