export default function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-3xl font-bold text-purple-500">
          LegacyAI
        </h1>

        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        
        <div className="max-w-4xl">
          <h2 className="text-6xl font-extrabold leading-tight">
            Your Memory <br />
            Can Live Forever
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            LegacyAI transforms your memories, voice,
            thoughts, and life stories into a timeless
            AI-powered digital legacy for future generations.
          </p>

          <div className="flex justify-center gap-5 mt-12">
            <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-lg transition">
              Start Your Legacy
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 text-lg transition">
              Learn More
            </button>
          </div>
        </div>

      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-24">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            AI Memory
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Preserve your voice, memories, and personality
            with advanced AI technology.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Emotional Legacy
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Allow future generations to interact with your
            stories and wisdom forever.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Secure Forever
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Your memories are protected with encrypted
            long-term cloud storage.
          </p>
        </div>

      </section>

    </div>
  )
}
