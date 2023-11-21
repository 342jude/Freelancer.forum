// //arrays for names and occupations

const state = {
  averagePrice: 50,

  freelancers: [
    {
      name: "Alice",
      occupation: "Writer",
      price: "30",
    },
    {
      name: "Bob",
      occupation: "Teacher",
      price: "50",
    },
    {
      name: "Carol",
      occupation: "Programer",
      price: "70",
    },
  ],
};

function updateAveragePrice() {
  let total = 0;

  for (let i = 0; i < state.freelancers.length; ++i) {
    const currentFreelancer = state.freelancers[i];

    total += parseInt(currentFreelancer.price);
  }
  state.averagePrice = Math.round(total / state.freelancers.length);
}

function addFreelancersRow(freelancer) {
  state.freelancers.push(freelancer);
}

function currentFreelancerTableRow(freelancer) {
  const tr = document.createElement("tr");

  const nameData = document.createElement("td");
  const occupationData = document.createElement("td");
  const priceData = document.createElement("td");

  nameData.textContent = freelancer.name;
  occupationData.textContent = freelancer.occupation;
  priceData.textContent = freelancer.price;

  tr.append(nameData, occupationData, priceData);

  return tr;
}

function createTableHeaders() {
  const tr = document.createElement("tr");

  const nameData = document.createElement("th");
  const occupationData = document.createElement("th");
  const priceData = document.createElement("th");

  nameData.textContent = "Name";
  occupationData.textContent = "Occupation";
  priceData.textContent = "Starting Price";

  tr.append(nameData, occupationData, priceData);

  return tr;
}

function clearTable() {
  const table = document.getElementById("freelancerTable");

  while (table.childNodes.length) {
    table.removeChild(table.childNodes[0]);
  }
}

function render() {
  clearTable();

  const table = document.getElementById("freelancerTable");

  table.appendChild(createTableHeaders());

  for (let i = 0; i < state.freelancers.length; ++i) {
    const currentFreelancer = state.freelancers[i];

    const row = currentFreelancerTableRow(currentFreelancer); //corrected

    table.appendChild(row);
  }

  updateAveragePrice();

  const priceText = document.getElementById("averagePrice");

  priceText.textContent = `The average starting price is $${state.averagePrice}`;
}

const randomNames = ["Alice", "Bob", "Carol", "Jude", "Sham", "John"];
const randomOcupations = [
  "IT",
  "Chef",
  "writer",
  "Constructor",
  "Teacher",
  "Programmer",
];

function createRandomFreelancer() {
  const randomName =
    randomNames[Math.floor(Math.random() * randomNames.length)];
  const randomOcupation =
    randomOcupations[Math.floor(Math.random() * randomOcupations.length)];

  const randomPrice = Math.floor(Math.random() * 150);

  const freelancer = {
    name: randomName,
    occupation: randomOcupation,
    price: randomPrice,
  };
  return freelancer;
}

//interval logic
let renderCount = 0;

let intervalId = setInterval(function () {
  if (renderCount > 100) {
    clearInterval(intervalId);
  }

  const newFreelancer = createRandomFreelancer();
  addFreelancersRow(newFreelancer);

  render();

  ++renderCount;
}, 5000);
