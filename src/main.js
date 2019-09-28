let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/*
你好，我是小孙
接下来我来展示我的前端功底
首先创建一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*
*接下来我们把div变成八卦图
*注意看好了
*首先把八卦图变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
*八卦由阴阳两极构成
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 000%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
}
/*
*加入两仪
*/
#div1::before{
    position:relative;
    width:100px;
    height:100px;
    left:50%;
    transform:translateX(-50%);
    top:0;
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 000%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
}
#div1::after{
    position:relative;
    width:100px;
    height:100px;
    left:50%;
    transform:translateX(-50%);
    bottom:0;
    background:#FFF;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*
*最后我们让他开始旋转
*/
@keyframes rotate{
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);       
    }
}
#div1{
    animation: linear 3s rotate infinite ;
}
`;
let string2 = "";

let n = 0;

let step = () => {

    setTimeout(() => {
        console.log(n);
        if (string[n] === "\n") {
            string2 += "<br>";
            //如果是回车，就加回车
        } else {
            //如果不是回车，就照搬
            string2 += string[n]
        }
        if (string[n] === " ") {
            string2 += "&nbsp";
        }
        html.innerHTML = string2;
        //string.substring(0, n);因为startEnd是不包含的，所以n=11,才能完整显示
        style.innerHTML = string.substring(0, n);
        n += 1;
        //当n等于length是就停止
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        if (n < string.length) {
            step();
        }
    }, 0);
}
step();





