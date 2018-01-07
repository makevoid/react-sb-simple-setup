React example repo of a redux-like example app using setState on the root component

All started from a tweet from @sharifsbeat :  https://twitter.com/makevoid/status/949284482221264896

![https://pbs.twimg.com/media/DSs6AIyXUAAvjvy.jpg:large]()


I liked the idea a lot! I like simple stuff for simple apps, probably it's not worth going full-redux for small apps. I wanted to keep this setup:

- keep root component `setState()` for manipulating a single global state/store, keep `update()` as "dispatch" function

Then on top of it the following "improvements":

- pass props to child component normally when it makes sense
- pass store (root component state) to child object via context
- pass "dispatch" function to all child objects via context

I don't like the overhead of mapStateToProps for every component. I know context can conflict with third party libraries but it's a risk I want to take for small apps.

OK, this works, it's a bit strange because I used parceljs (which is an interesting alternative to webpack/rollup btw) but also because I'm binding the `setState` `App` instance on the `App` prototype. Other than that I'm pretty happy with the results. I won't use it for big apps but for small apps and prototypes I think it makes sense. If you know any way to improve this please @me on twitter or fork the repo :) .

---

personal note: I like parcel.js but I fill strange using async/await for importing other files, ok for performance/lazy loading but it feels overcomplicated to me.
