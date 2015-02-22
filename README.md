#BioViz Lab 5

###Overview

For this lab I made a simple visualization - it shows the fires by location based on the queried parameters. Because multiple fires will take the same location, I process the results from the database to combine fires at the same location and scale their point based on the number of fires at that location. I also added a tooltip that shows the x, y, and number of fires for a point. The idea is to be able to see where fires occur for certain ranges of the parameters

The database is queried from a node/express server to avoid generating sql in the client, which the client queries whenever one of the sliders is released or clicked. I had to modify the slider tool that I used to change the color and prevent it from querying constantly on drag (since that would be slow and inefficient when querying a database).

###Running it
Navigate to the folder containg server.js in your terminal and run the command 'node server.js' (you will need to have [node.js](http://nodejs.org/download/) installed), then navigate to localhost:3000 in your browser. If you are already using port 3000, you will have to modify the port number in server.js.