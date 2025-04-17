import { MonitorCheck, BarChart3, Wallet, Shield, Clock, Bot } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <MonitorCheck className="h-10 w-10 text-primary" />,
      title: "Real-time Screen Monitoring",
      description:
        "Clients can view live screens of freelancers during designated work sessions via Screenpipe integration.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Live Task Data Analytics",
      description:
        "Visualize real-time task data from Fluvio in intuitive dashboards for both clients and freelancers.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-primary" />,
      title: "Secure Crypto Payments",
      description:
        "Milestone-based payment system utilizing the Stellar network for secure crypto transactions with escrow protection.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure & Transparent",
      description: "End-to-end encryption and blockchain verification ensure complete security and transparency.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Time Tracking",
      description: "Automated time tracking with screenshots and activity levels to ensure accountability.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI-Powered Summaries",
      description: "Get concise AI-generated summaries of project progress based on data received from Fluvio.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Srazuka combines cutting-edge technology with user-friendly design to revolutionize the freelancing
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
