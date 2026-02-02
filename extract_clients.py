import pandas as pd
import sys

# Set pandas display options to show all columns and more rows
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', 20)
pd.set_option('display.width', 1000)

file_path = '/Volumes/AppleSSD/pelago website/COMPANY AND LLP NEXT YEAR ON DECEMBER REPORT.xlsx'

try:
    df = pd.read_excel(file_path)
    print("--- First 10 rows ---")
    print(df.head(10))
    
    print("\n--- Inspecting Text Columns for Company Names ---")
    # Iterate over all columns and check for strings containing typical company suffixes
    suffixes = ['LIMITED', 'LTD', 'LLP', 'PVT', 'PRIVATE', 'INC', 'OPC', 'PARTNERSHIP', 'FOUNDATION', 'TRUST', 'SOCIETY', 'ACADEMY', 'CONSULTANCY', 'VENTURES', 'STUDIO', 'GROUP', 'WORKS', 'SOLUTIONS', 'DESIGN']
    
    found_names = set()
    
    for col in df.columns:
        # Convert to string to check for substrings
        col_data = df[col].astype(str)
        # Check if column has significant number of matches
        matches = col_data[col_data.str.contains('|'.join(suffixes), case=False, na=False)]
        if len(matches) > 0:
            print(f"\nColumn '{col}' matches suffixes:")
            unique_matches = matches.unique().tolist()
            print(f"Found {len(unique_matches)} unique values. Sample: {unique_matches[:5]}")
            found_names.update(unique_matches)
            
    print(f"\nTotal unique potential company names found: {len(found_names)}")
    # Print all found names to a file to avoid truncation in logs if needed, or just print them
    print("\n--- All Found Names ---")
    for name in sorted(list(found_names)):
        print(name)

except Exception as e:
    print(f"Error: {e}")
