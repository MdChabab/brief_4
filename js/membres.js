let members = [];

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
    return valideInput ;
}


function addpMember() {
    let fullName = checkInput(FullNameBlock);
    let pseudoName = checkInput(pseudoNameBlock);

    if(!fullName || !pseudoName){
        FullNameBlock.value = '';
        pseudoNameBlock.value = '';
        return;
    }

    let newMember = {
        memberID : counter++,
        memberName : fullName,
        memberPseudoName : pseudoName
    }

    members.push(newMember);
    console.log(members);
    FullNameBlock.value = '';
    pseudoNameBlock.value = '';

    closeMemberFormClick();
    desplayAvailableGroups(groups);
}
