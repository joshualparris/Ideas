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

const categoryColors = {
  "Outdoor": "#91bd91",
  "Sensory diet": "#e0b64c",
  "Together": "#b797b7",
  "Creative + curious": "#9891c7",
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
    ...idea.steps
  ].join(" ").toLowerCase();
}

function isIndoorIdea(idea) {
  const outdoorWords = ["outdoor", "outside", "backyard", "yard", "park", "garden", "playground", "neighbourhood", "street", "trampoline", "swing"];
  const location = idea.where.toLowerCase();
  return idea.category !== "Outdoor" && !idea.needs.includes("outside") && !outdoorWords.some((word) => location.includes(word));
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
    const queryMatch = !query || ideaSearchText(idea).includes(query);
    return categoryMatch && audienceMatch && queryMatch;
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
  state.query = "";
  state.visibleCount = 12;
  elements.searchInput.value = "";
  elements.clearSearchButton.hidden = true;
  setActiveButtons(elements.categoryFilter, "category", "all");
  setActiveButtons(elements.audienceFilter, "audience", "all");
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
    document.querySelector(`#${button.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
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
