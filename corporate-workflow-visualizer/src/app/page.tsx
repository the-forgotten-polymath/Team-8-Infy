import Link from 'next/link';

export default function EntryPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans flex flex-col items-center justify-center overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] rounded-full bg-[#C9540A]/5 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[50vw] h-[50vw] rounded-full bg-[#1A1A1A]/5 blur-3xl" />
      </div>

      <div className="z-10 text-center max-w-4xl px-6">
        <h1 className="text-6xl md:text-8xl font-playfair mb-6 tracking-tight text-[#1A1A1A]">
          Team-8 <span className="text-[#C9540A] italic">Infy</span>
        </h1>
        <p className="text-xl md:text-2xl font-sans mb-12 text-[#1A1A1A]/70 font-light max-w-2xl mx-auto">
          Retail Store Management System
        </p>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center">
          <Link 
            href="/final-workflow"
            className="group relative px-8 py-4 bg-[#C9540A] text-[#FAF8F5] overflow-hidden rounded-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center w-64 shadow-xl"
          >
            <div className="absolute inset-0 w-full h-full bg-[#1A1A1A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative font-medium tracking-wide uppercase text-sm font-semibold">Final Workflow Map</span>
          </Link>

          <Link 
            href="/workflow"
            className="group relative px-8 py-4 bg-[#1A1A1A] text-[#FAF8F5] overflow-hidden rounded-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center w-64 shadow-xl"
          >
            <div className="absolute inset-0 w-full h-full bg-[#C9540A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative font-medium tracking-wide uppercase text-sm">Interactive Workflow</span>
          </Link>

          <Link 
            href="/prd"
            className="group relative px-8 py-4 bg-[#1A1A1A] text-[#FAF8F5] overflow-hidden rounded-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center w-64 shadow-xl"
          >
            <div className="absolute inset-0 w-full h-full bg-[#C9540A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative font-medium tracking-wide uppercase text-sm">PRD Document</span>
          </Link>

          <Link 
            href="/user-stories"
            className="group relative px-8 py-4 bg-transparent border border-[#1A1A1A]/20 text-[#1A1A1A] overflow-hidden rounded-sm transition-all hover:border-[#C9540A] hover:text-[#C9540A] hover:scale-105 active:scale-95 flex items-center justify-center w-64 bg-white/50 backdrop-blur-sm"
          >
            <span className="relative font-medium tracking-wide uppercase text-sm">User Stories Matrix</span>
          </Link>

          <Link 
            href="/flow-explanation"
            className="group relative px-8 py-4 bg-transparent border border-[#1A1A1A]/20 text-[#1A1A1A] overflow-hidden rounded-sm transition-all hover:border-[#C9540A] hover:text-[#C9540A] hover:scale-105 active:scale-95 flex items-center justify-center w-64 bg-white/50 backdrop-blur-sm"
          >
            <span className="relative font-medium tracking-wide uppercase text-sm">Flow Explanation</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
