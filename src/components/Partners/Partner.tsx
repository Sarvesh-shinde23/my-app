import Image from "next/image"

export default function Component() {
  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 2", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 3", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 4", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 5", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 6", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 7", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 8", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 9", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 10", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 11", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 12", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="w-full py-12 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Our Trusted Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {partners.slice(0, 6).map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.slice(6, 12).map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}