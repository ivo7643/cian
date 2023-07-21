const ApList = document.querySelector(".AparmentList");
const favBut = document.querySelector(".favBut");
favBut

if (ApList) {
  ApList.addEventListener("click", async (e) => {
    if (e.target.classList.contains("favBut")) {   
      const id = e.target.dataset.id;
      const res = await fetch("/api/favorites", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apartId: id,
        }),
      });
      const data=await res.json()
      console.log(data)
      if(data.message='ok'){
        favBut.innerHTML='В Избранном'
      }
    }
  });
}
