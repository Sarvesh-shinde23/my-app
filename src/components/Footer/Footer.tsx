import React from 'react'
import Image from 'next/image'; // Ensure you're using the Next.js Image component

export default function Component() {
  return (
    <footer className="w-full bg-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full" />
              <span className="text-xl font-bold">
                <Image
                  src="/OpenRainbow.png" // Specify the logo image path here
                  alt="Company Logo"
                  height={50} // Adjust the height
                  width={200} // Adjust the width
                  className="object-contain"
                />
              </span>
            </div>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. sed do eiusmod tempor incididunt ut tempor incididunt ut.
            </p>
            <button className="bg-primary text-white py-2 px-4 rounded-sm text-sm hover:bg-primary/90">
              Read More
            </button>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="space-y-2">
              {["Home", "Features", "About", "Services", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              {["Career", "Support", "Resource", "Strategy", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-muted-foreground">
              2750 Quadra Street, Park Area,
              <br />
              Victoria, Canada.
            </p>
            <p className="text-muted-foreground">+1001 01245587</p>
            <p className="text-muted-foreground">support@axolot.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container px-4 py-4 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
         
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              {/* Facebook Icon */}
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2.01L6 2c-1.1 0-1.99.89-1.99 1.99L4 22c0 1.1.89 1.99 1.99 1.99h12.01c1.1 0 1.99-.89 1.99-1.99V3.99c0-1.1-.89-1.99-1.99-1.99zM12 6.5c2.48 0 4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5-4.5-2.02-4.5-4.5 2.02-4.5 4.5-4.5zm0 7c1.38 0 2.5-1.12 2.5-2.5S13.38 8.5 12 8.5 9.5 9.62 9.5 11s1.12 2.5 2.5 2.5z"/>
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              {/* Twitter Icon */}
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4.01a8.82 8.82 0 0 1-2.54.69 4.48 4.48 0 0 0 1.98-2.48 8.73 8.73 0 0 1-2.78 1.07A4.46 4.46 0 0 0 15.46 3c-2.47 0-4.46 2-4.46 4.46 0 .35.04.7.1 1.03-3.71-.19-7.01-1.96-9.21-4.65-.38.65-.6 1.4-.6 2.21 0 1.52.77 2.86 1.94 3.64-.71 0-1.37-.22-1.96-.55v.06c0 2.13 1.51 3.91 3.52 4.32a4.47 4.47 0 0 1-1.17.15c-.28 0-.56-.03-.83-.08.56 1.74 2.18 3.01 4.1 3.04-1.5 1.17-3.39 1.87-5.44 1.87-.35 0-.7-.02-1.04-.06a12.48 12.48 0 0 0 6.71 1.97c8.04 0 12.44-6.67 12.44-12.44 0-.19 0-.37-.01-.56a8.91 8.91 0 0 0 2.2-2.26z"/>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              {/* Instagram Icon */}
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4h6zM12 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm2 7h-4v4h4v-4z"/>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              {/* LinkedIn Icon */}
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2.01c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h18zm-7.11 16H9.62v-6.25h3.27V14c0-2.35-1.04-3.75-3.66-3.75-2.75 0-4.23 1.95-4.23 4.01v5.26H4.79V9.81h3.97v1.86h.04c.37-.71 1.24-1.39 2.44-1.39 1.88 0 3.26 1.27 3.26 3.39v5.23z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
