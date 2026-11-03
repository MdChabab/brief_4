let groups = [
  {
    groupId: 10,
    groupTitle: "tobkal trip",
    groupCategory: "trip",
    groupStatus: "done",
    groupDate: "11/02/2022",
  },
  {
    groupId: 6,
    groupTitle: "Roma Tour",
    groupCategory: "travel",
    groupStatus: "avtive",
    groupDate: "17/02/2026",
  },
];

let titleBlock = document.getElementById("title");
let categoryBlock = document.getElementById("group-category");
let groupStatusBlock = document.getElementById("status");
let groupDateBlock = document.getElementById("group-date");
let idCounter = 1;
desplayAvailableGroups(groups);
function creatGroup() {
  let title = checkInput(titleBlock);
  let category = checkInput(categoryBlock);
  let status = groupStatusBlock.value;
  let date = groupDateBlock.value;

  if (!title || !category || !status || !date) {
    titleBlock.value = "";
    categoryBlock.value = "";
    groupStatusBlock.value = "";
    groupDateBlock.value = "";
    return;
  }
  let newGroup = {
    groupId: idCounter++,
    groupTitle: title,
    groupCategory: category,
    groupStatus: status,
    groupDate: date,
  };
  groups.push(newGroup);
  console.log(groups);
  titleBlock.value = "";
  categoryBlock.value = "";
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
    <li class="bg-[#292c32] border border-[#383b43] rounded-2xl p-5 hover:border-[#484c56] transition-colors"
    data-id="${group.groupId}">

    <div class="flex flex-col gap-4">

        <div class="flex justify-between items-start gap-3">

            <div class="flex flex-col gap-1 min-w-0">

                <h3 class="font-semibold text-lg text-white">
                    ${group.groupTitle}
                </h3>

                <p class="text-sm text-gray-400">
                    ${group.groupDescription || "No description added yet."}
                </p>

            </div>

            <button onclick="showMemberFormClick()"
                class="shrink-0 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                + Add member
            </button>

        </div>

        <div class="border-t border-[#383b43]"></div>

        <div class="flex justify-between items-center gap-3">

            <div class="flex flex-wrap items-center gap-5">

                <div class="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors"
                    onclick="showMemberClick()">

                    <ion-icon name="people" class="text-lg"></ion-icon>

                    <span class="text-sm">
                        ${members.length} members
                    </span>

                </div>

                <div class="flex items-center gap-2 text-white">

                    <ion-icon name="wallet-outline" class="text-lg text-gray-400"></ion-icon>

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
})
}
