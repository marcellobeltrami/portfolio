import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dna, Calendar, ArrowLeft, Share2, Bookmark, ChevronRight } from "lucide-react"

// This would typically come from a CMS or database
// For static export, we're using a hardcoded article
const article = {
  title: "Machine Learning in Protein Structure Prediction",
  excerpt: "How deep learning is revolutionizing our ability to predict protein structures from amino acid sequences.",
  date: "May 15, 2023",
  author: "Dr. Jane Smith",
  authorRole: "Computational Biologist",
  readTime: "8 min read",
  category: "Machine Learning",
  tags: ["AlphaFold", "Deep Learning", "Protein Folding", "Bioinformatics"],
  coverImage: "/placeholder.svg?height=600&width=1200",
  authorImage: "/placeholder.svg?height=100&width=100",
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
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-green-500/30">
                  <Image
                    src={article.authorImage || "/placeholder.svg"}
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
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
        <div className="container mx-auto px-4">
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
                The prediction of protein structures from amino acid sequences has been one of the grand challenges in
                computational biology for decades. Recent breakthroughs in deep learning approaches have revolutionized
                this field, enabling unprecedented accuracy in structure prediction.
              </p>

              <h2>The Protein Folding Problem</h2>

              <p>
                Proteins are the workhorses of cells, performing a vast array of functions essential for life. Their
                function is intimately tied to their three-dimensional structure, which is determined by the sequence of
                amino acids that make up the protein. The process by which a protein folds into its functional structure
                is complex and not fully understood, despite decades of research.
              </p>

              <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-blue-500/30 shadow-[0_0_15px_rgba(0,128,255,0.15)] my-8">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Protein folding illustration"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 font-mono text-xs text-blue-400 border-t border-blue-500/30 bg-black/50 backdrop-blur-sm">
                  <div className="flex justify-between">
                    <span>// FOLDING_PATHWAY.sim</span>
                    <span className="text-blue-500">VISUALIZATION:ACTIVE</span>
                  </div>
                </div>
              </div>

              <p>Traditional methods for protein structure prediction have included:</p>

              <ul>
                <li>Homology modeling (using known structures of similar proteins)</li>
                <li>Molecular dynamics simulations</li>
                <li>Fragment-based assembly</li>
                <li>Energy minimization approaches</li>
              </ul>

              <p>
                While these methods have been valuable, they often fall short when dealing with proteins that have no
                close homologs with known structures or when modeling complex folding patterns.
              </p>

              <h2>The Deep Learning Revolution</h2>

              <p>
                The application of deep learning to protein structure prediction has transformed the field. In
                particular, the development of AlphaFold 2 by DeepMind has been hailed as a major scientific
                breakthrough, achieving accuracy levels previously thought to be years or even decades away.
              </p>

              <blockquote>
                "AlphaFold represents a major advance in protein structure prediction, demonstrating that AI can solve
                fundamental scientific problems." — Dr. John Jumper, DeepMind
              </blockquote>

              <h3>How Deep Learning Models Work</h3>

              <p>
                Modern deep learning approaches to protein structure prediction typically involve several key
                components:
              </p>

              <div className="bg-gray-900 border border-green-500/30 rounded-lg p-5 my-6 font-mono text-sm overflow-x-auto">
                <pre className="text-green-400">
                  {`# Simplified pseudocode for a deep learning protein structure prediction pipeline

def predict_structure(amino_acid_sequence):
    # 1. Generate multiple sequence alignment (MSA)
    msa = generate_msa(amino_acid_sequence)
    
    # 2. Extract evolutionary information
    covariance_features = extract_covariance(msa)
    
    # 3. Feed into deep neural network
    initial_structure = deep_neural_network(amino_acid_sequence, covariance_features)
    
    # 4. Refine structure iteratively
    final_structure = refine_structure(initial_structure)
    
    return final_structure`}
                </pre>
              </div>

              <p>
                The key innovation in recent models is their ability to leverage evolutionary information through
                multiple sequence alignments (MSAs) and to incorporate physical constraints into the prediction process.
              </p>

              <h2>Impact on Biological Research</h2>

              <p>
                The ability to accurately predict protein structures has profound implications for various areas of
                biological research:
              </p>

              <ul>
                <li>
                  <strong>Drug Discovery:</strong> Enabling structure-based drug design for previously inaccessible
                  targets
                </li>
                <li>
                  <strong>Understanding Disease:</strong> Providing insights into how mutations affect protein structure
                  and function
                </li>
                <li>
                  <strong>Synthetic Biology:</strong> Facilitating the design of novel proteins with desired functions
                </li>
                <li>
                  <strong>Evolutionary Biology:</strong> Offering new perspectives on protein evolution and adaptation
                </li>
              </ul>

              <h2>Future Directions</h2>

              <p>
                Despite the remarkable progress, several challenges and opportunities remain in the field of protein
                structure prediction:
              </p>

              <ol>
                <li>Predicting protein dynamics and conformational changes</li>
                <li>Modeling protein-protein and protein-ligand interactions</li>
                <li>Predicting the effects of post-translational modifications</li>
                <li>Developing more computationally efficient models for real-time prediction</li>
              </ol>

              <p>
                As deep learning techniques continue to evolve and as more experimental data becomes available, we can
                expect further advances in our ability to predict and understand protein structures, bringing us closer
                to a comprehensive understanding of the molecular machinery of life.
              </p>

              <h2>References</h2>

              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Jumper, J., Evans, R., Pritzel, A. et al. (2021). Highly accurate protein structure prediction with
                  AlphaFold. Nature, 596, 583–589.
                </li>
                <li>
                  Baek, M., DiMaio, F., Anishchenko, I. et al. (2021). Accurate prediction of protein structures and
                  interactions using a three-track neural network. Science, 373, 871–876.
                </li>
                <li>
                  Senior, A.W., Evans, R., Jumper, J. et al. (2020). Improved protein structure prediction using
                  potentials from deep learning. Nature, 577, 706–710.
                </li>
                <li>
                  Yang, J., Anishchenko, I., Park, H. et al. (2020). Improved protein structure prediction using
                  predicted interresidue orientations. PNAS, 117, 1496–1503.
                </li>
              </ol>
            </div>

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
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-green-500/30">
                  <Image
                    src={article.authorImage || "/placeholder.svg"}
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{article.author}</h3>
                  <p className="text-gray-400 text-sm mb-2">{article.authorRole}</p>
                  <p className="text-gray-300">
                    Dr. Smith specializes in computational biology with a focus on machine learning applications in
                    protein structure prediction. She has published over 30 papers in leading journals and is a
                    principal investigator at the Institute for Computational Biomedicine.
                  </p>
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

