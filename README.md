# Emma test app
![Emma test app](https://s8.gifyu.com/images/popup.gif "Emma test app")



emmaTest is a small app that realises the test task for Emma.


- Realised without any third party libraries outside of TypeScript
- In TypeScript
- Reads from a json in /assets folder
- When the user presses on the central icon, a modal pops up.
- A couple of tests.
- The main component <ContactScroll /> is packaged "for distribution". <HomeScreen /> gets the data for it and passes it through props.


![popup](https://i.imgur.com/Jr5DYkL.gif "popup")


# installation
```
Download
yarn install
cd ios && pod install
yarn ios
yarn android
```

# Method
There are two scrolling views that scroll simultaneously and both snap to correct spots once the gesture is completed.
Since one of the conditions for the task was that third party libraries are to be avoided, I couldn't use **gesture-handler** and **reanimated**. I don't think it's possible to synchronise the views with the synchronization happening on the native side without using those libraries or writing a huge amount of native code. In this app, the views are synchronised on the JS thread. It doesn't seem to be that much of a hit on the performance, but these things stack up - when dealing with actual live code, this should be avoided.


Doing this on the native side would, for me, at least, involve writing my own scrollview with PanGestureHandler, grabbing the animation value and using it on the other view.


But there are also advantages to doing it on the JS thread - since i didn't need to make my own ScrollView, i actually used FlatList, so this component is very scalable and can show a giant amount of contacts without a performance hit.


**Since the text has to fit on one screen, i made some size-matters inpired scalers.**
![Size comparison](https://i.imgur.com/Qzs20g0.png "Size comparison")


The component structure:

__/ContactModal

A modal that shows up once the user touches the portrait in the center

__/ContactScroll

A component that calls the IconCarousel and VerticalInfoScroll components and passes info between them

__/ContactScroll/IconCarousel

The horizontal flatlist with the portraits.

__/ContactScroll/VerticalInfoScroll

The vertical flatlist with the text.

__/HomeScreen

The component that reads the data from the json, draws a header and passes info between ContactModal and ContactScroll.




