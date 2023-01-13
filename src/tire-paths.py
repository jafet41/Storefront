import json
import re

io = open("medidas.json","r")

string = io.read()
dictionary = json.loads(string)
#print(dictionary)

with open('medidas-rutas.txt') as file:
    array = file.readlines()

arr=[]
for y in array:
  temp=y[7:]
  temp=temp[:len(temp)-5]
  arr.append(temp)

pat='[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]c?-[a-z]{4}'
for x in dictionary:
  ruta1=x["medida"].replace("/","-")+"-"+x["marca"][0:4]
  ruta1=ruta1.lower()
  if x["img"]=="./":
    for y in arr:
      try:
        tmp=re.search(pat,y.lower()).group()
        # print("Try Block")
        # print(tmp)
        # print(ruta1)
        if (tmp.lower()==ruta1):
          x["img"]="images/"+y+".jpg"
          break
      except AttributeError:
        tmp=re.search(pat,y)
        # print("Except Block")
        # print(tmp)
print(dictionary)
with open("medidasX.json","w") as io2:
    json.dump(dictionary,io2,indent=2)



