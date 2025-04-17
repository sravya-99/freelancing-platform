import { LoginForm } from "@/components/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold gradient-text">Srazuka</h1>
          </Link>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Welcome back</h2>
          <p className="text-foreground/70">Sign in to your account</p>
        </div>

        <LoginForm />

        <div className="text-center mt-6">
          <p className="text-sm text-foreground/70">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
