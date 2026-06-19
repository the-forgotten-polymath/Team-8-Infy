const fs = require('fs');
const path = require('path');

const prds = [
  { file: '../Inventory/PRD_Inventory.md', section: 'Inventory Intelligence OS' },
  { file: '../After-Sales/PRD_After_Sales.md', section: 'After-Sales Service' },
  { file: '../Boutique-Admin/PRD_Boutique_Admin.md', section: 'Boutique Admin' },
  { file: '../Corporate-Admin/PRD_Corporate_Admin.md', section: 'Corporate Admin' },
  { file: '../Sales-Associate/PRD_Sales_Associate.md', section: 'Sales Associate' },
];

let allStories = [];

function getMoscow(priority) {
  if (priority.includes('P0')) return 'Must have';
  if (priority.includes('P1')) return 'Should have';
  if (priority.includes('P2')) return 'Could have';
  return "Won't have";
}

function getRisk(moscow) {
  if (moscow === 'Must have') return 'High';
  if (moscow === 'Should have') return 'Medium';
  return 'Low';
}

function getBusinessValue(moscow) {
  if (moscow === 'Must have') return 'High';
  if (moscow === 'Should have') return 'High';
  if (moscow === 'Could have') return 'Medium';
  return 'Low';
}

let counter = 1;

for (const prd of prds) {
  const content = fs.readFileSync(path.resolve(__dirname, prd.file), 'utf8');
  const lines = content.split('\n');
  
  let inTable = false;
  
  for (const line of lines) {
    if (line.includes('| ID | Story | Priority |') || line.includes('| ID | User Story | Priority |')) {
      inTable = true;
      continue;
    }
    
    if (inTable) {
      if (line.trim().startsWith('|---')) continue;
      
      const match = line.match(/^\|([^|]+)\|([^|]+)\|([^|]+)\|/);
      if (match) {
        let id = match[1].trim();
        let story = match[2].trim();
        let priorityRaw = match[3].trim();
        
        // Exclude headers
        if (id !== 'ID' && !id.includes('---')) {
          const moscow = getMoscow(priorityRaw);
          allStories.push({
            id: id,
            section: prd.section,
            story: story,
            moscow: moscow,
            risk: getRisk(moscow),
            businessValue: getBusinessValue(moscow),
            interdependency: 'Core Platform',
            priority: counter++
          });
        }
      } else if (line.trim() === '') {
        inTable = false;
      }
    }
  }
}

const tsContent = `export type MoscowPriority = 'Must have' | 'Should have' | 'Could have' | 'Won\\'t have';
export type RiskLevel = 'High' | 'Medium' | 'Low';
export type BusinessValue = 'High' | 'Medium' | 'Low';

export interface UserStory {
  id: string;
  section: string;
  story: string;
  moscow: MoscowPriority;
  risk: RiskLevel;
  businessValue: BusinessValue;
  interdependency: string;
  priority: number;
}

export const userStoriesData: UserStory[] = ${JSON.stringify(allStories, null, 2)};
`;

fs.writeFileSync(path.resolve(__dirname, 'src/data/userStories.ts'), tsContent, 'utf8');
console.log("Successfully extracted " + allStories.length + " stories.");
