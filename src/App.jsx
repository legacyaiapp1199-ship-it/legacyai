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
      {/* Pricing */}
<section className="max-w-6xl mx-auto px-6 py-24">

  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-bold mb-6">
      Choose Your Legacy
    </h2>

    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
      Simple plans for preserving your memories forever.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Basic */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

      <h3 className="text-2xl font-bold mb-4">
        Basic
      </h3>

      <div className="text-5xl font-bold mb-6">
        $9
        <span className="text-lg text-gray-400">
          /month
        </span>
      </div>

      <ul className="space-y-4 text-gray-300 mb-8">
        <li>✔ Voice Memories</li>
        <li>✔ AI Personality</li>
        <li>✔ Secure Storage</li>
      </ul>

      <button className="w-full py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition">
        Get Started
      </button>

    </div>

    {/* Premium */}
    <div className="bg-gradient-to-b from-purple-600/40 to-pink-500/20 border border-purple-400/30 rounded-3xl p-10 backdrop-blur-xl scale-105">

      <div className="mb-4 inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
        MOST POPULAR
      </div>

      <h3 className="text-2xl font-bold mb-4">
        Premium
      </h3>

      <div className="text-5xl font-bold mb-6">
        $29
        <span className="text-lg text-gray-300">
          /month
        </span>
      </div>

      <ul className="space-y-4 text-gray-200 mb-8">
        <li>✔ Everything in Basic</li>
        <li>✔ AI Voice Clone</li>
        <li>✔ Video Memories</li>
        <li>✔ Family Access</li>
      </ul>

      <button className="w-full py-4 rounded-2xl bg-purple-500 hover:bg-purple-400 transition">
        Start Premium
      </button>

    </div>

    {/* Eternal */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

      <h3 className="text-2xl font-bold mb-4">
        Eternal
      </h3>

      <div className="text-5xl font-bold mb-6">
        $99
        <span className="text-lg text-gray-400">
          /month
        </span>
      </div>

      <ul className="space-y-4 text-gray-300 mb-8">
        <li>✔ Full AI Avatar</li>
        <li>✔ Unlimited Memories</li>
        <li>✔ Future Generations Access</li>
        <li>✔ Priority Support</li>
      </ul>

      <button className="w-full py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition">
        Go Eternal
      </button>

    </div>

  </div>

</section>
      {/* Testimonials */}
<section className="max-w-6xl mx-auto px-6 py-24">

  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-bold mb-6">
      Loved By Families
    </h2>

    <p className="text-gray-400 text-xl">
      People are preserving their legacy with LegacyAI.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <p className="text-gray-300 leading-relaxed mb-6">
        “LegacyAI helped me preserve my father's voice forever.
        It feels magical.”
      </p>

      <div>
        <h4 className="font-bold">Sarah Mitchell</h4>
        <p className="text-gray-500 text-sm">
          New York
        </p>
      </div>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <p className="text-gray-300 leading-relaxed mb-6">
        “I recorded my life stories for my future grandchildren.
        Incredible experience.”
      </p>

      <div>
        <h4 className="font-bold">Michael Lee</h4>
        <p className="text-gray-500 text-sm">
          Toronto
        </p>
      </div>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <p className="text-gray-300 leading-relaxed mb-6">
        “This feels like the future of memory preservation and AI.”
      </p>

      <div>
        <h4 className="font-bold">Emma Rodriguez</h4>
        <p className="text-gray-500 text-sm">
          California
        </p>
      </div>
    </div>

  </div>

</section>

{/* Footer */}
<footer className="border-t border-white/10 mt-20">

  <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

    <div>
      <h3 className="text-2xl font-bold text-purple-400">
        LegacyAI
      </h3>

      <p className="text-gray-500 mt-2">
        Preserve your memories forever.
      </p>
    </div>

    <div className="flex gap-6 text-gray-400">
      <a href="#">About</a>
      <a href="#">Pricing</a>
      <a href="#">Contact</a>
      <a href="#">Privacy</a>
    </div>

  </div>

</footer>
    </div>
  )
}
