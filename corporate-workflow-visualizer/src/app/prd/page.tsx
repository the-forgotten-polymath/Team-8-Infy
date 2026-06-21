import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function PRDPage() {
  const prdPath = path.join(process.cwd(), '../Inventory/PRD_Inventory.md');
  let prdContent = '';
  try {
    prdContent = fs.readFileSync(prdPath, 'utf8');
  } catch (error) {
    prdContent = '# Error\nCould not load the PRD file. Make sure it exists at `../Inventory/PRD_Inventory.md`.';
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans relative flex flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#1A1A1A]/10 px-6 py-4 flex items-center justify-between shadow-sm">
        <Link href="/" className="text-xl font-playfair font-semibold tracking-tight hover:text-[#C9540A] transition-colors">
          Team-8 <span className="text-[#C9540A] italic">Infy</span>
        </Link>
        <div className="text-sm uppercase tracking-widest font-medium text-[#1A1A1A]/60">
          Product Requirements Document
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-[#1A1A1A]/5">
          <article className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-playfair prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[#1A1A1A]
            prose-p:font-sans prose-p:font-light prose-p:leading-relaxed prose-p:text-[#1A1A1A]/80
            prose-a:text-[#C9540A] prose-a:no-underline hover:prose-a:underline
            prose-strong:font-medium prose-strong:text-[#1A1A1A]
            prose-code:font-mono prose-code:text-sm prose-code:bg-[#1A1A1A]/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
            prose-pre:bg-[#1A1A1A] prose-pre:text-[#FAF8F5] prose-pre:shadow-lg prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-blockquote:border-l-4 prose-blockquote:border-[#C9540A] prose-blockquote:bg-[#C9540A]/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:rounded-r-lg
            prose-th:bg-[#1A1A1A]/5 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold
            prose-td:border-b prose-td:border-[#1A1A1A]/10 prose-td:px-4 prose-td:py-3
            prose-table:border prose-table:border-[#1A1A1A]/10 prose-table:rounded-lg prose-table:overflow-hidden prose-table:w-full prose-table:text-sm
            prose-li:my-1 prose-ul:my-4 prose-ol:my-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {prdContent}
            </ReactMarkdown>
          </article>
        </div>
      </main>
    </div>
  );
}
