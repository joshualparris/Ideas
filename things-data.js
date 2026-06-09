window.STUFF_CATEGORIES = [
  "Art + drawing",
  "Making + building",
  "Pretend play",
  "Big body / outdoor",
  "Cosy / calming",
  "Screens / tech",
  "Furniture + spaces",
  "Special playtime"
];

window.STARTER_THINGS = [
  { id: "pencils", name: "pencils", category: "Art + drawing", place: "indoor", audience: "anyone", energy: "calm" },
  { id: "paper", name: "paper / drawing paper", category: "Art + drawing", place: "indoor", audience: "anyone", energy: "calm" },
  { id: "colouring-books", name: "colouring books", category: "Art + drawing", place: "indoor", audience: "anyone", energy: "calm" },
  { id: "sticky-tape", name: "sticky tape", category: "Making + building", place: "indoor", audience: "together", energy: "medium", safety: "Adult supervises tape use." },
  { id: "cardboard-boxes", name: "cardboard boxes", category: "Making + building", place: "both", audience: "together", energy: "medium", safety: "Adult handles cutting and removes staples." },
  { id: "makedo", name: "MakeDo cardboard tools", category: "Making + building", place: "both", audience: "together", energy: "medium", safety: "Use with close adult supervision." },
  { id: "lego-blocks", name: "LEGO / blocks", category: "Making + building", place: "indoor", audience: "together", energy: "calm", optional: true, safety: "Keep small pieces away from Elias." },
  { id: "play-kitchen", name: "play kitchen", category: "Pretend play", place: "indoor", audience: "together", energy: "medium" },
  { id: "toy-figures", name: "toy animals / dolls / figures", category: "Pretend play", place: "both", audience: "together", energy: "calm", safety: "Use age-appropriate figures around Elias." },
  { id: "lots-of-toys", name: "lots of toys", category: "Pretend play", place: "indoor", audience: "anyone", energy: "medium" },
  { id: "backyard", name: "backyard", category: "Big body / outdoor", place: "outdoor", audience: "together", energy: "big" },
  { id: "swing-set", name: "swing set", category: "Big body / outdoor", place: "outdoor", audience: "sylvie", energy: "big", safety: "Adult supervision required." },
  { id: "couches", name: "couches", category: "Furniture + spaces", place: "indoor", audience: "together", energy: "medium" },
  { id: "dining-table", name: "big dining room table", category: "Furniture + spaces", place: "indoor", audience: "together", energy: "calm" },
  { id: "cushions", name: "cushions", category: "Cosy / calming", place: "indoor", audience: "together", energy: "medium" },
  { id: "blankets", name: "blankets", category: "Cosy / calming", place: "indoor", audience: "anyone", energy: "calm" },
  { id: "books", name: "books", category: "Cosy / calming", place: "both", audience: "anyone", energy: "calm" },
  { id: "tv", name: "TV", category: "Screens / tech", place: "indoor", audience: "together", energy: "calm", notes: "Useful for bounded family movie rituals." },
  { id: "computers", name: "computers", category: "Screens / tech", place: "indoor", audience: "together", energy: "calm", notes: "Use mainly as inspiration for real-world pretend play." },
  { id: "special-playtime", name: "special playtime items for Sylvie", category: "Special playtime", place: "indoor", audience: "sylvie", energy: "calm", notes: "Keep protected from disruption." }
];

window.MATERIAL_IDEAS = [
  {
    id: "stuff-box-rocket", title: "Cardboard box rocket", category: "Making + building",
    materials: ["cardboard-boxes", "pencils", "paper", "sticky-tape"], spaces: ["indoor", "both"], skills: ["imagination", "planning", "drawing"],
    sensoryProfile: ["creative", "pretend", "problemSolving"], setupMinutes: 5, cleanupMinutes: 5, audience: ["sylvie", "together"], place: "both", energy: "medium", needs: ["creative", "special"],
    steps: ["Choose the box's top and doorway.", "Draw controls, windows, and a destination.", "Count down and act out one short mission."],
    script: "\"Let's turn this box into a rocket. Where should it fly?\"", safety: "Adult handles cutting and checks the box for staples or sharp edges.", reset: "Park the rocket or flatten it for recycling."
  },
  {
    id: "stuff-box-shop", title: "Cardboard box shop or cafe", category: "Pretend play",
    materials: ["cardboard-boxes", "paper", "pencils", "toy-figures"], spaces: ["indoor"], skills: ["social scripts", "counting", "imagination"],
    sensoryProfile: ["creative", "pretend"], setupMinutes: 8, cleanupMinutes: 5, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "medium", needs: ["creative", "connection"],
    steps: ["Turn the box into a counter.", "Draw a tiny menu or sign.", "Take short customer, cook, and delivery turns."],
    script: "\"What does our cafe sell, and who is our first customer?\"", safety: "Use large age-appropriate props.", reset: "Put the menu inside the box and return toys to their homes."
  },
  {
    id: "stuff-makedo-robot", title: "MakeDo robot helper", category: "Making + building",
    materials: ["cardboard-boxes", "makedo", "paper", "pencils"], spaces: ["indoor", "outdoor"], skills: ["engineering", "planning", "storytelling"],
    sensoryProfile: ["creative", "problemSolving"], setupMinutes: 10, cleanupMinutes: 8, audience: ["sylvie", "together"], place: "both", energy: "medium", needs: ["creative", "special"],
    steps: ["Choose two or three robot parts.", "Join them with MakeDo tools.", "Name one important job for the robot."],
    script: "\"What job does our robot do, and what part does it need?\"", safety: "Close adult supervision with MakeDo tools and all joins.", reset: "Save the robot in a protected spot or separate pieces for reuse."
  },
  {
    id: "stuff-makedo-house", title: "MakeDo house with a working door", category: "Making + building",
    materials: ["cardboard-boxes", "makedo", "toy-figures"], spaces: ["indoor", "outdoor"], skills: ["engineering", "spatial reasoning", "pretend play"],
    sensoryProfile: ["creative", "pretend", "problemSolving"], setupMinutes: 10, cleanupMinutes: 8, audience: ["sylvie", "together"], place: "both", energy: "medium", needs: ["creative", "special"],
    steps: ["Choose who the house is for.", "Build one room and a door that opens.", "Test the visitor's path through the house."],
    script: "\"Who lives here, and how should their door work?\"", safety: "Adult supervises tools and handles difficult cuts.", reset: "Choose a safe display spot or take it apart together."
  },
  {
    id: "stuff-treasure-map", title: "Draw a treasure map", category: "Art + drawing",
    materials: ["paper", "pencils", "toy-figures"], spaces: ["indoor", "outdoor"], skills: ["mapping", "sequencing", "language"],
    sensoryProfile: ["creative", "pretend", "problemSolving"], setupMinutes: 3, cleanupMinutes: 2, audience: ["sylvie", "together"], place: "both", energy: "medium", needs: ["creative", "connection"],
    steps: ["Draw three familiar landmarks.", "Hide one safe treasure.", "Follow the map together and mark the finish."],
    script: "\"What three clues will lead us to the treasure?\"", safety: "Use safe accessible hiding places.", reset: "Return the treasure and keep or recycle the map."
  },
  {
    id: "stuff-giant-poster", title: "Giant table poster", category: "Art + drawing",
    materials: ["paper", "pencils", "dining-table"], spaces: ["indoor"], skills: ["drawing", "shared planning", "fine motor"],
    sensoryProfile: ["creative", "calm"], setupMinutes: 4, cleanupMinutes: 3, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "calm", needs: ["creative", "connection", "calm"],
    steps: ["Tape or place large paper across the table.", "Give each person a protected drawing zone.", "Connect the zones with one shared road, river, or pattern."],
    script: "\"Your part is safe. Should one road connect our pictures?\"", safety: "Supervise pencils and tape around Elias.", reset: "Photograph, fold, or recycle the poster and clear the table."
  },
  {
    id: "stuff-blanket-cubby", title: "Blanket cubby on the couches", category: "Cosy / calming",
    materials: ["blankets", "couches", "cushions", "books"], spaces: ["indoor"], skills: ["planning", "imagination", "connection"],
    sensoryProfile: ["calm", "pretend"], setupMinutes: 6, cleanupMinutes: 5, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "calm", needs: ["calm", "connection", "special"],
    steps: ["Drape blankets low with open exits.", "Add cushions and one or two books.", "Choose whether the cubby is shared or protected quiet space."],
    script: "\"Should this be a story cubby or a quiet nest?\"", safety: "Keep airflow and exits clear; do not create climbing hazards.", reset: "Fold blankets and return cushions together."
  },
  {
    id: "stuff-kitchen-restaurant", title: "Play kitchen restaurant", category: "Pretend play",
    materials: ["play-kitchen", "paper", "pencils", "toy-figures"], spaces: ["indoor"], skills: ["social scripts", "sequencing", "counting"],
    sensoryProfile: ["pretend", "creative"], setupMinutes: 5, cleanupMinutes: 5, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "medium", needs: ["creative", "connection"],
    steps: ["Draw a short menu.", "Choose cook, customer, and delivery jobs.", "Serve one meal, swap once, and close the restaurant."],
    script: "\"What is today's special, and what job can Elias do?\"", safety: "Use age-appropriate play food and props.", reset: "Say the restaurant is closed and return food to the kitchen."
  },
  {
    id: "stuff-toy-picnic", title: "Toy picnic on the dining table", category: "Pretend play",
    materials: ["dining-table", "toy-figures", "paper"], spaces: ["indoor"], skills: ["imagination", "sharing", "social language"],
    sensoryProfile: ["pretend", "calm"], setupMinutes: 4, cleanupMinutes: 4, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "calm", needs: ["connection", "calm"],
    steps: ["Invite a few toys and make paper placemats.", "Serve pretend food or tell each guest's favourite thing.", "End with a goodbye for every guest."],
    script: "\"Who is invited, and where should everyone sit?\"", safety: "Use stable chairs and age-appropriate toys.", reset: "Guests go home and placemats go into recycling or the play box."
  },
  {
    id: "stuff-backyard-course", title: "Backyard obstacle course", category: "Big body / outdoor",
    materials: ["backyard", "cushions", "cardboard-boxes"], spaces: ["outdoor"], skills: ["motor planning", "balance", "sequencing"],
    sensoryProfile: ["movement", "heavyWork", "problemSolving"], setupMinutes: 8, cleanupMinutes: 6, audience: ["sylvie", "elias", "together"], place: "outdoor", energy: "big", needs: ["big", "outside", "after-screen"],
    steps: ["Choose three safe stations.", "Name the route: around, under, push, and finish.", "Run it a few times, then redesign one station."],
    script: "\"What should our bodies do at each station?\"", safety: "Adult checks every station and keeps landings low and clear.", reset: "Carry every course piece back to its home."
  },
  {
    id: "stuff-swing-rescue", title: "Swing set rescue mission", category: "Big body / outdoor",
    materials: ["swing-set", "toy-figures", "backyard"], spaces: ["outdoor"], skills: ["imagination", "movement", "sequencing"],
    sensoryProfile: ["movement", "pretend"], setupMinutes: 3, cleanupMinutes: 2, audience: ["sylvie", "together"], place: "outdoor", energy: "big", needs: ["big", "outside", "special"],
    steps: ["Place a safe toy at a rescue point.", "Swing or move through a short mission.", "Land, rescue the toy, and return to base."],
    script: "\"The toy needs a rescue. What is our safe mission?\"", safety: "Direct adult supervision on the swing set.", reset: "Return the toy and finish with grounded feet and water."
  },
  {
    id: "stuff-train-tickets", title: "Paper tickets for a pretend train", category: "Pretend play",
    materials: ["paper", "pencils", "couches", "toy-figures"], spaces: ["indoor"], skills: ["drawing", "social scripts", "sequencing"],
    sensoryProfile: ["pretend", "creative"], setupMinutes: 5, cleanupMinutes: 3, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "medium", needs: ["creative", "connection"],
    steps: ["Line up couch seats or cushions.", "Draw tickets and choose destinations.", "Collect tickets, make one journey, and announce the final stop."],
    script: "\"Tickets please. Where is this train going?\"", safety: "Keep play on floor-level seats without climbing.", reset: "Train returns to the lounge and tickets go in a small play envelope."
  },
  {
    id: "stuff-office-play", title: "Computer-free office play", category: "Pretend play",
    materials: ["paper", "pencils", "dining-table", "computers"], spaces: ["indoor"], skills: ["mark-making", "social scripts", "imagination"],
    sensoryProfile: ["pretend", "calm", "creative"], setupMinutes: 3, cleanupMinutes: 3, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "calm", needs: ["creative", "calm"],
    steps: ["Set up paper beside a switched-off computer or pretend desk.", "Write lists, answer pretend messages, or stamp papers.", "Finish the last job and close the office."],
    script: "\"Our office has one important job. What is it?\"", safety: "Keep drinks and drawing tools away from real computers.", reset: "File one page and clear the desk."
  },
  {
    id: "stuff-movie-tickets", title: "Family movie tickets", category: "Screens / tech",
    materials: ["paper", "pencils", "tv", "couches", "blankets"], spaces: ["indoor"], skills: ["planning", "transition", "drawing"],
    sensoryProfile: ["calm", "creative"], setupMinutes: 5, cleanupMinutes: 3, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "calm", needs: ["calm", "connection", "after-screen"],
    steps: ["Draw tickets and choose the exact show or movie.", "Set up seats and name the finish before starting.", "Collect tickets, watch together, then move to a planned real-world activity."],
    script: "\"This ticket is for one show, then our bodies move again.\"", safety: "Choose age-appropriate content and follow family screen limits.", reset: "Turn off the TV, fold blankets, and place tickets in recycling."
  },
  {
    id: "stuff-draw-built", title: "Draw what we built", category: "Art + drawing",
    materials: ["pencils", "paper", "lego-blocks", "cardboard-boxes"], spaces: ["indoor"], skills: ["observation", "drawing", "reflection"],
    sensoryProfile: ["creative", "calm"], setupMinutes: 2, cleanupMinutes: 3, audience: ["sylvie", "together"], place: "indoor", energy: "calm", needs: ["creative", "calm", "transition"],
    steps: ["Place the finished build where it can be seen.", "Draw its shapes, important parts, or a map.", "Add a title and decide whether the build stays or packs away."],
    script: "\"Which part of your build must the drawing remember?\"", safety: "Keep small construction pieces away from Elias.", reset: "Store the drawing and restore or protect the build."
  },
  {
    id: "stuff-toy-bridge", title: "Build a bridge for toys", category: "Making + building",
    materials: ["lego-blocks", "cardboard-boxes", "sticky-tape", "toy-figures"], spaces: ["indoor", "outdoor"], skills: ["engineering", "testing", "problem-solving"],
    sensoryProfile: ["creative", "problemSolving"], setupMinutes: 5, cleanupMinutes: 5, audience: ["sylvie", "together"], place: "both", energy: "medium", needs: ["creative", "special"],
    steps: ["Choose which toy must cross and how wide the gap is.", "Build a bridge from available materials.", "Test, repair one part, and celebrate the crossing."],
    script: "\"What will make the bridge strong enough for this toy?\"", safety: "Adult supervises tape and small pieces.", reset: "Return toys and sort reusable building materials."
  },
  {
    id: "stuff-cardboard-car", title: "Make a cardboard car", category: "Making + building",
    materials: ["cardboard-boxes", "paper", "pencils", "sticky-tape"], spaces: ["indoor", "outdoor"], skills: ["design", "imagination", "movement"],
    sensoryProfile: ["creative", "pretend"], setupMinutes: 8, cleanupMinutes: 6, audience: ["sylvie", "elias", "together"], place: "both", energy: "medium", needs: ["creative", "special"],
    steps: ["Choose the front, doors, and dashboard.", "Draw wheels, controls, and a number plate.", "Drive one pretend route with stops."],
    script: "\"What does our car need before it can drive?\"", safety: "Adult handles cutting and checks the box before children sit in it.", reset: "Park the car safely or flatten it for recycling."
  },
  {
    id: "stuff-couch-boat", title: "Couch boat adventure", category: "Pretend play",
    materials: ["couches", "cushions", "blankets", "toy-figures"], spaces: ["indoor"], skills: ["imagination", "storytelling", "team play"],
    sensoryProfile: ["pretend", "calm"], setupMinutes: 4, cleanupMinutes: 4, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "medium", needs: ["connection", "creative"],
    steps: ["Declare the couch a boat and floor the water.", "Choose one destination and a job for each passenger.", "Arrive, unload, and finish the story."],
    script: "\"Where is our boat going, and what is each passenger's job?\"", safety: "No jumping from or climbing over couch backs.", reset: "Passengers go home and cushions return to the couch."
  },
  {
    id: "stuff-blanket-nest", title: "Blanket nest calm-down space", category: "Cosy / calming",
    materials: ["blankets", "cushions", "books", "couches"], spaces: ["indoor"], skills: ["self-awareness", "choice", "rest"],
    sensoryProfile: ["calm"], setupMinutes: 4, cleanupMinutes: 4, audience: ["sylvie", "anyone"], place: "indoor", energy: "calm", needs: ["calm", "transition", "after-screen"],
    steps: ["Make an open nest with a blanket and cushions.", "Offer only two quiet choices.", "Rest nearby or give space until the finish cue."],
    script: "\"Your nest is ready. Book or quiet cuddle?\"", safety: "Keep face, airflow, and exits clear.", reset: "Fold the blanket when the nest is finished."
  },
  {
    id: "stuff-animal-hospital", title: "Toy animal hospital", category: "Pretend play",
    materials: ["toy-figures", "paper", "pencils", "blankets"], spaces: ["indoor"], skills: ["empathy", "social scripts", "drawing"],
    sensoryProfile: ["pretend", "calm", "creative"], setupMinutes: 5, cleanupMinutes: 5, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "calm", needs: ["connection", "creative", "calm"],
    steps: ["Choose one animal patient and draw a simple care note.", "Wrap, feed, or comfort the patient.", "Show the patient feeling better and send them home."],
    script: "\"How is this animal feeling, and what gentle care could help?\"", safety: "Use age-appropriate toys and avoid wrapping children.", reset: "Patients go home and blankets are folded."
  },
  {
    id: "stuff-paper-crowns", title: "Paper crowns", category: "Art + drawing",
    materials: ["paper", "pencils", "sticky-tape"], spaces: ["indoor"], skills: ["drawing", "design", "pretend play"],
    sensoryProfile: ["creative", "pretend"], setupMinutes: 5, cleanupMinutes: 4, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "calm", needs: ["creative", "special"],
    steps: ["Draw symbols, colours, or patterns on paper strips.", "An adult fits and tapes the crowns.", "Name the characters and hold one tiny ceremony."],
    script: "\"What does your crown show about your character?\"", safety: "Adult fits crowns loosely and supervises tape.", reset: "Store crowns flat or recycle them."
  },
  {
    id: "stuff-cardboard-shield", title: "Cardboard shield", category: "Making + building",
    materials: ["cardboard-boxes", "paper", "pencils", "sticky-tape"], spaces: ["indoor", "outdoor"], skills: ["design", "imagination", "boundaries"],
    sensoryProfile: ["creative", "pretend"], setupMinutes: 8, cleanupMinutes: 5, audience: ["sylvie", "together"], place: "both", energy: "medium", needs: ["creative", "special"],
    steps: ["An adult prepares a safe shield shape.", "Decorate it with a symbol or pattern.", "Use it in a story about protecting and helping, not fighting."],
    script: "\"What does this shield protect, and how does the helper use it?\"", safety: "Adult handles cutting; no hitting, charging, or face contact.", reset: "Park the shield with dress-ups or recycle it."
  },
  {
    id: "stuff-tape-collage", title: "Sticky tape collage", category: "Art + drawing",
    materials: ["sticky-tape", "paper", "pencils"], spaces: ["indoor"], skills: ["fine motor", "design", "patterns"],
    sensoryProfile: ["creative", "calm"], setupMinutes: 4, cleanupMinutes: 5, audience: ["sylvie", "together"], place: "indoor", energy: "calm", needs: ["creative", "calm"],
    steps: ["Tear or cut manageable tape pieces with adult help.", "Arrange lines, shapes, and paper scraps.", "Draw around or over the tape design."],
    script: "\"Can tape become a road, pattern, or picture?\"", safety: "Adult supervises tape and cutting; keep tape away from skin and hair.", reset: "Return supplies and place scraps in the bin."
  },
  {
    id: "stuff-clue-hunt", title: "Paper clue treasure hunt", category: "Creative + curious",
    materials: ["paper", "pencils", "lots-of-toys"], spaces: ["indoor", "outdoor"], skills: ["sequencing", "problem-solving", "language"],
    sensoryProfile: ["creative", "problemSolving", "movement"], setupMinutes: 8, cleanupMinutes: 4, audience: ["sylvie", "elias", "together"], place: "both", energy: "medium", needs: ["creative", "connection", "outside"],
    steps: ["Draw or write three simple clues.", "Place them at safe familiar landmarks.", "Follow them to one toy treasure."],
    script: "\"What clue should lead to the next safe place?\"", safety: "Adult places clues away from climbing and unsafe spaces.", reset: "Collect every clue and return the treasure."
  },
  {
    id: "stuff-sort-toys-colour", title: "Sort toys by colour", category: "Creative + curious",
    materials: ["lots-of-toys", "cardboard-boxes"], spaces: ["indoor"], skills: ["sorting", "patterns", "flexible thinking"],
    sensoryProfile: ["calm", "problemSolving"], setupMinutes: 2, cleanupMinutes: 5, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "calm", needs: ["calm", "transition"],
    steps: ["Choose a manageable group of toys.", "Sort them into boxes by colour.", "Change one rule or use the sorting as pack-away."],
    script: "\"What rule should our sorting team use?\"", safety: "Use only age-appropriate toys around Elias.", reset: "Finish by returning sorted toys to storage."
  },
  {
    id: "stuff-kitchen-menu", title: "Draw a play kitchen menu", category: "Art + drawing",
    materials: ["play-kitchen", "paper", "pencils"], spaces: ["indoor"], skills: ["drawing", "language", "planning"],
    sensoryProfile: ["creative", "pretend", "calm"], setupMinutes: 3, cleanupMinutes: 3, audience: ["sylvie", "together"], place: "indoor", energy: "calm", needs: ["creative", "calm"],
    steps: ["Choose three pretend meals or drinks.", "Draw each one and add marks, names, or prices.", "Use the menu in one short restaurant round."],
    script: "\"What three things belong on today's menu?\"", safety: "Use age-appropriate drawing and play kitchen items.", reset: "Store the menu in the play kitchen."
  },
  {
    id: "stuff-puppet-theatre", title: "Cardboard puppet theatre", category: "Making + building",
    materials: ["cardboard-boxes", "toy-figures", "paper", "pencils", "blankets"], spaces: ["indoor"], skills: ["storytelling", "social language", "design"],
    sensoryProfile: ["creative", "pretend"], setupMinutes: 10, cleanupMinutes: 7, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "medium", needs: ["creative", "connection", "special"],
    steps: ["An adult prepares a safe theatre opening.", "Choose characters and a three-part story.", "Perform one short show and take a bow."],
    script: "\"Who comes on stage first, and what happens at the end?\"", safety: "Adult handles cutting; keep the theatre stable and low.", reset: "Characters go home and the theatre is stored or recycled."
  },
  {
    id: "stuff-special-choice-board", title: "Special playtime choice board", category: "Special playtime",
    materials: ["special-playtime", "paper", "pencils"], spaces: ["indoor"], skills: ["choice-making", "planning", "transition"],
    sensoryProfile: ["calm", "creative"], setupMinutes: 5, cleanupMinutes: 3, audience: ["sylvie"], place: "indoor", energy: "calm", needs: ["special", "calm", "transition"],
    steps: ["Draw two or three protected special-play choices.", "Let Sylvie point to one.", "Show the start and finish, then return the special item safely."],
    script: "\"These are today's protected choices. Which one is yours?\"", safety: "Adult protects the space and keeps unsuitable items away from Elias.", reset: "Return the special item to its protected home."
  },
  {
    id: "stuff-paper-town", title: "Build a road and town on paper", category: "Making + building",
    materials: ["paper", "pencils", "toy-figures", "lego-blocks"], spaces: ["indoor"], skills: ["mapping", "systems thinking", "imagination"],
    sensoryProfile: ["creative", "pretend", "problemSolving"], setupMinutes: 5, cleanupMinutes: 5, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "calm", needs: ["creative", "connection"],
    steps: ["Draw roads and three important places.", "Add block buildings or toy visitors.", "Give Elias a driving route and Sylvie the town-planning role."],
    script: "\"Which places need a road between them?\"", safety: "Keep small pieces away from Elias.", reset: "Park vehicles and fold or store the map."
  },
  {
    id: "stuff-calm-colouring", title: "Calm colouring beside Dad", category: "Cosy / calming",
    materials: ["colouring-books", "pencils", "dining-table"], spaces: ["indoor"], skills: ["connection", "fine motor", "rest"],
    sensoryProfile: ["calm", "creative"], setupMinutes: 2, cleanupMinutes: 2, audience: ["sylvie", "together"], place: "indoor", energy: "calm", needs: ["calm", "connection", "after-screen"],
    steps: ["Choose two pages or share one large page.", "Colour side by side without correcting or directing.", "Finish at a natural stopping point and notice one enjoyable detail."],
    script: "\"I'll colour beside you. We don't have to make it perfect.\"", safety: "Use age-appropriate drawing tools.", reset: "Return pencils and close the colouring books."
  },
  {
    id: "stuff-cushion-delivery", title: "Cushion delivery route", category: "Big body / outdoor",
    materials: ["cushions", "couches"], spaces: ["indoor"], skills: ["carrying", "sequencing", "teamwork"],
    sensoryProfile: ["heavyWork", "movement"], setupMinutes: 2, cleanupMinutes: 3, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "big", needs: ["big", "transition", "after-screen"],
    steps: ["Name two safe cushion delivery points.", "Carry or push one cushion at a time.", "Make the last delivery back to the couch."],
    script: "\"The cushions need strong delivery helpers. Where is the last stop?\"", safety: "Keep the route clear and do not throw cushions at people.", reset: "Every cushion finishes on the couch."
  },
  {
    id: "stuff-book-cubby-theatre", title: "Book-to-cubby story world", category: "Cosy / calming",
    materials: ["books", "blankets", "couches", "toy-figures"], spaces: ["indoor"], skills: ["storytelling", "imagination", "connection"],
    sensoryProfile: ["calm", "pretend"], setupMinutes: 5, cleanupMinutes: 5, audience: ["sylvie", "elias", "together"], place: "indoor", energy: "calm", needs: ["calm", "creative", "connection"],
    steps: ["Read one short book in a blanket cubby.", "Choose one scene to act out with toys.", "Give the story a clear final line."],
    script: "\"Which one part of the story should happen in our cubby?\"", safety: "Keep cubby exits and airflow clear.", reset: "Return the book, toys, and blankets."
  },
  {
    id: "stuff-backyard-cafe", title: "Backyard cardboard cafe", category: "Pretend play",
    materials: ["backyard", "cardboard-boxes", "paper", "pencils", "play-kitchen"], spaces: ["outdoor"], skills: ["pretend play", "drawing", "social scripts"],
    sensoryProfile: ["creative", "pretend", "movement"], setupMinutes: 8, cleanupMinutes: 7, audience: ["sylvie", "elias", "together"], place: "outdoor", energy: "medium", needs: ["outside", "creative", "connection"],
    steps: ["Set a cardboard counter outside.", "Draw a menu and gather safe pretend ingredients.", "Serve one round, then close and carry everything in."],
    script: "\"What outdoor special is the cafe serving?\"", safety: "Supervise outdoors and use only known safe materials.", reset: "Bring supplies inside and recycle damaged cardboard."
  }
];
