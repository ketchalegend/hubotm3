<h2 id="getting-started-with-hubot---‘jessie’">Getting Started With Hubot -&gt; ‘jessie’</h2>
<h4 id="how-to-create-a-new-task">How to create a new Task</h4>
<p>
• add|create (task-description) -> A task will be added with task description, default date and time.<br>
• update (task-number) (task-description) @hh:mm,where task-number and time(hh:mm) are optional -> It will update the description of the mentioned task-number. If task number is not specified, last added task present in the context gets modified.<br>
• delete (task number|all) ->If task number is not specified, last added task present in the context gets removed.<br>
• time (task-number) (time in the format hh:mm) -If task number is not specified, last added task present in the context gets modified.<br>
• date (task-number) (date in the format DD-MM-YYYY) ->If task number is not specified, last added task present in the context gets removed.<br>
• date (task-number) today+n ->Modify date of task-number to current day + n number of days. If task number is not specified, last added task present in the context gets modified.<br>
• subtask (description) for (parent-task-number) ->Add sub task for parent-task-number.<br>
• list -> display the list of tasks on chronological basis.<br>
• default time HH:MM ->Set HH:MM as default time.<br>
• default date today+n -> Set default date to current date+n<br>
• show (task number) -> Show details of the task. task_number = last added task, if task_number is not provided<br>
• note (task number) (note-description) -> Add note for (task number). task_number = last added task, if task_number is not provided<br>
• complete (task-number) -> Mark the specified task as complete. task_number = last added task, if task_number is not provided<br>
• default date (DD-MM-YYYY) -> Set default date to (DD-MM-YYYY)<br></p>
<h4 id="how-to-create-a-reminder">How to create a Reminder</h4>
<p>jessie remind at 5 PM to go home - Reminds you at 5 pm to go home<br>
jessie remind in every 30 minutes to take a walk - Reminds you every 30 minutes to take a walk<br>
jessie remind me tomorrow to document this better<br>
jessie remind us in 15 minutes to end this meeting<br>
jessie remind[er] (delete|remove|stop) [NUMBER]<br>
jessie remind[er] repeat [NUMBER]<br>
jessie remind[ers] (list|show|all)<br>
jessie repeat remind[er] [NUMBER]<br>
jessie [delete|remove|stop] remind[er] [NUMBER]<br>
jessie (list|show|all) remind[ers]</p>
<h4 id="how-to-bookmark-a-url-to-easily-find-it-later">How to Bookmark a Url to easily find it later</h4>
<p>jessie bookmark add  as  - add a url to the robot brain<br>
jessie bookmark delete  - delete url from robot brain<br>
jessie bookmark find  - find a link by description<br>
jessie bookmark list - list all of the links that are being tracked</p>
<h4 id="what-are-the-rules">What are the rules</h4>
<p>jessie the rules - Make sure hubot still knows the rules.</p>
<h4 id="maps-you-on-google">Maps you on Google</h4>
<p>jessie map me  - Returns a map view of the area returned by query.</p>
<h4 id="help-command">Help Command</h4>
<p>jessie help - Displays all of the help commands that this bot knows about.<br>
jessie help  - Displays all help commands that match .</p>
<h4 id="whois-query">whois query</h4>
<p>jessie whois <a href="http://google.com">google.com</a> - </p>
<h4 id="wiki-search">wiki search</h4>
<p>jessie wiki search  - Returns the first 5 Wikipedia articles matching the search <br>
jessie wiki summary </p><article> - Returns a one-line description about <article></article></article><p></p>
<h4>Get roomid</h4>
<p>roomid - Displays the id for the room<br>
roomid  - Displays the id for the target room</p>

