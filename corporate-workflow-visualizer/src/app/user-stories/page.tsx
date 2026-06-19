import React from 'react';
import Link from 'next/link';
import { userStoriesData, MoscowPriority, RiskLevel, BusinessValue } from '../../data/userStories';

export default function UserStoriesPage() {

  const getMoscowColor = (moscow: MoscowPriority) => {
    switch (moscow) {
      case 'Must have': return 'bg-[#C9540A]/10 text-[#C9540A] border border-[#C9540A]/20';
      case 'Should have': return 'bg-amber-500/10 text-amber-700 border border-amber-500/20';
      case 'Could have': return 'bg-blue-500/10 text-blue-700 border border-blue-500/20';
      case 'Won\\'t have': return 'bg-gray-500/10 text-gray-700 border border-gray-500/20';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: RiskLevel) => {
    switch (risk) {
      case 'High': return 'text-[#C9540A] font-medium';
      case 'Medium': return 'text-amber-600 font-medium';
      case 'Low': return 'text-emerald-600 font-medium';
      default: return 'text-gray-600';
    }
  };

  const getValueColor = (val: BusinessValue) => {
    switch (val) {
      case 'High': return 'text-emerald-600 font-medium';
      case 'Medium': return 'text-amber-600 font-medium';
      case 'Low': return 'text-[#C9540A] font-medium';
      default: return 'text-gray-600';
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans p-8 md:p-16">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-playfair tracking-tight text-[#1A1A1A]">
              User Stories <span className="text-[#C9540A] italic">Matrix</span>
            </h1>
            <p className="mt-2 text-[#1A1A1A]/70 max-w-2xl">
              Comprehensive breakdown of functional requirements across all five Retail Digital Twin pillars, evaluated using the MoSCoW prioritization framework.
            </p>
          </div>
        </header>

        <div className="bg-white border border-[#1A1A1A]/10 shadow-sm rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]/5 border-b border-[#1A1A1A]/10 text-sm tracking-wide uppercase text-[#1A1A1A]/80">
                  <th className="p-4 font-medium whitespace-nowrap">Section</th>
                  <th className="p-4 font-medium whitespace-nowrap">ID</th>
                  <th className="p-4 font-medium w-1/3 min-w-[300px]">User Story</th>
                  <th className="p-4 font-medium whitespace-nowrap">MoSCoW</th>
                  <th className="p-4 font-medium whitespace-nowrap">Risk</th>
                  <th className="p-4 font-medium whitespace-nowrap">Business Value</th>
                  <th className="p-4 font-medium min-w-[200px]">Interdependency</th>
                  <th className="p-4 font-medium whitespace-nowrap text-center">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/5">
                {userStoriesData.map((story) => (
                  <tr key={story.id} className="hover:bg-[#FAF8F5] transition-colors group">
                    <td className="p-4 align-top text-sm font-medium text-[#1A1A1A]/80">
                      {story.section}
                    </td>
                    <td className="p-4 align-top text-sm font-mono text-[#1A1A1A]/60">
                      {story.id}
                    </td>
                    <td className="p-4 align-top text-sm leading-relaxed text-[#1A1A1A]">
                      {story.story}
                    </td>
                    <td className="p-4 align-top">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${getMoscowColor(story.moscow)}`}>
                        {story.moscow}
                      </span>
                    </td>
                    <td className="p-4 align-top text-sm">
                      <span className={getRiskColor(story.risk)}>{story.risk}</span>
                    </td>
                    <td className="p-4 align-top text-sm">
                      <span className={getValueColor(story.businessValue)}>{story.businessValue}</span>
                    </td>
                    <td className="p-4 align-top text-sm text-[#1A1A1A]/70">
                      {story.interdependency}
                    </td>
                    <td className="p-4 align-top text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1A1A1A]/5 text-[#1A1A1A] font-semibold text-sm group-hover:bg-[#C9540A] group-hover:text-white transition-colors">
                        {story.priority}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </main >
  );
}
