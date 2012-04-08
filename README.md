# KeySearch #

KeySearch is a hack-y replacement for [Arne Martin Aurlien][ama]'s brilliant [SafariKeywordSearch][] extension. KeySearch works in Safari 5.2.

## Downloading ##

You can download KeySearch from [here][dl].

## Erm, however. ##

As Arne [pointed out][blogpost]:

> Anything that doesn’t look like a URL is turned into a web search, before the beforeNavigate event is triggered. That means that the data sent along with the event looks like `http://google.com?q=g%20monkey`. [...] It is impossible to know whether the user entered “g monkey” as a keyword search or actually want to search google for “g monkey”.

All my extension does is assume that if you typed “[keyword] query” into the address bar, you wanted to do a keyword search. Now, this _could_ end badly. For example, I have `ea` set up as a keyword for searching eBay Australia. So, to search eBay Australia for "blah", I type "ea blah" into the address bar. If I ever want to search Google for "ea games" (as in EA, the video game company), and I type "ea games", KeySearch will intercept that and assume that I wanted to search eBay Australia for "games".

Does that make sense? I feel like I explained that poorly.


## tl;dr ##

If what you enter into the address bar looks like a keyword search, KeySearch will assume that it _is_ a keyword search.

## Future Work ##

Gee, I really gotta let people customise their search keywords. Right now, there's a big ol' dictionary called `map` in `KeySearch.js` that contains all of the search keywords and what sites they correspond to. I borrowed Arne's convention of using `@@@` as a placeholder for the search query.

[ama]: http://am.aurlien.net/
[SafariKeywordSearch]: http://safariKeySearch.aurlien.net
[dl]: https://github.com/scottjacksonx/KeySearch/raw/master/KeySearch.safariextz
[blogpost]: http://am.aurlien.net/post/19346990224/sks-and-safari-5-2?18497c68