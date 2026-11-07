let members = [
    {
        memberID: 20,
        groupId: 10,
        memberName: "oussama",
        memberPseudoName: "akhrraz",
    },
    {
        memberID: 10,
        groupId: 6,
        memberName: "mohammed",
        memberPseudoName: "chabab",
    },
];

let FullNameBlock = document.getElementById("member-full-name");
let pseudoNameBlock = document.getElementById("membre-pseudo-name");
let groupId = document.getElementById("group-card");
console.log(groupId);

let counter = 1;

function checkInput(input) {
    let valideInput = input.value.trim();
    input.value = "";
    if (valideInput == "") {
        input.value = "";
        return;
    }
    return valideInput;
}

function addpMember() {
    let fullName = checkInput(FullNameBlock);
    let pseudoName = checkInput(pseudoNameBlock);

    if (!fullName || !pseudoName) {
        FullNameBlock.value = "";
        pseudoNameBlock.value = "";
        return;
    }

    let newMember = {
        memberID: counter++,
        groupId: groups.id,
        memberName: fullName,
        memberPseudoName: pseudoName,
    };

    console.log(newMember);

    members.push(newMember);
    console.log(members);
    FullNameBlock.value = "";
    pseudoNameBlock.value = "";

    closeMemberFormClick();
    desplayAvailableGroups(groups);
}

function dispalyMembers(members) {
    const membersList = document.getElementById("members-list");
    members.forEach((member) => {
        membersList.innerHTML += `
            <div id="members-list-items" class="flex flex-col gap-3">
                <li class="bg-[#30333a] border border-[#383b43] rounded-xl p-4">
                    <div class="flex justify-between items-center gap-3">
                        <div>
                            <div class="flex items-center gap-2 min-w-0">
                                <span id="member-name" class="font-semibold text-lg truncate">
                                    ${member.memberName}
                                </span>
                            </div>

                            <div>
                                <span id="montant-paid" class="text-amber-200 text-white">
                                    ${expenseFetcher(member).toFixed(2)} DH
                                </span>
                            </div>
                        </div>

                        <div class="flex items-end gap-2 shrink-0">
                            <button id="edit-member-btn"
                                class="p-1.5 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-[#383b43] transition-colors"
                                title="Edit member">
                                <ion-icon name="create-outline" class="text-lg"></ion-icon>
                            </button>
                            <button id="delete-member-btn"
                                class="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-[#383b43] transition-colors"
                                title="Delete member">
                                <ion-icon name="trash-outline" class="text-lg"></ion-icon>
                            </button>
                        </div>
                    </div>
                </li>
            </div>
        `;
    });
}

dispalyMembers(members);
