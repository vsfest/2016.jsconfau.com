---
layout: interview
title:  "A moment with Soledad Penades"
date:   2016-10-17 21:37:14 +1000
interviewee: "Soledad Penades"
---

__[Q] Who in the industry consistently blows you away with incredible work?__

It is incredibly hard to answer this question without leaving excellent people out, but I'll try. I'm very impressed with the stuff coming out the ["Brooklyn JS scene"](https://github.com/jed/building-brooklynjs). They are building sustainable communities, while also working on their own fascinating projects, and I always feel super energised and inspired after hanging out with them.

Sort of related, I'm really happy about the new initiatives dedicated to learn Node.js and to help people get started in Node.js core programming, such as ["Node Together"](http://www.nodetogether.org/) and ["Node Todo"](http://nodetodo.org/). Node.js is such a vital piece of the industry by now, and we can't afford for it to not to include the community that uses it.

I'm also very happy about initiatives such as Outreachy and Rails Girls Summer of Code, because by offering paid internships to people who traditionally have it really hard to get into the industry, we're helping fix one of the fundamental issues why our industry is so homogeneous.

__[Q] What was the worst production incident that you caused?__

I have two memorable "incidents". One involved accidentally setting all the permissions in a server to 777, as I forgot I was logged in as root, and also didn't realise I was on the `/` directory and not the `tmp/` folder, and did a massive `'chmod -R 777 *'`. Happy times! Fortunately it was just the test server, so we could rebuild it without losing actual data. Lesson learnt: don't log in as root, and also don't do things in a rush.

My other funny incident was when the company I was working on got downsized and I became the combined IT support + Web Developer + DevOps person. I was tinkering in the server and stopped the MySQL service for some reason and then I forgot to start it again. After a while, I heard people in the office complaining that email didn't work, at all. I checked it myself and in fact, it didn't work. It occurred to me that maybe it had something to do with me tinkering in the server, so I went back, realised the service wasn't running, and started it again. Email was back, people stopped complaining and were happy to go back to their email. I reacted fast enough they didn't have time to come to my desk to complain, ha ha!

To date, I still can't believe how someone would put all their production websites AND email on the same machine, but hey, start ups.

__[Q] If you didn't work on the web, what would you be doing?__

It's hard to pick just one thing, because I like so many! It would probably be something creative too. Architecture was my second option when applying for uni, but I got accepted in Comp Sci first. I also like writing, graphic design, illustration and comics a lot... it is hard to choose 'one' when you have so many interests.

I like the Web because it is very impactful: what you do can reach so many people. You can provide information, enable them do things from their location, help them be autonomous, even change their lives! It's such a beautiful medium where we've barely started exploring its possibilities, and sadly the worst of human nature is already showing: censoring the web, organisations trying to put barriers to information, abuse, trolling...

__[Q] What would you do if you did not have to work?__

I have a number of ideas. One would be traveling, learning about this strange world we live in, and illustrating and writing about the journey. There are so many places I'd like to go and explore!

Another idea, which is very time and resource consuming, would be to build open archives, either archives that do not exist yet or those that exist but are unaccessible, and are very interesting from a societal point of view (although pretty much even non-interesting archives can be interesting when you combine them with more data). For example, old census data. Or historical business data: what has been in these premises before? For how long? Automating access to this can enable so many other activities, from societal research, to fact checking, to insight finding, to pure personal curiosity.

And I'd also like to help enabling individuals to share their own archives of local knowledge. Quite often we expect institutions to document and record everything for us, but that's giving up the enormous individual power that we hold when we're carrying photo cameras on us (i.e. our smart phones) all the time. If it was easier to share this stuff in a federated way, we all could be part of a network of anthropological micro-museums. Imagine if there was then a way to run searches across these museums. It would be such a precious resource to capture history and diversity, without having to wait for an institution to decide if something is worth sending their photographer to take a few archive pictures. All of you have an anthropology micro-museum waiting to happen in the old family picture photo stash.

Sometimes I also joke about having a ridiculous totally non profitable business like a pop up cafe-meets-boutique popped up in the ground floor of a pop up building, serving super more-than-organic locally roasted artisanal hand crafted coffee, and also selling hand picked limited edition objects such as books, clothing and decoration from my artist friends that I met in my travels around the world. Once it's gone, it's gone, and the whole pop up store would be sliced in small bits, framed, and sold as a limited run artist piece, like the Berlin wall memorabilia, only these would be real, unlike the Berlin memorabilia which is actually made in China.

By the time the last piece was auctioned and sold at a record price, I would already be onto my next artistic ephemeral shenanigans.

__[Q] Is this your first trip to Melbourne? Or Australia? Do you have other plans for your trip ?__

This is my second time in Melbourne and Australia, and I'm very excited because it was very cold the last time I visited, which didn't live up to my expectations (after having formed my image of Australia with all that INXS imagery featuring deserts and melting streets). That said, I had a lot of soul nurturing epic coffees, and I don't hold any grudge against the city.

I also went on a day nature tour where we spotted koalas, deer and other animals, and saw an actual billabong. In the afternoon, we were surrounded by a group of kangaroos as the sun tinted everything yellow, and meanwhile emus did their funny erratic running in the distance, so it's going to be hard to beat such a fabulous experience, but I'm happy to be surprised! :-)
