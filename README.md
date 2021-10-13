# GitTagList
A simple JavaScript library to list GitHub releases.

It Is very Simple too.

Step 1
Import it.
<code>
<script type="text/javascript" src="https://raw.githubusercontent.com/AnthonyOpenSource/GitTagList/main/gittaglist.js">
 </code>
Step 2
Create the Container (Can use text-align or sizing.)
 <code>
<div id="gittags">
</div>
 </code>
  
Step 3
Make it Work
<code>
<script type="text/javascript">
 GitListaddTagElement("gittags","[Your Github Name]/[Repository Name]");
</script>
 </code>
 Step 4
 Customize ✨
 <code>
 <style media="screen">
      #gittags{
        background-color: #292929;
      }
      a{
        color:#adadad;
      }
</style>
  </code>
Additional Note.
  The id of the div can be changed just change the first argument in the GitListaddTagElement function
