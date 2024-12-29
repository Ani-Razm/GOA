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

const button = document.querySelector("button");
const select = document.querySelector("select");
const emails_output = document.querySelector("ul");

const emails = [
    { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
];

button.addEventListener("click", () => {
    emails_output.innerHTML = "";
    const choice = select.value;
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
})