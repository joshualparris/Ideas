# Sylvie + Elias Ideas

A private, mobile-first activity picker built from the family notes, OT sensory diet, therapy observations, and app/game research.

## Use What We've Got

The **Our stuff** tab turns things already nearby into practical activity ideas:

1. Mark starter inventory items as available.
2. Add any custom household or play items.
3. Select 1-5 items under **Today we have...**
4. Choose the current need and tap **Find ideas**.

The builder ranks exact and close matches and shows:

- materials used
- child and place fit
- setup and reset time
- clear steps and a parent script
- supervision notes
- a **No shopping needed** badge when all materials are owned

## Guided Play And What Worked

Every regular and use-what-we-have idea now has a **Start this idea** action. Guided play mode provides:

- one parent script and clear checkable steps
- a gentle activity timer with a one-minute finishing cue
- supervision reminders
- a quick **Loved it**, **Worked well**, or **Not today** finish

The **Lately** tab keeps a small private history in that browser so reliable family wins can be repeated. It is not a clinical record and does not leave the device.

The idea shelf also includes quick-fit filters for five-minute ideas, no-setup ideas, before dinner, bedtime, rainy days, and out-and-about moments.

Starter inventory is maintained in `things-data.js`. It includes art supplies, cardboard/MakeDo, pretend-play resources, outdoor equipment, cosy items, technology, furniture, spaces, and protected special-play items.

## Privacy And Local Storage

There is no backend, account, analytics, tracking, or external AI service.

Custom inventory names, notes, safety reminders, ownership choices, today's selections, and saved favourites are stored only in that browser's `localStorage`. Do not enter private therapy notes, diagnoses, medical details, dates of birth, or other sensitive information.

## Open It On This Computer

Double-click `start-on-phone.ps1`, or run:

```powershell
.\start-on-phone.ps1
```

Then open the local address shown in the terminal.

## Open It On A Phone

1. Connect the phone and this computer to the same Wi-Fi.
2. Run `start-on-phone.ps1`.
3. Open the phone address shown in the terminal.
4. Use the browser's **Add to Home Screen** option if it offers one.

Keep the terminal open while using the app from another device. Favourites are stored separately on each device.

The local Wi-Fi address is plain HTTP, so some phone browsers will not allow offline installation. Hosting the same folder on an HTTPS service enables the full installable/offline behaviour.

## What Is Included

- 192 practical activity ideas
- 30 additional researched indoor and outdoor ideas with source links
- 67 distinct activities and rhythms from the Home-Based Enrichment Program
- Strong outdoor and sensory-diet coverage
- One-tap indoor and outdoor filters
- Dedicated Faith + values ideas
- Filters for Sylvie, Elias, and together play
- Quick ideas for energy, calming, transitions, and after screens
- Three-step mini-plans
- Search, details, safety notes, and locally saved favourites
- 33 structured use-what-we-have ideas
- Custom local-only inventory and a Today we have selector
- Matching by material, child, indoor/outdoor, energy, category, need, and setup time
- Guided play mode with checkable steps and a gentle timer
- Private activity outcomes and recent wins
- Six quick-fit real-life filters

## Project Structure

- `index.html` - semantic page structure
- `styles.css` - mobile-first styling
- `app.js` - original idea picker, filters, favourites, and mini-plans
- `things-data.js` - starter inventory and structured material ideas
- `moment-ideas.js` - additional low-prep ideas for common family moments
- `things.js` - local inventory, matching, and Idea Builder behaviour
- `play-mode.js` - guided play timer and private activity history
- `sw.js` - offline asset cache

## Check And Deploy

This is a static app with no package installation or build step.

```powershell
node --check app.js
node --check things-data.js
node --check moment-ideas.js
node --check things.js
node --check play-mode.js
vercel deploy . --prod -y
```

For a local browser check:

```powershell
python -m http.server 8787
```

## Research Sources

The expanded activity set draws primarily from:

- [Australian Government physical activity guidance for birth to 5 years](https://www.health.gov.au/topics/physical-activity-and-exercise/physical-activity-and-exercise-guidelines-for-all-australians/recommendations-for-infants-toddlers-and-preschoolers-birth-to-5-years)
- [Raising Children Network outdoor play](https://raisingchildren.net.au/toddlers/play-learning/outdoor-play/outdoor-play)
- [Raising Children Network preschooler play](https://raisingchildren.net.au/preschoolers/play-learning/getting-play-started/preschoolers-at-play)
- [ABC Kids Early Education Science Time](https://www.abc.net.au/abckids/programs/play-school-science-time)
- [ABC Kids Early Education Make and Create](https://www.abc.net.au/abckids/programs/play-school/play-school-s-make-and-create-extend-play-learn-/105965060)
- [NSW Department of Education play-based learning](https://education.nsw.gov.au/content/dam/main-education/teaching-and-learning/curriculum/early-learning/Play-based-learning.pdf)
- [U.S. National Park Service nature activities](https://www.nps.gov/jomu/learn/kidsyouth/online-activities-and-learning-for-kids.htm)
