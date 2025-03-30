import Link from "next/link"
import { Mail, Github, Twitter, ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with back button */}
      <header className="border-b border-blue-500/30 backdrop-blur-sm bg-black/70 fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="text-gray-300 group-hover:text-blue-400 transition-colors">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20 pt-32 relative bg-gradient-to-b from-black to-blue-950/20">
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

            <ContactForm />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:contact@example.com"
                className="flex flex-col items-center p-6 border border-blue-500/20 rounded-lg bg-black/30 hover:bg-blue-900/10 hover:border-blue-500/40 transition-all"
              >
                <Mail className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-gray-400 mt-1">contact@example.com</p>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-blue-500/20 rounded-lg bg-black/30 hover:bg-blue-900/10 hover:border-blue-500/40 transition-all"
              >
                <Github className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-gray-400 mt-1">@biocoder</p>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-blue-500/20 rounded-lg bg-black/30 hover:bg-blue-900/10 hover:border-blue-500/40 transition-all"
              >
                <Twitter className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-medium">Twitter</h3>
                <p className="text-sm text-gray-400 mt-1">@bioinfocoder</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-green-500/30 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
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

