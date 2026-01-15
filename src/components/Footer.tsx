export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div className="opacity-70">
          <div className="font-display text-xl font-extrabold mb-4">VacayLock</div>
          <p className="text-sm">
            Professional smart lock setup and automation for vacation rental hosts.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-sm mb-4 opacity-90">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="opacity-70 hover:opacity-100 transition-opacity">
                Essential Package
              </a>
            </li>
            <li>
              <a href="#services" className="opacity-70 hover:opacity-100 transition-opacity">
                Professional Package
              </a>
            </li>
            <li>
              <a href="#services" className="opacity-70 hover:opacity-100 transition-opacity">
                Enterprise Package
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-sm mb-4 opacity-90">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#how-it-works" className="opacity-70 hover:opacity-100 transition-opacity">
                How It Works
              </a>
            </li>
            <li>
              <a href="https://www.fiverr.com/vacaylock" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                Fiverr Profile
              </a>
            </li>
            <li>
              <a href="#contact" className="opacity-70 hover:opacity-100 transition-opacity">
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-sm mb-4 opacity-90">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                Compatible Locks
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center">
        <p className="text-sm opacity-60">
          &copy; 2026 VacayLock. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
