import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md text-center space-y-6">
        <div className="inline-block px-3 py-1 border border-green-500/30 bg-green-500/10 text-green-400 rounded-full text-sm font-mono mb-2 mx-auto">
          404 Error
        </div>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-green-500 hover:bg-green-600 text-black font-medium mt-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}