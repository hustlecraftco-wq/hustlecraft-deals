export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">About HustleCraft</h1>
          
        <div className="space-y-8 text-slate-300 leading-relaxed">

          {/* Founder's story and mission */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-2">
            <h2 className="text-2xl font-extrabold text-blue-300 mb-4">Why I Built HustleCraft</h2>
            <p>
              Two years ago, I walked away from my finance career. I was done being just another salesman pushing products I didn’t believe in. I wanted to build and invest, not sell. So I became a strategist—a hustler in the truest sense.
            </p>
            <p>
              In 2025, we’ve got endless ways to make money. With the world’s knowledge at our fingertips, I knew I could create something that mattered, but it didnt start here, it started with a drive to learn something new everyday. I built HustleCraft to teach, inspire, and prove: <span className="text-blue-400 font-bold">no matter how down you are, you are never out of the fight.</span>
            </p>
          </div>
          
          {/* Book excerpt inspired manifesto */}
          <div className="bg-purple-900/25 border border-purple-500/10 rounded-xl p-6 my-4">
            <h2 className="text-xl font-bold text-purple-300 mb-2">From My Book: "A FINAL WORD ON A NOT-SO-AVERAGE LIFE"</h2>
            <p>
              "I don’t claim to know everything, and this is not the only way to build wealth. I am not a guru, and I can't say you’ll be a millionaire by next year.
            </p>
            <p>
              Most people selling you otherwise are peddling hype, not a system. My system is built around one principle: make it as difficult as possible to fail. For those who commit, success is a matter of <span className="font-bold text-blue-300">'when,' not 'if.'</span>
            </p>
            <p>
              My success didn’t come from privilege. No wealthy family, big inheritance, or powerful network. What I had: crippling financial illiteracy, a hands-on labor career (working with explosives), and a defiant dream.
            </p>
          </div>

          {/* Current life and real purpose */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-2">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">What Freedom Means</h2>
            <p>
              I haven't worked a traditional job in over a year. The multiple income streams I built, with these exact principles, finally gave me what a job never could: independence. Today, my main priority is my family. Twelve years in the Navy kept me from home too much, real wealth is playing with my kids, creating moments. 
            </p>
            <p>
              HustleCraft wasn’t built so I could work more; automation takes care of that. I built this so I could live more, and to give you a real blueprint for living <span className="font-bold text-blue-400">your purpose</span>.
            </p>
          </div>

          {/* Call to rethink money and time */}
          <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded">
            <h2 className="text-xl font-bold text-yellow-300 mb-2">Don't Sell Your Most Valuable Asset</h2>
            <p>
              Success isn’t measured in cars or houses. It’s measured in moments. 
              Don’t trade your time for a job you hate or bury yourself in busywork. 
            </p>
            <p>
              If you had a briefcase with ten million dollars, but die tomorrow—do you take it? No way. It’s proof that your time is worth more than any cash. The real question: <span className="italic text-yellow-200">what are you selling your time for?</span>
            </p>
          </div>

          {/* The HustleCraft Wealth System motto */}
          <div className="bg-blue-900/25 border border-blue-500/10 rounded-xl p-6 my-4">
            <h2 className="text-xl font-bold text-blue-300 mb-2">The HustleCraft Wealth System Motto</h2>
            <p>
              <span className="font-bold text-blue-400">The freedom to define your own success, build life on your terms, and be right where you want to be.</span> Your transformation doesn’t end here—this is only the beginning.
            </p>
            <p>
              Hustle, learn, win, and build community. No hype—just a system built for real people to succeed.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
