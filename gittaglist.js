console.log("GitTagList is now located at  https://raw.githubusercontent.com/SoftwareMadness/GitTagList/main/gittaglist.js");
function dispTags(data,id,repo)
{
  for(var i = 0;i < data.length;i++)
  {
    var tag = data[i];
    var elmnt = document.createElement("A");
    elmnt.innerHTML = tag.name;
    if(i == 0)
    {
      elmnt.innerHTML += " <sup>Latest Release</sup>";
    }
    elmnt.href = "https://github.com/"+repo+"/releases/tag/"+tag.name;
    document.getElementById(id).appendChild(elmnt);
    var elmntbr = document.createElement("br");
    document.getElementById(id).appendChild(elmntbr);
  }

}
function GitListaddTagElement(id,repo)
{
  fetch("https://api.github.com/repos/"+repo+"/tags").
    then(response => response.json()).
    then(data => dispTags(data,id,repo));
}
