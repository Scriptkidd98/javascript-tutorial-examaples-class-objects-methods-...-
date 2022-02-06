class Laptop {
  constructor(model, color, screensize, ram, cpu) {
    this.model = model;
    this.color = color;
    this.screensize = screensize;
    this.ram = ram;
    this.cpu = cpu;
  }
}

const myMac = new Laptop("MacBook Air", "Rose Gold", 14, 8, 1.1);
const myHP = new Laptop("HP ProBook", "Grey", 17, 4, 2.4);

const content = `
    <main class="main">
        <div class="div" style="width: 90%; margin: 10%">
            <p>My name is Isaac, and my first laptop was a ${myHP.model}.</p>
            <p>My second was a ${myMac.model}.</p>
        </div>
    </main>
`;

// document.body.innerHTML = content;

const newArticle = document.createElement("article"); //this creates an article tag in the html
newArticle.innerHTML = content; //this puts main inside article tag
document.querySelector("body").appendChild(newArticle); //this puts article inside body

const section = document.createElement("section"); //this creates a section tag
section.innerHTML = "<p style='color: rebeccapurple'>Tesla</p>"; //this puts the p tag with styles inside the section tag
document.querySelector(".div").appendChild(section); //this puts the section tag inside div tag above

console.log(myMac);
console.log(myHP);
