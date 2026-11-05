let groups = [
    {
        groupId: 10,
        groupTitle: "Tobkal trip",
        groupDescription: "Exploring the highest point in Africa",
        groupStatus: "done",
        groupDate: "11/02/2022",
    },
    {
        groupId: 9,
        groupTitle: "Roma Tour",
        groupDescription: "Going outside for some fresh air",
        groupStatus: "active",
        groupDate: "17/02/2026",
    },
];

let titleBlock = document.getElementById("title");
let descriptionBlock = document.getElementById("group-description");
let groupStatusBlock = document.getElementById("status");
let groupDateBlock = document.getElementById("group-date");
let idCounter = 1;
desplayAvailableGroups(groups);
function creatGroup() {
    let title = checkInput(titleBlock);
    let description = checkInput(descriptionBlock);
    let status = groupStatusBlock.value;
    let date = groupDateBlock.value;

    if (!title || !description || !status || !date) {
        titleBlock.value = "";
        descriptionBlock.value = "";
        groupStatusBlock.value = "";
        groupDateBlock.value = "";
        return;
    }
    let newGroup = {
        groupId: idCounter++,
        groupTitle: title,
        groupDescription: description,
        groupStatus: status,
        groupDate: date,
    };
    groups.push(newGroup);
    console.log(groups);
    titleBlock.value = "";
    descriptionBlock.value = "";
    groupStatusBlock.value = "";
    groupDateBlock.value = "";
    desplayAvailableGroups(groups);
    closeGroupClick();
}

function desplayAvailableGroups(groups) {
    const groupsListBlock = document.getElementById("group-list");
    groupsListBlock.innerHTML = "";
    groups.forEach((group) => {
        groupsListBlock.innerHTML += `
    <li id = "group-card" class="bg-[#292c32] border border-[#383b43] rounded-2xl p-5 hover:border-[#484c56] transition-colors" data-id="${group.groupId}">

        <div class="flex flex-col gap-4">
            <div class="flex justify-between items-start gap-3">
                <div class="flex flex-col gap-1 min-w-0">
                    <h3 class="font-semibold text-lg text-white">
                        ${group.groupTitle}
                    </h3>
                    <p class="text-sm text-gray-400">
                        ${group.groupDescription}
                    </p>
                </div>
                <div class="flex flex-col gap-3">
                    <button onclick="showMemberFormClick()" class="shrink-0 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                    + member
                    </button>
                    <button onclick="showExpenseFormClick()" class="shrink-0 text-sm font-medium text-amber-400 hover:text-amber-200 transition-colors">
                    + expense
                    </button>
                </div>
                
            </div>

            <div class="border-t border-[#383b43]"></div>

            <div class="flex justify-between items-center gap-3">

                <div class="flex flex-wrap items-center gap-5">
                    <div class="flex items-center gap-2 cursor-pointer text-white hover:text-cyan-300 transition-colors"
                        onclick="showMemberClick()">
                        <ion-icon name="people" class="text-lg"></ion-icon>
                        <span class="text-sm">
                            ${getMembersCount(members, group.groupId)} members
                        </span>
                    </div>

                    <div class="flex items-center gap-2 cursor-pointer text-white hover:text-amber-200 transition-colors" 
                        onclick="showExpenseClick()">
                        <ion-icon name="wallet-outline" class="text-lg"></ion-icon>
                        <span id="total-amount" class="font-semibold text-base">
                            500$
                        </span>
                    </div>
                </div>

                <div class="flex items-center gap-2 shrink-0">
                    <button onclick="editGroupClick('${group.groupId}')"
                        class="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-[#383b43] transition-colors"
                        title="Edit group">
                        <ion-icon name="create-outline" class="text-lg"></ion-icon>
                    </button>

                    <button onclick="deleteGroupClick('${group.groupId}')"
                        class="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-[#383b43] transition-colors"
                        title="Delete group">
                        <ion-icon name="trash-outline" class="text-lg"></ion-icon>
                    </button>
                </div>

            </div>
        </div>

    </li>`;

    });
    
}


// let idValue = listElement

// console.log(idValue);


function deleteGroupClick(toBeDeltedGrpId) {
    groups = groups.filter((group) => group.groupId != toBeDeltedGrpId);
    desplayAvailableGroups(groups);
}


function getMembersCount(members, groupId) {
    console.log(groupId);
    
    let count = 0;
    for (let member of members) {
        if (member.groupId === groupId) {
            count++;
        }
    }
    return count;
}