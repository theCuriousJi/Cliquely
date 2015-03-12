How the filter currently works
1) I instantiate a Util model, which holds arrays for various filters
  e.g. the groupFilter will hold all the groupIds that the user subscribes to

2)As the page loads, the users groups are added to the user's group side bar,
and the group id's are loaded into the Util displayed GroupIds

3) an empty collection(filtered Collection) is instantiated in the root view, into which
I place the results of filtering the overall posts collection; at the load of
the page, there are no filters so all the groups are included

4)as filter events are triggered, array holding the various filters is changed,
and a change event is triggered, which in turn triggers the feed to filter its
collection.  This goes to the master collection, filters it using the new filters,
and resets the filtered collection with the results of the filter



To Dos:
3) add gravatar img for users
8) fix filters
9) fix forms


User
Group
Group MEmbership
Post
Link MEmebership
Tag
Tagging
Comment
Like
