export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow">
      <div className="max-w-6xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">TechReview Pro</a>
          <nav>
            <ul className="flex gap-6 text-sm">
              <li><a href="#home" className="hover:opacity-80">Home</a></li>
              <li><a href="#reviews" className="hover:opacity-80">Reviews</a></li>
              <li><a href="#guides" className="hover:opacity-80">Buying Guides</a></li>
              <li><a href="#categories" className="hover:opacity-80">Categories</a></li>
              <li><a href="#about" className="hover:opacity-80">About</a></li>
              <li><a href="#contact" className="hover:opacity-80">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}


