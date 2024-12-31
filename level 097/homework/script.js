// დავალება: შექმენით სია (array), რომელიც შეიცავს წერილებს. თითოეული ელ.ფოსტა არის ობიექტი, სადაც არის: თემა, შიგთავსი, გამგზავნი. გამოიყენეთ for...of ციკლი, რათა შერჩიოთ მხოლოდ ის წერილები, რომლებიც მოცემული თემით იწყება. შედეგი უნდა გამოჩნდეს HTML გვერდზე. ( HTML-ს უნდა ჰქონდეს ორი ნაწილი, ელ ფოსტების გამოსატანი და შესატანი ).
// მონაცემების სტრუქტურის ფორმატი (მაგალითი):
// const emails = [
//   { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
//   { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
//   { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
//   { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
// ];

// მოთხოვნა:
// გამოიყენეთ for...of, რათა ჩამოთვალოთ მხოლოდ ის წერილები, რომლებიც სათაურით იწყება სიტყვით "მოგზაურობა", 'მოხსენება' ან 'გაცნობიერება' (ამის ფილტრაცია უნდა შეეძლოს მომხმარებელს ჩექბოქსით, დროპდაუნით ან ნებისმიერი სხვა user input-ით ).
// შედეგი უნდა გამოჩნდეს HTML გვერდზე.
// შექმენით ელემენტი <ul> და თითოეული წერილი გამოიტანეთ როგორც <li>.

const button2 = document.querySelector("#filter_btn");
const button1 = document.querySelector("#email-add");
const select = document.querySelector("select");
const emails_output = document.querySelector("ul");

const emails = [
    { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
];

button2.addEventListener("click", () => {
    emails_output.innerHTML = "";
    const choice = select.value;
    if (choice == "ყველა") {
        for (let email of emails) {
            emails_output.innerHTML += `
                    <li>
                        <div class="email">
                            <h2>${email["subject"]}</h2>
                            <div>${email["content"]}</div>
                            <span>${email["receivedDate"]}</span> 
                        </div> 
                    </li>   
                `
        }
    }
    for (let email of emails) {
        if (email["subject"] == choice) {
            emails_output.innerHTML += `
                <li>
                    <div class="email">
                        <h2>${email["subject"]}</h2>
                        <div>${email["content"]}</div>
                        <span>${email["receivedDate"]}</span> 
                    </div> 
                </li>   
            `
        }
    }
});

button1.addEventListener("click", () => {
    const d = new Date();
    const subj = document.querySelector("#email-type");
    const content = document.querySelector("#email");
    if(subj.value.length > 0 && content.value.length > 0){
        emails.push({ subject: subj.value, content: content.value, receivedDate: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}` })
        subj.value = "";
        content.value = "";
    }
    else {
        alert("please fill all fields");
    }
})