import { SignupForm } from "@/components/signup-form"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold gradient-text">Srazuka</h1>
          </Link>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Create an account</h2>
          <p className="text-foreground/70">Join Srazuka to start freelancing or hiring</p>
        </div>

        <SignupForm />

        <div className="text-center mt-6">
          <p className="text-sm text-foreground/70">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
