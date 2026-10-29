let seeMoreArrows = document.getElementById("see-more-arrows")
let seeMoreArrowsBtn = document.querySelector("#see-more-arrows>button")

function openSeeMore() {
    seeMoreArrowsBtn.classList.add('hidden');
    seeMoreArrows.innerHTML = `
        <div>
            <nav>
                <ul class="flex justify-between"><li>Members</li><li>Expenses</li></ul>
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
            <div id="see-more-arrows" class="flex justify-center">
            <button onclick="closeSeeMore()">
              <svg
                style="width: 20px"
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                id="angle-double-down"
              >
                <path
                  fill="#6563FF"
                  d="M11.3,11.5c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l3-3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,9.3L9.7,7c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L11.3,11.5z M14.3,12.5L12,14.8l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3,3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l3-3c0.4-0.4,0.4-1,0-1.4C15.3,12.2,14.7,12.2,14.3,12.5z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        `;
}

function closeSeeMore() {
    seeMoreArrows.innerHTML = `
    <div id="see-more-arrows" class="flex justify-center">
            <button onclick="openSeeMore()">
              <svg
                style="width: 20px"
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                id="angle-double-down"
              >
                <path
                  fill="#6563FF"
                  d="M11.3,11.5c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l3-3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,9.3L9.7,7c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L11.3,11.5z M14.3,12.5L12,14.8l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3,3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l3-3c0.4-0.4,0.4-1,0-1.4C15.3,12.2,14.7,12.2,14.3,12.5z"
                ></path>
              </svg>
            </button>
          </div>
    `
}