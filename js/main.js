const users = Array.from(document.querySelectorAll('.users'));
const modal = document.querySelector('.box3');

users.forEach(curr => {
    curr.querySelector('img').addEventListener('mouseover', () => {
        let ele = curr.getBoundingClientRect();

        modal.style = `display: block; left:${ele.left / 2}px;`;
        // console.log(modal)
        // console.log(ele.bottom)

        curr.addEventListener('mouseout', () => {
            modal.style.display = 'none';
        })
    })
})

// 

{const navBtn = document.querySelector('#navBtn');
const navBox = document.querySelector('.side-panel');
let opt = true;
navBtn.addEventListener('click', () => {
    navBox.classList.toggle('active');
    navBtn.classList.toggle('active');

    if(navBox.classList == 'side-panel active'){
        navBtn.querySelector('i').innerHTML = 'close';
    } else {
        navBtn.querySelector('i').innerHTML = 'menu';
    }
    
})
}

{
    const prof = document.querySelector('#profile')
    prof.addEventListener('click', () => {
        let action = document.querySelector('.actions').classList.toggle('active')
        let icons = document.querySelector('#profile').querySelector('i');
        if(action){
            icons.innerHTML = 'arrow_right'
        } else {
            icons.innerHTML = 'arrow_drop_down'
        }
    });

    const dropDownBtn = document.querySelector('#dropdown');
    

    dropDownBtn.addEventListener('click', (e) => {
        e.preventDefault();

        dropDownBtn.classList.toggle('dark-bg');
        document.querySelector('.dropdown').classList.toggle('active');

    })

}

