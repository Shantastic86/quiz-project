# Coffee Personality Quiz — Requirements

## Overview
A fun personality quiz where visitors answer 6 pop-culture questions and get a coffee recommendation based on their dominant personality type.

## Personality → Coffee Pairings

| Personality | Coffee | Tagline |
|---|---|---|
| **Bold Adventurer** | Double Espresso | "You live for intensity" |
| **Sweet Enthusiast** | Caramel Latte | "Life's too short for bitter" |
| **Social Butterfly** | Cappuccino | "Coffee is better with company" |
| **Indulgent Treat** | Mocha with Whip | "Coffee is dessert" |

## Result Display

**Style: Show all percentages** (not just a single top result)

Example: "You're 50% Bold Adventurer, 30% Social Butterfly, 20% Sweet Enthusiast" — display all four personality percentages along with each one's coffee recommendation, not just the winner.

## Visual Style

**Style 1: Playful & Colorful**
- Animated multi-color gradient background (yellow, pink, green, blue)
- White rounded card (32px border radius) with soft drop shadow
- Fun rounded font for headings (Baloo 2), clean sans-serif for body (Nunito)
- Pink pill-shaped question counter label
- Answer options as light peach rounded buttons with emoji icons, slight scale/rotate hover effect
- Reference implementation: `style-preview-1.html` in this folder

## Icons

**Yes — icons/emoji included.** Every answer option should have a relevant emoji icon (see questions below).

## Images

**Skip for now.** No images in the initial build — can be added later during iteration.

## Quiz Questions

Each question has 4 answers, one mapped to each personality.

### Q1: Which Harry Potter house would you actually want to be sorted into?
- 🦁 Gryffindor — bold and daring → **Bold Adventurer**
- 🦡 Hufflepuff — warm and kind → **Sweet Enthusiast**
- 🦅 Ravenclaw — the friend who brings everyone together → **Social Butterfly**
- 🐍 Slytherin — ambitious and loves the finer things → **Indulgent Treat**

### Q2: Pick a show to binge this weekend:
- 👾 Stranger Things — high stakes, non-stop action → **Bold Adventurer**
- 🧁 The Great British Bake Off — cozy and sweet → **Sweet Enthusiast**
- 📺 Friends — the ultimate hangout show → **Social Butterfly**
- 🍽️ Chef's Table — decadent and luxurious → **Indulgent Treat**

### Q3: Choose a superpower:
- 💪 Flight — thrill of the sky → **Bold Adventurer**
- 💖 Healing touch — caring for others → **Sweet Enthusiast**
- 🧠 Telepathy — connect with anyone → **Social Butterfly**
- 🍰 Conjure any dessert instantly → **Indulgent Treat**

### Q4: Pick your favorite movie genre:
- 🎬 Action/Adventure → **Bold Adventurer**
- 💕 Romantic Comedy → **Sweet Enthusiast**
- 🎉 Ensemble Comedy (friend-group energy) → **Social Butterfly**
- 💎 Glamorous Heist Drama → **Indulgent Treat**

### Q5: If you were a Disney character, who would you be?
- 🌊 Moana — adventurous spirit → **Bold Adventurer**
- 🍯 Winnie the Pooh — sweet and gentle → **Sweet Enthusiast**
- 🎈 Mickey Mouse — everyone's friend → **Social Butterfly**
- 🐭 Remy from Ratatouille — lives for indulgent food → **Indulgent Treat**

### Q6: Pick a video game genre:
- 🎮 Action/Battle Royale → **Bold Adventurer**
- 🌾 Cozy Farming Sim → **Sweet Enthusiast**
- 🕹️ Multiplayer Party Game → **Social Butterfly**
- 🏰 Life Sim with a luxury mansion → **Indulgent Treat**

## Scoring Logic
- Each answer selection adds 1 point to its mapped personality.
- After all 6 questions, convert each personality's point total into a percentage of the total (6 questions = 6 total points).
- Display all 4 personalities with their percentage and coffee recommendation, sorted highest to lowest.
