import React from 'react'

const QuoteForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 flex items-center justify-center">
    <div className="w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">
      {/* Left Panel */}
      <div className="bg-primary p-8 text-primary-foreground">
        <h2 className="text-2xl font-bold">100% Satisfaction Guaranteed</h2>
        <p className="mt-6 text-primary-foreground/80">
          Lorem ipsum dolor sit amet eiusmod tempor labore dolore magna aliqua. Ut enim ad minimo laboris ut aliquip ex ea commodo consequat.
        </p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">What will be the next step?</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">✓</div>
              <span>We'll prepare a proposal</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">✓</div>
              <span>Together we discuss it</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">✓</div>
              <span>Let's start a policy</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Talk to an expert:</h3>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5">
                {/* Phone Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16.29l-4.6-4.6c-.3-.3-.75-.29-1.04.01L12 14.72l-3.2-2.2c-.35-.24-.79-.35-1.24-.35a2.5 2.5 0 0 0-2.5 2.5c0 .99.56 1.88 1.4 2.33l3.6 2.4c.35.24.79.35 1.24.35s.89-.11 1.24-.35l1.75-1.75c.29-.3.3-.75.01-1.04L16.29 21l-3.6-2.4c-.35-.24-.79-.35-1.24-.35a2.5 2.5 0 0 0-2.5 2.5c0 .99.56 1.88 1.4 2.33l3.6 2.4c.35.24.79.35 1.24.35s.89-.11 1.24-.35z" />
                </svg>
              </span>
              <span>0333 567 8900</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5">
                {/* Message Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 3H3c-1.1 0-1.99.89-1.99 1.99L1 19.01C1 20.1 1.89 21 2.99 21h18.02c1.1 0 1.99-.89 1.99-1.99V4.01c0-1.1-.89-1.99-1.99-1.99zM4 19V5h16v14H4z" />
                </svg>
              </span>
              <span>Live Chat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="p-8 bg-background">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-primary">Get a free quote</h2>
            <p className="text-muted-foreground mt-2">Protect your awesome family</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-100" />
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="input-class" />
            <input type="tel" placeholder="Phone" className="input-class" />
          </div>
          <input type="email" placeholder="Email" className="input-class" />
          <textarea placeholder="Your message" className="input-class min-h-[120px]" />
          <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md text-lg hover:bg-primary/90">
            Get a quote
          </button>
        </form>
      </div>
    </div>
  </div>
)
}
  
export default QuoteForm