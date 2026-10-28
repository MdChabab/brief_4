let tripCard = document.getElementById("trip-card")
let seeMoreArrows = document.getElementById("see-more-arrows")

let trips = [
    {
        id: 1,
        tripTitle: "Tobkal Trip",
        members: ["Oussama", "Mohammed", "Achraf"],
        expenses: ["Groceries", "Transportation", "Eat-Outs"]
    }
]

function openSeeMore() {
    seeMoreArrows.querySelector('button').classList.add('hidden')
    tripCard.innerHTML = `
        <div>
            <nav>
                <ul class="flex justify-around"><li>Members</li><li>Expenses</li></ul>
            </nav>
            <div>
                <ul>                            
                    <li class="flex justify-between rounded-lg shadow p-4">
                        <p>fullname</p>
                        <p>+20$</p>
                    </li>
                    <li class="flex justify-between rounded-lg shadow p-4">
                        <p>fullname</p>
                        <p>+20$</p>
                    </li>
                    <li class="flex justify-between rounded-lg shadow p-4">
                        <p>fullname</p>
                        <p>+20$</p>
                    </li>
                </ul>
            </div>
        </div>
        `;
}