import sys
#import pandas as pd

file_name = "assets/capitali.csv"

file_in = open(file_name, "r")  
#pd.read_csv(file_name, iterator=True)

for line in file_in:
    print("{")
    line_split = line.split(',')
    country = line_split[0]
    capital = line_split[1].rstrip()
    map = line_split[2].rstrip()
    flag = line_split[3].rstrip()
    print('\t' + 'name: "' + country + '",')
    print('\t' + 'capital: "' + capital + '",')
    print('\t' + 'flag: "' + flag + '",')
    print('\t' + 'map: "' + map + '",')
    print("},")
