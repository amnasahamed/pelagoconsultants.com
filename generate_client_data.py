import pandas as pd
import re
import json
import os
from difflib import SequenceMatcher

# Configuration
EXCEL_PATH = '/Volumes/AppleSSD/pelago website/COMPANY AND LLP NEXT YEAR ON DECEMBER REPORT.xlsx'
OUTPUT_JS_PATH = '/Volumes/AppleSSD/pelago website/pelago-consultants/app/clients/client-data.js'
LOGOS_DIR = '/Volumes/AppleSSD/pelago website/pelago-consultants/public/clients'
WEB_LOGOS_PATH = '/clients'

def clean_company_name(name):
    if not isinstance(name, str):
        return None
    name = name.strip()
    # Remove "- sahil" type suffixes
    name = re.sub(r'\s*-\s*[a-zA-Z\s]+$', '', name, flags=re.IGNORECASE)
    # Remove leading numbering
    name = re.sub(r'^\d+[\.\+]\s*', '', name)
    # Remove technical codes
    if re.match(r'^LLP\d+$', name): return None
    if re.match(r'^OPC\d+$', name): return None
    if re.match(r'^P\d+$', name): return None
    return name

def text_similarity(a, b):
    return SequenceMatcher(None, a.lower(), b.lower()).ratio()

def generate_js_file():
    try:
        # 1. Get List of Logos
        available_logos = []
        if os.path.exists(LOGOS_DIR):
            for f in os.listdir(LOGOS_DIR):
                if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg')):
                    available_logos.append(f)
        else:
            print(f"Warning: Logos directory not found at {LOGOS_DIR}")

        print(f"Found {len(available_logos)} potential logo files.")

        # 2. Extract Names from Excel
        df = pd.read_excel(EXCEL_PATH)
        suffixes = ['LIMITED', 'LTD', 'LLP', 'PVT', 'PRIVATE', 'INC', 'OPC', 'PARTNERSHIP', 'FOUNDATION', 'TRUST', 'SOCIETY', 'ACADEMY', 'CONSULTANCY', 'VENTURES', 'STUDIO', 'GROUP', 'WORKS', 'SOLUTIONS', 'DESIGN']
        
        found_names = set()
        for col in df.columns:
            col_data = df[col].astype(str)
            matches = col_data[col_data.str.contains('|'.join(suffixes), case=False, na=False)]
            for val in matches:
                cleaned = clean_company_name(val)
                if cleaned and len(cleaned) > 4:
                    found_names.add(cleaned)

        # 3. Match and Build List
        client_list = []
        full_names_list = sorted(list(found_names))
        
        for name in full_names_list:
            display_name = name.title().replace('Llp', 'LLP').replace('Llc', 'LLC').replace('Opc', 'OPC').replace('Pvt', 'Pvt.').replace('Ltd', 'Ltd.')
            
            # Logo Matching
            logo_src = None
            best_match_score = 0
            best_match_file = None
            
            # Simplified matching: Check if logo filename content is in company name
            # strip extensions
            for logo_file in available_logos:
                logo_name = os.path.splitext(logo_file)[0]
                # Check for high similarity
                score = text_similarity(name, logo_name)
                
                # Check for direct inclusion (e.g. "Google" in "Google Inc")
                if logo_name.lower() in name.lower() or name.lower() in logo_name.lower():
                    score += 0.3 # Boost for inclusion
                
                if score > best_match_score:
                    best_match_score = score
                    best_match_file = logo_file
            
            # Threshold for accepting a logo match
            if best_match_score > 0.6: # 0.6 is a reasonable threshold with the boost
                logo_src = f"{WEB_LOGOS_PATH}/{best_match_file}"
            
            client_list.append({
                'name': display_name,
                'logo': logo_src,
                'hasLogo': logo_src is not None
            })

            # Remove matched logo from pool prevent duplicates? 
            # Maybe not, as multiple entries might refer to same company (though set deduplicated them)
            
        print(f"Extracted {len(client_list)} clients. Matched {sum(1 for c in client_list if c['hasLogo'])} logos.")
        
        # Sort: Logos first, then alphabetical
        client_list.sort(key=lambda x: (not x['hasLogo'], x['name']))

        # Write JS
        js_content = f"""// Auto-generated client list
// Source: {EXCEL_PATH}

export const allClients = {json.dumps(client_list, indent=2)};
"""
        with open(OUTPUT_JS_PATH, 'w') as f:
            f.write(js_content)
        print(f"Successfully wrote to {OUTPUT_JS_PATH}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    generate_js_file()
