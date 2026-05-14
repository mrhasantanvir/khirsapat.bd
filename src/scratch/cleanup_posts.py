import sys

file_path = r'e:\all project\khirsapat.bd\src\data\posts.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Lines to remove are 80 to 95 (0-indexed: 79 to 94)
# But let's check the content first to be safe
# Current lines 80-95:
# 80: 
# 81: 
# 82:  লাভের হিসাব (বিঘা প্রতি):
# 83: 
# 84: 
# 85: খরচের খাত:
# ...
# 94:  ৩. জিআই ব্র্যান্ডিং: খিরসাপাত আমের জিআই স্বীকৃতির সুবিধা কাজে লাগানো।`,
# 95: 

new_lines = lines[:79] + lines[95:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Successfully cleaned up corrupted lines.")
