# იმუშავეთ split-ის გამოყენებაზე: შექმენით 10 string და თითოეულზე გამოიყენეთ split ბრძანება, მოახდინეთ გახლეჩვა ნებისმიერი სიმბოლოთი

string1 ='bladsja adaksd aksdkad kajdkja'
string2 ='safd,asfd,asfd,fasfd,afd'
string3 ='as9fd9assad9f9sadfas9df9s'
string4 ='a4scd4as4cd4sadc4asc4'
string5 ='as;cd;asc;as;sadc'
string6 ='s9ad9cas9d'
string7 ='ashcdhasch'
string8 ='ascd1a1cdsa'
string9 ='as0c0as00ad'
string10 ='`vghg`hg`h`h`v'

print(string1.split())
print(string2.split(",", 1))
print(string3.split("9"))
print(string4.split("4",3))
print(string5.split(";"))
print(string6.split("9"))
print(string7.split("h",2))
print(string8.split("1"))
print(string9.split("0"))
print(string10.split("`"))

