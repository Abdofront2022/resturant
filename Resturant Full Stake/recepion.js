let ddiivv = document.querySelector(".siting-continer");
let ddivv = document.querySelector(".siting-box");


function ddlselect(){
    var d = document.getElementById("dddd");
    //option element text
    var de = d.options[d.selectedIndex].text;
    //option element value
    var dee = d.options[d.selectedIndex].value;
    //option element name
    var deee = d.options[d.selectedIndex].name;
    //option element data
    var deeee = d.options[d.selectedIndex].dataset.new;
    //option element data
    var deeeee = d.options[d.selectedIndex];
    // element
    var pirint_div = document.createElement("div");
    pirint_div.className = "my_div";
    if(deeeee.hasAttribute("data-new")){

        var p = document.createElement("p");
        p.className = "m_span";
        var txt = document.createTextNode(de);
        p.appendChild(txt);
        pirint_div.appendChild(p)

        let Div_ = document.createElement("div");
        Div_.className = "dddddd";
        pirint_div.appendChild(Div_);

        var inp = document.createElement("input");
        inp.type = 'number';
        inp.className = "i-np-u-t";
        inp.value = 1;
        Div_.appendChild(inp);

        var btn1 = document.createElement("span");
        btn1.className = "btn1 sss";
        var btn1_text = document.createTextNode(deeee);
        btn1.appendChild(btn1_text)
        Div_.appendChild(btn1);

        var btn2 = document.createElement("span");
        btn2.className = "btn2 sss";
        var btn2_text = document.createTextNode(dee);
        btn2.appendChild(btn2_text)
        Div_.appendChild(btn2);
    
        btn1.addEventListener("click",function(){
            btn2.remove();
        })
        btn2.addEventListener("click",function(){
            btn1.remove()
        })

        var deleted = document.createElement("button");
        var deleted_text = document.createTextNode("Delet");
        deleted.className = "btn_deleted";
        deleted.appendChild(deleted_text);
        pirint_div.appendChild(deleted);
        deleted .addEventListener('click',function(){
            pirint_div.remove()
        })

    }else{
        var p = document.createElement("p");
        p.className = "m_span";
        var txt = document.createTextNode(de);
        p.appendChild(txt);
        pirint_div.appendChild(p)

        let Div_ = document.createElement("div");
        Div_.className = "dddddd";
        pirint_div.appendChild(Div_);

        var inp = document.createElement("input");
        inp.type = 'number';
        inp.className = "i-np-u-t";
        inp.value = 1;
        Div_.appendChild(inp);

        var btn3 = document.createElement("span");
        btn3.className = "btn3 sss";
        var btn3_text = document.createTextNode(dee);
        btn3.appendChild(btn3_text)
        Div_.appendChild(btn3);

        var deleted = document.createElement("button");
        var deleted_text = document.createTextNode("Delet");
        deleted.className = "btn_deleted";
        deleted.appendChild(deleted_text);
        pirint_div.appendChild(deleted);
        deleted .addEventListener('click',function(){
            pirint_div.remove()
        })
    }
    ddiivv.appendChild(pirint_div);
}
document.querySelector(".siting-box .ss").onclick = function(){
    document.querySelector(".siting-box").classList.toggle("open");
}

let btn = document.createElement("button");
btn.className = 'btn-btn-'
let btn_text = document.createTextNode("Order");
btn.appendChild(btn_text);
ddiivv.appendChild(btn);

// let count = 0;
// btn.onclick = function(){
//     let card = document.querySelectorAll(".my_div");
//     card.forEach(li => {
//         window.localStorage.setItem(`Name${count}`, li.firstChild.innerHTML)
//         window.localStorage.setItem(`input${count}`, li.children[1].value);
//         count++;
//     });
//     for(let i = 0; i < count; i++){
//         let poerpoint =document.createElement("div");
//         poerpoint.className = 'poerpoint'
//         let poerpoint_text = document.createTextNode(`Name => ${window.localStorage.getItem(`Name${i}`)}.......Number => ${window.localStorage.getItem(`input${i}`)}........`)
//         poerpoint.appendChild(poerpoint_text);
//         document.body.appendChild(poerpoint);
//     }
// };

// let btn22 = document.createElement("button");
// btn22.className = 'btn-btn-2'
// let btn_text22 = document.createTextNode("New-Order");
// btn22.appendChild(btn_text22);
// document.body.appendChild(btn22);
// btn22.onclick = function(){
//     window.localStorage.clear();
// }

