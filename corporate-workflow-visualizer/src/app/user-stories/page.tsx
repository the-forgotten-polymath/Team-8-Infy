'use client';

import React, { useState, useMemo } from 'react';
import { userStoriesData, MoscowPriority, RiskLevel, BusinessValue } from '../../data/userStories';

type SortField = 'id' | 'priority' | 'moscow' | 'risk' | 'businessValue';
type SortDirection = 'asc' | 'desc';

export default function UserStoriesPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [moscowFilter, setMoscowFilter] = useState<MoscowPriority | 'All'>('All');
  const [riskFilter, setRiskFilter] = useState<RiskLevel | 'All'>('All');
  const [valueFilter, setValueFilter] = useState<BusinessValue | 'All'>('All');
  const [sortField, setSortField] = useState<SortField>('priority');
  const [sortDir, setSortDir] = useState<SortDirection>('asc');

  const sections = Array.from(new Set(userStoriesData.map((s) => s.section)));

  const getMoscowColor = (moscow: MoscowPriority) => {
    switch (moscow) {
      case 'Must have': return 'bg-[#C9540A]/10 text-[#C9540A] border border-[#C9540A]/20';
      case 'Should have': return 'bg-amber-500/10 text-amber-700 border border-amber-500/20';
      case 'Could have': return 'bg-blue-500/10 text-blue-700 border border-blue-500/20';
      case "Won't have": return 'bg-gray-500/10 text-gray-700 border border-gray-500/20';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: RiskLevel) => {
    switch (risk) {
      case 'High': return 'text-[#C9540A] font-medium';
      case 'Medium': return 'text-amber-800 font-medium';
      case 'Low': return 'text-emerald-800 font-medium';
      default: return 'text-gray-800';
    }
  };

  const getValueColor = (val: BusinessValue) => {
    switch (val) {
      case 'High': return 'text-emerald-800 font-medium';
      case 'Medium': return 'text-amber-800 font-medium';
      case 'Low': return 'text-[#C9540A] font-medium';
      default: return 'text-gray-800';
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const filteredAndSortedData = useMemo(() => {
    let data = userStoriesData;

    if (activeSection) {
      data = data.filter((s) => s.section === activeSection);
    }
    if (moscowFilter !== 'All') {
      data = data.filter((s) => s.moscow === moscowFilter);
    }
    if (riskFilter !== 'All') {
      data = data.filter((s) => s.risk === riskFilter);
    }
    if (valueFilter !== 'All') {
      data = data.filter((s) => s.businessValue === valueFilter);
    }

    const moscowWeight = { 'Must have': 1, 'Should have': 2, 'Could have': 3, "Won't have": 4 };
    const riskValueWeight = { 'High': 1, 'Medium': 2, 'Low': 3 };

    data = [...data].sort((a, b) => {
      let valA: any = a[sortField];
      let valB: any = b[sortField];

      if (sortField === 'moscow') {
        valA = moscowWeight[a.moscow];
        valB = moscowWeight[b.moscow];
      } else if (sortField === 'risk') {
        valA = riskValueWeight[a.risk];
        valB = riskValueWeight[b.risk];
      } else if (sortField === 'businessValue') {
        valA = riskValueWeight[a.businessValue];
        valB = riskValueWeight[b.businessValue];
      }

      if (valA < valB) return sortDir === 'asc' ? -1 : 1;
      if (valA > valB) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });

    return data;
  }, [activeSection, moscowFilter, riskFilter, valueFilter, sortField, sortDir]);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans p-8 md:p-16">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair tracking-tight text-[#1A1A1A]">
            User Stories <span className="text-[#C9540A] italic">Matrix</span>
          </h1>
          <p className="mt-2 text-[#1A1A1A]/90 max-w-2xl">
            Explore {userStoriesData.length} functional requirements across the Retail Digital Twin ecosystem.
          </p>
        </header>

        {/* Section Buttons */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={() => setActiveSection(null)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeSection === null 
              ? 'bg-[#1A1A1A] text-[#FAF8F5] shadow-lg scale-105' 
              : 'bg-white border border-[#1A1A1A]/10 text-[#1A1A1A]/90 hover:border-[#C9540A] hover:text-[#C9540A]'
            }`}
          >
            All Sections
          </button>
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeSection === section 
                ? 'bg-[#C9540A] text-white shadow-lg scale-105' 
                : 'bg-white border border-[#1A1A1A]/10 text-[#1A1A1A]/90 hover:border-[#C9540A] hover:text-[#C9540A]'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Filters and Sorting */}
        <div className="mb-6 p-4 bg-white border border-[#1A1A1A]/10 rounded-sm flex flex-wrap items-center gap-6 shadow-sm">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">MoSCoW</label>
            <select 
              value={moscowFilter} 
              onChange={(e) => setMoscowFilter(e.target.value as any)}
              className="bg-[#FAF8F5] border border-[#1A1A1A]/20 rounded-md px-3 py-1.5 text-sm outline-none focus:border-[#C9540A]"
            >
              <option value="All">All Priorities</option>
              <option value="Must have">Must have</option>
              <option value="Should have">Should have</option>
              <option value="Could have">Could have</option>
              <option value="Won't have">Won't have</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Risk Level</label>
            <select 
              value={riskFilter} 
              onChange={(e) => setRiskFilter(e.target.value as any)}
              className="bg-[#FAF8F5] border border-[#1A1A1A]/20 rounded-md px-3 py-1.5 text-sm outline-none focus:border-[#C9540A]"
            >
              <option value="All">All Risks</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Business Value</label>
            <select 
              value={valueFilter} 
              onChange={(e) => setValueFilter(e.target.value as any)}
              className="bg-[#FAF8F5] border border-[#1A1A1A]/20 rounded-md px-3 py-1.5 text-sm outline-none focus:border-[#C9540A]"
            >
              <option value="All">All Values</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="flex-1"></div>
          
          <div className="text-sm font-medium text-[#1A1A1A] bg-[#FAF8F5] px-4 py-2 rounded-md border border-[#1A1A1A]/10">
            Showing <span className="text-[#C9540A] font-bold">{filteredAndSortedData.length}</span> stories
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-[#1A1A1A]/10 shadow-sm rounded-sm overflow-hidden">
          <div className="overflow-x-auto max-h-[70vh] relative">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-[#f4f2ef] shadow-sm z-10">
                <tr className="border-b border-[#1A1A1A]/10 text-xs tracking-wider uppercase text-[#1A1A1A]">
                  <th className="p-4 font-bold whitespace-nowrap">Section</th>
                  <th 
                    className="p-4 font-bold whitespace-nowrap cursor-pointer hover:text-[#C9540A] select-none"
                    onClick={() => handleSort('id')}
                  >
                    ID {sortField === 'id' && (sortDir === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="p-4 font-bold min-w-[300px]">User Story</th>
                  <th 
                    className="p-4 font-bold whitespace-nowrap cursor-pointer hover:text-[#C9540A] select-none"
                    onClick={() => handleSort('moscow')}
                  >
                    MoSCoW {sortField === 'moscow' && (sortDir === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="p-4 font-bold whitespace-nowrap cursor-pointer hover:text-[#C9540A] select-none"
                    onClick={() => handleSort('risk')}
                  >
                    Risk {sortField === 'risk' && (sortDir === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="p-4 font-bold whitespace-nowrap cursor-pointer hover:text-[#C9540A] select-none"
                    onClick={() => handleSort('businessValue')}
                  >
                    Value {sortField === 'businessValue' && (sortDir === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="p-4 font-bold min-w-[150px]">Interdependency</th>
                  <th 
                    className="p-4 font-bold whitespace-nowrap text-center cursor-pointer hover:text-[#C9540A] select-none"
                    onClick={() => handleSort('priority')}
                  >
                    Pri {sortField === 'priority' && (sortDir === 'asc' ? '↑' : '↓')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/5">
                {filteredAndSortedData.map((story, index) => (
                  <tr key={story.id} className="hover:bg-[#FAF8F5] transition-colors group">
                    <td className="p-4 align-top text-sm font-medium text-[#1A1A1A]">
                      {story.section}
                    </td>
                    <td className="p-4 align-top text-sm font-mono text-[#1A1A1A]">
                      {story.id}
                    </td>
                    <td className="p-4 align-top text-sm leading-relaxed text-[#1A1A1A]">
                      {story.story}
                    </td>
                    <td className="p-4 align-top">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${getMoscowColor(story.moscow)}`}>
                        {story.moscow}
                      </span>
                    </td>
                    <td className="p-4 align-top text-sm">
                      <span className={getRiskColor(story.risk)}>{story.risk}</span>
                    </td>
                    <td className="p-4 align-top text-sm">
                      <span className={getValueColor(story.businessValue)}>{story.businessValue}</span>
                    </td>
                    <td className="p-4 align-top text-sm text-[#1A1A1A]/90">
                      {story.interdependency}
                    </td>
                    <td className="p-4 align-top text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1A1A1A]/5 text-[#1A1A1A] font-bold text-sm group-hover:bg-[#C9540A] group-hover:text-white transition-colors">
                        {index + 1}
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredAndSortedData.length === 0 && (
                  <tr>
                    <td colSpan={8} className="p-12 text-center text-[#1A1A1A] italic">
                      No user stories match the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
