export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl p-6 shadow">
        <h3 className="text-xl font-semibold mb-2">📧 Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-3">Get the latest reviews and deals delivered to your inbox!</p>
        <form className="flex flex-col gap-3">
          <input className="border-2 rounded px-3 py-2" placeholder="Enter your email" />
          <button className="bg-sky-500 text-white rounded py-2">Subscribe</button>
        </form>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="bg-gray-100 border-2 border-dashed rounded p-6 text-center text-gray-500">
          <h4 className="font-semibold">Advertisement</h4>
          <p>300x250 Rectangle</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow">
        <h3 className="text-xl font-semibold mb-3">🔥 Popular Reviews</h3>
        <ul className="text-sm text-gray-800 space-y-2">
          <li><a href="#" className="hover:text-sky-500">Best Gaming Monitors 2024: 4K vs 1440p</a></li>
          <li><a href="#" className="hover:text-sky-500">AirPods Pro vs Sony WF-1000XM4 Comparison</a></li>
          <li><a href="#" className="hover:text-sky-500">Budget Gaming Laptops Under $800</a></li>
          <li><a href="#" className="hover:text-sky-500">Smart Home Security Cameras Reviewed</a></li>
          <li><a href="#" className="hover:text-sky-500">Electric Scooter Buying Guide 2024</a></li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow">
        <h3 className="text-xl font-semibold mb-3">📂 Categories</h3>
        <ul className="text-sm text-gray-800 space-y-2">
          <li><a href="#" className="hover:text-sky-500">Laptops & Computers (45)</a></li>
          <li><a href="#" className="hover:text-sky-500">Audio & Headphones (32)</a></li>
          <li><a href="#" className="hover:text-sky-500">Smartphones & Tablets (28)</a></li>
          <li><a href="#" className="hover:text-sky-500">Gaming Gear (21)</a></li>
          <li><a href="#" className="hover:text-sky-500">Smart Home (18)</a></li>
          <li><a href="#" className="hover:text-sky-500">Wearables (15)</a></li>
        </ul>
      </div>
    </aside>
  );
}


