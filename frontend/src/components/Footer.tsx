export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white mt-12">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sky-400 mb-2">Follow Us</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><a href="#">📘 Facebook</a></li>
              <li><a href="#">🐦 Twitter</a></li>
              <li><a href="#">📷 Instagram</a></li>
              <li><a href="#">📺 YouTube</a></li>
              <li><a href="#">💼 LinkedIn</a></li>
              <li><a href="#">📧 Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sky-400 mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Disclosure</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sky-400 mb-2">Categories</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><a href="#">Laptops</a></li>
              <li><a href="#">Smartphones</a></li>
              <li><a href="#">Audio</a></li>
              <li><a href="#">Gaming</a></li>
              <li><a href="#">Smart Home</a></li>
              <li><a href="#">Wearables</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-700 mt-8 pt-6 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} TechReview Pro. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Affiliate Disclosure</a></p>
          <p className="mt-2"><small>As an Amazon Associate, we earn from qualifying purchases. This doesn't affect our review opinions.</small></p>
        </div>
      </div>
    </footer>
  );
}


