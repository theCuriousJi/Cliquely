OurLinks
Heroku link
[Cliquely](https://www.cliquely.io)

Minimum Viable Product

OurLinks is a clone of Facebook built on Rails and Backbone, with the twist that users can only post if they are sharing a link, and must share links to distinct groups. Users can:

 Create accounts
 Create sessions (log in)
 Create links
 Create groups
 Tag links
 View links posted by users of groups they belong to
 Join a group (if invited)
 View a feed of subscribed groups' links
 Like a link
 View Liked links
Design Docs

View Wireframes
DB schema
Implementation Timeline

Phase 1: User Authentication, Basic and Posts (~1 day)

I will implement user authentication in Rails based on the practices learned at App Academy. By the end of this phase, users will be able to create posts and posts using simple text forms in Rails views. The most important part of this phase will be pushing the app to Heroku and ensuring that everything works before moving on to phase 2.

Details

Phase 2: JSON API and First Backbone Views (~2 days)

I will add API routes to serve link data as JSON, then add Backbone models and collections and views that fetch data from those routes. By the end of this phase, the existing Rails views will have been ported over to Backbone. Users will be able to create new links, view the link index of links added

Details

Phase 3: Taggings and Groupings (~2 days)

I plan to use third-party libraries to add functionality to the LinkForm and GroupForm views in this phase. view. I also plan to integrate Filepicker for file upload so users can add files to as posts.

This might be one of the tougher parts for me. I want to make it so that a user's feed will consist of all links posted to each of that user's groups. e.g. if I post a link to group 1 and group 2, the link will show up on the feeds of users in group 1 and group 2. Should there be separate groupings for a link and a user, so a user is connected to a groupID as is every link? That is the direction in which I was headed; would these both be has_many relationships?

Details

Phase 4: User Feeds (~1 days)

I'll start by adding a feed route that uses the current_user's subscribed_groups association to serve a list of links ordered chronologically. On the Backbone side, I'll make a FeedLinks collection that fetches from the new route, then create a FeedShow view that uses the new collection. Ultimately, this will be the page users see after logging in. Users will see a sidebar where they can click on a group name and/or a tag name to filter their feed by those params

Details

Phase 5: Searching for Links (~2 days)

I'll need a search route that accepts a query in the params. The controller action will run two queries: one to find links where the title matches the search term, and another to find links where one of their associated Tags matches the search term. In Backbone, I plan to implement a SearchResults view that will display matching links.

Details

Bonus Features (TBD)

 Activity history for posts (e.g. likes)
 'Like' button and counter for PostShow view
 Support for multiple open sessions
 User avatars
 Add markdown to link editor
