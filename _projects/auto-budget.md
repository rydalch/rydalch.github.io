---
layout: page
title: budget tracker
description: update a budget automatically
img:
importance: 3
category: fun
---

### From Tedious to Automated: Building a Smart Budgeting Script

I've tried many different budgeting software solutions, but haven't found one that works for our family. I finally realized that my budget spreadsheet did everything I wanted in the format I wanted. But manually updating a budget spreadsheet every month is a chore. The process of downloading various CSV files from different accounts, normalizing the data, and copy pasting transactions is tedious and prone to error. I decided to automate this process with a Python script, a project that evolved from a simple tool into a robust, intelligent solution.

My initial goal was to create a script that could read a CSV file and upload its contents to a Google Sheet. Using the pandas library for data manipulation and gspread to interact with the Google Sheets API, I quickly built a functional prototype. However, the real challenge began when I started feeding it actual data from different financial accounts.

The first problem was the CSV files themselves. Each bank formats its export differently. Some had summary lines at the top before the transaction data, which broke my simple parser. To solve this, I wrote a function that scans the beginning of each file to locate the true header row. This made the script flexible enough to handle various formats without manual intervention.

The next hurdle was the data's logic. My credit card statements listed expenses as positive numbers and payments as negative, the opposite of how they needed to be recorded in my budget. The solution was to build a system that could learn. The first time the script encounters a new account, it analyzes the file for key patterns, like payment confirmation text and the ratio of positive to negative transactions, to guess the account type. It then asks the user for a one time confirmation. This choice is saved to a local configuration file. On all subsequent runs, the script recognizes the account and automatically handles the data correctly without asking again.

What began as a simple automation task became a valuable lesson in building resilient software. A truly workable solution does not just execute a task. It anticipates the inconsistencies of real world data and is designed to be both intelligent and user friendly. The final script is a powerful tool that has turned a monthly chore into a simple, two command process.
