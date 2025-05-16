let button=document.getElementById("addbtn")
    button.addEventListener("click",addtask)
let tasklist=document.getElementById('tasklist')
    let arr=[]
    let uniid;

    function addtask(){
         tasklist.innerHTML=""

        // let inbox=document.getElementById("taskinp")
        //let valOfInpbox=inpbox.value
           
        let inpbox=document.getElementById("taskinp").value
        let taskprio=document.getElementById("prio").value

        //console.log(inpbox,taskprio)

        let obj={
              id:Date.now()*Math.random(),
              taskname:inpbox,
              taskprio:taskprio,
              status:false
        }
        arr.push(obj)

        console.log(arr)

        arr.forEach(maketodos)
        document.getElementById('taskinp').value=" "
    }

    function maketodos(el,i,arr){
        let tr=document.createElement("tr")

        let task=document.createElement("td")
            task.innerText=el.taskname

        let prio= document.createElement("td")
            prio.innerText=el.taskprio


           if(el.taskprio=="HIGH")
          {
            prio.style.backgroundColor="red"
          }
          else if(el.taskprio=="LOW"){
            prio.style.backgroundColor="blue"
          }
          else{
            prio.style.backgroundColor="yellow"
          }

        let status=document.createElement("td")

             if(el.status==false)
             {
              status.innerText="notdone"
              tr.style.backgroundColor="red"
             }
             else{
              status.innerText="done"
              tr.style.backgroundColor="green"
             }
        let tdbtn=document.createElement("td")  

        let togbtn=document.createElement("button")
            togbtn.innerText="click to toggle"
            togbtn.value=el.id
            togbtn.addEventListener("click",handleClick)

            tdbtn.append(togbtn)
       


        let tddel=document.createElement("td")

        let delbtn=document.createElement("button")
            delbtn.innerText="click to delete"
            delbtn.value=el.id
            delbtn.addEventListener("click",handleDel)

            tddel.append(delbtn)

        let tdEdit=document.createElement("td")  
        
        let Editbtn=document.createElement("button")
            Editbtn.innerText="click to edit"
            Editbtn.value=el.id

            Editbtn.addEventListener("click",handleEdit)

            tdEdit.append(Editbtn)


            tr.append(task,prio,status,tdbtn,tddel,tdEdit)
            tasklist.append(tr)
             
             
    }

    //toggle the element
    function handleClick(){
      let btnval=this.value

      let uppar=arr.map(function(el,i,arr){

        if(el.id==btnval){

          let obj={
              id:el.id,
              taskname:el.taskname,
              taskprio:el.taskprio,
              status:!el.status
          }

          return obj
        }
        else {
          return el
        }

      })
      arr=uppar
      tasklist.innerHTML=""
      uppar.forEach(maketodos)
      
    }

    //delete the element

    function handleDel(){
      let btnid=this.value

      let newarr=arr.filter(function(el){

        return el.id!=btnid
      })
       arr=newarr
       tasklist.innerHTML=""
       arr.forEach(maketodos)

    }

    //handle Edit

    function handleEdit(){
      console.log(this.value)
      let btnval=this.value
      arr.forEach(function(el){

        if(el.id==btnval)
        {
          console.log(el)

          let inpbox=document.getElementById("taskinp")
              inpbox.value=el.taskname

              document.getElementById("prio").value=el.taskprio

              arr=arr.filter(function(el){

                return el.id!=btnval

              })

              tasklist.innerHTML=""
              arr.forEach(maketodos)
        }
      })    
    }