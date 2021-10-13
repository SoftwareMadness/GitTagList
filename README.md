# GitTagList
A simple JavaScript library to list GitHub releases.

It Is very Simple too.

Step 1
Import it.
<br>
<code>
<script type="text/javascript" src="https://raw.githubusercontent.com/AnthonyOpenSource/GitTagList/main/gittaglist.js">
 </code>
 <br>
Step 2
Create the Container (Can use text-align or sizing.)
 <br>
 <code>
<div id="gittags">
</div>
 </code>
  <br>
Step 3
Make it Work
 <br>
<code>
<script type="text/javascript">
 GitListaddTagElement("gittags","[Your Github Name]/[Repository Name]");
</script>
 </code>
 <br>
 Step 4
 Customize ✨
 <br>
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
 <br>
Additional Note.
  The id of the div can be changed just change the first argument in the GitListaddTagElement function
