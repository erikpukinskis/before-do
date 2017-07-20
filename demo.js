var beforeDo = require(".")

// everyone submit a patch to this repository with a file called your-name.js


beforeDo(
  "Any of these things at an odd time, or for a second time in one day", [
  "cup of coffee in the morning",
  "spliff during the day",
  "meal in the evening",
  "mega vr sesh"],
  "Is it going to solve your problem?"
)

beforeDo("The end of the month", "Find someone doing research and help them run their study $$")


beforeDo("Wednesday Evening", "Wednesday is List Day")

beforeDo("Wednesday noon", "Look at what's coming in the queue. Plan a topic for lecture")

beforeDo("Wednesday noon", "Recruit some folks off the queue")

beforeDo("Wednesday noon", "Start group lecture $$")


beforeDo("Thursday Morning", [
  "You're on a 6-day weekend/workcation!",
  "Vacation activities encouraged",
  "Work likely",
])

beforeDo("The end of the month", "Are you supposed to be catering? $$")

beforeDo(
  "Wednesday Night",
  "Log on to CodePen",
  ["web-element", "web-host"],
  function(element, host) {

    var signOnCodementor = element(".lil-page", [
      element("p", "Sign on to CodeMentor"),
      element("a.button", "I did it", {href: "/mentoring"}),
      " ",
      element(".button", "Not now"),
    ])

    var mentoring = element(".lil-page", [
      element("p", "You must be either available the rest of the day on CodePen $$"),
      element(".button", "Status set"),
    ])


    host.onSite(function(host) {

      site.addRoute("get", "/codementor", bridge.requestHandler(signOnCodementor))

      site.addRoute("get", "/mentoring", bridge.requestHandler(mentoring))

    })

    return page
  }
)

beforeDo(
  "distancing yourself from people",
  "\"You're reacting negatively to these ideas, and that's reasonable, but I'm starting to feel really alone and unable to share the important things in my life because I'm not feeling like the people around me can accept that my eyes can see OK and the things I am describing in my life are real\""
)

beforeDo(
  "spending a 2nd hour on the internet or eating",
  "spend an hour vegging out in front of a movie"
)



beforeDo(
  "smoking pot when its hot out in the early afternoon",
  "?"
)


// what happened yesterday that should happen again?

// what happened yesterday that you'd prefer not to happen again?


beforeDo("I die", "start asking people what they want me to go to the ends of the earth for, for them")

beforeDo("feeling mentally lousy", "more dancing")



beforeDo(
  "going grocery shopping",
  "form a food syndicate"
)

// running - sometimes afternoon reminder. also think about when this is a nice thing

// water

// walking in the morning

// rollerblading

// (all this stuff needs to be a wellness syndicate)

// Pepper is saying: "I want somebody"

// I want somebody

// I want somebody

// Every thing you hear, it's because that's something you've been trying to hear.

beforeDo(
  "the day is over",
  "climb into your body")

beforeDo(
  "smoking",
  "go outside. take three deep breaths.")

beforeDo(
  "eating some junk",
  "drink a glass of water")

beforeDo(
  "let anxiety destroy your life",
  "boredom OR meditation OR time travel")

beforeDo.instruction(
  "time travel",
  "close your eyes and let your mind do whatever it wants. doing things in imaginary land can increase your drive to make things happen in real life. Doing fiddly things burns up your juice instead.")

beforeDo(
  "procrastinating even more",
  "connect with your values OR treat yourself for anxiety OR nap/etc/selfcare if you are not feeling physically ready to go")

beforeDo(
  "spending more time spinning endlessly in your head",
  "sustained physically work")

beforeDo(
  "thinking on rails",
  "smoke pot")

beforeDo(
  "binge eating",
  "drink water OR cook a real meal OR eat a real meal OR go to sleep")

beforeDo(
  "eating out",
  "imagine what would be the perfect thing to cook right now")

beforeDo(
  "disappearing from everyone",
  "I'm not saying \"don't leave.\" I get that we all need time to go through things. I guess all I'm asking is that if you feel like you need help, just come out and ask for it. Literally say \"I need your help. I need you to...\" I'm also asking you to please be careful in asking for space and time; there are ways you can do it that don't hurt the person you're asking. Something like \"I am struggling with some things right now and could use a little down time. Can we check back in...?\"... those things are easier to hear than some of the things you have said in the recent past. Don't wait until it's the darkest point to ask for time or for help. Try and ask a little earlier.")
