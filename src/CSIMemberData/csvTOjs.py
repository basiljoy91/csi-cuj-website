import pandas as pd
import os
import json  # ✅ Added to handle double-quoted string formatting

# === Load the CSV file ===
csv_file = "src/CSIMemberData/CSI-2024-2025.csv"  # Replace with your actual CSV file name
df = pd.read_csv(csv_file)

# === Select and rename required columns ===
df = df[["Mem. ID.", "Student's Name"]].rename(columns={
    "Mem. ID.": "membershipId",
    "Student's Name": "name"
})

# === Add constant branch value ===
df["branch"] = "Computer Science Engineering"

# === Convert to list of dictionaries ===
members_list = df.to_dict(orient="records")

# ✅ Properly format with double quotes using `json.dumps`
js_content = "const members = " + json.dumps(members_list, indent=2) + ";\n\nexport default members;\n"

# === Ask user for output folder and file name separately ===
output_folder = "src/CSIMemberData"
output_filename = "CSI-2024-2025.js"

# === Ensure .js extension ===
if not output_filename.endswith(".js"):
    output_filename += ".js"

# === Validate folder path ===
if not os.path.isdir(output_folder):
    print(f"❌ The directory '{output_folder}' does not exist.")
    exit(1)

# === Combine full path and write ===
output_path = os.path.join(output_folder, output_filename)

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"✅ JavaScript file successfully created at:\n{output_path}")
