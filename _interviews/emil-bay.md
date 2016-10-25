---
layout: interview
title:  "A moment with Emil Bay"
date:   2016-10-21 21:37:14 +1000
interviewee: "Emil Bay"
---

__[Q] Tell us a bit about yourself and what you do?__

My name is Emil Bay and I'm a hacker from Denmark. I've been programming to some degree as far back as I can remember, but it really took off when I was 13 and decided I wanted to become an exchange student. My parents found it hard to finance the exchange, so I took matters in my own hands and started doing freelance work. By doing gigs at night after school, I was able to accumulate the money required and I became a Rotary Youth Exchange student after secondary school, at 16, to Australia. Since then I've been in and out of uni, worked at a High Performance Computing lab, worked at an ad agency and most recently worked at a major Danish newspaper. Currently I'm working on an AgTech startup. We're essentially trying to build a trading platform for the grains business, but with some special security properties, all built on proven crypto primitives, some of which I'll cover in my talk.

__[Q] Tell us about the journey that led you to what you're doing?__

While working at the newspaper, I was approached by their technical director, Anders Emil Møller, who asked me to work with him on a pro bono project that he was coordinating, helping Syrian journalists in exile create a collaborative media as a means to unite war-torn Syria. The prospects of having a positive impact on such a devastating conflict made me agree immediately. So over the last months we've worked on a website for them and that's when we realised that there are some deeper problems with how the internet and publishing is designed, that can be solved by using crypto and ideas from the Distributed Internet movement. Being in Copenhagen I'd sometimes go hacking with Mathias Buus, who is one of the co-founders of Dat, working on a peer-to-peer network for scientists sharing data. Hanging out with him I started to pick up on the ideas and methods they're using. Hyperjournal is very much a union of the two worlds. And that's what my talk will be about.

__[Q] What's the most underrated tech you've loved in the last year?__

The DOM! My friend Andreas Madsen, who is a former Node core contributor and no bullshit kinda guy, put me onto actually learning the DOM API. I did know some of it, but it was stowed far away in long-term memory.

One of my first programming books was actually a Danish JavaScript book that I got when I was about 8, but back then it was called DHTML and I don't really remember much from it. Also, this was before jQuery or Prototype.js were invented, so it was a wild west of browser issues.

Today there's such a push for frameworks and "kitchen sink" libraries, that people are talking about "JavaScript fatigue", but in my opinion the cure is to just learn the underlying APIs. Given that, the lowest common denominator is the DOM. It might be a bit verbose and have it warts, but you can get around that with less leaky abstractions such as bel and hyperx. It has always had a bad rap as being slow, which the Virtual DOM technology inflated even more, but look at something like the morphdom benchmarks this doesn't have to be the case.

__[Q] Have you ever feared for your life while on vacation?__

Close! I did have one fairly rough incident when I was an exchange student. It was a couple of days before Christmas and I was staying at Goolwa in South Australia. My host-brother and I decided to go for my first surf. I was so excited! He showed me how to get up and I watched him catch a couple of waves. Then it was my turn. I get on the board and see a wave coming, so I start paddling. However, as the wave gets closer it's much larger than expected, and turns out to be a tidal wave. Next thing I remember my host-brother it halfway dragging me to the beach and there's lots of blood everywhere. We get to hospital and I get 11 stitches across my face and 3 next to my eye! To this day it's still unclear exactly how big the shark was, and I guess we'll never know… s

__[Q] What's your favourite npm package?__

Somewhere between tape and browserify. tape for it's simplicity, browserify for it's extensibility. Again, appealing to people suffering from "JavaScript Fatigue", using small modules that adhere to the UNIX philosophy will ease your symptoms. I mean, I'm not a doctor, but a lot of the problems we work on today, were solved decades ago in other contexts. When I worked at the HPC Lab, one of the first days I was talking to this older computer scientist who was about to retire, telling him I was working on setting up a Hadoop cluster for doing research on Map/Reduce. He burst out laughing, saying that when he was a young researcher people were working on Map/Reduce on mainframes, and those people had retired a couple of decades ago. In my experience this happens with a lot of the technology we're working on; our context is different, but if you squint a little, it all seems very cyclic.
