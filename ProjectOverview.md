----Components-----------

• Body.js,
• playlist.js,
• videoPlayer.js
• card.js

--------Hooks------------

• useData.js

--------utills---------

• constant.js
• searchFiltter.js

-------Library’s-------

• Tailwind Css Library for Styling.
• React Player Library for video player.
• React icons library for better icons

----------Api’s------

• Youtube api for videos

---------------Project Brief----------------------------------

Body.js : imported outlet from react router dom for single page rendering.

----------playlist.js
• Imported data from useData Hook.
• Stored data in data and allData state.
• dragItem and DragItemOver useRef used for items reorder
• Created input useref for user Input
• Videos useState for store the imported useData Hook data
• UseEffect Hook for store the Videos useState data in data and allData useState
• handleSort function for while user reordering the videos handleSort function will trigger and helps to reorder the Videos
• searchHandler function when user Click on search button searchhandler function will trigger and it will call and pass the props to searchfillter function and and return data will store in data useState
• used if statement for early return if data useState is Empty

 inside return

• Created input and search button for user to filter data
• Created buttons for quick filter of data
• Using map function data is passed to card.js component and displayed playList
• Used dragged, onDragStart, onDragEnter, onDragEnd functions for allow user to reorder videos in the playlist using dragItem and dragItemOver useRef and hadleSort function
• When user clicked on video pages is redirected to videoplayer

----------videoplayer.js----------

• Created playing state for play/pause
• Player useRef used for backword or forward the video duration
• Used useparam for store the id which is present in url
• data variable used for Imported data and filtered details of video using stored id
• SelectedVideo varaible used for filtered details of video using stored id from data
• backwardHandler function used for make a video Duration backward to 10 sec
• forwardHandler function used for make a video Duration forward to 10 sec
• if statement for early return
 inside return
• Displayed name of video using filter detailes of Video
• Created react video player to play the video using youtube url
• Created buttons for seek functionalit

------------card.js--------

• using props displayed name of videos and images
• dragged functions used for enable drag feature
• Used Link from reacter router dom for navigate to video player page

----------Usedata Hook----------

• data useState for storing the fetched data from youtube api
• useEffect Hook for call the dataHandler function for once
• dataHandler function for fetch the data and store data in data useState
• inside return returning the data

----------Constants.js----------

• youtube_key variable used for stored the key of youtube api
• Youtube variable used for store the url of youtube api and attached key
SearchFilter.js
• Data variable used for filter the videos using searchText prop
• Returned the filtered videos

----------App.js----------

• approuter variable to helps to navigate pages view using createBrowserRouter from react router dom
• provided reactprovider in return for routingss
