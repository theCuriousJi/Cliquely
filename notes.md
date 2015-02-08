How the filter currently works
1) I instantiate a Util model, which holds arrays for various filters
  e.g. the groupFilter will hold all the groupIds that the user subscribes to

2)As the page loads, the users groups are added to the user's group side bar,
and the group id's are loaded into the Util displayed GroupIds

3) an empty collection is instantiated in the root view, into which
I place the results of filtering the overall posts collection; at the load of
the page, there are no filters so all the groups are included
