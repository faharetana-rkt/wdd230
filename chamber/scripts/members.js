const membersURL = "https://faharetana-rkt.github.io/wdd230/chamber/data/members.json";
const container = document.querySelector("#container");

async function getMembersData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    //console.log(data.members);
    displayMember(data.members);
}

const displayMember = (members) => {
    members.forEach((member) => {
        const card = document.createElement("div");
        const logo = document.createElement("img");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const contact = document.createElement("p");
        const description = document.createElement("p");
        const website = document.createElement("p");
        const membership = document.createElement("p");

        logo.src = member.imageURL;
        logo.alt = `${member.name} logo`;
        name.innerText = member.name;
        address.innerText = member.address;
        contact.innerText = member.contact;
        description.innerText = member.description;
        website.innerText = member.website;
        membership.innerText = `Membersip level: ${member.membership}`;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(website);
        card.appendChild(description);
        card.appendChild(membership);

        container.appendChild(card);
    });
}

getMembersData();