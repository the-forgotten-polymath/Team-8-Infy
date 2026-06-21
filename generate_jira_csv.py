import csv
import re

markdown_path = r"c:\Users\hp\Desktop\RSMS\user-stories-inventory.md"
csv_path = r"c:\Users\hp\Desktop\RSMS\jira_import.csv"

def parse_markdown():
    stories = []
    with open(markdown_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    in_table = False
    for line in lines:
        line = line.strip()
        if line.startswith('|') and 'User Story' in line and 'Epic' in line and 'ID' in line:
            in_table = True
            continue
        if in_table and line.startswith('|') and '---' in line:
            continue
        if in_table and line.startswith('|'):
            # Split by | and clean up
            parts = [p.strip() for p in line.split('|')]
            if len(parts) >= 9:
                story_id = parts[1]
                epic_raw = parts[2]
                story_text = parts[3]
                acceptance = parts[4]
                priority = parts[5]
                points = parts[6]
                business_value = parts[7]
                moscow = parts[8]
                
                # Format Epic Name
                epic_link = f"Inventory Controller/{epic_raw}"
                
                summary = f"[{story_id}] {story_text.split(', I want')[0].replace('As an Inventory Manager, ', '')}" 
                if len(summary) > 255:
                    summary = summary[:250] + "..."
                    
                description = f"*Epic:*\n{epic_link}\n\n*User Story:*\n{story_text}\n\n*Acceptance Criteria:*\n{acceptance}\n\n*Business Value:*\n{business_value}\n\n*MoSCoW:*\n{moscow}"
                
                # Map priority
                jira_priority = "Medium"
                if priority == "P0": jira_priority = "Highest"
                elif priority == "P1": jira_priority = "High"
                elif priority == "P2": jira_priority = "Medium"
                elif priority == "P3": jira_priority = "Low"
                
                stories.append({
                    "Issue Type": "Story",
                    "Summary": summary,
                    "Epic Link": epic_link,
                    "Description": description,
                    "Priority": jira_priority,
                    "Story Points": points
                })
    return stories

def write_csv(stories):
    if not stories:
        print("No stories found to convert.")
        return
        
    with open(csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=["Issue Type", "Summary", "Epic Link", "Description", "Priority", "Story Points"])
        writer.writeheader()
        for s in stories:
            writer.writerow(s)
    print(f"Successfully generated {csv_path} with {len(stories)} stories.")

if __name__ == '__main__':
    stories = parse_markdown()
    write_csv(stories)
