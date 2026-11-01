import {groupsListBlock} from 'groupes.html';
console.log(groupsListBlock);




let groups = [];

let titleBlock = document.getElementById('title');
let categoryBlock = document.getElementById('group-category')
let groupStatusBlock = document.getElementById('status');
let groupDateBlock = document.getElementById('group-date')
let idCounter = 1;

function titleInputCheck(title) {
    let titleTrimed = title.value.trim();
    if (titleTrimed == '') {
        title.innerHTML = '';
        return;
    }
    return titleTrimed;
}

function categoryInputCheck(category) {
    let categoryTrimed = category.value.trim();
    if (categoryTrimed == '') {
        category.innerHTML = '';
        return;
    }
    return categoryTrimed;
}



export function generateGroup() {
    let title = titleInputCheck(titleBlock);
    let category = categoryInputCheck(categoryBlock);
    let status = groupStatusBlock.value;
    let date = groupDateBlock.value;

    if (!title || !category || !status || !date) {
        titleBlock.value = '';
        categoryBlock.value = '';
        groupStatusBlock.value = '';
        groupDateBlock.value = '';
        return;
    }
    let newGroup = {
        groupId: idCounter++,
        groupTitle: title,
        groupCategory: category,
        groupStatus: status,
        groupDate: date
    }
    groups.push(newGroup)
    console.log(groups);
    titleBlock.value = '';
    categoryBlock.value = '';
    groupStatusBlock.value = '';
    groupDateBlock.value = '';
    desplayAvailableGroups(groups);
};


function desplayAvailableGroups(groups) {

    groupsListBlock.innerHTML = '';
    groups.forEach(group => {
        groupsListBlock.innerHTML += `
            <li id="group-card" class="bg-cyan-600 rounded-lg shadow p-4 pt-2 pb-2 pb-0" data-id = "${group.groupId}">
                <div id="card-items" class="flex flex-col gap-3 ">
                    <div id="groupe-header" class=" flex justify-between items-center">
                        <h3 class="font-bold text-2xl font-serif ">${group.groupTitle}</h3>
                        <div class="flex gap-2 items-center">
                            <button id="add-member-btn" class="flex gap-1 items-center text-sm font-bold"><a
                                    href="members-formulair.html"
                                    class="flex gap-2 items-center text-xs bg-cyan-100 rounded-xl p-1 hover:bg-blue-200">
                                    Add member<img src="asessts/add.png" alt="add member icon" height="20"
                                        width="20"></a></button>
                        </div>
                    </div>
                    <div id="group-infos" class="flex p-1 justify-between">
                        <div class="flex flex-col justify-between ">
                            <div class="flex items-center gap-2 ">
                                <img src="asessts/member-list (1).png" alt="group members count" width="15">
                                <a href="members.html" class="text-sm text-current hover:text-black hover:font-bold">5
                                    members</a></span>
                            </div>
                            <span id="group-status"
                                class="bg-green-300 p-1 text-xs font-bold flex justify-center items-center rounded-xl ">${group.groupStatus}</span>
                        </div>
                        <div class="flex flex-col items-end gap-6 h-full">
                            <button class="flex gap-2 items-center text-3xl  font-bold text-amber-400"><a id="total-amount" ><img src="asessts/money-transfer-coin-arrow.png" alt="money icon" width="30" height="30" ></a>500$</button>
                            <div>
                                <button id="edit-member-btn" class="p-2 bg-cyan-100 rounded-full hover:bg-blue-200"><a
                                        href=""><img src="asessts/pencil (1).png"
                                            alt="pincel icone to edit memers infos" title="edit group" width="20"
                                            height="20"></a></button> <button id="delte-group-btn"
                                    class="p-2 bg-cyan-100 rounded-full hover:bg-red-100 "><img
                                        src="asessts/trash-can-list.png" alt="bin icon" title="delete group" width="20"
                                        height="20"></button>
                            </div>
                        </div>
                    </div>

                </div>
            </li>
        `
    });

}