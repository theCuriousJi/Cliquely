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

1) makes sure images appear and delete when links are posted.
2) check remove post on the filtered feed
3) add comments



Questions:
1) On my GroupFilter on the home page, I have a listener on add events, after
which I add subviews, and one on a sync, after which I render.  while the
collection fetches, are add events being triggered.



Pickup tomorrow

Working on Like button
  -currently have it so that a like button is added as the post is added
  and the user holds information about each like


bugs
On all groups page, if you are a member of a group, you cant leave and rejoin the group on the same page


1)add filters prop to collections
collection
filters: {groupId: [],}

2) fetchFiltered method in collection
  -call this.fetch({data: this.filters})

inside controller, params will include filters
based on filters, build up a bunch of where conditions
