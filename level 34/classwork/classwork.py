#1 
def dna_to_rna(dna):
    rna = ""
    for i in dna:
        if i != "T":
            rna += i
        else:
            rna += "U"
    return rna

#2
def find_short(s): 
    lst = s.split(" ") 
    l = lst[0] 
     
    for i in lst:
        if len(l) > len(i):
            l = i 
    return len(l) 