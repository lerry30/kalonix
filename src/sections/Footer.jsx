import { LogoSVG } from '../components/SVGs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        {/* <!-- Affiliate Disclosure --> */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-400">
            As an Amazon Associate, we earn from qualifying purchases. This site contains affiliate links, which may earn us a commission at no extra cost to you.
          </p>
        </div>

        {/* <!-- Footer Content --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <LogoSVG className="w-14 h-14 mt-2" />
              <span className="font-bold text-lg text-red-600">Kalonix</span>
            </a>
          </div>

          {/* <!-- Navigation Links --> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="grid grid-cols-2 gap-y-2">
              <li><a href="/home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/top-earbuds" className="hover:text-blue-400 transition">Top Earbuds</a></li>
              <li><a href="/reviews" className="hover:text-blue-400 transition">Reviews</a></li>
              <li><a href="/buying-guide" className="hover:text-blue-400 transition">Buying Guide</a></li>
              <li><a href="/deals" className="hover:text-blue-400 transition">Deals</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="flex flex-col gap-y-2">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
              <li></li>
            </ul>
          </div>

          {/* <!-- Newsletter Signup --> */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest deals on wireless earbuds under $50!</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="w-full p-2 rounded-l-md bg-gray-800 border-none focus:ring-2 focus:ring-blue-400 text-white" />
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-r-md transition">Subscribe</button>
            </div>
          </div> */}

          {/* <!-- Contact & Social --> */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">Contact us: <a href="mailto:info@yourearbudsite.com" className="hover:text-blue-400">info@yourearbudsite.com</a></p>
            <div className="flex space-x-4">
              <a href="https://x.com" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.265.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.514.069-2.975.458-4.105 1.589-1.131 1.131-1.52 2.592-1.589 4.105-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.069 1.514.458 2.975 1.589 4.105 1.131 1.131 2.592 1.52 4.105 1.589 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.514-.069 2.975-.458 4.105-1.589 1.131-1.131 1.52-2.592 1.589-4.105.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.069-1.514-.458-2.975-1.589-4.105-1.131-1.131-2.592-1.52-4.105-1.589-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/></svg>
              </a>
              <a href="https://pinterest.com" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.192.694.795.576C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div> */}
        </div>

        {/* <!-- Copyright --> */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">© 2025 Your Earbuds Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;