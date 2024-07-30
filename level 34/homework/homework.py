#2 განიხილეთ და კომენტარებით ახსენით როგორ მუშაობს გაკვეთილზე დაწერილი კოდი: 

def find_short(s):
    list1 = s.split(" ") #დავყავით სტრინგი ლისტად და შევინახეთ ცვლადში


    word_len = len(list1[0]) #შეიქმნა ცვლადი რომელიც ინახავს ლისტის პირველი ელემენტის სიგრძეს
    for i in list1: # გამეორდა i ცვლადი სიტყვების სიაში
        if len(i) < word_len: # შემოწმდა არის თუ არა პირველი ელემენტის სიგრძე, i ცვლადის მნიშვნელობის სიგრძეზე მეტი
            word_len = len(i) # თუ არის,  word_len ცვლადის მნიშვნელობად ყენდება i ცვლადის მნიშვნელობის სიგრძე
    # word_len = 3
    return word_len

print(find_short("bitcoin take over the world maybe who knows perhaps"))