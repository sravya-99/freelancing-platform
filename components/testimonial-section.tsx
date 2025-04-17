import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Srazuka has transformed how I manage my freelance projects. The real-time monitoring gives my clients peace of mind, and I get paid faster with the milestone system.",
      author: "Alex Johnson",
      role: "Full-Stack Developer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a client, I love being able to see real-time progress and analytics. The AI summaries save me hours of review time, and the secure payment system protects both parties.",
      author: "Sarah Williams",
      role: "Marketing Director",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The crypto payment integration is seamless. I can work with international clients without worrying about currency conversion or payment delays.",
      author: "Michael Chen",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Join thousands of satisfied freelancers and clients who have transformed their work with Srazuka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border border-border/50 shadow-lg">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="mb-6 text-foreground/80 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
