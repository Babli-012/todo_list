let input = document.getElementById("input");
let maintodo_list = document.querySelector(".maintodo-list");
const getlist = () => {
    return JSON.parse(localStorage.getItem("my_list"));
}
let locallist = getlist();

const showtodolist = () => {
    Array.from(locallist).forEach(e => {
        let elem = document.createElement("div");
        elem.classList.add("element");
        elem.innerHTML = `<span>${e}</span>  <button class="dltbtn btn">delete</button>`;
        maintodo_list.append(elem);

    })
}
const updatetodolist = (locallist) => {
    localStorage.setItem("my_list", JSON.stringify(locallist));

}

let list = locallist ?? [];

const createElem = () => {
    const value = input.value.trim();
    if (value !== "") {
        if (!list.includes(value)) {
            list.push(value);
            let uplist = [...new Set(list)];
            console.log(uplist);
            localStorage.setItem("my_list", JSON.stringify(uplist));
            let elem = document.createElement("div");
            elem.classList.add("element");
            elem.innerHTML = `<span>${value}</span>  <button class="dltbtn btn">delete</button>`;
            maintodo_list.append(elem);
        }
    }
    input.value = "";

}


const dltelem = (e) => {
    let tarelem = e.target;
    let pelem = tarelem.parentElement;
    let prevelem = tarelem.previousElementSibling.innerText;
    // console.log(tarelem);
    locallist = locallist.filter((e) => {
        return e !== prevelem

    })
    console.log(locallist);
    if (tarelem.classList.contains("dltbtn")) {
        pelem.remove();
    }
    updatetodolist(locallist);
}
// console.log(locallist);

document.querySelector(".btn").addEventListener('click', createElem);
maintodo_list.addEventListener("click", dltelem);
showtodolist();


