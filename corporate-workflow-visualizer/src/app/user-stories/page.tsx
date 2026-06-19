'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { userStoriesData, MoscowPriority, RiskLevel, BusinessValue, UserStory } from '../../data/userStories';
import { supabase } from '../../utils/supabase';

type SortField = 'id' | 'priority' | 'moscow' | 'risk' | 'businessValue';
type SortDirection = 'asc' | 'desc';

export default function UserStoriesPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [moscowFilter, setMoscowFilter] = useState<MoscowPriority | 'All'>('All');
  const [riskFilter, setRiskFilter] = useState<RiskLevel | 'All'>('All');
  const [valueFilter, setValueFilter] = useState<BusinessValue | 'All'>('All');
  const [sortField, setSortField] = useState<SortField>('priority');
  const [sortDir, setSortDir] = useState<SortDirection>('asc');
  const [selectedStory, setSelectedStory] = useState<UserStory | null>(null);
  const [checkedStories, setCheckedStories] = useState<Set<string>>(new Set());
  const [isAdmin, setIsAdmin] = useState(false);
  const [hiddenStoriesDB, setHiddenStoriesDB] = useState<Set<string>>(new Set());

  useEffect(() => {
    async function fetchHidden() {
      try {
        const { data, error } = await supabase.from('hidden_stories').select('story_id');
        if (!error && data) {
          setHiddenStoriesDB(new Set(data.map(d => d.story_id)));
        }
      } catch (err) {
        console.error('Error fetching hidden stories:', err);
      }
    }
    fetchHidden();
  }, []);

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
      case 'High': return 'text-emerald-800 font-bold bg-emerald-100/60 px-2.5 py-1 rounded-md border border-emerald-200';
      case 'Medium': return 'text-amber-800 font-bold bg-amber-100/60 px-2.5 py-1 rounded-md border border-amber-200';
      case 'Low': return 'text-[#C9540A] font-bold bg-[#C9540A]/10 px-2.5 py-1 rounded-md border border-[#C9540A]/20';
      default: return 'text-gray-800';
    }
  };

  const getBusinessValueText = (val: BusinessValue) => {
    switch (val) {
      case 'High': return 'High Impact (Critical)';
      case 'Medium': return 'Medium Impact (Core)';
      case 'Low': return 'Low Impact (Minor)';
      default: return val;
    }
  };

  const extractBenefit = (storyText: string) => {
    const match = storyText.match(/(?:so that|in order to|so we can|so I can|so|and receive) (.*)/i);
    if (match && match[1]) {
      const text = match[1].trim();
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return 'Streamlines operations and improves workflow efficiency.';
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const toggleCheck = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newSet = new Set(checkedStories);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setCheckedStories(newSet);
  };

  const toggleAll = () => {
    if (checkedStories.size === filteredAndSortedData.length) {
      setCheckedStories(new Set());
    } else {
      setCheckedStories(new Set(filteredAndSortedData.map(s => s.id)));
    }
  };

  const toggleVisibility = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!isAdmin) return;
    
    const newSet = new Set(hiddenStoriesDB);
    if (newSet.has(id)) {
      newSet.delete(id);
      setHiddenStoriesDB(newSet);
      await supabase.from('hidden_stories').delete().eq('story_id', id);
    } else {
      newSet.add(id);
      setHiddenStoriesDB(newSet);
      await supabase.from('hidden_stories').insert([{ story_id: id }]);
    }
  };

  function generateExplanation(storyObj: UserStory) {
    const match = storyObj.story.match(/As an? (.*?), I want (?:to )?(.*?)(?: so that | and receive | in order to | and | so )(.*)/i) 
      || storyObj.story.match(/As an? (.*?), I want (?:to )?(.*)/i);
    
    let role = storyObj.section + ' User';
    let action = storyObj.story;
    let benefit = 'streamline operations';

    if (match) {
      role = match[1].trim();
      action = match[2].trim();
      if (match[3]) {
        benefit = match[3].trim();
      }
    }

    // Capitalize role
    role = role.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
      translation: `This user story means: The system empowers the ${role} to ${action}. In the luxury retail context, this directly solves pain points to ${benefit}, preventing manual errors.`,
      scenario: `Imagine a busy day at the boutique or corporate office. A ${role} needs to ${action}. Instead of relying on manual legacy systems, they open the Hutch OS Dashboard. Behind the scenes, the ${storyObj.section} engine analyzes massive amounts of data points to execute this request.`,
      output: `The OS instantly generates the necessary data and UI, meaning the ${role} successfully achieves their goal to ${benefit}.`,
      advantage: `In legacy systems, achieving this would require multiple fragmented tools and manual guesswork. With Hutch OS, the AI connects the dots automatically, providing a frictionless experience that empowers the ${role} to focus on luxury client experiences!`,
      checklist: [
        `Ensure the UI properly displays necessary data fields for the ${role}.`,
        `Validate that the system successfully executes the core action: "${action.substring(0, 50)}${action.length > 50 ? '...' : ''}".`,
        `Confirm the ${storyObj.section} backend securely processes the logic without delay.`,
        `Verify the end result demonstrably achieves the goal: ${benefit}.`
      ]
    };
  }

  const filteredAndSortedData = useMemo(() => {
    let data = userStoriesData;

    // Filter out hidden stories if not admin
    if (!isAdmin) {
      data = data.filter((s) => !hiddenStoriesDB.has(s.id));
    }

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
  }, [activeSection, moscowFilter, riskFilter, valueFilter, sortField, sortDir, isAdmin, hiddenStoriesDB]);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans p-8 md:p-16 relative">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-12 flex justify-between items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-playfair tracking-tight text-[#1A1A1A]">
              User Stories <span className="text-[#C9540A] italic">Matrix</span>
            </h1>
            <p className="mt-2 text-[#1A1A1A]/90 max-w-2xl">
              Explore {userStoriesData.length} functional requirements across the Retail Digital Twin ecosystem.
            </p>
          </div>
          <button 
            onClick={() => {
              if (isAdmin) {
                setIsAdmin(false);
              } else {
                const pwd = window.prompt('Enter Admin Passcode:');
                if (pwd === 'admin123') setIsAdmin(true);
                else if (pwd !== null) alert('Incorrect Passcode');
              }
            }}
            className={`px-4 py-2 text-sm font-bold rounded-md transition-colors border ${isAdmin ? 'bg-[#C9540A] text-white border-[#C9540A]' : 'bg-transparent text-[#1A1A1A]/50 border-[#1A1A1A]/20 hover:border-[#1A1A1A]'}`}
          >
            {isAdmin ? 'Exit Admin Mode' : 'Admin Login'}
          </button>
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
                  <th className="p-4 w-12 text-center">
                    <input 
                      type="checkbox" 
                      checked={filteredAndSortedData.length > 0 && checkedStories.size === filteredAndSortedData.length}
                      onChange={toggleAll}
                      className="w-4 h-4 text-[#C9540A] rounded border-[#1A1A1A]/20 focus:ring-[#C9540A] focus:ring-2 accent-[#C9540A] cursor-pointer"
                    />
                  </th>
                  {isAdmin && <th className="p-4 w-12 text-center" title="Visibility">👁️</th>}
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
                    Business Value {sortField === 'businessValue' && (sortDir === 'asc' ? '↑' : '↓')}
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
                  <tr 
                    key={story.id} 
                    onClick={() => setSelectedStory(story)}
                    className="hover:bg-[#FAF8F5] transition-colors group cursor-pointer"
                  >
                    <td className="p-4 align-top text-center" onClick={(e) => toggleCheck(e, story.id)}>
                      <input 
                        type="checkbox" 
                        checked={checkedStories.has(story.id)}
                        readOnly
                        className="w-4 h-4 text-[#C9540A] rounded border-[#1A1A1A]/20 focus:ring-[#C9540A] focus:ring-2 accent-[#C9540A] cursor-pointer"
                      />
                    </td>
                    {isAdmin && (
                      <td className="p-4 align-top text-center" onClick={(e) => toggleVisibility(e, story.id)}>
                        <button className={`text-xl transition-transform hover:scale-110 ${hiddenStoriesDB.has(story.id) ? 'opacity-50' : 'opacity-100'}`} title={hiddenStoriesDB.has(story.id) ? "Unhide" : "Hide"}>
                          {hiddenStoriesDB.has(story.id) ? '🙈' : '👁️'}
                        </button>
                      </td>
                    )}
                    <td className={`p-4 align-top text-sm font-medium ${isAdmin && hiddenStoriesDB.has(story.id) ? 'text-[#1A1A1A]/40 line-through' : 'text-[#1A1A1A]'}`}>
                      {story.section}
                    </td>
                    <td className={`p-4 align-top text-sm font-mono ${isAdmin && hiddenStoriesDB.has(story.id) ? 'text-[#1A1A1A]/40' : 'text-[#1A1A1A]'}`}>
                      {story.id}
                    </td>
                    <td className={`p-4 align-top text-sm leading-relaxed ${isAdmin && hiddenStoriesDB.has(story.id) ? 'text-[#1A1A1A]/40' : 'text-[#1A1A1A]'}`}>
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
                    <td className="p-4 align-top text-sm min-w-[250px]">
                      <div className="flex flex-col gap-3">
                        <span className="text-[#1A1A1A]/90 leading-relaxed italic text-sm border-l-2 border-[#1A1A1A]/10 pl-3">
                          "{extractBenefit(story.story)}"
                        </span>
                        <div>
                          <span className={`${getValueColor(story.businessValue)} text-xs inline-block`}>
                            {getBusinessValueText(story.businessValue)}
                          </span>
                        </div>
                      </div>
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
                    <td colSpan={9} className="p-12 text-center text-[#1A1A1A] italic">
                      No user stories match the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Dynamic Overlay Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/60 backdrop-blur-sm" onClick={() => setSelectedStory(null)}>
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-[#1A1A1A]/10 px-8 py-6 flex justify-between items-center z-10">
              <div>
                <span className="text-xs font-bold text-[#C9540A] tracking-wider uppercase mb-1 block">{selectedStory.section}</span>
                <h2 className="text-2xl font-playfair text-[#1A1A1A]">Story {selectedStory.id}</h2>
              </div>
              <button onClick={() => setSelectedStory(null)} className="text-[#1A1A1A]/50 hover:text-[#C9540A] text-4xl leading-none">&times;</button>
            </div>
            
            <div className="p-8">
              <div className="mb-8 p-4 bg-[#FAF8F5] border-l-4 border-[#1A1A1A] rounded-r-md">
                <p className="text-lg text-[#1A1A1A] font-medium italic">"{selectedStory.story}"</p>
              </div>

              {(() => {
                const expl = generateExplanation(selectedStory);
                return (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm uppercase tracking-widest font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                        <span className="text-xl">📖</span> The Translation
                      </h3>
                      <p className="text-[#1A1A1A]/90 leading-relaxed">{expl.translation}</p>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-widest font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                        <span className="text-xl">🌟</span> Real-World Scenario
                      </h3>
                      <p className="text-[#1A1A1A]/90 leading-relaxed">{expl.scenario}</p>
                    </div>

                    <div className="bg-[#1A1A1A] text-white p-6 rounded-md shadow-md border-l-4 border-[#C9540A]">
                      <h3 className="text-sm uppercase tracking-widest font-bold text-[#C9540A] mb-3">
                        The Output
                      </h3>
                      <p className="text-white/90 leading-relaxed font-playfair italic text-lg">
                        "{expl.output}"
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-widest font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                        <span className="text-xl">✅</span> Acceptance Criteria
                      </h3>
                      <div className="flex flex-col gap-3 bg-[#FAF8F5] p-5 rounded-md border border-[#1A1A1A]/10">
                        {expl.checklist.map((item, idx) => (
                          <label key={idx} className="flex items-start gap-3 cursor-pointer group">
                            <input type="checkbox" className="mt-1 w-4 h-4 text-[#C9540A] rounded border-[#1A1A1A]/20 focus:ring-[#C9540A] focus:ring-2 accent-[#C9540A] transition-all cursor-pointer" />
                            <span className="text-[#1A1A1A]/80 group-hover:text-[#1A1A1A] transition-colors leading-snug">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-widest font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                        <span className="text-xl">🚀</span> Why This is Different
                      </h3>
                      <p className="text-[#1A1A1A]/90 leading-relaxed">{expl.advantage}</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
