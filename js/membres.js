let members = [
    {
        memberID: 20,
        groupId: 13,
        memberName: "oussama",
        memberPseudoName: "akhrraz"
    },
    {
        memberID: 10,
        groupId: 5,
        memberName: "mohammed",
        memberPseudoName: "chabab"
    }

];

let FullNameBlock = document.getElementById('member-full-name');
let pseudoNameBlock = document.getElementById('membre-pseudo-name');
let groupId = document.getElementById('group-card')
console.log(groupId);

let counter = 1;



function checkInput(input) {
    let valideInput = input.value.trim();
    input.value = '';
    if (valideInput == '') {
        input.value = '';
        return;
    }
    return valideInput;
}


function addpMember() {
    let fullName = checkInput(FullNameBlock);
    let pseudoName = checkInput(pseudoNameBlock);

    if (!fullName || !pseudoName) {
        FullNameBlock.value = '';
        pseudoNameBlock.value = '';
        return;
    }

    let newMember = {
        memberID: counter++,
        groupId: groups.id,
        memberName: fullName,
        memberPseudoName: pseudoName
    }


    console.log(newMember);

    members.push(newMember);
    console.log(members);
    FullNameBlock.value = '';
    pseudoNameBlock.value = '';

    closeMemberFormClick();
    desplayAvailableGroups(groups);
}

function dispalyMembers(members) {
    const membersList = document.getElementById('members-list');
    members.forEach(member => {
        membersList.innerHTML += `
            <li>
                <div class=" bg-sky-800 p-2 flex items-center justify-between rounded-2xl ">
                    <div class="flex gap-2 items-center ">
                        <span id="member-name" class="font-bold text-cyan-50 text-2xl">${member.memberName}</span>
                        <span id = "bseudo-name" class="font-bold text-cyan-50 text-sm">${member.memberPseudoName}</span>
                        <button id="edit-member-btn"
                                        class="p-2 bg-cyan-100 rounded-full hover:bg-blue-200"><a href=""><img
                                                src="asessts/pencil (1).png" alt="pincel icone to edit memers infos"
                                                title="edit member" width="20" height="20"></a></button>
                                </div>
                                <div>
                                    <span id="deservs" class="text-green-400 text-sm ">▲ 20$</span>
                                    <span id="on-you" class="text-red-400 text-sm ">▼ 50$</span>
                                </div>
                                <div class="flex flex-col items-center gap-1">
                                    <span id="montant-paid" class="font-bold text-3xl text-amber-400 ">400 $</span>
                                    <button id="delete-member-btn"
                                        class="p-2 bg-cyan-100 rounded-full hover:bg-red-100 "><img
                                            src="asessts/trash-can-list.png" alt="bin icon" title="delete member"
                                            width="20" height="20"></button>
                                </div>
                            </div>
                        </li>
        `
    });

}