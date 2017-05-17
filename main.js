var box = document.querySelectorAll('.box')[0];

function addPoint(x, y) {
    let div = document.createElement('div');
    div.style.position = 'absolute';

    div.style.top = y + 'px';
    div.style.left = x + 'px';
    div.style.height = '5px';
    div.style.width = '5px';
    div.style.background = 'black';

    document.body.appendChild(div);
}

box.addEventListener('touchmove', function (e) {

    let { pageX, pageY } = e.touches[0]; //析构赋值
    addPoint(pageX, pageY);
    event.preventDefault();
})

var btn1 = document.querySelectorAll('.btn1')[0];

btn1.addEventListener('click', function () {
    console.log('刷新页面');
    location.reload();
})