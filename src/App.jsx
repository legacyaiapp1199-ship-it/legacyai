export default function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-hidden relative">
      {/* Background Glow */}
<div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-purple-700 opacity-20 blur-[120px] rounded-full"></div>

<div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-700 opacity-20 blur-[120px] rounded-full"></div>
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
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Your Memory <br />
            Can Live Forever
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mt-8 leading-relaxed max-w-3xl">
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
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-24 relative z-10">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 hover:scale-105 transition duration-300">
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
{/* How It Works */}
<section className="px-8 py-28 relative z-10">

  <div className="text-center mb-20">
    <h2 className="text-5xl font-bold mb-6">
      How LegacyAI Works
    </h2>

    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
      Preserve your memories and personality forever
      in just a few simple steps.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:scale-105 transition duration-300">
      <div className="text-5xl mb-6">🎙️</div>

      <h3 className="text-2xl font-bold mb-4">
        Record Your Story
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Upload voice recordings, memories,
        videos, and life experiences.
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:scale-105 transition duration-300">
      <div className="text-5xl mb-6">🧠</div>

      <h3 className="text-2xl font-bold mb-4">
        AI Learns You
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Advanced AI models understand your
        personality, emotions, and wisdom.
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:scale-105 transition duration-300">
      <div className="text-5xl mb-6">∞</div>

      <h3 className="text-2xl font-bold mb-4">
        Live Forever
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Future generations can interact with
        your digital legacy anytime.
      </p>
    </div>

  </div>

</section>
    </div>
  )
}
