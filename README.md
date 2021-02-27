# daily-planner

## intro
Welcome to my personal daily planner. This is an interactive page that uses local storage to save a to-do list.

## how to use it

To add new items to a certain time block, you just have to type your new item into the input field (the white block that says "New to-do") and then click on the submit button.

To save that hour's list, you just have to click the save (floppy disk) icon to the right.

To delete that hour's list, you just have to click the trash bin icon to the far right.

If you want to delete a specific to-do item, you just have to click the little "X" button next to it.

## how it was done

I used bootstrap to build my page, their container and row/column classes are extremely helpful to put everything where you want it!

I used javascript to add life to my forms and buttons, as well as dynamically create elements (list elements and individual delete buttons). Third party JS APIs used were jquery and moment.js.

When you add a new to-do item, javascript is taking the value of the input field and spitting the value out into a new li element, and appending it into the container above the form. I also have javascript appending a child button to each li item to be able to delete any individual list item with $(this).parent().remove() (this is using jquery methods).
  
When you hit the save button, the html element is being saved into local storage, so that on future page load it is being retrieved and put onto the page.

When you hit the delete button, it clears the local storage key for that block, as well as removes everything from the list currently displayed on the page.

I use moment.js to take the day and time, specifically the current hour. The day is just being displayed at the top.

The hour is being compared to each of the hour containers, and the background color is set based on if it is less than, equal to, or greater than the current hour.

## conclusion

This project went very well overall, I just wish I would have ran into the each() function sooner... but I will rework the javascript in the future so that further future changes will be easier!
