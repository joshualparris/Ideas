const ideas = [
  {
    id: "garden-water-carriers",
    title: "Garden water carriers",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "move", "together", "transition", "after-screen"],
    minutes: 10,
    where: "Backyard",
    setup: "Small buckets + water",
    summary: "Carry small buckets to thirsty plants, then choose the next plant together.",
    steps: ["Fill two small buckets with a manageable amount of water.", "Carry them to a chosen plant using a slow, strong walk.", "Tip, refill, and finish with a clear last plant."],
    why: "Carrying gives useful heavy-work input while the garden creates a real job with a visible finish.",
    say: "\"Which plant is thirstiest? This is our last delivery.\"",
    caution: "Use light buckets and supervise around water.",
    source: "OT sensory diet"
  },
  {
    id: "hose-drag-rescue",
    title: "Hose-drag rescue",
    category: "Outdoor",
    audience: ["sylvie", "together"],
    needs: ["outside", "move", "transition", "after-screen"],
    minutes: 10,
    where: "Backyard",
    setup: "Garden hose",
    summary: "Drag the hose to rescue dry garden patches, then coil it home.",
    steps: ["Choose two garden rescue spots.", "Pull the hose to each spot and water slowly.", "Work together to drag or coil the hose back to its home."],
    why: "Pulling and carrying are strong proprioceptive activities with a predictable task.",
    say: "\"The garden needs a strong helper. Which two spots should we rescue?\"",
    caution: "Keep the hose path clear to reduce trips.",
    source: "OT sensory diet"
  },
  {
    id: "backyard-animal-safari",
    title: "Backyard animal safari",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "move", "together", "quick"],
    minutes: 8,
    where: "Backyard",
    setup: "No setup",
    summary: "Travel between landmarks as bears, frogs, crabs, and flamingos.",
    steps: ["Pick three backyard landmarks.", "Bear-walk to the first, frog-jump to the second, and crab-walk to the third.", "Finish as quiet flamingos, balancing on one foot."],
    why: "Animal walks combine imagination, motor planning, and heavy work.",
    say: "\"The safari map says bear, frog, crab, then flamingo home.\"",
    caution: "Choose a clear, non-slip path.",
    source: "OT sensory diet"
  },
  {
    id: "park-balance-trail",
    title: "Park balance trail",
    category: "Outdoor",
    audience: ["sylvie", "together"],
    needs: ["outside", "move", "transition"],
    minutes: 15,
    where: "Park",
    setup: "Playground or safe edges",
    summary: "Make a safe trail using stepping stones, low edges, and playground balance points.",
    steps: ["Together, choose a start, three balance points, and a finish.", "Try the trail once with a hand available.", "Let Sylvie change one part, then do the final run."],
    why: "Balance input and safe risk-taking can meet movement needs while preserving choice.",
    say: "\"You are the trail designer. Which safe step comes next?\"",
    caution: "Keep heights low and stay within arm's reach where needed.",
    source: "OT sensory diet"
  },
  {
    id: "playground-climb-circuit",
    title: "Playground climb circuit",
    category: "Outdoor",
    audience: ["sylvie", "together"],
    needs: ["outside", "move", "after-screen"],
    minutes: 15,
    where: "Playground",
    setup: "Climbing equipment",
    summary: "Climb, hang, cross, and land through one repeatable playground route.",
    steps: ["Choose one climb, one hang, and one safe landing.", "Complete the same route two or three times.", "End at a named finish point with a drink."],
    why: "Climbing and hanging offer strong movement and body-awareness input.",
    say: "\"Climb, hang, land. How many circuits feels right today?\"",
    caution: "Use age-appropriate equipment and close adult supervision.",
    source: "OT sensory diet"
  },
  {
    id: "swing-and-land",
    title: "Swing and land",
    category: "Outdoor",
    audience: ["sylvie"],
    needs: ["outside", "move", "calm", "transition"],
    minutes: 10,
    where: "Swing",
    setup: "Swing + supervision",
    summary: "Use steady swinging, then finish with grounding jumps and a clear stop.",
    steps: ["Agree on a short swing time or song count.", "Swing steadily in the position Sylvie prefers.", "Stop, place hands on top of the head, and do five firm grounding jumps."],
    why: "Steady movement can be regulating; the firm jumps make the ending clearer for the body.",
    say: "\"Three more swings, then five strong landing jumps.\"",
    caution: "Adult supervision. Stop if movement causes dizziness, nausea, pallor, or distress.",
    source: "OT sensory diet"
  },
  {
    id: "hopscotch-missions",
    title: "Hopscotch missions",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "move", "quick", "transition"],
    minutes: 8,
    where: "Driveway or path",
    setup: "Chalk",
    summary: "Draw a short hop path with numbers, colours, or simple missions.",
    steps: ["Draw six to ten large spaces.", "Add favourite numbers, shapes, or actions.", "Take turns choosing the next mission and finish at HOME."],
    why: "Jumping supports movement needs and numbers give the activity a satisfying pattern.",
    say: "\"Can you make a path that ends exactly on ten?\"",
    caution: "Use a traffic-free, non-slip area.",
    source: "OT sensory diet + family strengths"
  },
  {
    id: "bubble-trampoline-pop",
    title: "Bubble trampoline pop",
    category: "Outdoor",
    audience: ["sylvie"],
    needs: ["outside", "move", "transition", "after-screen"],
    minutes: 10,
    where: "Backyard",
    setup: "Trampoline + bubbles",
    summary: "Jump to pop bubbles, then count down to a firm, predictable finish.",
    steps: ["An adult blows bubbles from outside the trampoline.", "Pop them with hands, elbows, or knees while jumping.", "Count down the last ten bubbles, then climb off for water."],
    why: "This pairs the OT trampoline idea with a playful visual target and clear finish.",
    say: "\"Ten last bubbles, then feet on the ground and a drink.\"",
    caution: "Direct adult supervision. One child at a time and follow trampoline safety guidance.",
    source: "OT sensory diet"
  },
  {
    id: "weighted-ball-catch",
    title: "Strong-ball catch",
    category: "Outdoor",
    audience: ["sylvie", "together"],
    needs: ["outside", "move", "together", "after-screen"],
    minutes: 8,
    where: "Backyard or park",
    setup: "Soft weighted ball",
    summary: "Roll, carry, and gently throw a soft weighted ball between safe markers.",
    steps: ["Set two close markers.", "Start with rolling, then try gentle chest passes if comfortable.", "Finish by carrying the ball together back to storage."],
    why: "The weight adds body feedback while turn-taking stays short and readable.",
    say: "\"Your turn, my turn, then we carry it home together.\"",
    caution: "Use a child-safe weight and avoid throws near faces.",
    source: "OT sensory diet"
  },
  {
    id: "nature-photo-safari",
    title: "Nature photo safari",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "calm", "together", "after-screen"],
    minutes: 15,
    where: "Yard, park, or walk",
    setup: "Phone camera optional",
    summary: "Find and photograph five tiny nature discoveries instead of rushing past them.",
    steps: ["Choose a theme: colours, bugs, birds, leaves, or textures.", "Let each child point to discoveries; an adult can take photos.", "At the finish, choose one favourite photo or memory."],
    why: "It bridges Sylvie's animal and exploration interests into slow real-world attention.",
    say: "\"We need five tiny discoveries. You are the wildlife guide.\"",
    caution: "Look without touching unknown plants, insects, or animals.",
    source: "Games report real-world bridge"
  },
  {
    id: "short-wonder-walk",
    title: "Short wonder walk",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "calm", "together", "transition", "after-screen"],
    minutes: 12,
    where: "Neighbourhood",
    setup: "No setup",
    summary: "Take a low-demand walk with one small thing to notice on each block.",
    steps: ["Name a simple finish point before leaving.", "On each block, notice one sound, colour, or interesting thing.", "Walk home slowly and name the best discovery."],
    why: "Outdoor light, rhythm, and shared noticing can help everyone land without turning the walk into a task.",
    say: "\"No hurry. Let's find one wonder before we turn home.\"",
    caution: "Use normal road and sun safety.",
    source: "Family rhythm + games report"
  },
  {
    id: "bluey-creek-expedition",
    title: "Bluey creek expedition",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "together", "move"],
    minutes: 20,
    where: "Park or nature path",
    setup: "Small bag optional",
    summary: "Turn a familiar path into a Bluey-style expedition with a map, landmarks, and a home base.",
    steps: ["Choose a home base and two landmarks.", "Let Sylvie name the episode and invent one gentle challenge.", "Elias can carry or deliver one safe found object, then everyone returns home."],
    why: "A familiar story theme supports imaginative play while the route stays predictable.",
    say: "\"What is today's episode called, and where is home base?\"",
    caution: "Only collect safe, permitted objects.",
    source: "Family interests + games report"
  },
  {
    id: "chalk-number-road",
    title: "Chalk number road",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "together", "creative"],
    minutes: 15,
    where: "Fence or driveway",
    setup: "Chalk + toy vehicles",
    summary: "Draw a road with numbered stops, garages, and a protected building zone.",
    steps: ["Draw a long road with a clear start and finish.", "Add numbered stops or shapes for Sylvie and garages for Elias.", "Drive vehicles through the route, taking short turns."],
    why: "It combines Sylvie's numbers and patterns with Elias's vehicle cause-and-effect play.",
    say: "\"Which number needs a delivery, and which truck can do it?\"",
    caution: "Choose a traffic-free drawing area.",
    source: "Family strengths + app research"
  },
  {
    id: "fence-chalk-mural",
    title: "Big outdoor chalk mural",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "move", "creative", "calm"],
    minutes: 15,
    where: "Approved fence or chalkboard",
    setup: "Large chalk",
    summary: "Give big drawing energy a clear, legal place with plenty of whole-arm movement.",
    steps: ["Name the approved drawing surface.", "Pick a theme such as a garden, town, or giant pattern.", "Photograph it, then wash one small part together if wanted."],
    why: "A designated drawing surface channels the urge safely and supports large motor movement.",
    say: "\"This whole panel is your yes-space for drawing.\"",
    caution: "Confirm the surface is washable and approved.",
    source: "Family safety plan"
  },
  {
    id: "sandpit-two-zone-build",
    title: "Two-zone sandpit build",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "together", "calm"],
    minutes: 20,
    where: "Sandpit",
    setup: "Two tool sets + divider",
    summary: "Build alongside each other with a clear boundary and one shared road between zones.",
    steps: ["Mark a Sylvie zone and an Elias zone with a board, line, or containers.", "Give each child tools that suit their play.", "When both are ready, make one shared road or river between the zones."],
    why: "Protected parallel play allows connection without making shared control the price of playing.",
    say: "\"This side is yours, this side is yours, and the road can meet in the middle.\"",
    caution: "An adult protects the boundary so the children do not have to.",
    source: "Family report sibling strategy"
  },
  {
    id: "vehicle-wash-station",
    title: "Vehicle wash station",
    category: "Outdoor",
    audience: ["elias", "sylvie", "together"],
    needs: ["outside", "together", "calm", "after-screen"],
    minutes: 15,
    where: "Backyard",
    setup: "Toy vehicles + water + brushes",
    summary: "Wash muddy vehicles with a simple dirty, scrub, rinse, park sequence.",
    steps: ["Set out a dirty area, wash bowl, and parking towel.", "Name each vehicle and action while scrubbing.", "Park each clean vehicle in a numbered or colour-matched spot."],
    why: "Elias gets functional vehicle play while Sylvie can add sequence, language, and pattern.",
    say: "\"The digger is dirty. Scrub, rinse, then which parking spot?\"",
    caution: "Supervise all water play and use child-safe soap if any.",
    source: "App research real-world vehicle play"
  },
  {
    id: "truck-delivery-route",
    title: "Truck delivery route",
    category: "Outdoor",
    audience: ["elias", "sylvie", "together"],
    needs: ["outside", "move", "together", "transition"],
    minutes: 10,
    where: "Yard or path",
    setup: "Ride-on or toy truck + light items",
    summary: "Push or drive light deliveries between three named stations.",
    steps: ["Create three stations with buckets or chalk.", "Load one light item at a time and push it to the named station.", "Make the last delivery HOME and pack away."],
    why: "Pushing offers heavy work and the vehicle theme gives Elias a clear role.",
    say: "\"One delivery to red, one to blue, then the truck goes home.\"",
    caution: "Use light loads and a clear path.",
    source: "App research + OT sensory diet"
  },
  {
    id: "shadow-light-hunt",
    title: "Shadow and light hunt",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "calm", "quick"],
    minutes: 8,
    where: "Outside",
    setup: "Morning or afternoon light",
    summary: "Find long, tiny, wiggly, and matching shadows.",
    steps: ["Find your own shadows.", "Make three shapes or movements and watch them change.", "Look for one object with an interesting shadow before going in."],
    why: "Outdoor light supports daily rhythm and the hunt invites quiet curiosity.",
    say: "\"Can your shadow make a shape mine cannot?\"",
    caution: "Avoid looking directly at the sun.",
    source: "Family daily anchors"
  },
  {
    id: "backyard-obstacle-course",
    title: "Backyard obstacle course",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "move", "together", "after-screen"],
    minutes: 15,
    where: "Backyard",
    setup: "Cushions, hoops, boxes",
    summary: "Make a repeatable push, crawl, jump, and finish course.",
    steps: ["Choose three or four safe stations.", "Draw or say the order once: push, crawl, jump, finish.", "Run it a few times, then let Sylvie redesign one station."],
    why: "A visible motor sequence supports body input, planning, and a predictable ending.",
    say: "\"Push, crawl, jump, finish. Which station should you design?\"",
    caution: "Check every station for stability and safe landings.",
    source: "OT sensory diet"
  },
  {
    id: "morning-light-lap",
    title: "Ten-minute morning light lap",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "calm", "transition", "quick"],
    minutes: 10,
    where: "Yard or street",
    setup: "No setup",
    summary: "Start the day with outdoor light, a familiar route, and no extra demands.",
    steps: ["Choose the same short lap or outdoor spot.", "Walk, carry a toy, or simply sit outside.", "Use the same phrase to mark the finish and move to breakfast."],
    why: "The family notes identify morning outdoor light as a useful daily anchor.",
    say: "\"Outside light, then breakfast. Nothing else to solve yet.\"",
    caution: "Use normal weather, sun, and road safety.",
    source: "Family daily anchors"
  },
  {
    id: "pillow-mountain-crawl",
    title: "Pillow mountain crawl",
    category: "Sensory diet",
    audience: ["sylvie", "elias", "together"],
    needs: ["move", "calm", "transition", "after-screen"],
    minutes: 8,
    where: "Inside",
    setup: "Pillows + cushions",
    summary: "Crawl across a low pillow mountain, then crash onto a safe soft landing.",
    steps: ["Build a low, stable path with a clear landing.", "Crawl, bear-walk, or push a cushion across.", "Choose a final crash, then put one pillow away together."],
    why: "Crawling, pushing, and safe crashing provide strong body feedback.",
    say: "\"Across the mountain, one last safe crash, then this pillow goes home.\"",
    caution: "Keep the course low and away from hard furniture.",
    source: "OT sensory diet"
  },
  {
    id: "trampoline-reset",
    title: "Supervised trampoline reset",
    category: "Sensory diet",
    audience: ["sylvie"],
    needs: ["move", "transition", "after-screen"],
    minutes: 12,
    where: "Trampoline",
    setup: "Timer + supervision",
    summary: "Use a short, predictable trampoline session with a calm countdown and grounded finish.",
    steps: ["Set a visible 10 to 15 minute timer.", "Offer simple jump choices rather than constant instructions.", "Count down the last ten jumps, climb off, and drink water."],
    why: "The OT plan prioritises supervised trampoline movement as a strong regulation option.",
    say: "\"Ten last jumps. Then feet down, water, and we choose what is next.\"",
    caution: "Direct adult supervision. One child at a time and follow trampoline safety guidance.",
    source: "OT sensory diet"
  },
  {
    id: "bear-walk-commute",
    title: "Bear-walk commute",
    category: "Sensory diet",
    audience: ["sylvie", "elias", "together"],
    needs: ["move", "transition", "quick"],
    minutes: 3,
    where: "Inside",
    setup: "Clear path",
    summary: "Turn the walk to the bathroom, kitchen, or bedroom into a short animal movement.",
    steps: ["Name the destination.", "Choose bear walk, crawl, frog jump, or wheelbarrow walk with help.", "Arrive, pause, and begin the next routine."],
    why: "It inserts a small dose of movement before a routine without adding a separate task.",
    say: "\"Bear-walk to the bathroom, then toothbrush.\"",
    caution: "Clear the route and match the movement to each child's ability.",
    source: "OT sensory diet"
  },
  {
    id: "animal-move-cards",
    title: "Pick-two animal moves",
    category: "Sensory diet",
    audience: ["sylvie", "elias", "together"],
    needs: ["move", "quick", "together"],
    minutes: 5,
    where: "Anywhere",
    setup: "Draw two choices",
    summary: "Offer just two body-movement choices and let Sylvie choose the order.",
    steps: ["Draw or name two choices, such as frog jumps and crab walks.", "Do each movement to a clear marker.", "Finish with five slow stomps or pushes."],
    why: "Two visual choices protect agency while keeping language and planning load low.",
    say: "\"Pick one first: frog or crab.\"",
    caution: "Use a clear, non-slip space.",
    source: "OT sensory diet"
  },
  {
    id: "wall-push-countdown",
    title: "Wall-push countdown",
    category: "Sensory diet",
    audience: ["sylvie", "together"],
    needs: ["move", "calm", "transition", "quick", "after-screen"],
    minutes: 3,
    where: "Anywhere",
    setup: "Clear wall",
    summary: "Push a sturdy wall as if moving it, then slowly count down.",
    steps: ["Place both hands on a clear wall.", "Do five to ten strong pushes together.", "Finish with hands pressed together and one slow breath."],
    why: "Pushing gives deep body input and is easy to use during transitions.",
    say: "\"The wall is very heavy. Five strong pushes together.\"",
    caution: "Use a sturdy wall with clear floor space.",
    source: "OT sensory diet"
  },
  {
    id: "laundry-basket-delivery",
    title: "Laundry basket delivery",
    category: "Sensory diet",
    audience: ["sylvie", "elias", "together"],
    needs: ["move", "together", "transition"],
    minutes: 8,
    where: "Inside",
    setup: "Basket + soft laundry",
    summary: "Push a lightly loaded laundry basket to rooms or colour stations.",
    steps: ["Load the basket with a few soft items.", "Push together or take short turns.", "Deliver each item, then park the empty basket."],
    why: "Shared pushing is heavy work that can also support protected sibling teamwork.",
    say: "\"We are the delivery team. Push together, then park it.\"",
    caution: "Keep the load light and the route clear.",
    source: "Family report + OT sensory diet"
  },
  {
    id: "stop-start-wrestling",
    title: "Stop-start hand wrestling",
    category: "Sensory diet",
    audience: ["sylvie", "together"],
    needs: ["move", "together", "quick"],
    minutes: 5,
    where: "Soft floor",
    setup: "Adult partner",
    summary: "Use short, playful hand-to-hand pushes with frequent stop signals.",
    steps: ["Kneel facing each other on a soft surface.", "Push hands gently until either person says stop.", "Pause fully, then restart only when both are ready."],
    why: "The activity offers pushing input while practising readable starts, stops, and consent.",
    say: "\"Ready means go. Stop means both bodies freeze.\"",
    caution: "Adult-led, gentle pressure only. Stop immediately if either person is uncomfortable.",
    source: "OT sensory diet"
  },
  {
    id: "yoga-ball-foot-battle",
    title: "Yoga-ball foot battle",
    category: "Sensory diet",
    audience: ["sylvie", "together"],
    needs: ["move", "together", "quick"],
    minutes: 5,
    where: "Soft floor",
    setup: "Large exercise ball",
    summary: "Lie on your backs and gently push a yoga ball between your feet.",
    steps: ["Lie opposite each other with the ball between feet.", "Push gently back and forth.", "Add clear stop, ready, and final-push signals."],
    why: "Leg pushing offers strong joint and muscle feedback in a playful format.",
    say: "\"Ready feet, gentle push, and freeze.\"",
    caution: "Use open floor space and keep pressure gentle.",
    source: "OT sensory diet"
  },
  {
    id: "yoga-ball-steamroller",
    title: "Yoga-ball steamroller",
    category: "Sensory diet",
    audience: ["sylvie"],
    needs: ["calm", "transition"],
    minutes: 5,
    where: "Soft floor",
    setup: "Exercise ball",
    summary: "With Sylvie's permission, slowly roll a yoga ball over her back and legs.",
    steps: ["Ask Sylvie to lie on her tummy if she wants.", "Ask softer or firmer before each slow roll.", "Let her say stop and choose the final roll."],
    why: "Deep pressure is included in the OT plan as a calming body-based support.",
    say: "\"Softer, firmer, or stop? You are in charge.\"",
    caution: "Adult-led. Avoid the head and neck; stop with any discomfort.",
    source: "OT sensory diet"
  },
  {
    id: "pillow-sandwich",
    title: "Pillow sandwich",
    category: "Sensory diet",
    audience: ["sylvie"],
    needs: ["calm", "transition"],
    minutes: 5,
    where: "Bed or soft floor",
    setup: "Pillow",
    summary: "Offer gentle pillow pressure with Sylvie controlling how much and when it stops.",
    steps: ["Sylvie lies on her tummy if she chooses.", "Gently press a pillow over limbs and body, avoiding the head.", "Ask softer, firmer, or finished after each press."],
    why: "Predictable deep pressure can be calming when it is wanted and child-controlled.",
    say: "\"Softer, firmer, or finished?\"",
    caution: "Never cover the face or restrict breathing. Stop immediately when asked.",
    source: "OT sensory diet"
  },
  {
    id: "stepping-stone-path",
    title: "Indoor stepping-stone path",
    category: "Sensory diet",
    audience: ["sylvie", "elias", "together"],
    needs: ["move", "transition", "quick"],
    minutes: 6,
    where: "Inside",
    setup: "Stable cushions or markers",
    summary: "Cross a short path without touching the floor, then reverse it slowly.",
    steps: ["Place stable low markers with easy gaps.", "Cross once in any safe way.", "Come back slowly while naming each landing."],
    why: "Balance and motor planning meet movement needs without requiring much space.",
    say: "\"Choose the safe path there, then slow feet home.\"",
    caution: "Only use stable, non-slip, low markers.",
    source: "OT sensory diet"
  },
  {
    id: "slow-spin-and-ground",
    title: "Slow spin and ground",
    category: "Sensory diet",
    audience: ["sylvie"],
    needs: ["move", "quick"],
    minutes: 3,
    where: "Open space",
    setup: "Adult supervision",
    summary: "If Sylvie seeks spinning, keep it slow, brief, two-directional, and followed by grounding.",
    steps: ["Spin slowly no more than five rotations in one direction.", "Stop fully, then only if comfortable repeat in the other direction.", "Finish with hands on head and several firm jumps."],
    why: "This follows the specific safety pattern in the OT sensory diet.",
    say: "\"Five slow turns, stop, check body, then strong landing jumps.\"",
    caution: "Spinning can overstimulate quickly. Stop at once for red cheeks, dizziness, nausea, pallor, faintness, or distress.",
    source: "OT sensory diet"
  },
  {
    id: "treasure-backpack",
    title: "Treasure backpack carry",
    category: "Sensory diet",
    audience: ["sylvie"],
    needs: ["move", "transition"],
    minutes: 8,
    where: "Inside or outside",
    setup: "Backpack + light toys",
    summary: "Carry a lightly filled backpack on a short treasure delivery route.",
    steps: ["Let Sylvie choose a few light treasures.", "Carry them to two or three destinations.", "Empty and park the backpack at the finish."],
    why: "A manageable carry gives body feedback and turns a transition into a mission.",
    say: "\"Choose three light treasures. Where do they need to go?\"",
    caution: "Keep the backpack comfortably light and remove it if unwanted.",
    source: "OT sensory diet"
  },
  {
    id: "bubble-breathing",
    title: "Bubble breathing",
    category: "Sensory diet",
    audience: ["sylvie", "elias", "together"],
    needs: ["calm", "together", "quick", "transition"],
    minutes: 5,
    where: "Anywhere",
    setup: "Bubbles",
    summary: "Use slow bubble blows and gentle pops as a shared breathing game.",
    steps: ["An adult models one slow bubble breath.", "Take turns blowing if age-appropriate, or let children pop slowly.", "Finish with one last bubble and a clear next step."],
    why: "Longer exhales and shared attention can support co-regulation.",
    say: "\"One slow bubble together, then we choose what is next.\"",
    caution: "Supervise bubble solution and prevent drinking.",
    source: "OT sensory diet"
  },
  {
    id: "cold-water-reset",
    title: "Cold-water body reset",
    category: "Sensory diet",
    audience: ["sylvie"],
    needs: ["calm", "quick", "transition", "after-screen"],
    minutes: 3,
    where: "Kitchen or bathroom",
    setup: "Cold water or cool washer",
    summary: "Offer brief, gentle cool input chosen by Sylvie.",
    steps: ["Offer two choices: cold water through a straw or a cool washer on wrists or cheeks.", "Keep the contact brief and predictable.", "Pause and notice whether it helped before doing anything else."],
    why: "The OT plan lists brief cool input as an optional alerting or calming reset.",
    say: "\"Cold drink or cool washer? Show me one.\"",
    caution: "Keep it brief and comfortable. Never force cold input.",
    source: "OT sensory diet"
  },
  {
    id: "crunch-and-sip-pause",
    title: "Crunch and sip pause",
    category: "Sensory diet",
    audience: ["sylvie", "elias", "together"],
    needs: ["calm", "transition", "after-screen"],
    minutes: 8,
    where: "Table or picnic spot",
    setup: "Approved snack + straw drink",
    summary: "Pause with a familiar crunchy or chewy snack and a drink through a straw.",
    steps: ["Offer a familiar, age-appropriate snack and drink.", "Sit without extra demands while everyone eats and drinks.", "Use the finish of the snack as the transition marker."],
    why: "The sensory diet identifies oral-motor input and protein-rich snacks as useful parts of daily rhythm.",
    say: "\"Snack and sip first. We can work out the next thing after.\"",
    caution: "Use family-approved foods, supervise eating, and follow allergy and choking-safety guidance.",
    source: "OT sensory diet"
  },
  {
    id: "quiet-cubby",
    title: "Quiet cubby landing",
    category: "Calm + cosy",
    audience: ["sylvie"],
    needs: ["calm", "transition", "after-screen"],
    minutes: 10,
    where: "Quiet corner",
    setup: "Blanket, beanbag, books",
    summary: "Create a predictable low-input place with no requirement to talk.",
    steps: ["Dim the space and reduce background noise.", "Offer two supports such as a book, chewy, fidget, or heavy blanket if preferred.", "Sit nearby or give space, then use a gentle first-then visual for what follows."],
    why: "A designated safe calm spot reduces sensory and verbal load.",
    say: "\"Your quiet spot is ready. I can sit near or give you space.\"",
    caution: "Use weighted items only if already approved and safely tolerated.",
    source: "OT sensory diet + family report"
  },
  {
    id: "humming-together",
    title: "Hum the same song",
    category: "Calm + cosy",
    audience: ["sylvie", "elias", "together"],
    needs: ["calm", "together", "transition"],
    minutes: 5,
    where: "Anywhere",
    setup: "No setup",
    summary: "Hum or sing one familiar, down-regulating song together.",
    steps: ["Reduce other sounds.", "Choose one familiar song and keep the pace slow.", "Use the final line as a predictable ending."],
    why: "The OT plan names humming and singing together as a co-regulation option.",
    say: "\"Let's hum our one quiet song together.\"",
    caution: "",
    source: "OT sensory diet"
  },
  {
    id: "towel-squeeze",
    title: "After-bath towel squeeze",
    category: "Sensory diet",
    audience: ["sylvie"],
    needs: ["calm", "transition"],
    minutes: 5,
    where: "Bathroom",
    setup: "Soft towel",
    summary: "Use firm, predictable towel squeezes over arms, legs, and body after bath time.",
    steps: ["Wrap with a soft towel.", "Ask before each gentle squeeze over arms, legs, and body.", "Finish with a head massage only if wanted, then move to pyjamas."],
    why: "Predictable pressure can make the bath-to-bed transition feel clearer.",
    say: "\"Arms, legs, or finished? You choose.\"",
    caution: "Keep the face clear and stop immediately if unwanted.",
    source: "OT sensory diet"
  },
  {
    id: "flamingo-brushing",
    title: "Flamingo toothbrushing",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["transition", "quick"],
    minutes: 3,
    where: "Bathroom",
    setup: "Toothbrush",
    summary: "Balance like a flamingo while brushing, then swap feet for a clear second half.",
    steps: ["Stand on one foot with a hand on the bench if needed.", "Count to ten while brushing.", "Swap feet, count again, then brushing is finished."],
    why: "A playful balance pattern makes the routine more predictable.",
    say: "\"First flamingo foot, second flamingo foot, then finished.\"",
    caution: "Use a safe stance and hold the bench if needed.",
    source: "OT sensory diet"
  },
  {
    id: "trade-game",
    title: "Practise the trade game",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["together", "calm", "transition"],
    minutes: 5,
    where: "Calm play time",
    setup: "Two appealing toys",
    summary: "Practise giving Elias a trade or walking away before the skill is needed in a hard moment.",
    steps: ["During a calm time, give each child one toy.", "Model offering a different toy as a trade.", "Celebrate the action, then practise walking to a protected play space."],
    why: "The notes recommend building the physical pivot into motor memory during calm moments.",
    say: "\"If words do not work, trade or walk away. Let's practise once.\"",
    caution: "Do not demand this skill during an already escalated conflict.",
    source: "Family report sibling strategy"
  },
  {
    id: "protected-parallel-build",
    title: "Protected parallel build",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["together", "calm", "creative"],
    minutes: 20,
    where: "Floor or table",
    setup: "Two mats + building toys",
    summary: "Build side by side with separate zones and one optional shared connection.",
    steps: ["Mark a protected mat for each child.", "Give each child suitable building pieces and let them lead their own play.", "Offer one optional bridge, road, or visitor between builds."],
    why: "Protected parallel play lowers sibling friction while allowing genuine connection.",
    say: "\"Your builds are both safe. Would you like one road between them, or keep them separate?\"",
    caution: "An adult enforces the zones and protects Sylvie's complex build.",
    source: "Family report sibling strategy"
  },
  {
    id: "freeze-dance-party",
    title: "Freeze dance party",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["together", "move", "after-screen"],
    minutes: 8,
    where: "Open room",
    setup: "One familiar song",
    summary: "Dance together, freeze on pause, and finish after one named last song.",
    steps: ["Choose one or two familiar songs.", "Pause occasionally for a shared freeze.", "Announce the last song before it starts and end with slow stomps."],
    why: "Shared movement gives both children input without requiring complex cooperative play.",
    say: "\"One last song, then five slow stomps and finished.\"",
    caution: "Clear the floor and keep volume comfortable.",
    source: "Family report sibling strategy"
  },
  {
    id: "keepy-uppy",
    title: "Keepy Uppy together",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["together", "move", "quick", "after-screen"],
    minutes: 8,
    where: "Open room or yard",
    setup: "Balloon or light ball",
    summary: "Work together to keep a balloon or light ball off the ground.",
    steps: ["Choose a safe light object.", "Count touches together rather than competing.", "End after one final named round."],
    why: "A familiar Bluey play theme creates shared joy with simple turn-taking.",
    say: "\"Can our team reach ten touches? Then one last round.\"",
    caution: "Supervise balloons closely around young children; use a light ball instead if preferred.",
    source: "Family interests + games report"
  },
  {
    id: "floor-is-lava",
    title: "The floor is lava",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["together", "move", "after-screen"],
    minutes: 10,
    where: "Inside",
    setup: "Stable safe spots",
    summary: "Cross between safe islands with a simple start, route, and finish.",
    steps: ["Place a few stable low islands.", "Name the route and safe finish.", "Take turns crossing or help Elias move a toy across."],
    why: "It pairs imaginative play with balance and movement.",
    say: "\"These are the safe islands. Which one gets us home?\"",
    caution: "Use stable, non-slip, low objects only.",
    source: "Family interests + games report"
  },
  {
    id: "magnetic-tile-pool",
    title: "Magnetic-tile swimming pool",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 20,
    where: "Protected table",
    setup: "Magnetic tiles + figures",
    summary: "Build a swimming pool, choose its rules, and add figures only when invited.",
    steps: ["Give Sylvie protected build space.", "Build the pool and name its pattern, rooms, or rules.", "A parent or Elias can add one invited swimmer or object."],
    why: "This uses a play theme Sylvie enjoyed in therapy while protecting her flow state.",
    say: "\"You are the pool designer. What may I add, and what should stay yours?\"",
    caution: "Keep small magnetic pieces away from Elias if not age-appropriate.",
    source: "Combined NDIS notes"
  },
  {
    id: "playdough-tea-shop",
    title: "Playdough tea shop",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 15,
    where: "Table",
    setup: "Playdough + simple tools",
    summary: "Make tea, snacks, and a tiny menu, then share one pretend item.",
    steps: ["Let Sylvie choose the shop idea and roles.", "Make cups, tea, or food from playdough.", "Invite one short shared action, then use a visual timer for closing time."],
    why: "Sylvie has shown strong imaginative and sharing play with playdough tea.",
    say: "\"What is on today's menu? Tell me when the shop is closing.\"",
    caution: "Supervise playdough around Elias and follow product age guidance.",
    source: "Combined NDIS notes"
  },
  {
    id: "playdough-animal-rescue",
    title: "Playdough animal rescue",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 15,
    where: "Table",
    setup: "Playdough + animal figures",
    summary: "Make animals, nests, tracks, or food, with separate work areas for each child.",
    steps: ["Set out two mats or trays.", "Sylvie can create animals or a habitat; Elias can press tracks or move figures.", "Choose one shared rescue at the end."],
    why: "It keeps Sylvie's imaginative leadership while giving Elias a simple parallel role.",
    say: "\"Your animal world is safe. What job can Elias's animal do?\"",
    caution: "Supervise small figures and playdough.",
    source: "Combined NDIS notes"
  },
  {
    id: "emotion-bingo",
    title: "Emotion bingo",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 10,
    where: "Table",
    setup: "Draw simple faces",
    summary: "Make a tiny bingo board of feelings and find or act them out.",
    steps: ["Draw four simple feeling faces.", "Take turns naming, finding, or gently acting one.", "Let Sylvie choose a favourite or tricky one to revisit later."],
    why: "Sylvie enjoyed emotion bingo in therapy; calm play keeps the learning separate from hard moments.",
    say: "\"Which face should be the mystery square?\"",
    caution: "Do not use the game to quiz Sylvie during dysregulation.",
    source: "Combined NDIS notes"
  },
  {
    id: "same-different-hunt",
    title: "Same and different hunt",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "calm", "quick"],
    minutes: 8,
    where: "Anywhere",
    setup: "Pairs of toys or objects",
    summary: "Find pairs that are the same in one way and different in another.",
    steps: ["Collect three or four object pairs.", "Ask what is the same and what is different.", "Let Sylvie invent the final pair or pattern."],
    why: "It builds on the same-and-different work Sylvie enjoyed with Rainbow Unicorns.",
    say: "\"Can two things be the same and different at once?\"",
    caution: "",
    source: "Combined NDIS notes"
  },
  {
    id: "puppet-play-entry",
    title: "Puppet asks to play",
    category: "Together",
    audience: ["sylvie", "together"],
    needs: ["together", "calm", "creative"],
    minutes: 8,
    where: "Calm play time",
    setup: "Two puppets or toys",
    summary: "Practise a simple play-entry script with puppets when nobody is under pressure.",
    steps: ["Use one puppet already playing and one wanting to join.", "Practise getting attention and asking to play.", "Let the answer be yes or no, then practise the next option."],
    why: "The notes recommend explicitly teaching social entry and what to do if someone says no.",
    say: "\"First get their attention, then ask. If no, choose someone else or play your own idea.\"",
    caution: "Keep this playful, not corrective.",
    source: "Combined NDIS notes + family report"
  },
  {
    id: "short-turn-tower",
    title: "Short-turn tower",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["together", "calm", "quick"],
    minutes: 8,
    where: "Protected floor or table",
    setup: "Large blocks",
    summary: "Build with very short, clear turns and a protected base.",
    steps: ["Create a protected base that Elias cannot knock accidentally.", "Use one-block turns with a clear spoken cue.", "Finish the tower early, photograph it, then knock it only if everyone agrees."],
    why: "Short, clear turns build patience while environmental protection reduces the trigger.",
    say: "\"One block you, one block me. The tower is safe until everyone says knock.\"",
    caution: "An adult protects the structure and redirects Elias before conflict.",
    source: "Combined NDIS notes"
  },
  {
    id: "sibling-push-team",
    title: "Sibling push team",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["together", "move", "transition"],
    minutes: 6,
    where: "Clear floor",
    setup: "Large box or basket",
    summary: "Give both children the same simple job: push a light box to its home.",
    steps: ["Put a few soft items in a large box or basket.", "Place both children on the same pushing side.", "Count down together and park it at a clear finish."],
    why: "Shared heavy work creates connection without complex negotiation.",
    say: "\"Same team, same side, push it home.\"",
    caution: "Keep the load light and adult hands close.",
    source: "Family report sibling strategy"
  },
  {
    id: "bluey-episode-play",
    title: "Invent a Bluey episode",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["together", "creative", "calm"],
    minutes: 15,
    where: "Anywhere",
    setup: "A few props",
    summary: "Name an episode, choose three scenes, and let Sylvie direct the story.",
    steps: ["Ask Sylvie for the episode title.", "Choose only three scenes: start, problem, finish.", "Give Elias one repeatable action such as driving, delivering, or dancing."],
    why: "This uses a strong interest to support imaginative co-play with an achievable role for Elias.",
    say: "\"What is this episode called, and what is Elias's one special job?\"",
    caution: "Protect Sylvie's right to end or play alone if co-play becomes too disruptive.",
    source: "Family interests"
  },
  {
    id: "vehicle-action-words",
    title: "Vehicle action station",
    category: "Together",
    audience: ["elias", "sylvie", "together"],
    needs: ["together", "creative", "quick"],
    minutes: 8,
    where: "Floor",
    setup: "Toy vehicles + blocks",
    summary: "Match vehicles to simple actions: push, dig, lift, carry, roll, and park.",
    steps: ["Set out two or three vehicles.", "Model one action word for each.", "Let Elias choose the vehicle while Sylvie designs a job or numbered station."],
    why: "Functional vehicle play fits Elias's age while Sylvie can add language and systems.",
    say: "\"The bulldozer pushes. What job should it do?\"",
    caution: "Use age-appropriate vehicle toys.",
    source: "App design research"
  },
  {
    id: "action-repair",
    title: "Action-based repair",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["together", "calm", "transition"],
    minutes: 5,
    where: "After everyone is calm",
    setup: "No setup",
    summary: "After a hard sibling moment, repair with one gentle action instead of a forced apology.",
    steps: ["Wait until adrenaline has fully cleared.", "Name what happened briefly and without shame.", "Offer two repair actions, such as bring a comfort item or help rebuild."],
    why: "The family notes recommend action-based repair after calm has returned.",
    say: "\"Elias was upset. Would you like to bring his cup or help rebuild?\"",
    caution: "Do not attempt repair while either child is still dysregulated.",
    source: "Family report sibling strategy"
  },
  {
    id: "number-pattern-hunt",
    title: "Number and pattern hunt",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm", "outside", "quick"],
    minutes: 10,
    where: "Inside or outside",
    setup: "No setup",
    summary: "Hunt for numbers, repeating patterns, pairs, and sequences in the real world.",
    steps: ["Choose one target such as numbers or AB patterns.", "Find five examples together.", "Let Sylvie make or photograph one final pattern."],
    why: "It feeds Sylvie's pattern and numeracy strengths without making them conditional on behaviour.",
    say: "\"You are the pattern expert. Find one I would miss.\"",
    caution: "",
    source: "Family report strengths"
  },
  {
    id: "first-sound-garden",
    title: "First-sound garden",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "outside", "calm"],
    minutes: 12,
    where: "Garden or park",
    setup: "No setup",
    summary: "Find real things that begin with a chosen sound while exploring outside.",
    steps: ["Choose one easy sound.", "Walk and find things that start with it or almost match.", "End by making a silly sentence from the finds."],
    why: "This bridges the phonics app idea into real-world, play-based learning.",
    say: "\"What can the garden find for the /s/ sound?\"",
    caution: "",
    source: "Phonics report real-world bridge"
  },
  {
    id: "build-one-tiny-world",
    title: "Build one tiny world",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm", "after-screen"],
    minutes: 20,
    where: "Protected play space",
    setup: "Blocks, tiles, or craft",
    summary: "Choose one contained project: a house, animal pen, garden, or town.",
    steps: ["Let Sylvie choose one world and its boundary.", "Build without pushing extra suggestions.", "Use a photo and visual timer to make the finish safer."],
    why: "A single contained project protects deep focus and bridges creative game interests to real materials.",
    say: "\"One world today. What must be inside its boundary?\"",
    caution: "Protect the build from sibling disruption.",
    source: "Games report + family report"
  },
  {
    id: "animal-observation-page",
    title: "Animal observation page",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "outside", "calm"],
    minutes: 15,
    where: "Outside then table",
    setup: "Paper + pencil",
    summary: "Watch one animal, bird, or insect and record what it does with marks, words, or a drawing.",
    steps: ["Find one safe animal to observe from a distance.", "Notice movement, sound, colour, or habitat.", "Draw or dictate one observation and one question."],
    why: "It extends nature and photography interests into language, curiosity, and memory.",
    say: "\"What did it do that surprised you?\"",
    caution: "Observe wildlife from a respectful distance.",
    source: "Games report real-world bridge"
  },
  {
    id: "story-song-slow-walk",
    title: "Story, song, slow walk",
    category: "Calm + cosy",
    audience: ["sylvie", "elias", "together"],
    needs: ["calm", "outside", "together", "transition"],
    minutes: 20,
    where: "Home + outside",
    setup: "Book or family story",
    summary: "Use a simple family rhythm: one story, one familiar song, then a slow walk.",
    steps: ["Read or tell one short story.", "Sing one predictable song.", "Take a slow walk with no extra mission."],
    why: "The family report proposes this as a low-demand rhythm that supports connection.",
    say: "\"Story, song, slow walk. That is enough for today.\"",
    caution: "",
    source: "Family weekly rhythm"
  },
  {
    id: "draw-first-then",
    title: "Draw a first-then plan",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["transition", "calm", "quick"],
    minutes: 3,
    where: "Anywhere",
    setup: "Paper or whiteboard",
    summary: "Draw only the next two steps instead of explaining the whole day.",
    steps: ["Draw a simple picture for FIRST.", "Draw a simple picture for THEN.", "Point to the pictures and use very few words."],
    why: "Low-fidelity visuals reduce cognitive load even for highly verbal children.",
    say: "\"First shoes. Then outside.\"",
    caution: "",
    source: "Family report + combined notes"
  },
  {
    id: "mystery-tool-bag",
    title: "Mystery tool bag",
    category: "Creative + curious",
    audience: ["elias", "sylvie", "together"],
    needs: ["creative", "together", "quick"],
    minutes: 8,
    where: "Floor",
    setup: "Bag + safe toy tools",
    summary: "Pull out one safe tool or vehicle at a time, name it, and invent its job.",
    steps: ["Hide a few safe toy tools or vehicles in a bag.", "Elias pulls one out; name its action together.", "Sylvie invents a job, clue, or place for it to go."],
    why: "Cause-and-effect discovery and naming suit Elias, while Sylvie can add story and systems.",
    say: "\"What did Elias find, and what important job does it have?\"",
    caution: "Use only age-appropriate items without small parts.",
    source: "App design research"
  },
  {
    id: "tiny-scavenger-mission",
    title: "Tiny scavenger mission",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "move", "quick", "transition", "outside"],
    minutes: 8,
    where: "Anywhere",
    setup: "Three-item list",
    summary: "Find just three things by colour, texture, number, or use.",
    steps: ["Choose one theme and only three targets.", "Move together to find each one.", "Put them in a finish spot or point to them, then stop."],
    why: "A short, bounded hunt offers movement and curiosity without an open-ended demand.",
    say: "\"Only three: something soft, something round, something blue.\"",
    caution: "Do not collect unsafe or unknown items.",
    source: "Family strengths"
  },
  {
    id: "before-school-circuit",
    title: "Before-school movement circuit",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["move", "transition"],
    minutes: 30,
    where: "Home",
    setup: "Choose 3 activities",
    summary: "Combine movement and deep pressure before school with a familiar three-part sequence.",
    steps: ["Choose about ten minutes of jumping or swinging.", "Add about ten minutes of pushing, carrying, crawling, or climbing.", "Finish with deep pressure, a crunchy breakfast option, or a quiet visual for leaving."],
    why: "The OT plan specifically recommends 30 minutes of combined movement and deep pressure before school.",
    say: "\"Jump, strong work, then breakfast and school.\"",
    caution: "Choose activities Sylvie already tolerates and supervise movement.",
    source: "OT sensory diet"
  },
  {
    id: "after-preschool-landing",
    title: "After-preschool landing",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["calm", "transition"],
    minutes: 20,
    where: "Home",
    setup: "Snack + quiet option",
    summary: "Lower demands first: snack, reduced noise, and one body or quiet option.",
    steps: ["Offer a familiar heavy or crunchy snack and drink.", "Dim lights and reduce chatter or background TV.", "Offer two choices: quiet cubby or a familiar heavy-work activity."],
    why: "The family notes describe after-preschool time as decompression, not a time for more demands.",
    say: "\"You are home. Snack first. Quiet spot or strong-body job?\"",
    caution: "Keep language and choices minimal if Sylvie is already overloaded.",
    source: "Family report"
  },
  {
    id: "pre-dinner-pressure",
    title: "Pre-dinner pressure combo",
    category: "Everyday rhythm",
    audience: ["sylvie", "together"],
    needs: ["move", "calm", "transition"],
    minutes: 10,
    where: "Home",
    setup: "Pillows or exercise ball",
    summary: "Offer one playful heavy-work activity and one deep-pressure choice before dinner.",
    steps: ["Choose a short push, crawl, or safe wrestling game.", "Offer a pillow sandwich, massage, or yoga-ball roll if wanted.", "Show a visual timer for dinner and move straight to the table."],
    why: "The OT routine places deep-pressure play before dinner to support the transition.",
    say: "\"Strong body, pressure choice, then dinner.\"",
    caution: "All pressure is optional and child-controlled.",
    source: "OT sensory diet"
  },
  {
    id: "bath-hairdresser",
    title: "Bath-time hairdresser",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["transition", "calm"],
    minutes: 10,
    where: "Bath",
    setup: "Cup + visual count",
    summary: "Use imaginative play, a fixed number of pours, and closed choices for hair washing.",
    steps: ["Choose the role: hairdresser or mermaid.", "Agree on a small, clear number of water pours.", "Offer control: Sylvie pours or adult pours; eyes or ears covered."],
    why: "Imagination, counting, and choice make sensory input more predictable.",
    say: "\"Five cups, then hair is finished. Do you pour, or should I?\"",
    caution: "Follow normal bath and water supervision.",
    source: "OT sensory diet"
  },
  {
    id: "bedtime-landing",
    title: "Bedtime landing",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["calm", "transition"],
    minutes: 15,
    where: "Bedroom",
    setup: "Dim lights + chosen support",
    summary: "Make the final sequence quiet, predictable, and low in language.",
    steps: ["Dim lights, reduce noise, and keep the room comfortably cool.", "Offer one chosen support: foot massage, pillow pressure, weighted toy if approved, or quiet song.", "Use the same final words and white noise or nature sound."],
    why: "The OT and family notes both prioritise predictable, sensory-informed settling.",
    say: "\"Body safe, room quiet, same song, then rest.\"",
    caution: "Use weighted items only if already approved and safely tolerated.",
    source: "OT sensory diet + family report"
  },
  {
    id: "transition-two-choices",
    title: "Two-choice transition",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["transition", "calm", "quick"],
    minutes: 3,
    where: "Anywhere",
    setup: "Two visible options",
    summary: "Show two regulation options before giving more words.",
    steps: ["Place or draw two simple choices, such as squeeze pillow or bear walk.", "Say only \"pick one\" or \"show me\".", "After the chosen action, point to the first-then plan."],
    why: "The OT plan recommends reducing language and offering two visible regulation strategies.",
    say: "\"Show me: squeeze or bear walk.\"",
    caution: "This is an invitation to co-regulate, not a compliance test.",
    source: "OT sensory diet"
  },
  {
    id: "after-screen-body-bridge",
    title: "After-screen body bridge",
    category: "Everyday rhythm",
    audience: ["sylvie", "elias", "together"],
    needs: ["after-screen", "transition", "move"],
    minutes: 10,
    where: "Inside to outside",
    setup: "Drink + real-world prop",
    summary: "End the screen at a natural finish, then reconnect with body, relationship, and the real version.",
    steps: ["Stop after one level, episode, or activity and name the finish before it arrives.", "Offer water and a quick toilet check.", "Move to a related real-world activity: blocks, drawing, truck play, outside, or trampoline."],
    why: "The research notes consistently recommend physical-world bridge prompts after digital play.",
    say: "\"That activity is finished. Let's take the idea into the real world.\"",
    caution: "Avoid ending only after distress has already built.",
    source: "Games report + app research"
  },
  {
    id: "protected-focus-time",
    title: "Protected focus time",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["calm", "creative"],
    minutes: 30,
    where: "Elias-free sanctuary",
    setup: "Chosen high-interest activity",
    summary: "Guarantee uninterrupted time for Sylvie's deep-focus play while an adult protects the boundary.",
    steps: ["Let Sylvie choose a high-interest activity.", "Set up a physical boundary Elias cannot enter.", "Avoid suggestions unless invited and give a visual warning before the finish."],
    why: "The family report treats protected flow state as essential recovery, not a reward.",
    say: "\"This space and time are yours. I will protect the boundary.\"",
    caution: "The adult, not Sylvie, is responsible for keeping Elias out.",
    source: "Family report"
  },
  {
    id: "quiet-minute-together",
    title: "Quiet minute together",
    category: "Calm + cosy",
    audience: ["sylvie", "together"],
    needs: ["calm", "transition", "quick"],
    minutes: 3,
    where: "Quiet spot",
    setup: "Visual or sand timer",
    summary: "Sit nearby for one predictable quiet minute and model a slower body.",
    steps: ["Set a one-minute visual timer.", "Sit low and nearby, soften your voice, and reduce language.", "Model slow breathing without asking Sylvie to copy."],
    why: "Co-regulation and a regulated adult are central recommendations across the notes.",
    say: "\"We are taking one quiet minute together to help our bodies.\"",
    caution: "Give space if proximity is not wanted.",
    source: "OT sensory diet"
  },
  {
    id: "nature-sound-nest",
    title: "Nature-sound nest",
    category: "Calm + cosy",
    audience: ["sylvie", "elias", "together"],
    needs: ["calm", "transition", "after-screen"],
    minutes: 10,
    where: "Quiet room",
    setup: "Blanket + rain or ocean sounds",
    summary: "Reduce visual clutter, play gentle nature sounds, and settle into a simple blanket nest.",
    steps: ["Turn off background TV and harsh lights.", "Choose a quiet rain or ocean sound.", "Rest with books, drawing, or no activity until the timer ends."],
    why: "The OT plan includes nature sounds, dim light, and reduced background noise as regulation supports.",
    say: "\"Rain sound or ocean sound? Then our room can be quiet.\"",
    caution: "Keep volume low and stop if sound is irritating.",
    source: "OT sensory diet"
  },
  {
    id: "hand-foot-massage",
    title: "Hands or feet massage",
    category: "Calm + cosy",
    audience: ["sylvie"],
    needs: ["calm", "transition"],
    minutes: 5,
    where: "Quiet spot",
    setup: "No setup",
    summary: "Offer a brief hand or foot massage with Sylvie controlling pressure and finish.",
    steps: ["Ask hands, feet, or no massage.", "Use slow, predictable pressure.", "Check softer, firmer, or finished."],
    why: "The sensory diet includes hand and foot massage as calming deep-pressure options.",
    say: "\"Hands, feet, or no thank you?\"",
    caution: "Stop immediately if touch is not wanted.",
    source: "OT sensory diet"
  },
  {
    id: "puddle-channel-engineers",
    title: "Puddle channel engineers",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "creative", "together", "move"],
    minutes: 20,
    where: "Muddy yard or park",
    setup: "Gumboots + cups + sticks",
    summary: "Build tiny channels, bridges, and dams to change where rainwater travels.",
    steps: ["Choose a shallow muddy patch or puddle.", "Use sticks, stones, and cups to test one channel or dam idea.", "Watch what the water does, change the design, then restore or leave the area tidy."],
    why: "Wet-weather play combines whole-body outdoor movement with open-ended engineering and problem-solving.",
    say: "\"Where will the water go if we change this part?\"",
    caution: "Directly supervise water play. Avoid drains, deep water, contaminated water, and unstable banks.",
    source: "Raising Children Network: outdoor play",
    sourceUrl: "https://raisingchildren.net.au/toddlers/play-learning/outdoor-play/outdoor-play"
  },
  {
    id: "mud-kitchen-cafe",
    title: "Mud kitchen cafe",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "creative", "together", "calm"],
    minutes: 25,
    where: "Backyard",
    setup: "Old pots + spoons + dirt + water",
    summary: "Mix pretend soups, pies, and potions in separate work zones with one shared serving counter.",
    steps: ["Set out two mixing zones and a shared counter.", "Add dirt, a small amount of water, leaves, or petals.", "Name the creations, serve one pretend order, then wash tools together."],
    why: "Messy pretend play supports sensory exploration, imagination, language, and protected parallel play.",
    say: "\"What is today's special, and where is each chef's kitchen?\"",
    caution: "Supervise water. Use only known safe natural materials and remind children that mixtures are pretend food.",
    source: "Raising Children Network: outdoor play",
    sourceUrl: "https://raisingchildren.net.au/preschoolers/play-learning/outdoor-play/outdoor-play-easy-ideas"
  },
  {
    id: "wind-detective",
    title: "Wind detective mission",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "move", "creative", "quick"],
    minutes: 12,
    where: "Yard or park",
    setup: "Scarves or paper streamers",
    summary: "Test where the wind is strong, quiet, blocked, or swirling.",
    steps: ["Give each child a scarf or short streamer.", "Try an open spot, behind a tree or wall, and while moving.", "Choose the windiest place and invent one final wind dance."],
    why: "Moving with lightweight fabric makes invisible air movement visible and invites whole-body experimentation.",
    say: "\"Where is the wind hiding, and where is it strongest?\"",
    caution: "Use short, child-safe streamers away from roads, branches, and powerlines.",
    source: "Raising Children Network: outdoor play",
    sourceUrl: "https://raisingchildren.net.au/toddlers/play-learning/outdoor-play/outdoor-play"
  },
  {
    id: "wet-weather-torch-walk",
    title: "Wet-weather torch walk",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "calm", "together", "transition"],
    minutes: 15,
    where: "Yard or familiar path",
    setup: "Rain gear + torch if dim",
    summary: "Explore a familiar place in different weather and notice what has changed.",
    steps: ["Choose a short, familiar route and a clear turn-around point.", "Look for shiny leaves, puddle reflections, raindrop sounds, or torch shadows.", "Return home for a towel squeeze and warm drink if wanted."],
    why: "A predictable route in new weather offers novelty, sensory noticing, and gentle movement without a complex mission.",
    say: "\"Same path, different weather. What changed?\"",
    caution: "Use weather-appropriate clothing and avoid storms, poor visibility, slippery hazards, and unsafe temperatures.",
    source: "Raising Children Network: outdoor play",
    sourceUrl: "https://raisingchildren.net.au/toddlers/play-learning/outdoor-play/outdoor-play"
  },
  {
    id: "nature-loose-parts-picture",
    title: "Nature loose-parts picture",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "creative", "calm", "together"],
    minutes: 20,
    where: "Yard or park",
    setup: "Fallen leaves + sticks + stones",
    summary: "Arrange fallen natural materials into a picture, pattern, map, or creature.",
    steps: ["Collect only a small number of safe fallen materials.", "Mark separate making zones or one shared outline.", "Build, photograph if wanted, then scatter the materials back."],
    why: "Open-ended loose parts support patterns, symbolic thinking, creativity, and low-pressure collaboration.",
    say: "\"Could these pieces become a map, pattern, creature, or something else?\"",
    caution: "Do not collect living plants or unknown, sharp, toxic, or tiny objects.",
    source: "Raising Children Network: preschooler play",
    sourceUrl: "https://raisingchildren.net.au/preschoolers/play-learning/getting-play-started/preschoolers-at-play"
  },
  {
    id: "nature-bingo-walk",
    title: "Nature bingo walk",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "calm", "creative", "together"],
    minutes: 20,
    where: "Yard, park, or neighbourhood",
    setup: "Four-picture bingo card",
    summary: "Find four broad nature clues such as something rough, moving, tiny, or yellow.",
    steps: ["Draw four simple picture clues before leaving.", "Point to or photograph each find rather than collecting it.", "Let each child choose one final surprise square."],
    why: "A small bingo board gives outdoor observation a visible structure while leaving room for discovery.",
    say: "\"What could count as something moving? You decide.\"",
    caution: "Observe wildlife and unknown plants without touching.",
    source: "U.S. National Park Service: nature activities",
    sourceUrl: "https://www.nps.gov/jomu/learn/kidsyouth/online-activities-and-learning-for-kids.htm"
  },
  {
    id: "microclimate-detectives",
    title: "Hot spot, cool spot detectives",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "calm", "creative", "quick"],
    minutes: 10,
    where: "Yard or park",
    setup: "No setup",
    summary: "Compare how the air and ground feel in sun, shade, under a tree, and near a wall.",
    steps: ["Choose two or three nearby safe spots.", "Pause in each and notice warmth, breeze, light, and sound.", "Choose the most comfortable spot for a short rest or story."],
    why: "Physically comparing small climate differences builds observation and body awareness.",
    say: "\"Which place feels coolest, and what is making it different?\"",
    caution: "Keep sun exposure brief and follow normal heat and sun safety.",
    source: "ABC Kids Early Education: Rainforest Rangers",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school/taking-it-further-play-school-rainforest-rangers/106660212"
  },
  {
    id: "shadow-trace-return",
    title: "Trace a travelling shadow",
    category: "Outdoor",
    audience: ["sylvie", "together"],
    needs: ["outside", "creative", "calm"],
    minutes: 12,
    where: "Sunny outdoor surface",
    setup: "Chalk + toy or safe object",
    summary: "Trace one shadow, return later, and discover how far it has moved.",
    steps: ["Place a safe object where it casts a clear shadow.", "Trace the outline and mark the time or draw a sun.", "Return later to trace it again and compare."],
    why: "Revisiting a shadow makes changing light visible and rewards close observation and pattern thinking.",
    say: "\"Where do you predict the shadow will travel?\"",
    caution: "Do not look directly at the sun and use an approved chalk surface.",
    source: "ABC Kids Early Education: Rainforest Rangers",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school/taking-it-further-play-school-rainforest-rangers/106660212"
  },
  {
    id: "branch-cubby-basecamp",
    title: "Loose-parts basecamp",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "move", "creative", "together"],
    minutes: 30,
    where: "Backyard",
    setup: "Boxes, sheets, baskets, safe branches",
    summary: "Build a low outdoor basecamp with separate rooms and one shared doorway.",
    steps: ["Choose a flat safe site and inspect every material.", "Build a low structure with no climbing roof.", "Name the rooms, add a map or delivery route, then agree what stays and what packs away."],
    why: "Building a cubby combines active play, appropriate supervised risk, planning, and imaginative roles.",
    say: "\"Which room must stay protected, and where can the shared doorway go?\"",
    caution: "Adult checks stability. Keep structures low and away from roads, fences, pools, sharp branches, and entrapment hazards.",
    source: "Australian Government physical activity guidance",
    sourceUrl: "https://www.health.gov.au/topics/physical-activity-and-exercise/physical-activity-and-exercise-guidelines-for-all-australians/recommendations-for-infants-toddlers-and-preschoolers-birth-to-5-years"
  },
  {
    id: "seed-caretaker",
    title: "Tiny seed caretaker",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "calm", "together", "transition"],
    minutes: 15,
    where: "Garden or pot",
    setup: "Large seeds + soil + water",
    summary: "Plant a fast-growing seed and create a simple care marker for it.",
    steps: ["Choose one child-safe seed and pot or garden spot.", "Fill, plant, water, and add a name or picture marker.", "Return on later days to notice and record changes."],
    why: "Caring for a living thing creates a meaningful routine and makes slow change visible.",
    say: "\"What will our seed need from us, and how will we know it changed?\"",
    caution: "Use non-toxic plants, age-appropriate seeds, and direct supervision around soil and water.",
    source: "ABC Kids Early Education: Rainforest Rangers",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school/taking-it-further-play-school-rainforest-rangers/106660212"
  },
  {
    id: "nature-sound-map",
    title: "Nature sound map",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "calm", "creative"],
    minutes: 12,
    where: "Quiet outdoor spot",
    setup: "Paper + pencil optional",
    summary: "Sit in one spot and map sounds as marks around a drawing of yourselves.",
    steps: ["Choose a comfortable listening spot.", "For each sound, point to its direction or add a mark to a simple map.", "Choose the nearest, farthest, quietest, or strangest sound."],
    why: "Sound mapping encourages stillness, directional listening, and shared curiosity without demanding silence.",
    say: "\"Which sound is farthest away, and what mark should it have?\"",
    caution: "Leave immediately if the environment becomes uncomfortably loud.",
    source: "Raising Children Network: outdoor play",
    sourceUrl: "https://raisingchildren.net.au/toddlers/play-learning/outdoor-play/outdoor-play"
  },
  {
    id: "leaf-race-laboratory",
    title: "Leaf race laboratory",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "move", "creative", "quick"],
    minutes: 10,
    where: "Windy yard or gentle slope",
    setup: "Fallen leaves",
    summary: "Predict which fallen leaves will travel fastest, farthest, or spin the most.",
    steps: ["Choose two or three different fallen leaves.", "Release them together in wind or from the top of a gentle slope.", "Change one thing and race again."],
    why: "A simple race invites running, prediction, comparison, and repeated experimentation.",
    say: "\"Which leaf will spin, and which will travel farthest?\"",
    caution: "Use a safe traffic-free area and collect only safe fallen leaves.",
    source: "Raising Children Network: outdoor play",
    sourceUrl: "https://raisingchildren.net.au/toddlers/play-learning/outdoor-play/outdoor-play"
  },
  {
    id: "nature-weaving-frame",
    title: "Nature weaving frame",
    category: "Outdoor",
    audience: ["sylvie", "together"],
    needs: ["outside", "creative", "calm"],
    minutes: 25,
    where: "Yard or table outside",
    setup: "Forked sticks + wool + fallen pieces",
    summary: "Make a simple weaving frame and add safe fallen leaves, bark, or grasses.",
    steps: ["An adult prepares a simple frame with wool between safe sticks.", "Weave in a few found or reusable materials.", "Notice patterns and leave spaces rather than trying to fill everything."],
    why: "Weaving combines natural loose parts, pattern-making, fine motor work, and process-focused creativity.",
    say: "\"What pattern could travel across this frame?\"",
    caution: "Adult handles cutting and checks all natural materials for sharp points or irritants.",
    source: "ABC Kids Early Education: Make and Create",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school/play-school-s-make-and-create-extend-play-learn-/105965060"
  },
  {
    id: "bird-nest-engineering",
    title: "Bird-nest engineering challenge",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "creative", "calm", "together"],
    minutes: 20,
    where: "Yard or park table",
    setup: "Fallen twigs + leaves + pretend egg",
    summary: "Build a pretend nest strong enough to hold a stone or toy egg.",
    steps: ["Look at a real nest from a respectful distance or imagine one.", "Use fallen materials to build on the ground or a tray.", "Test with one pretend egg, repair, and test again."],
    why: "The challenge joins wildlife curiosity with construction, iteration, and protected shared roles.",
    say: "\"What will stop the egg rolling out?\"",
    caution: "Never touch or disturb real nests, eggs, birds, or wildlife habitat.",
    source: "ABC Kids Early Education: Rainforest Rangers",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school/taking-it-further-play-school-rainforest-rangers/106660212"
  },
  {
    id: "sky-story-picnic",
    title: "Sky story picnic",
    category: "Outdoor",
    audience: ["sylvie", "elias", "together"],
    needs: ["outside", "calm", "creative", "together"],
    minutes: 15,
    where: "Shady outdoor spot",
    setup: "Picnic rug",
    summary: "Lie or sit outside and turn clouds, moon, or moving branches into a shared story.",
    steps: ["Choose a comfortable safe viewing spot.", "Each person points out one shape, movement, or colour.", "Connect the observations into a tiny three-part story."],
    why: "Looking up slows the pace while supporting imagination, language, and shared attention.",
    say: "\"What is happening in the sky story, and what happens next?\"",
    caution: "Do not look directly at the sun; use shade and sun protection.",
    source: "Raising Children Network: toddler imagination",
    sourceUrl: "https://raisingchildren.net.au/toddlers/play-learning/play-toddler-development/imagining-play-toddlers"
  },
  {
    id: "cardboard-box-anything",
    title: "Cardboard box becomes anything",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "calm", "together", "after-screen"],
    minutes: 30,
    where: "Inside",
    setup: "Large box + crayons + tape",
    summary: "Turn one large box into a vehicle, shop, cave, house, or invention.",
    steps: ["Offer only a few possible identities, then let Sylvie choose or invent one.", "Mark separate drawing areas and an entry or delivery role for Elias.", "Add only what the play needs, then decide whether to keep or recycle it."],
    why: "A plain box invites open-ended symbolic play, problem-solving, and side-by-side roles.",
    say: "\"What could this become, and what is the first thing it needs?\"",
    caution: "Adult handles cutting and removes staples, sharp edges, and entrapment hazards.",
    source: "Raising Children Network: preschooler play",
    sourceUrl: "https://raisingchildren.net.au/preschoolers/play-learning/getting-play-started/preschoolers-at-play"
  },
  {
    id: "useful-box-invention",
    title: "Useful-box invention",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm", "after-screen"],
    minutes: 25,
    where: "Table",
    setup: "Recycled craft materials",
    summary: "Choose a small problem and invent something from safe reusable bits and pieces.",
    steps: ["Offer a limited tray of cardboard, paper, fabric, tape, and containers.", "Choose a playful problem such as carrying a toy or making a door that opens.", "Build, test, and change one part without needing a perfect product."],
    why: "Open-ended making supports planning, flexible thinking, and learning that changing a design is part of creating.",
    say: "\"What should it do, and which part will we test first?\"",
    caution: "Closely supervise tools and exclude small, sharp, breakable, or unsuitable materials.",
    source: "ABC Kids Early Education: Make and Create",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school/play-school-s-make-and-create-extend-play-learn-/105965060"
  },
  {
    id: "ramp-laboratory",
    title: "Ramp laboratory",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "together", "calm"],
    minutes: 20,
    where: "Floor",
    setup: "Cardboard + books + rolling toys",
    summary: "Build ramps of different heights and test what rolls, slides, stops, or travels farthest.",
    steps: ["Prop cardboard on a low stable support.", "Predict and test two or three large safe objects.", "Change the ramp height or surface and test again."],
    why: "Ramp play gives Elias immediate cause-and-effect while Sylvie can predict, compare, and redesign.",
    say: "\"What will happen if the ramp gets higher?\"",
    caution: "Use stable low ramps and age-appropriate objects without small parts.",
    source: "Raising Children Network: toys and games",
    sourceUrl: "https://raisingchildren.net.au/babies/play-learning/getting-play-started/toys-and-games"
  },
  {
    id: "domino-chain-reaction",
    title: "Big-piece chain reaction",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 20,
    where: "Protected floor or table",
    setup: "Large blocks + tubes + balls",
    summary: "Make one action trigger the next using large, safe objects.",
    steps: ["Start with a short line of large blocks.", "Add one ramp, rolling ball, bell, or other safe final event.", "Test, repair one break, and let Sylvie decide the final launch."],
    why: "Chain reactions reward sequencing, systems thinking, persistence, and experimentation.",
    say: "\"What needs to happen first so the last part moves?\"",
    caution: "Use large age-appropriate pieces and protect the build from accidental sibling disruption.",
    source: "ABC Kids Early Education: Make and Create",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school/play-school-s-make-and-create-extend-play-learn-/105965060"
  },
  {
    id: "sink-float-lab",
    title: "Sink or float laboratory",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 20,
    where: "Kitchen, bath, or outside",
    setup: "Shallow water + large safe objects",
    summary: "Predict, test, and sort household objects by what they do in water.",
    steps: ["Choose a small set of large waterproof objects.", "Predict sink or float before testing each one.", "Try changing one object, such as adding a small cargo load to a floating container."],
    why: "Simple water experiments make prediction and cause-and-effect tangible.",
    say: "\"What is your prediction, and what could change the result?\"",
    caution: "Directly supervise every moment of water play and use only safe, clean, large objects.",
    source: "ABC Kids Early Education: Science Time",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school-science-time"
  },
  {
    id: "walking-rainbow-water",
    title: "Walking rainbow water",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm"],
    minutes: 20,
    where: "Protected table",
    setup: "Clear cups + paper towel + coloured water",
    summary: "Connect cups with paper towel bridges and watch coloured water slowly travel.",
    steps: ["An adult prepares a few stable cups with small amounts of coloured water.", "Bridge neighbouring cups with folded paper towel.", "Predict, wait, and revisit to see what changed."],
    why: "The slow experiment supports observation, prediction, colour mixing, and returning to a question later.",
    say: "\"Where do you think the colour will travel next?\"",
    caution: "Adult supervises preparation and water. Keep food colouring and cups away from mouths and fabrics.",
    source: "ABC Kids Early Education: Science Time",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school-science-time"
  },
  {
    id: "kitchen-band",
    title: "Kitchen band conductor",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "together", "move"],
    minutes: 12,
    where: "Kitchen or open room",
    setup: "Unbreakable bowls + spoons + shakers",
    summary: "Explore loud, soft, fast, slow, start, and stop with simple homemade instruments.",
    steps: ["Choose a few unbreakable sound-makers.", "Take turns conducting one contrast such as loud and soft.", "End with a deliberately quiet final song and pack instruments away."],
    why: "Making music supports cause-and-effect, movement, turn-taking, and shared control.",
    say: "\"Show the band: loud, soft, or stop.\"",
    caution: "Protect hearing, keep volume comfortable, and use sealed age-appropriate shakers without loose small contents.",
    source: "Raising Children Network: toys and games",
    sourceUrl: "https://raisingchildren.net.au/babies/play-learning/getting-play-started/toys-and-games"
  },
  {
    id: "scarf-movement-story",
    title: "Scarf movement story",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "move", "together", "after-screen"],
    minutes: 10,
    where: "Open room",
    setup: "Short scarves or fabric",
    summary: "Move like wind, waves, animals, or vehicles while a simple story unfolds.",
    steps: ["Give each child a short piece of lightweight fabric.", "Choose three story movements: start, adventure, quiet finish.", "Let Sylvie direct one movement and Elias repeat a simple action."],
    why: "Fabric play encourages new body movements while the story gives both children achievable roles.",
    say: "\"How does the scarf move at the start, and how does it come home?\"",
    caution: "Use short fabric pieces with direct supervision and keep them away from necks and faces.",
    source: "Raising Children Network: movement play",
    sourceUrl: "https://raisingchildren.net.au/preschoolers/play-learning/play-preschooler-development/movement-play-preschoolers"
  },
  {
    id: "story-basket-remix",
    title: "Story basket remix",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 15,
    where: "Quiet play space",
    setup: "Book + three safe props",
    summary: "Retell a familiar story with props, then change one part and see what follows.",
    steps: ["Choose a familiar short book and three matching or imaginative props.", "Retell only the beginning, middle, and end.", "Let Sylvie change one event while Elias moves or delivers one prop."],
    why: "Retelling supports language and sequencing; changing one event invites flexible imagination without making play too open-ended.",
    say: "\"What one thing should happen differently this time?\"",
    caution: "Use age-appropriate props without small parts.",
    source: "Raising Children Network: preschooler play",
    sourceUrl: "https://raisingchildren.net.au/preschoolers/play-learning/getting-play-started/preschoolers-at-play"
  },
  {
    id: "indoor-treasure-map",
    title: "Indoor treasure map",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "move", "together", "quick"],
    minutes: 15,
    where: "Inside",
    setup: "Paper map + safe treasure",
    summary: "Draw a simple map with three landmarks and follow it to a safe hidden object.",
    steps: ["Choose three familiar room landmarks.", "Draw them as simple pictures with a clear finish.", "One adult hides a safe object; Sylvie navigates while Elias carries or reveals it."],
    why: "A tiny map connects symbols, sequencing, memory, movement, and sibling roles.",
    say: "\"What three landmarks must the map show?\"",
    caution: "Keep hiding places accessible and away from climbing, doors, appliances, and unsafe objects.",
    source: "NSW Department of Education: play-based learning",
    sourceUrl: "https://education.nsw.gov.au/content/dam/main-education/teaching-and-learning/curriculum/early-learning/Play-based-learning.pdf"
  },
  {
    id: "sock-ball-targets",
    title: "Sock-ball target toss",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["move", "together", "quick", "after-screen"],
    minutes: 10,
    where: "Inside or outside",
    setup: "Rolled socks + baskets",
    summary: "Throw soft sock balls into close targets, then redesign the course.",
    steps: ["Set out two or three stable baskets at easy distances.", "Take turns or throw together without keeping score.", "Change one target, then carry the socks back to the drawer."],
    why: "Soft targets practise throwing and coordination while the pack-up becomes a useful movement finish.",
    say: "\"Which target should be closer, farther, or worth a silly sound?\"",
    caution: "Clear fragile items and keep throws away from faces.",
    source: "Raising Children Network: movement play",
    sourceUrl: "https://raisingchildren.net.au/preschoolers/play-learning/play-preschooler-development/movement-play-preschoolers"
  },
  {
    id: "tape-road-city",
    title: "Tape-road city",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "together", "calm"],
    minutes: 25,
    where: "Floor",
    setup: "Painter's tape + vehicles + blocks",
    summary: "Build a floor city with roads, numbered destinations, and protected construction zones.",
    steps: ["An adult lays a simple tape road on a suitable floor.", "Sylvie adds destinations or rules while Elias drives and delivers.", "Create separate building zones and one shared central station."],
    why: "This joins vehicle cause-and-effect with mapping, systems, numbers, and protected parallel play.",
    say: "\"Which places need roads, and where is the shared station?\"",
    caution: "Use surface-safe tape and age-appropriate vehicles; remove tape if it becomes a trip hazard.",
    source: "Raising Children Network: preschooler play",
    sourceUrl: "https://raisingchildren.net.au/preschoolers/play-learning/getting-play-started/preschoolers-at-play"
  },
  {
    id: "big-object-sort",
    title: "Big-object sorting station",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "calm", "together", "quick"],
    minutes: 10,
    where: "Floor or table",
    setup: "Large safe objects + containers",
    summary: "Sort large household or play objects, then invent a surprising new sorting rule.",
    steps: ["Choose a small collection of large safe objects.", "Sort by one visible rule such as colour, shape, use, or texture.", "Let Sylvie invent a new rule while Elias delivers objects to containers."],
    why: "Sorting supports early maths and pattern thinking while giving Elias a concrete action role.",
    say: "\"What rule did you use, and can you invent a trickier one?\"",
    caution: "Use only large age-appropriate objects and supervise closely.",
    source: "Raising Children Network: preschooler play",
    sourceUrl: "https://raisingchildren.net.au/preschoolers/play-learning/getting-play-started/preschoolers-at-play"
  },
  {
    id: "texture-collage-map",
    title: "Texture collage map",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 20,
    where: "Table",
    setup: "Paper + safe textured scraps",
    summary: "Arrange and glue safe textures into a map, creature, pattern, or abstract picture.",
    steps: ["Offer a limited tray of large fabric and paper scraps.", "Touch or look first; nobody has to use an uncomfortable texture.", "Make separate pictures or connect them with one shared road or border."],
    why: "Collage explores texture, colour, pattern, and process while allowing control over sensory contact.",
    say: "\"Which textures belong in your picture, and which can stay on the tray?\"",
    caution: "Adult supervises glue and excludes small, sharp, irritating, or mouth-sized materials.",
    source: "ABC Kids Early Education: Make and Create",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school/play-school-s-make-and-create-extend-play-learn-/105965060"
  },
  {
    id: "torch-shadow-theatre",
    title: "Torch shadow theatre",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "calm", "together", "after-screen"],
    minutes: 15,
    where: "Dim room",
    setup: "Torch + wall + toys or hands",
    summary: "Make shadows grow, shrink, move, and become characters in a tiny show.",
    steps: ["Dim the room enough to see shadows without making it fully dark.", "Move one toy or hand closer to and farther from the light.", "Create a short three-scene shadow story, then turn normal lights back on."],
    why: "Shadow play joins simple physics, visual observation, storytelling, and a calm shared focus.",
    say: "\"How can we make the shadow huge, tiny, or disappear?\"",
    caution: "Adult controls the torch and never shines it into eyes; stop if dim light feels uncomfortable.",
    source: "ABC Kids Early Education: Science Time",
    sourceUrl: "https://www.abc.net.au/abckids/programs/play-school-science-time"
  }
];

const enrichmentIdeas = [
  {
    id: "morning-cuddle-prayer",
    title: "Morning cuddle and prayer",
    category: "Faith + values",
    needs: ["calm", "together", "transition", "quick"],
    minutes: 3,
    where: "Bed or sofa",
    setup: "No setup",
    summary: "Begin the day with connection and one short, concrete prayer.",
    steps: ["Offer a cuddle or sit close if wanted.", "Say one simple thank-you for the new day.", "Name the first part of the morning rhythm."],
    why: "A warm, predictable start combines connection, faith, and transition safety.",
    say: "\"Thank you God for our new day. First cuddle, then breakfast.\""
  },
  {
    id: "cereal-pour-lunch-pack",
    title: "Breakfast helper station",
    category: "Everyday rhythm",
    needs: ["creative", "transition", "quick"],
    minutes: 8,
    where: "Kitchen",
    setup: "Child-sized jug, bowl, or lunch items",
    summary: "Let Sylvie pour part of breakfast or choose and pack one lunch item.",
    steps: ["Set out one manageable helper task.", "Demonstrate slowly once, then let Sylvie try.", "Finish by carrying or placing the item where it belongs."],
    why: "Practical tasks build independence, coordination, order, and confidence.",
    say: "\"Which job will you do yourself today: pour or pack?\"",
    caution: "Use light, unbreakable items and supervise food preparation."
  },
  {
    id: "picture-dominoes",
    title: "Picture dominoes",
    category: "Together",
    needs: ["calm", "together", "quick"],
    minutes: 10,
    where: "Table or floor",
    setup: "Picture dominoes",
    summary: "Play a short matching game with visible turns and a clear finish.",
    steps: ["Choose only a small set of dominoes.", "Take one-piece turns and help each other find matches.", "Stop when the chosen pieces are used, even if the full game is unfinished."],
    why: "A shortened game practises matching, attention, turns, and playing fairly.",
    say: "\"One piece each, and we are on the same team.\"",
    caution: "Use age-appropriate pieces and keep small parts away from Elias."
  },
  {
    id: "memory-tray-mystery",
    title: "Memory tray mystery",
    category: "Creative + curious",
    needs: ["calm", "creative", "quick"],
    minutes: 8,
    where: "Table",
    setup: "Tray + 3 to 5 familiar objects + cloth",
    summary: "Look closely at a few objects, cover them, and discover what changed or disappeared.",
    steps: ["Place three familiar objects on a tray.", "Look together, cover them, and remove or move one.", "Reveal the tray and let Sylvie explain what changed."],
    why: "The game stretches working memory and careful observation without feeling like a test.",
    say: "\"What changed while the tray was hiding?\"",
    caution: "Use large, age-appropriate objects."
  },
  {
    id: "sensory-treasure-bin",
    title: "Scoop-and-find treasure bin",
    category: "Sensory diet",
    audience: ["sylvie"],
    needs: ["calm", "creative"],
    minutes: 15,
    where: "Protected floor or table",
    setup: "Sensory base + large hidden objects + scoop",
    summary: "Dig, scoop, and find large treasures in a contained sensory tub.",
    steps: ["Choose a tolerated base such as kinetic sand or another OT-approved material.", "Hide a few large treasures.", "Scoop, find, sort, and use a clear cleanup finish."],
    why: "Contained tactile play supports hand skills, attention, and sensory exploration.",
    say: "\"How many treasures are hiding, and where should each one go?\"",
    caution: "Directly supervise. Avoid rice, small objects, or other choking hazards when Elias is present."
  },
  {
    id: "i-spy-describe-guess",
    title: "I spy and describe",
    category: "Creative + curious",
    needs: ["calm", "creative", "quick", "transition"],
    minutes: 5,
    where: "Anywhere",
    setup: "No setup",
    summary: "Describe an object by colour, shape, use, or location and take turns guessing.",
    steps: ["Choose a visible object.", "Give one clue at a time.", "Swap roles and let Sylvie create clues."],
    why: "Describe-and-guess play builds vocabulary, listening, flexible thinking, and expressive language.",
    say: "\"I am thinking of something red that we use at breakfast.\""
  },
  {
    id: "picture-book-narrator",
    title: "Sylvie reads the pictures",
    category: "Creative + curious",
    needs: ["calm", "creative", "together"],
    minutes: 10,
    where: "Cosy reading spot",
    setup: "Favourite picture book",
    summary: "Let Sylvie narrate a familiar book from its pictures while the adult listens.",
    steps: ["Choose a familiar picture-rich book.", "Invite Sylvie to tell what is happening in each scene.", "Ask one open question or wonder together at the end."],
    why: "Picture narration supports sequencing, confidence, imagination, and expressive language.",
    say: "\"You know this story. What are the pictures telling us?\""
  },
  {
    id: "large-bead-threading",
    title: "Large-bead pattern thread",
    category: "Creative + curious",
    audience: ["sylvie"],
    needs: ["calm", "creative", "quick"],
    minutes: 10,
    where: "Table",
    setup: "Large beads + thick lace",
    summary: "Thread large beads freely or copy a simple repeating colour pattern.",
    steps: ["Offer a small choice of large beads.", "Start a simple pattern or let Sylvie invent one.", "Photograph or wear the result, then pack every bead away."],
    why: "Threading develops hand-eye coordination, fine motor control, patterns, and concentration.",
    say: "\"Would you like a free design or a repeating pattern?\"",
    caution: "Directly supervise and keep all beads away from Elias."
  },
  {
    id: "bake-measure-stir",
    title: "Measure, pour, and stir",
    category: "Everyday rhythm",
    needs: ["creative", "together", "calm"],
    minutes: 25,
    where: "Kitchen",
    setup: "Simple family recipe",
    summary: "Make a simple recipe together with one measuring, one pouring, and one heavy stirring job.",
    steps: ["Choose a short familiar recipe.", "Give Sylvie clear measuring, pouring, and stirring roles.", "Name the sequence and enjoy or share the result."],
    why: "Cooking combines maths, sequencing, practical skills, sensory input, and family connection.",
    say: "\"First measure, then pour, then strong stirring.\"",
    caution: "Adult handles heat, sharp tools, allergens, and food-safety decisions."
  },
  {
    id: "lounge-room-campout",
    title: "Lounge-room flashlight campout",
    category: "Calm + cosy",
    needs: ["calm", "creative", "together"],
    minutes: 25,
    where: "Lounge room",
    setup: "Blankets + torch + stories",
    summary: "Make a simple pretend camp, tell flashlight stories, and finish with gratitude.",
    steps: ["Create a low blanket camp with an open exit.", "Tell or read one flashlight story.", "Name one good thing from the week before packing up or settling down."],
    why: "A pretend campout creates family connection, imagination, and a celebratory weekly ritual.",
    say: "\"What story belongs at our camp tonight?\"",
    caution: "Keep airflow and exits clear; adult controls the torch."
  },
  {
    id: "family-gratitude-circle",
    title: "Family gratitude circle",
    category: "Faith + values",
    needs: ["calm", "together", "transition"],
    minutes: 5,
    where: "Table or bedtime",
    setup: "No setup",
    summary: "Each person names one thing they are thankful for and listens to the others.",
    steps: ["Use the same regular moment, such as Friday dinner or bedtime.", "Each person shares one concrete thank-you.", "Close with a short prayer or shared phrase."],
    why: "A brief gratitude ritual builds emotional reflection, listening, faith, and family connection.",
    say: "\"My thank-you is ___. What is yours?\""
  },
  {
    id: "interest-led-outing",
    title: "Interest-led wonder outing",
    category: "Outdoor",
    needs: ["outside", "creative", "together"],
    minutes: 60,
    where: "Museum, zoo, library, pool, or local place",
    setup: "Choose one destination + exit plan",
    summary: "Choose one outing that follows a current interest, with a short mission and low-pressure exit.",
    steps: ["Let Sylvie choose between two suitable destinations.", "Pick one thing to find, notice, or try.", "Leave while the outing is still going well and revisit it later through play or drawing."],
    why: "Broad, interest-led experiences can spark lasting curiosity without turning the outing into a lesson.",
    say: "\"What is the one thing you most want to discover there?\"",
    caution: "Plan sensory supports, supervision, and an early exit option."
  },
  {
    id: "weekly-memory-review",
    title: "Weekly memory review",
    category: "Everyday rhythm",
    needs: ["calm", "together", "transition"],
    minutes: 10,
    where: "Sofa or table",
    setup: "A few photos, drawings, or creations",
    summary: "Look back at a few moments from the week and celebrate effort, courage, or curiosity.",
    steps: ["Choose only two or three photos or creations.", "Let Sylvie tell what she remembers.", "Name one specific thing she tried, learned, or enjoyed."],
    why: "Gentle reflection strengthens memory, narrative skills, confidence, and family connection.",
    say: "\"What do you remember, and what felt good to learn?\""
  },
  {
    id: "jigsaw-pattern-challenge",
    title: "Jigsaw and pattern challenge",
    category: "Creative + curious",
    audience: ["sylvie"],
    needs: ["calm", "creative"],
    minutes: 15,
    where: "Protected table",
    setup: "Suitable puzzle or pattern pieces",
    summary: "Complete a right-sized puzzle or continue and redesign a repeating pattern.",
    steps: ["Offer a challenge that is interesting but achievable.", "Pause before helping and ask what clue she notices.", "Finish on success or save the work visibly for later."],
    why: "Puzzles and pattern continuation develop problem-solving, persistence, and mathematical thinking.",
    say: "\"What clue could help with the next piece?\"",
    caution: "Use age-appropriate pieces and protect the work from interruption."
  },
  {
    id: "pretend-shop-maths",
    title: "Pretend shop maths",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "together", "calm"],
    minutes: 20,
    where: "Table or play kitchen",
    setup: "Play food + baskets + large tokens",
    summary: "Run a pretend shop using counting, sorting, requests, and deliveries.",
    steps: ["Set up a few items and large safe tokens.", "Take turns being shopper and shopkeeper.", "Give Elias a delivery or basket-carrying role."],
    why: "Shop play combines numeracy, social scripts, language, and imaginative roles.",
    say: "\"How many do we need, and who will deliver them?\"",
    caution: "Use large age-appropriate tokens and play food."
  },
  {
    id: "animal-yoga-simon",
    title: "Animal yoga Simon Says",
    category: "Sensory diet",
    audience: ["sylvie", "elias", "together"],
    needs: ["move", "together", "quick", "transition"],
    minutes: 8,
    where: "Open floor",
    setup: "No setup",
    summary: "Stretch and move like animals, sometimes following Simon and sometimes inventing your own.",
    steps: ["Choose three safe animal poses or movements.", "Play a gentle Simon Says round with starts and stops.", "Let Sylvie invent the final animal, then finish with a still pose."],
    why: "Animal movement builds body awareness, coordination, listening, and start-stop control.",
    say: "\"Simon says stretch tall like a giraffe. What animal comes next?\"",
    caution: "Use an open non-slip space and comfortable movements."
  },
  {
    id: "fine-motor-art-sampler",
    title: "Fine-motor art sampler",
    category: "Creative + curious",
    audience: ["sylvie"],
    needs: ["creative", "calm"],
    minutes: 15,
    where: "Protected table",
    setup: "Choose 2: stickers, dough tools, paintbrush, safe scissors",
    summary: "Offer two hand-skill art choices without requiring a finished product.",
    steps: ["Choose only two suitable materials.", "Demonstrate one action, then let Sylvie explore.", "Display, photograph, or simply clear the process when finished."],
    why: "Varied art tools strengthen hands, dexterity, sensory exploration, and creative confidence.",
    say: "\"Which tool do your hands want to try first?\"",
    caution: "Directly supervise scissors, glue, paint, and small materials."
  },
  {
    id: "helper-heavy-work-round",
    title: "Strong helper round",
    category: "Sensory diet",
    audience: ["sylvie", "elias", "together"],
    needs: ["move", "transition", "together"],
    minutes: 10,
    where: "Around home",
    setup: "Choose 2 safe helper jobs",
    summary: "Do a short round of wiping, carrying, pushing, watering, or sweeping.",
    steps: ["Offer two useful, manageable jobs.", "Complete each with child-sized tools or light loads.", "Mark the final job and thank the helper team."],
    why: "Useful heavy work can organise the body while building independence and belonging.",
    say: "\"Two strong jobs, then helper round is finished.\"",
    caution: "Use child-safe tools, light loads, and close supervision."
  },
  {
    id: "pretend-care-clinic",
    title: "Pretend care clinic",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "together", "calm"],
    minutes: 20,
    where: "Floor or play space",
    setup: "Dolls, animals, or safe pretend tools",
    summary: "Play doctor, vet, cook, helper, or superhero and help a character with a small problem.",
    steps: ["Choose roles and one simple problem.", "Let Sylvie direct the care plan.", "Give Elias one repeatable helper job, then show the character feeling better."],
    why: "Role-play supports social routines, perspective-taking, empathy, and emotional processing.",
    say: "\"How is the character feeling, and what could help?\"",
    caution: "Use only safe pretend tools and age-appropriate props."
  },
  {
    id: "short-team-board-game",
    title: "Short team board game",
    category: "Together",
    audience: ["sylvie", "together"],
    needs: ["calm", "together"],
    minutes: 10,
    where: "Table",
    setup: "Simple board or cooperative game",
    summary: "Play a deliberately short game with visible turns and lots of shared cheering.",
    steps: ["Choose a simple game and shorten it if needed.", "Use clear turns and help each other.", "Finish after the agreed round rather than waiting for frustration."],
    why: "Short games practise rules, patience, counting, and handling small uncertainties.",
    say: "\"We will play three rounds, and we are practising together.\"",
    caution: "Keep small game pieces away from Elias."
  },
  {
    id: "feelings-mirror-charades",
    title: "Feelings mirror charades",
    category: "Together",
    needs: ["calm", "creative", "together"],
    minutes: 8,
    where: "Mirror or play space",
    setup: "Mirror optional",
    summary: "Make, copy, and guess feeling faces, then wonder what might help each feeling.",
    steps: ["Choose a feeling and make its face or body pose.", "Copy or guess it together.", "Ask what the person might need, without linking it to a current conflict."],
    why: "Playful emotion practice builds vocabulary and perspective-taking during calm moments.",
    say: "\"What feeling could this be, and what might help?\""
  },
  {
    id: "build-calm-down-kit",
    title: "Build a calm-down kit",
    category: "Calm + cosy",
    audience: ["sylvie"],
    needs: ["calm", "transition"],
    minutes: 15,
    where: "Quiet spot",
    setup: "Small basket + chosen calming items",
    summary: "Choose a few familiar supports and practise helping a toy use them.",
    steps: ["Offer a small choice of approved items such as a book, fidget, chewy, or comfort toy.", "Let Sylvie choose what belongs in the kit.", "Pretend a toy is upset and practise choosing one support."],
    why: "Building and rehearsing the kit while calm makes it more familiar when regulation is harder.",
    say: "\"Teddy needs help. Which one thing could Teddy choose?\"",
    caution: "Only include safe, therapist-approved, age-appropriate items."
  },
  {
    id: "social-outing-rehearsal",
    title: "Rehearse a small social outing",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["transition", "calm", "together"],
    minutes: 10,
    where: "Home before an outing",
    setup: "Toy figures or simple drawings",
    summary: "Preview a library, playgroup, party, or church visit with an exit plan.",
    steps: ["Act out arriving, one expected activity, and leaving.", "Practise a greeting and what to do if Sylvie feels shy or overloaded.", "Show the exit plan and one comfort option."],
    why: "A brief rehearsal makes an unfamiliar social sequence more predictable.",
    say: "\"First we arrive, then one activity, and we can leave when your body has had enough.\""
  },
  {
    id: "bible-story-act-out",
    title: "Act out a Bible story",
    category: "Faith + values",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 15,
    where: "Floor or table",
    setup: "Toddler Bible + toys or figures",
    summary: "Read a short Bible story and retell its beginning, middle, and end with toys.",
    steps: ["Choose one short, age-appropriate story.", "Retell it with animals, blocks, food, or figures.", "Finish with one simple wondering question."],
    why: "Interactive retelling makes faith stories memorable while supporting sequencing and imagination.",
    say: "\"I wonder how they felt, and what they learned about God?\"",
    caution: "Keep faith play joyful and never quiz or force participation."
  },
  {
    id: "prayer-blessing-rhythm",
    title: "Short prayer and blessing rhythm",
    category: "Faith + values",
    needs: ["calm", "transition", "together", "quick"],
    minutes: 3,
    where: "Morning, meals, or bedtime",
    setup: "No setup",
    summary: "Use a short repeated prayer and speak a gentle bedtime blessing.",
    steps: ["Choose one regular daily moment.", "Say one concrete thank-you or request.", "Pause for Sylvie to add a word if she wants, then close with the same blessing."],
    why: "Short repetition helps prayer feel like safe, ordinary conversation with God.",
    say: "\"Thank you God for ___. May God bless you and keep you.\""
  },
  {
    id: "worship-action-song",
    title: "Worship action song",
    category: "Faith + values",
    audience: ["sylvie", "elias", "together"],
    needs: ["move", "together", "transition", "quick"],
    minutes: 8,
    where: "Anywhere",
    setup: "Familiar worship song",
    summary: "Sing one joyful faith song with big actions, then one quiet finishing line.",
    steps: ["Choose a familiar simple song.", "Add actions, instruments, or marching.", "Slow down for the last verse or line."],
    why: "Action songs combine faith language, memory, movement, and family joy.",
    say: "\"How can our bodies show the big part and the quiet part?\"",
    caution: "Keep volume comfortable and participation optional."
  },
  {
    id: "thankful-tree-craft",
    title: "Thankful tree craft",
    category: "Faith + values",
    needs: ["creative", "calm", "together"],
    minutes: 20,
    where: "Table or wall",
    setup: "Paper tree + paper leaves",
    summary: "Add leaves showing people, places, and small things the family is thankful for.",
    steps: ["Draw or prepare a simple tree.", "Each person draws or dictates one thank-you on a leaf.", "Add leaves over time and revisit them together."],
    why: "A visible gratitude practice joins art, memory, faith, and family reflection.",
    say: "\"What small good thing belongs on today's leaf?\"",
    caution: "Adult supervises scissors and small craft materials."
  },
  {
    id: "kindness-picture-plan",
    title: "Draw a kindness plan",
    category: "Faith + values",
    needs: ["creative", "calm", "together"],
    minutes: 10,
    where: "Table",
    setup: "Paper + drawing tools",
    summary: "Draw one simple way to help or encourage someone, then do it if practical.",
    steps: ["Choose one person or situation.", "Draw the helpful action.", "Make a simple plan to carry it out together."],
    why: "Turning kindness into a visible plan helps connect values with real action.",
    say: "\"What could our helping hands do?\""
  },
  {
    id: "practical-life-station",
    title: "Practical-life station",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["creative", "calm", "transition"],
    minutes: 12,
    where: "Kitchen or dining area",
    setup: "Child-sized washing, setting, or sweeping tools",
    summary: "Practise one real task such as washing vegetables, setting the table, or sweeping.",
    steps: ["Choose one task and prepare child-sized tools.", "Demonstrate slowly and use few words.", "Let Sylvie complete as much as she can, then restore the station."],
    why: "Real work develops coordination, concentration, responsibility, and the confidence of doing it herself.",
    say: "\"I will show you once, then this job is yours to try.\"",
    caution: "Use child-safe tools and direct supervision."
  },
  {
    id: "pouring-scooping-station",
    title: "Pouring and scooping station",
    category: "Creative + curious",
    audience: ["sylvie"],
    needs: ["calm", "creative"],
    minutes: 15,
    where: "Tray, sink, or outside",
    setup: "Two containers + scoop or small jug",
    summary: "Transfer a manageable material back and forth while exploring volume and control.",
    steps: ["Choose water or another safe tolerated material.", "Demonstrate one slow pour or scoop.", "Let Sylvie repeat, compare fullness, and help clean the tray."],
    why: "Repeated transferring builds control, focus, independence, and early understanding of volume.",
    say: "\"Which container holds more, and how can you find out?\"",
    caution: "Directly supervise water and avoid small dry materials around Elias."
  },
  {
    id: "low-choice-activity-shelf",
    title: "Choose from the little shelf",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["calm", "creative", "transition"],
    minutes: 20,
    where: "Low shelf or prepared table",
    setup: "Only 2 to 4 chosen activities",
    summary: "Offer a small, orderly choice of activities that Sylvie can start and restore independently.",
    steps: ["Prepare only a few suitable choices.", "Let Sylvie choose one without persuasion.", "Support her to return it before choosing another."],
    why: "Limited accessible choices support independence and concentration without overwhelming the visual field.",
    say: "\"These are today's choices. Which one calls to you?\"",
    caution: "Keep Elias's access and each activity's small-part safety in mind."
  },
  {
    id: "interest-led-mini-project",
    title: "Follow one fascination",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm", "outside"],
    minutes: 30,
    where: "Where the interest leads",
    setup: "Book, drawing tools, or making materials",
    summary: "Turn a current fascination into a small project across observing, reading, drawing, and making.",
    steps: ["Notice a genuine interest such as ants, stars, vehicles, or an animal.", "Ask what Sylvie wants to know or make.", "Choose one next exploration and let the project continue only while interest remains."],
    why: "Following a real fascination supports deep engagement, gifted learning, and a sense that questions matter.",
    say: "\"What are you wondering, and how could we investigate it?\"",
    caution: "Observe wildlife safely and let Sylvie end or change direction."
  },
  {
    id: "nature-curiosity-table",
    title: "Nature curiosity table",
    category: "Creative + curious",
    audience: ["sylvie"],
    needs: ["creative", "calm"],
    minutes: 15,
    where: "Protected low table",
    setup: "A few safe natural objects + magnifier",
    summary: "Arrange a small, beautiful invitation to inspect, sort, draw, or wonder about nature finds.",
    steps: ["Choose a few known safe objects.", "Add a magnifier, paper, or simple containers.", "Let Sylvie explore without a required outcome, then rotate the display later."],
    why: "An inviting environment can provoke close observation and child-led questions.",
    say: "\"What do you notice when you look closely?\"",
    caution: "Exclude unknown, sharp, toxic, fragile, or mouth-sized objects and keep the table protected from Elias."
  },
  {
    id: "child-eye-gallery",
    title: "Child-eye art gallery",
    category: "Everyday rhythm",
    needs: ["creative", "calm", "together"],
    minutes: 10,
    where: "Wall or display area",
    setup: "A few creations + removable display method",
    summary: "Let Sylvie choose, title, and display a creation at her eye level.",
    steps: ["Offer two or three creations to choose from.", "Ask for a title or one thing she wants remembered.", "Display it and revisit it later without judging quality."],
    why: "Displaying and revisiting work communicates that her ideas matter and encourages reflection.",
    say: "\"Which work belongs in the gallery, and what is its name?\""
  },
  {
    id: "poem-rhyme-recite",
    title: "Poem or rhyme of the week",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["calm", "creative", "quick"],
    minutes: 5,
    where: "Anywhere",
    setup: "Short rich rhyme, poem, or verse",
    summary: "Enjoy the same short piece through the week with rhythm, gestures, and playful recall.",
    steps: ["Choose a short piece with enjoyable language.", "Read or say it without demanding repetition.", "Add gestures or let Sylvie fill a familiar final word."],
    why: "Repeated rich language gently develops memory, attention, rhythm, and vocabulary.",
    say: "\"Shall we do the actions, or listen to the words today?\""
  },
  {
    id: "cleanup-transition-song",
    title: "One-song tidy transition",
    category: "Everyday rhythm",
    audience: ["sylvie", "elias", "together"],
    needs: ["transition", "together", "quick"],
    minutes: 5,
    where: "Anywhere",
    setup: "Familiar tidy or goodbye song",
    summary: "Use the same short song to signal a finish and pack away only what fits within it.",
    steps: ["Give a brief warning before the song.", "Sing while everyone restores a manageable number of items.", "When the song ends, point to what happens next."],
    why: "A repeated audio cue makes transitions more predictable and turns pack-up into shared action.",
    say: "\"When our song finishes, tidy is finished too.\""
  },
  {
    id: "weekly-told-story",
    title: "Tell the same story all week",
    category: "Creative + curious",
    needs: ["calm", "creative", "together"],
    minutes: 10,
    where: "Cosy spot",
    setup: "A familiar fairy tale, family story, or Bible story",
    summary: "Tell one short story from memory several times, letting Sylvie gradually join in.",
    steps: ["Choose a simple story with a clear sequence.", "Tell it with expressive gestures or a few props.", "Repeat on later days and invite Sylvie to add remembered parts."],
    why: "Repeated oral storytelling supports listening, sequencing, imagination, and confident participation.",
    say: "\"You know what happens next. Would you like to tell that part?\""
  },
  {
    id: "watercolour-wonder",
    title: "Watercolour wonder",
    category: "Creative + curious",
    audience: ["sylvie"],
    needs: ["creative", "calm"],
    minutes: 20,
    where: "Protected table",
    setup: "Watercolour paint + thick paper",
    summary: "Explore water, colour, and blending without needing to paint a recognisable picture.",
    steps: ["Offer a small palette and plenty of space.", "Notice what water and colours do together.", "Stop while the process is still enjoyable and leave the work to dry."],
    why: "Process-focused painting supports sensory exploration, calm attention, and creativity without perfection pressure.",
    say: "\"What is the colour doing when it meets the water?\"",
    caution: "Use non-toxic materials and supervise water and paint."
  },
  {
    id: "modelling-material-story",
    title: "Modelling-material story",
    category: "Creative + curious",
    audience: ["sylvie"],
    needs: ["creative", "calm"],
    minutes: 15,
    where: "Table",
    setup: "Approved clay, dough, or modelling material",
    summary: "Shape one object or character, then tell the tiny story it belongs to.",
    steps: ["Choose a comfortable modelling material.", "Roll, press, and shape freely.", "Name or tell one thing about the creation before restoring the space."],
    why: "Modelling strengthens hands and links sensory making with imagination and language.",
    say: "\"What did your hands make, and what does it do?\"",
    caution: "Use age-appropriate non-toxic materials with supervision."
  },
  {
    id: "family-map-places",
    title: "Map our important places",
    category: "Creative + curious",
    needs: ["creative", "calm", "together"],
    minutes: 15,
    where: "Table",
    setup: "Simple map or paper + photos",
    summary: "Locate home, family, church, daycare, or another meaningful place on a simple map.",
    steps: ["Choose only two or three meaningful places.", "Mark them with drawings, photos, or stickers.", "Tell one small story about travelling between them."],
    why: "Simple geography connects symbols and distance to real relationships and routines.",
    say: "\"Here is home. Which important place should we add next?\""
  },
  {
    id: "concept-song-chant",
    title: "Concept song or chant",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "move", "quick", "transition"],
    minutes: 5,
    where: "Anywhere",
    setup: "Familiar tune",
    summary: "Turn days, letters, counting, names, or a routine sequence into a playful chant.",
    steps: ["Choose one short concept or sequence.", "Fit it to a familiar rhythm with actions.", "Repeat only while it remains fun."],
    why: "Songs and chants use rhythm and movement to support memory and sequencing.",
    say: "\"Can this idea become a song?\""
  },
  {
    id: "two-step-mission",
    title: "Two-step mission",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["transition", "creative", "quick"],
    minutes: 5,
    where: "Anywhere",
    setup: "Two familiar actions",
    summary: "Make a playful mission from two clear actions, then celebrate the completed sequence.",
    steps: ["Give two concrete, achievable steps.", "Use a gesture or picture if helpful.", "Let Sylvie repeat the mission back or begin when ready."],
    why: "Short sequences gently build listening, working memory, and planning.",
    say: "\"Mission: put the book home, then bring your shoes.\""
  },
  {
    id: "world-music-movement",
    title: "World music movement sample",
    category: "Together",
    audience: ["sylvie", "elias", "together"],
    needs: ["move", "creative", "together"],
    minutes: 10,
    where: "Open room",
    setup: "One family-safe song from a different culture or style",
    summary: "Listen to a new piece of music and let bodies, scarves, or instruments respond.",
    steps: ["Choose one suitable piece.", "Notice its instruments, speed, or rhythm.", "Move freely, then compare it with a familiar song."],
    why: "Sampling diverse music offers broad exposure while supporting movement, listening, and curiosity.",
    say: "\"What does this music make your body imagine?\"",
    caution: "Keep volume comfortable and participation optional."
  },
  {
    id: "first-words-new-language",
    title: "First words in another language",
    category: "Creative + curious",
    needs: ["creative", "calm", "quick"],
    minutes: 5,
    where: "Anywhere",
    setup: "Choose 2 or 3 correctly sourced words",
    summary: "Learn a tiny set of useful words from another language through objects or actions.",
    steps: ["Choose two or three accurate words such as hello, thank you, or an animal.", "Pair each word with a picture, object, or gesture.", "Use them naturally once or twice without testing."],
    why: "Small language samples broaden curiosity about people and communication.",
    say: "\"Here is another way people say hello.\"",
    caution: "Use a reliable pronunciation source and present cultures respectfully."
  },
  {
    id: "constellation-night-look",
    title: "Constellation night look",
    category: "Outdoor",
    audience: ["sylvie", "together"],
    needs: ["outside", "calm", "creative"],
    minutes: 15,
    where: "Safe dark outdoor spot",
    setup: "Blanket + simple sky guide optional",
    summary: "Look for the moon, bright stars, shapes, and questions in the night sky.",
    steps: ["Choose a clear, comfortable evening and a safe viewing spot.", "Find the moon or one easy star pattern.", "Let Sylvie invent a shape or question before going inside."],
    why: "A brief night-sky experience can spark wonder and a deeper interest-led project.",
    say: "\"What shape can you find, and what do you wonder about it?\"",
    caution: "Use close supervision, weather-appropriate clothing, and a safe familiar location."
  },
  {
    id: "what-if-building-test",
    title: "What-if building test",
    category: "Creative + curious",
    audience: ["sylvie"],
    needs: ["creative", "calm"],
    minutes: 15,
    where: "Protected building space",
    setup: "Blocks or construction materials",
    summary: "Ask one what-if question, build a prediction, and test what happens.",
    steps: ["Choose one question such as a wider base or heavier top.", "Let Sylvie predict and build.", "Test, notice, and change one part if she wants."],
    why: "What-if play develops hypothesis testing, resilience, and flexible problem-solving.",
    say: "\"What if this piece goes at the bottom? What do you predict?\"",
    caution: "Protect the build from sibling disruption and use age-appropriate pieces."
  },
  {
    id: "personal-social-story",
    title: "Make a personal social story",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["transition", "calm", "creative"],
    minutes: 15,
    where: "Table or sofa",
    setup: "Paper + drawings or family photos",
    summary: "Create a short, reassuring story about a real transition or tricky situation.",
    steps: ["Choose one situation and only a few steps.", "Use simple pictures and honest, supportive language.", "Read it during calm times before the situation happens."],
    why: "A personalised visual story uses Sylvie's language and pattern strengths to make change more predictable.",
    say: "\"Sometimes stopping feels sad. Mum and Dad help, and play can happen again later.\""
  },
  {
    id: "things-that-go-book",
    title: "Make a Things That Go book",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "together", "calm"],
    minutes: 25,
    where: "Home or neighbourhood",
    setup: "Photos or drawings + paper",
    summary: "Collect pictures of vehicles and let the children help name, sort, and describe them.",
    steps: ["Photograph or draw a few vehicles.", "Let Elias name or point while Sylvie dictates a fact, sound, or category.", "Assemble the pages and reread the family-made book."],
    why: "A child-led book extends a strong vehicle interest into language, classification, and shared work.",
    say: "\"What should this vehicle's page tell us?\""
  },
  {
    id: "themed-interest-week",
    title: "One-interest themed week",
    category: "Creative + curious",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm", "outside"],
    minutes: 30,
    where: "Across the week",
    setup: "Current interest + a few simple materials",
    summary: "Let one current passion gently appear across counting, art, stories, movement, and exploration.",
    steps: ["Choose a genuine current interest.", "Offer one or two related ideas each day, such as dinosaur counting, art, and a sandbox fossil dig.", "Stop or change theme when Sylvie's interest moves on."],
    why: "A themed week allows gifted depth while connecting one passion to many kinds of learning.",
    say: "\"What should we explore next about your favourite thing?\"",
    caution: "Follow interest rather than turning the theme into compulsory work."
  },
  {
    id: "kindness-service-project",
    title: "Tiny kindness service project",
    category: "Faith + values",
    audience: ["sylvie", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 25,
    where: "Home then community",
    setup: "Card, drawing, baking, or small helpful task",
    summary: "Make or do one simple thing to encourage a neighbour, friend, or family member.",
    steps: ["Choose a person and one manageable act of care.", "Make a card, help bake, or prepare the action together.", "Deliver it without requiring praise or a particular response."],
    why: "Simple service connects empathy and faith values with real loving action.",
    say: "\"Who could feel loved by something small we do today?\"",
    caution: "Adult manages food safety, privacy, transport, and delivery."
  },
  {
    id: "pre-sitting-sensory-reset",
    title: "Move before sitting",
    category: "Sensory diet",
    audience: ["sylvie"],
    needs: ["move", "transition", "quick"],
    minutes: 8,
    where: "Before car, church, meal, or appointment",
    setup: "Choose a familiar movement",
    summary: "Offer a familiar dose of jumping, pushing, carrying, or wall work before a sitting demand.",
    steps: ["Name the upcoming sitting time.", "Choose one familiar regulating movement.", "Finish with a drink, visual cue, or transition object."],
    why: "Meeting movement needs before sitting can make the next demand more manageable.",
    say: "\"Strong body first, then car seat.\"",
    caution: "Use only familiar, tolerated activities and follow OT guidance."
  },
  {
    id: "visual-timer-finish",
    title: "Visual timer finish",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["transition", "calm", "quick"],
    minutes: 3,
    where: "Anywhere",
    setup: "Visual or sand timer",
    summary: "Show time passing, give one brief warning, and protect a final action before finishing.",
    steps: ["Set a short visible timer and name what follows.", "Give one brief warning near the end.", "Offer a final action, photograph, or safe stopping point, then follow through."],
    why: "Visible time and a protected ending make transitions less sudden and more trustworthy.",
    say: "\"When the sand is finished, one last piece, then dinner.\""
  },
  {
    id: "morning-magnet-chart",
    title: "Morning magnet chart",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["transition", "calm"],
    minutes: 10,
    where: "Morning routine",
    setup: "Simple picture chart + movable marker",
    summary: "Move a marker through a short picture sequence for getting ready.",
    steps: ["Show only the essential morning steps.", "Let Sylvie move the marker after each step.", "Keep language light and celebrate reaching the final picture."],
    why: "A movable visual sequence gives control, reduces repeated instructions, and builds planning.",
    say: "\"Show me where we are, and what picture comes next?\""
  },
  {
    id: "transition-object-bridge",
    title: "Transition object bridge",
    category: "Everyday rhythm",
    audience: ["sylvie"],
    needs: ["transition", "calm", "quick"],
    minutes: 3,
    where: "Between places",
    setup: "One familiar safe object",
    summary: "Let one small familiar object travel with Sylvie between home and the next place.",
    steps: ["Choose a safe object and explain where it may travel.", "Let it accompany the transition.", "Give it a predictable parking place on arrival."],
    why: "A familiar bridge can carry continuity into an uncertain place.",
    say: "\"Bear can travel with you, then Bear parks in this pocket.\"",
    caution: "Confirm the destination allows the item and avoid irreplaceable or unsafe objects."
  },
  {
    id: "special-goodbye-ritual",
    title: "Special goodbye ritual",
    category: "Everyday rhythm",
    audience: ["sylvie", "together"],
    needs: ["transition", "calm", "quick"],
    minutes: 2,
    where: "At separation",
    setup: "Choose a repeatable gesture",
    summary: "Use the same brief high-five, phrase, pocket kiss, or blessing at goodbye.",
    steps: ["Choose a ritual together during a calm time.", "Use it warmly and briefly at separation.", "Follow through with the expected goodbye rather than repeating it indefinitely."],
    why: "A short repeated ritual makes separation more predictable while preserving connection.",
    say: "\"Pocket kiss, special high-five, and I will come back after ___.\""
  },
  {
    id: "dragon-breaths",
    title: "Dragon breaths",
    category: "Calm + cosy",
    audience: ["sylvie", "elias", "together"],
    needs: ["calm", "together", "quick"],
    minutes: 3,
    where: "Calm practice time",
    setup: "No setup",
    summary: "Pretend to smell a flower and slowly breathe out dragon fire or blow out a candle.",
    steps: ["Practise only while calm.", "Take a gentle smell-in breath.", "Make the out-breath longer with pretend fire, candle, or bubbles."],
    why: "Imaginative breathing makes a regulation skill playful and easier to rehearse.",
    say: "\"Smell the flower, then slowly breathe out dragon fire.\"",
    caution: "Model rather than demand breathing during distress."
  },
  {
    id: "turtle-tense-relax",
    title: "Turtle tense and relax",
    category: "Calm + cosy",
    audience: ["sylvie", "together"],
    needs: ["calm", "transition"],
    minutes: 5,
    where: "Bed or quiet floor",
    setup: "No setup",
    summary: "Tighten and release a few body parts through a gentle turtle-shell story.",
    steps: ["Invite shoulders to hide like a turtle.", "Hold briefly, then let them soften.", "Repeat with hands or feet and finish with the whole body resting."],
    why: "Playful muscle tightening and releasing helps notice the difference between tension and relaxation.",
    say: "\"Turtle hides, turtle checks it is safe, turtle softens.\"",
    caution: "Keep effort gentle and stop if it feels uncomfortable."
  },
  {
    id: "calm-teddy-practice",
    title: "Help Teddy calm",
    category: "Calm + cosy",
    audience: ["sylvie", "together"],
    needs: ["calm", "creative", "together"],
    minutes: 8,
    where: "Calm play time",
    setup: "Stuffed toy + familiar calming choices",
    summary: "Pretend a toy has a big feeling and practise offering it two calming supports.",
    steps: ["Name one simple reason Teddy is upset.", "Offer two familiar supports.", "Let Sylvie choose and show Teddy, then notice Teddy settling."],
    why: "Helping a toy rehearses coping and empathy at a safe emotional distance.",
    say: "\"Teddy is upset. Should Teddy squeeze the pillow or sit with us?\""
  },
  {
    id: "milestone-celebration-poster",
    title: "Learning celebration poster",
    category: "Everyday rhythm",
    audience: ["sylvie", "together"],
    needs: ["calm", "creative", "together"],
    minutes: 10,
    where: "Wall or folder",
    setup: "Poster + stickers or drawings",
    summary: "Mark brave tries, new discoveries, and growing skills without using the chart for compliance.",
    steps: ["Notice a specific new try or skill.", "Add a dated sticker, drawing, or short note.", "Celebrate effort and revisit older growth occasionally."],
    why: "A learning-focused record helps everyone notice progress without turning behaviour into a reward economy.",
    say: "\"This star is for something new you tried, even though it was tricky.\""
  },
  {
    id: "monthly-mini-interview",
    title: "Monthly mini-interview",
    category: "Everyday rhythm",
    audience: ["sylvie", "together"],
    needs: ["calm", "creative", "together"],
    minutes: 8,
    where: "Cosy spot",
    setup: "Same 3 to 5 playful questions",
    summary: "Ask a few recurring questions and record or write down Sylvie's current answers.",
    steps: ["Use a small set of enjoyable questions.", "Let Sylvie skip, answer seriously, or be silly.", "Date the answers and revisit them months later."],
    why: "A light recurring interview celebrates changing language, interests, imagination, and identity.",
    say: "\"What is your favourite thing today, and what do you wonder about?\"",
    caution: "Keep it playful and private, never a performance test."
  },
  {
    id: "faith-story-wondering",
    title: "Faith story wondering",
    category: "Faith + values",
    audience: ["sylvie", "together"],
    needs: ["calm", "creative", "together"],
    minutes: 10,
    where: "Cosy spot",
    setup: "Bible story or simple family faith story",
    summary: "Share a faith story and wonder together rather than searching for one correct answer.",
    steps: ["Tell a short Bible or family faith story.", "Ask one open wondering question.", "Welcome Sylvie's answer and share a simple thought of your own."],
    why: "Wondering keeps faith connected to relationship, imagination, trust, and honest questions.",
    say: "\"I wonder what they felt, and what you would say to God?\""
  },
  {
    id: "catechism-call-response",
    title: "Faith call-and-response",
    category: "Faith + values",
    audience: ["sylvie", "together"],
    needs: ["calm", "quick", "together"],
    minutes: 3,
    where: "Anywhere",
    setup: "One simple age-appropriate question and answer",
    summary: "Enjoy one short faith question and answer as a playful repeated exchange.",
    steps: ["Choose one simple, loving question and answer.", "Say it with rhythm, gestures, or a tune.", "Let Sylvie join only as she wants."],
    why: "A tiny repeated exchange can make foundational faith language familiar without becoming a lesson.",
    say: "\"Who made you? God made me.\"",
    caution: "Keep it joyful and do not pressure for perfect memorisation."
  },
  {
    id: "sunday-candle-thanks",
    title: "Sunday candle thanks",
    category: "Faith + values",
    audience: ["sylvie", "elias", "together"],
    needs: ["calm", "transition", "together"],
    minutes: 8,
    where: "Family table",
    setup: "LED candle preferred",
    summary: "Mark a quiet family moment with light, gratitude, and a short prayer.",
    steps: ["Turn on an LED candle or let an adult safely light one.", "Each person offers a thank-you or quiet moment.", "Close with a familiar prayer and turn the light off."],
    why: "A simple weekly ritual ties faith to warmth, rest, and family connection.",
    say: "\"This light reminds us to slow down and give thanks.\"",
    caution: "Use an LED candle around young children; an adult must control any real flame."
  },
  {
    id: "car-ride-colour-hunt",
    title: "Car-ride colour hunt",
    category: "Creative + curious",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "transition", "quick"],
    minutes: 8,
    where: "Car ride",
    setup: "Choose one colour or category",
    summary: "Find coloured cars, signs, animals, or other visible categories during a necessary trip.",
    steps: ["Choose one simple thing to notice.", "Count, name, or compare finds without turning it into a competition.", "Stop the game before arrival and preview the next step."],
    why: "A micro-game adds language and attention to time already spent travelling.",
    say: "\"How many red cars can our team notice before the next turn?\"",
    caution: "The driver does not participate visually; all children remain safely restrained."
  },
  {
    id: "grocery-counting-helper",
    title: "Grocery counting helper",
    category: "Everyday rhythm",
    audience: ["sylvie", "together"],
    needs: ["creative", "transition", "quick"],
    minutes: 8,
    where: "Shop or unpacking area",
    setup: "One simple shopping job",
    summary: "Count a few items, find one category, or help place safe groceries in the trolley or pantry.",
    steps: ["Give one clear job, such as count five apples.", "Complete it together without adding more demands.", "Thank the helper and show what happens next."],
    why: "A real shopping job builds numeracy, independence, and participation in daily life.",
    say: "\"Our list needs five apples. Can you help count them?\"",
    caution: "Maintain close supervision and avoid glass, heavy, or unsafe items."
  },
  {
    id: "sock-match-helper",
    title: "Sock matching helper",
    category: "Everyday rhythm",
    audience: ["sylvie", "elias", "together"],
    needs: ["creative", "calm", "together"],
    minutes: 10,
    where: "Laundry area",
    setup: "Clean socks",
    summary: "Match socks by colour, pattern, size, or owner, then deliver them.",
    steps: ["Spread out a manageable number of clean socks.", "Find pairs or invent another sorting rule.", "Deliver matched pairs to their homes."],
    why: "A normal chore becomes sorting, pattern recognition, movement, and a shared family job.",
    say: "\"Which socks belong together, and how can you tell?\""
  },
  {
    id: "quiet-time-basket",
    title: "Quiet-time basket",
    category: "Calm + cosy",
    audience: ["sylvie"],
    needs: ["calm", "transition"],
    minutes: 30,
    where: "Quiet room or nook",
    setup: "Books + one or two quiet choices",
    summary: "Create a predictable daily rest period without requiring sleep.",
    steps: ["Prepare a small basket of quiet familiar choices.", "Use the same visual beginning and ending.", "Let Sylvie rest, look at books, or play quietly without extra demands."],
    why: "A reliable low-demand pause supports recovery and gives the whole family breathing room.",
    say: "\"Your body does not have to sleep. This is quiet-time until the timer finishes.\"",
    caution: "Use a safe supervised space and age-appropriate materials."
  }
].map((idea) => ({
  audience: ["sylvie", "together"],
  caution: "",
  source: "Home-Based Enrichment Program",
  ...idea
}));

ideas.push(...enrichmentIdeas, ...(window.MOMENT_IDEAS || []));

const existingMaterialHints = {
  "paper": ["paper", "draw", "bingo", "map", "poster", "menu", "card", "chart", "journal"],
  "pencils": ["pencil", "draw", "bingo", "map", "poster", "menu", "card", "chart", "journal"],
  "cardboard-boxes": ["cardboard", "box"],
  "sticky-tape": ["tape"],
  "lego-blocks": ["block", "magnetic tile", "build", "tower"],
  "toy-figures": ["toy", "animal", "doll", "figure", "puppet"],
  "play-kitchen": ["kitchen", "restaurant", "tea shop"],
  "blankets": ["blanket", "cubby", "nest"],
  "cushions": ["cushion", "pillow", "crash"],
  "books": ["book", "story", "reading"],
  "backyard": ["backyard", "outside", "outdoor", "garden"],
  "swing-set": ["swing"],
  "couches": ["couch", "lounge"],
  "dining-table": ["table"],
  "lots-of-toys": ["toy"]
};

const skillDefaults = {
  "Outdoor": ["exploration", "gross motor"],
  "Sensory diet": ["body awareness", "regulation"],
  "Together": ["connection", "social play"],
  "Creative + curious": ["creativity", "problem-solving"],
  "Faith + values": ["reflection", "connection"],
  "Calm + cosy": ["regulation", "rest"],
  "Everyday rhythm": ["independence", "sequencing"]
};

function inferStructuredIdeaFields(idea) {
  const text = [idea.title, idea.summary, idea.setup, idea.where, ...idea.steps].join(" ").toLowerCase();
  const materials = Object.entries(existingMaterialHints)
    .filter(([, hints]) => hints.some((hint) => text.includes(hint)))
    .map(([id]) => id)
    .slice(0, 6);
  const outdoor = ["outdoor", "outside", "backyard", "yard", "park", "garden", "playground", "trampoline", "swing"].some((word) => idea.where.toLowerCase().includes(word));
  const sensoryProfile = [
    ...(idea.needs.includes("calm") ? ["calm"] : []),
    ...(idea.needs.includes("move") || idea.needs.includes("outside") ? ["movement"] : []),
    ...(idea.category === "Sensory diet" ? ["heavyWork"] : []),
    ...(idea.category === "Creative + curious" || idea.needs.includes("creative") ? ["creative", "problemSolving"] : []),
    ...(idea.category === "Together" ? ["pretend"] : [])
  ];
  idea.materials = idea.materials || materials;
  idea.spaces = idea.spaces || [outdoor ? "outdoor" : "indoor"];
  idea.skills = idea.skills || skillDefaults[idea.category] || ["play"];
  idea.sensoryProfile = idea.sensoryProfile || [...new Set(sensoryProfile.length ? sensoryProfile : ["calm"])];
  idea.setupMinutes = idea.setupMinutes ?? (/no setup/i.test(idea.setup) ? 0 : 5);
  idea.cleanupMinutes = idea.cleanupMinutes ?? (idea.materials.length ? 3 : 1);
}

ideas.forEach(inferStructuredIdeaFields);

const categoryColors = {
  "Outdoor": "#91bd91",
  "Sensory diet": "#e0b64c",
  "Together": "#b797b7",
  "Creative + curious": "#9891c7",
  "Faith + values": "#c69a72",
  "Calm + cosy": "#88bec8",
  "Everyday rhythm": "#d49b76"
};

const needLabels = {
  outside: "get outside",
  move: "use big energy",
  calm: "calm and reconnect",
  together: "play together",
  transition: "smooth a transition",
  "after-screen": "move on from screens",
  anything: "try something"
};

const planIntroductions = {
  outside: "A fresh-air sequence with a clear landing. Skip or shorten any step that does not fit the moment.",
  move: "Start with strong body work, add playful movement, then help the body land.",
  calm: "Keep words light. Connection and body safety come before teaching or solving.",
  together: "Play alongside first, share one simple job, then finish before friction builds.",
  transition: "Make the next few steps visible, use the body, and end somewhere predictable.",
  "after-screen": "Move from the digital idea into water, body movement, and real-world play.",
  anything: "Three varied ideas from your notes. Use the order loosely and follow what is working."
};

const state = {
  need: "outside",
  category: "all",
  audience: "all",
  moment: "all",
  query: "",
  spotlightId: null,
  visibleCount: 12,
  saved: new Set(JSON.parse(localStorage.getItem("se-idea-saved") || "[]"))
};

const elements = {
  needChips: document.querySelector("#need-chips"),
  spotlight: document.querySelector("#idea-spotlight"),
  shuffleButton: document.querySelector("#shuffle-button"),
  planButton: document.querySelector("#plan-button"),
  planCalloutButton: document.querySelector("#plan-callout-button"),
  searchInput: document.querySelector("#search-input"),
  clearSearchButton: document.querySelector("#clear-search-button"),
  audienceFilter: document.querySelector("#audience-filter"),
  momentFilter: document.querySelector("#moment-filter"),
  categoryFilter: document.querySelector("#category-filter"),
  clearFiltersButton: document.querySelector("#clear-filters-button"),
  resultCount: document.querySelector("#result-count"),
  resultContext: document.querySelector("#result-context"),
  ideasList: document.querySelector("#ideas-list"),
  emptyState: document.querySelector("#empty-state"),
  loadMoreButton: document.querySelector("#load-more-button"),
  savedCount: document.querySelector("#saved-count"),
  savedTopButton: document.querySelector("#saved-top-button"),
  bottomNav: document.querySelector(".bottom-nav"),
  sheetBackdrop: document.querySelector("#sheet-backdrop"),
  planSheet: document.querySelector("#plan-sheet"),
  planIntro: document.querySelector("#plan-intro"),
  miniPlanList: document.querySelector("#mini-plan-list"),
  closePlanButton: document.querySelector("#close-plan-button"),
  closePlanDoneButton: document.querySelector("#close-plan-done-button"),
  newPlanButton: document.querySelector("#new-plan-button"),
  toast: document.querySelector("#toast"),
  installButton: document.querySelector("#install-button")
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function categoryStyle(category) {
  return `--category-color: ${categoryColors[category] || "#91bd91"}`;
}

function audienceLabel(audience) {
  if (audience.includes("together")) return "Together";
  if (audience.includes("sylvie") && audience.includes("elias")) return "Either child";
  if (audience.includes("sylvie")) return "Sylvie";
  return "Elias";
}

function durationLabel(minutes) {
  if (minutes <= 5) return `${minutes} min quick reset`;
  return `${minutes} min`;
}

function ideaSearchText(idea) {
  return [
    idea.title,
    idea.category,
    idea.summary,
    idea.where,
    idea.setup,
    idea.source,
    idea.minutes,
    ...idea.needs,
    ...idea.steps,
    ...idea.materials,
    ...idea.spaces,
    ...idea.skills,
    ...idea.sensoryProfile,
    idea.setupMinutes,
    idea.cleanupMinutes
  ].join(" ").toLowerCase();
}

function isIndoorIdea(idea) {
  const outdoorWords = ["outdoor", "outside", "backyard", "yard", "park", "garden", "playground", "neighbourhood", "street", "trampoline", "swing"];
  const location = idea.where.toLowerCase();
  return idea.category !== "Outdoor" && !idea.needs.includes("outside") && !outdoorWords.some((word) => location.includes(word));
}

function matchesMoment(idea) {
  const text = `${idea.title} ${idea.where} ${idea.setup} ${idea.summary}`.toLowerCase();
  const momentRules = {
    all: () => true,
    five: () => idea.minutes <= 5,
    "no-setup": () => idea.setupMinutes <= 1 || /no setup/.test(idea.setup.toLowerCase()),
    "before-dinner": () => isIndoorIdea(idea) && idea.needs.includes("transition") && (idea.needs.includes("move") || idea.category === "Everyday rhythm"),
    bedtime: () => idea.needs.includes("calm") && idea.needs.includes("transition") && (text.includes("bed") || text.includes("bath") || isIndoorIdea(idea)),
    rainy: () => isIndoorIdea(idea) && (idea.needs.includes("creative") || idea.needs.includes("together") || idea.category === "Calm + cosy"),
    "out-and-about": () => ["waiting", "cafe", "shop", "park", "neighbourhood", "car", "walk"].some((word) => text.includes(word))
  };
  return (momentRules[state.moment] || momentRules.all)();
}

function filteredIdeas() {
  const query = state.query.trim().toLowerCase();
  return ideas.filter((idea) => {
    const categoryMatch =
      state.category === "all" ||
      (state.category === "saved"
        ? state.saved.has(idea.id)
        : state.category === "inside"
          ? isIndoorIdea(idea)
          : idea.category === state.category);
    const audienceMatch = state.audience === "all" || idea.audience.includes(state.audience);
    const momentMatch = matchesMoment(idea);
    const queryMatch = !query || ideaSearchText(idea).includes(query);
    return categoryMatch && audienceMatch && momentMatch && queryMatch;
  });
}

function spotlightPool() {
  if (state.need === "anything") return ideas;
  const matches = ideas.filter((idea) => idea.needs.includes(state.need));
  return matches.length ? matches : ideas;
}

function randomItem(list, excludedIds = []) {
  const available = list.filter((item) => !excludedIds.includes(item.id));
  const pool = available.length ? available : list;
  return pool[Math.floor(Math.random() * pool.length)];
}

function pickSpotlight(forceNew = false) {
  const excluded = forceNew && state.spotlightId ? [state.spotlightId] : [];
  const chosen = randomItem(spotlightPool(), excluded);
  state.spotlightId = chosen.id;
  renderSpotlight();
}

function renderSpotlight() {
  const idea = ideas.find((item) => item.id === state.spotlightId) || spotlightPool()[0];
  if (!idea) return;
  state.spotlightId = idea.id;
  const saved = state.saved.has(idea.id);
  elements.spotlight.style = categoryStyle(idea.category);
  elements.spotlight.innerHTML = `
    <div class="spotlight-content">
      <div class="spotlight-top">
        <span class="category-label">${escapeHtml(idea.category)}</span>
        <button class="save-button ${saved ? "saved" : ""}" type="button" data-save="${escapeHtml(idea.id)}" aria-label="${saved ? "Remove from saved ideas" : "Save idea"}" aria-pressed="${saved}">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-3.6L6 21V4.8Z"/></svg>
        </button>
      </div>
      <h2>${escapeHtml(idea.title)}</h2>
      <p class="spotlight-summary">${escapeHtml(idea.summary)}</p>
      <div class="meta-row">
        <span class="meta-pill">${escapeHtml(durationLabel(idea.minutes))}</span>
        <span class="meta-pill">${escapeHtml(idea.where)}</span>
        <span class="meta-pill">${escapeHtml(audienceLabel(idea.audience))}</span>
      </div>
      <p class="prompt-line">${escapeHtml(idea.say)}</p>
      <button class="start-idea-button" type="button" data-start-idea="${escapeHtml(idea.id)}">Start this idea</button>
    </div>
  `;
}

function ideaCardHtml(idea) {
  const saved = state.saved.has(idea.id);
  const caution = idea.caution
    ? `<div class="caution-box"><strong>Keep in mind:</strong> ${escapeHtml(idea.caution)}</div>`
    : "";
  const source = idea.sourceUrl
    ? `<a class="source-pill source-link" href="${escapeHtml(idea.sourceUrl)}" target="_blank" rel="noopener noreferrer">Research: ${escapeHtml(idea.source)}</a>`
    : `<span class="source-pill">From: ${escapeHtml(idea.source)}</span>`;
  const materialNames = idea.materials.map((id) => window.STARTER_THINGS?.find((item) => item.id === id)?.name || id.replaceAll("-", " "));
  const structured = `
    <div class="structured-details">
      <div><strong>Setup</strong><span>${idea.setupMinutes} min</span></div>
      <div><strong>Reset</strong><span>${idea.cleanupMinutes} min</span></div>
      <div><strong>Skills</strong><span>${idea.skills.map(escapeHtml).join(", ")}</span></div>
      ${materialNames.length ? `<div><strong>Useful things</strong><span>${materialNames.map(escapeHtml).join(", ")}</span></div>` : ""}
    </div>
  `;
  return `
    <article class="idea-card" style="${categoryStyle(idea.category)}">
      <div class="card-top">
        <span class="category-label">${escapeHtml(idea.category)}</span>
      </div>
      <h3>${escapeHtml(idea.title)}</h3>
      <button class="save-button ${saved ? "saved" : ""}" type="button" data-save="${escapeHtml(idea.id)}" aria-label="${saved ? "Remove from saved ideas" : "Save idea"}" aria-pressed="${saved}">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-3.6L6 21V4.8Z"/></svg>
      </button>
      <p class="card-summary">${escapeHtml(idea.summary)}</p>
      <div class="meta-row">
        <span class="meta-pill">${escapeHtml(durationLabel(idea.minutes))}</span>
        <span class="meta-pill">${escapeHtml(idea.where)}</span>
        <span class="meta-pill">${escapeHtml(audienceLabel(idea.audience))}</span>
      </div>
      <button class="details-button" type="button" data-details="${escapeHtml(idea.id)}" aria-expanded="false">See how to do it</button>
      <div class="card-details" id="details-${escapeHtml(idea.id)}" hidden>
        <h4>Simple steps</h4>
        <ol>${idea.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
        <div class="why-box"><strong>Why it may help:</strong> ${escapeHtml(idea.why)}</div>
        <div class="say-box">${escapeHtml(idea.say)}</div>
        <button class="start-idea-button" type="button" data-start-idea="${escapeHtml(idea.id)}">Start guided play</button>
        ${structured}
        ${caution}
        <div class="source-row">${source}</div>
      </div>
    </article>
  `;
}

function renderList() {
  const matches = filteredIdeas();
  const visible = matches.slice(0, state.visibleCount);
  elements.ideasList.innerHTML = visible.map(ideaCardHtml).join("");
  elements.resultCount.textContent = `${matches.length} ${matches.length === 1 ? "idea" : "ideas"}`;

  const context = [];
  if (state.category === "saved") context.push("saved");
  else if (state.category !== "all") context.push(state.category.toLowerCase());
  if (state.audience !== "all") context.push(`for ${state.audience}`);
  if (state.moment !== "all") context.push(state.moment.replaceAll("-", " "));
  if (state.query) context.push(`matching "${state.query}"`);
  elements.resultContext.textContent = context.length ? context.join(" | ") : "from your notes";

  elements.emptyState.hidden = matches.length !== 0;
  elements.loadMoreButton.hidden = visible.length >= matches.length;
  elements.loadMoreButton.textContent = `Show more (${matches.length - visible.length} remaining)`;
}

function renderSavedCount() {
  elements.savedCount.textContent = state.saved.size;
}

function saveState() {
  localStorage.setItem("se-idea-saved", JSON.stringify([...state.saved]));
}

let toastTimer;
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 1800);
}

function toggleSaved(id) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
    showToast("Removed from saved ideas");
  } else {
    state.saved.add(id);
    showToast("Saved on this device");
  }
  saveState();
  renderSavedCount();
  renderSpotlight();
  renderList();
}

function setActiveButtons(container, dataName, value) {
  container.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset[dataName] === value);
  });
}

function setNeed(need) {
  state.need = need;
  setActiveButtons(elements.needChips, "need", need);
  pickSpotlight(true);
}

function setCategory(category) {
  state.category = category;
  state.visibleCount = 12;
  setActiveButtons(elements.categoryFilter, "category", category);
  renderList();
}

function setAudience(audience) {
  state.audience = audience;
  state.visibleCount = 12;
  setActiveButtons(elements.audienceFilter, "audience", audience);
  renderList();
}

function clearFilters() {
  state.category = "all";
  state.audience = "all";
  state.moment = "all";
  state.query = "";
  state.visibleCount = 12;
  elements.searchInput.value = "";
  elements.clearSearchButton.hidden = true;
  setActiveButtons(elements.categoryFilter, "category", "all");
  setActiveButtons(elements.audienceFilter, "audience", "all");
  setActiveButtons(elements.momentFilter, "moment", "all");
  renderList();
}

function chooseForStage(needs, excludedIds, preferredCategories = []) {
  let pool = ideas.filter((idea) =>
    needs.every((need) => idea.needs.includes(need)) &&
    !excludedIds.includes(idea.id)
  );
  if (preferredCategories.length) {
    const preferred = pool.filter((idea) => preferredCategories.includes(idea.category));
    if (preferred.length) pool = preferred;
  }
  if (!pool.length) {
    pool = ideas.filter((idea) => idea.needs.includes(needs[0]) && !excludedIds.includes(idea.id));
  }
  return randomItem(pool.length ? pool : ideas, excludedIds);
}

function makePlan() {
  const need = state.need;
  const stagesByNeed = {
    outside: [
      { label: "Start small", needs: ["outside", "quick"], categories: ["Outdoor", "Creative + curious"] },
      { label: "Use the body", needs: ["outside", "move"], categories: ["Outdoor"] },
      { label: "Land gently", needs: ["outside", "calm"], categories: ["Outdoor", "Calm + cosy"] }
    ],
    move: [
      { label: "Strong start", needs: ["move", "quick"], categories: ["Sensory diet"] },
      { label: "Main movement", needs: ["move"], categories: ["Outdoor", "Sensory diet", "Together"] },
      { label: "Help the body land", needs: ["calm"], categories: ["Sensory diet", "Calm + cosy"] }
    ],
    calm: [
      { label: "Connect first", needs: ["calm", "quick"], categories: ["Calm + cosy", "Sensory diet"] },
      { label: "Choose body support", needs: ["calm"], categories: ["Sensory diet"] },
      { label: "Quiet finish", needs: ["calm"], categories: ["Calm + cosy", "Everyday rhythm"] }
    ],
    together: [
      { label: "Play alongside", needs: ["together", "calm"], categories: ["Together", "Outdoor"] },
      { label: "Share one job", needs: ["together", "move"], categories: ["Together", "Outdoor"] },
      { label: "Finish connected", needs: ["together", "calm"], categories: ["Together", "Calm + cosy"] }
    ],
    transition: [
      { label: "Make it visible", needs: ["transition", "quick"], categories: ["Everyday rhythm"] },
      { label: "Move through it", needs: ["transition", "move"], categories: ["Sensory diet", "Outdoor"] },
      { label: "Predictable finish", needs: ["transition", "calm"], categories: ["Everyday rhythm", "Calm + cosy"] }
    ],
    "after-screen": [
      { label: "Close the screen", needs: ["after-screen", "transition"], categories: ["Everyday rhythm"] },
      { label: "Reconnect with body", needs: ["after-screen", "move"], categories: ["Outdoor", "Sensory diet", "Together"] },
      { label: "Take the idea outside", needs: ["after-screen", "outside"], categories: ["Outdoor", "Creative + curious"] }
    ],
    anything: [
      { label: "Start here", needs: ["quick"], categories: [] },
      { label: "Then try", needs: ["move"], categories: [] },
      { label: "Finish here", needs: ["calm"], categories: [] }
    ]
  };

  const excluded = [];
  const plan = stagesByNeed[need].map((stage) => {
    const selected = chooseForStage(stage.needs, excluded, stage.categories);
    excluded.push(selected.id);
    return { ...stage, idea: selected };
  });

  elements.planIntro.textContent = planIntroductions[need];
  elements.miniPlanList.innerHTML = plan.map((item, index) => `
    <li class="plan-item">
      <span class="plan-number">${index + 1}</span>
      <div>
        <small>${escapeHtml(item.label)} | ${escapeHtml(durationLabel(item.idea.minutes))}</small>
        <h3>${escapeHtml(item.idea.title)}</h3>
        <p>${escapeHtml(item.idea.summary)}</p>
        <small>${escapeHtml(item.idea.say)}</small>
        <button class="plan-start-button" type="button" data-start-idea="${escapeHtml(item.idea.id)}">Start this step</button>
      </div>
    </li>
  `).join("");
}

function openPlan() {
  makePlan();
  elements.sheetBackdrop.hidden = false;
  elements.planSheet.hidden = false;
  document.body.style.overflow = "hidden";
  elements.closePlanButton.focus();
}

function closePlan() {
  elements.sheetBackdrop.hidden = true;
  elements.planSheet.hidden = true;
  document.body.style.overflow = "";
  elements.planButton.focus();
}

elements.needChips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-need]");
  if (button) setNeed(button.dataset.need);
});

elements.shuffleButton.addEventListener("click", () => pickSpotlight(true));
elements.planButton.addEventListener("click", openPlan);
elements.planCalloutButton.addEventListener("click", openPlan);
elements.newPlanButton.addEventListener("click", makePlan);
elements.closePlanButton.addEventListener("click", closePlan);
elements.closePlanDoneButton.addEventListener("click", closePlan);
elements.sheetBackdrop.addEventListener("click", closePlan);

elements.spotlight.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) toggleSaved(saveButton.dataset.save);
});

elements.ideasList.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    toggleSaved(saveButton.dataset.save);
    return;
  }

  const detailsButton = event.target.closest("[data-details]");
  if (detailsButton) {
    const details = document.querySelector(`#details-${CSS.escape(detailsButton.dataset.details)}`);
    const expanded = detailsButton.getAttribute("aria-expanded") === "true";
    detailsButton.setAttribute("aria-expanded", String(!expanded));
    detailsButton.textContent = expanded ? "See how to do it" : "Hide details";
    details.hidden = expanded;
  }
});

elements.searchInput.addEventListener("input", () => {
  state.query = elements.searchInput.value;
  state.visibleCount = 12;
  elements.clearSearchButton.hidden = !state.query;
  renderList();
});

elements.clearSearchButton.addEventListener("click", () => {
  state.query = "";
  elements.searchInput.value = "";
  elements.clearSearchButton.hidden = true;
  elements.searchInput.focus();
  renderList();
});

elements.audienceFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-audience]");
  if (button) setAudience(button.dataset.audience);
});

elements.momentFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-moment]");
  if (!button) return;
  state.moment = button.dataset.moment;
  state.visibleCount = 12;
  setActiveButtons(elements.momentFilter, "moment", state.moment);
  renderList();
});

elements.categoryFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) setCategory(button.dataset.category);
});

elements.clearFiltersButton.addEventListener("click", clearFilters);
elements.loadMoreButton.addEventListener("click", () => {
  state.visibleCount += 12;
  renderList();
});

elements.savedTopButton.addEventListener("click", () => {
  setCategory("saved");
  document.querySelector("#explore").scrollIntoView({ behavior: "smooth" });
});

elements.bottomNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-nav]");
  if (!button) return;
  elements.bottomNav.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
  if (button.dataset.nav === "saved") {
    setCategory("saved");
    document.querySelector("#explore").scrollIntoView({ behavior: "smooth" });
  } else {
    document.querySelector(`#${button.dataset.nav}`).scrollIntoView({
      behavior: button.dataset.nav === "history" ? "instant" : "smooth"
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.planSheet.hidden) closePlan();
});

let deferredInstallPrompt;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  elements.installButton.hidden = false;
});

elements.installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  elements.installButton.hidden = true;
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

renderSavedCount();
pickSpotlight();
renderList();
