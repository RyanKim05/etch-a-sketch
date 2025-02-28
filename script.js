        //Creating a 16x16 squares of divs
        const containerPtr = document.querySelector(".container");

        for(let i=0;i<16;i++){
            for(let j=0;j<16;j++){
                const square = document.createElement("div");
                square.style.height = "50px";
                square.style.width = "50px";
                containerPtr.appendChild(square);

                square.addEventListener("mouseover",(event)=>{
                    event.target.style.backgroundColor = "black";
                });
            }
        }

        document.querySelector("button").addEventListener("click",()=>{
            let userInp;
            do{
                if(userInp===null){
                    return;
                }
                userInp = prompt("Enter new grid size 1-100");
            }
            while(userInp>100||userInp<1);
            containerPtr.innerHTML = "";

            const pixels = 800/userInp;
            for(let i=0;i<userInp;i++){
                for(let j=0;j<userInp;j++){
                    const square = document.createElement("div");
                    square.style.height = pixels.toString()+"px";
                    square.style.width = pixels.toString()+"px";

                    square.addEventListener("mouseover",(event)=>{
                        if(event.target!==containerPtr){
                        event.target.style.backgroundColor = "black";
                        }
                });
                containerPtr.appendChild(square);

            }
        }
        });