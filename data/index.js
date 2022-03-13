const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
  changeLink(e.target.value);

  if (link) {
    video.innerHTML = `
        <iframe
        width="1264"
        height="480"
        src="${link}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>; 
        `;
  }
});

//Remplace le lien google par un lien embeded
const changeLink = (linkToChange) => {
  let embed = linkToChange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
};

// https://www.youtube.com/embed/QB1DTl7HFnc?list=PLEiMYEzpB4Qt1mtW0yzJDJccqp7LKQBeF

//--------------------------------------------------------------------------------
//
