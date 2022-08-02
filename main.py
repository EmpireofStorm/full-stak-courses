import pandas as pd
class Circle(object):
    def __init__(self, radius, color):
        self.radius=radius
        self.color=color
    def add_radius(self, r):
        self.radius=self.radius+r
RedCircle=Circle(10, "red")
print(RedCircle.radius)
print(RedCircle.color)
RedCircle.add_radius(10)
print(RedCircle.radius)
print(dir(Circle))
with open("main.txt", "r") as File1:
    file_stuff=File1.read(5)
    print(file_stuff)
    file_stuff=File1.read(9)
    print(file_stuff)
with open("main.txt", "a") as File1:
    File1.write("\nWYSI WYFSI 7/27/727")
with open("main.txt", "r") as readfile:
    with open("main2.txt", "w") as writefile:
        for line in readfile:
            writefile.write(line)
songs={"Album":["Bebra", "esports", "decoy", "deko"], "released": [1982, 1980, 1973, 1992], "Length": ["0", "1", "2", "3"]}
songs_frame=pd.DataFrame(songs)
print(songs_frame)
x=songs_frame[["Length"]]
print(x)
print(type(x))