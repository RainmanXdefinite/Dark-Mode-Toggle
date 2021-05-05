# Dark-Mode-Toggle
Dark mode toggle for your site.
# How it works
This works by making a div with the id 'switchable-modes'. Then making the button to switch it and
giving the button an onclick of toggleDarkMode(). Then coding the function like this:
<br>first, we define in the script the variable to hold the current mode. I called it 'mode'. By default it's
set to light.
Then, we define the toggleDarkMode() function. We code it like this:<br>
If the mode is already dark, then we know the user wants to switch to light mode, so we set the mode to 
light and update all elements in the switchable-modes div to be the correct color. Else, if it's light,
switch it to dark mode and update all elements in the switchable-modes div to be the correct color.
