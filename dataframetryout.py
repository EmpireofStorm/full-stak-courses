import pandas as pd
students={"Student": ["David", "Samuel", "Terry", "Evan"], "Age": [27, 24, 22, 32], "Country": ["UK", "Canada", "china", "USA"], "Course": ["Python", "Data Structures", "Machine learning", "Web Development"], "Marks": [85, 72, 89, 76]}
df=pd.DataFrame(students)
print(df)
b=df[["Marks"]]
c=df[["Country", "Course"]]
print(b)
print(c)
x=df["Student"]
print(x)
print(type(x))
print(df.iloc[0, 0])
print(df.loc[1, "Age"])
df1=df
df1=df1.set_index("Student")
print(df1)
print(df)
print("bebra")
print(df.iloc[0:2, 0:3])
print("bebra")
print(df.iloc[0:2, 1])
print(df.loc[0:1, "Age"])