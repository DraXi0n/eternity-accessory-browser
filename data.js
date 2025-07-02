const data = [
  {
    "name": "Force of Timber",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Force",
    "description": "Effects: Creates an aura around you that does various things to hurt enemies who are inside it. Turbobuffs hooks and makes bestiary/banner quotas fill up much more quickly. Gain one crit reroll on every attack after picking up any pickup (see pearlwood ench for more info). The aura does many things to deal damage from seedler projectiles to snowballs, and combined they have an okay-ish effect, but the pearlwood crit reroll only has an effect when your crit isn\u2019t 100% already.\n\nNOTE: This does NOT reroll failed cosmic core supercrit attempts, only regular crits.\n\nDon\u2019t forget the banner buff while equipped; if anything you need has a banner recipe, equip this while grinding, just like with Wood Enchantment."
  },
  {
    "name": "Wood Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Gives the player a discount based on bestiary completion, even in a vanity slot, and makes bestiary entries and banners complete twice as fast when equipped in a real slot. Free money and items (since banners can be turned into many items in this mod) and it\u2019s dirt cheap to craft. Has no direct combat utility, but the banner feature only works when equipped. The wizard enchantment boosted version lets you complete banners five times as fast, and you can craft banners into many useful items thanks to Mutant mod, so it\u2019s arguably better than a wizard-boosted platinum enchantment for farming when there\u2019s one specific item you need and it has a banner recipe, and you don't care about any other drops."
  },
  {
    "name": "Boreal Wood Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Makes the player shoot 3 snowballs on a periodic basis while attacking, dealing ranged damage: the damage is a fraction of the weapon\u2019s damage and scales with it up to a cap.\n\nAn easy to make enchantment with a reasonably good combat benefit that falls off on later pre-hardmode bosses. No need to worry about the exact cap/scaling (i don\u2019t have the up to date values anyway). Most effective with high damage per shot weapons such as the musket or grenades. Don't bother if your primary weapon is a minishark."
  },
  {
    "name": "Rich Mahogany Enchantment",
    "rating": "\u2753",
    "type": "Enchantment",
    "description": "Effects: Makes the player\u2019s grapple much faster, as well as giving 10% damage reduction and a thorns effect while grappling; the damage reduction also sticks around for a second after the grapple ends.\n\nThere are people who insist this is a mandatory god-level accessory, and there are also people like me who never use it (but I did use it a lot recently out of curiosity). The thing is, this makes you go FAST while grappling and its the ultimate grapple hook accessory, but if you don\u2019t use hooks for mobility, it\u2019s useless. Use this purely based on how much you like to throw your hooks around. After using it, I still can\u2019t tell how useful being able to fling myself at lightspeed was.\n\nHas a possibly desirable interaction with featherfall potions, since you can fling yourself upwards for immense airtime, but some people may find it annoying."
  },
  {
    "name": "Ebonwood Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Creates an aura around you. While enemies are in the aura, your Corruption meter builds up, and it lowers when enemies aren\u2019t in the aura. As the meter fills up, it grants you increasing amounts of flat damage and damage reduction, up to 5 extra damage on all hits and 5% damage reduction. This is essentially free damage on every hit and a small defensive boost, so long as you have charge in the meter: the more hits you make, the more powerful it is. Shines on rapid fire weapons and when using extra minions and attacks. Requires some upkeep to maintain the damage, but this gives you an actual reason to stay near the boss when using your minishark or whatever. \n\nThe Wizard version is particularly good on the Blade Staff\u2019s minions since the flat damage boost goes up to a maximum of 10, and flat damage is great on that."
  },
  {
    "name": "Shadewood Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Creates an aura around you. Any enemies hit inside the aura will spray Super Blood\u2122 projectiles upward on a short cooldown, which then fall back down and deal melee damage to any enemies they land on, which can include the original enemy.\n\nThe damage is good early on and the range is a little low. Good on big enemies and worms since the blood will actually hit them when it falls back down. Obviously synergizes well with a melee build, but falls off in effectiveness later on in pre-hardmode."
  },
  {
    "name": "Palm Wood Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants you an Active Skill: once bound to a key, you can summon a miniature palm tree sentry that shoots explosive seeds at enemies who are very close to it. Sentry can be repositioned by pressing the key again, and it does not use sentry or minion slots.\n\nThe damage is exceptionally good on very early pre-hardmode bosses, but it requires you to actively manage your sentry\u2019s placement to keep it near the boss. The high damage makes this extra effort very worth it. In hardmode, you can use this with Wizard Enchant to get one of the highest damage early hardmode accessory attacks in the game, as long as you keep the sentry near the boss."
  },
  {
    "name": "Pearlwood Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: After grabbing any pickup, whether it\u2019s a vanilla heart/star, a nebula booster, a bee enchantment flower, a necro enchantment grave, a cosmos moon booster, a fossil/spectre pickup, a wyvern feather orb, or anything similar, you spawn a damaging star that homes in on enemies. Additionally, you gain a buff for 5 seconds that gives all your attacks a second chance to crit if they failed to crit the first time. Finally, enemies sometimes spawn mana stars when hit.\n\nA powerful crit boosting enchantment. If you have 50% base crit chance, this effectively turns it into a 75% chance to crit. Gets worse at very low and very high crit chances, since rerolling a 1% or a 99% is pointless. The damaging star also has very good damage. Perfect enchantment if you are showered in pickups at all times due to the sheer volume of stars and uptime on the buff. Notably, it rerolls Spider Enchantment\u2019s summoner critical hits: Spider Enchantment\u2019s crits are weaker than normal, so this may not be as useful, but you will still get some benefit."
  },
  {
    "name": "Terra Force",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Force",
    "description": "Effects: Make melee weapons and whips somewhat bigger. Buffed tin crit effect. 60% less damage taken from debuffs. Shoot explosive lightning sometimes; parrying blocks 200 damage, maxes your tin crit charge, and shoots some explosive lightning. Additionally, picking up any item or pickup gives you 20% DR for a few seconds, you pick up things from a longer range, and it has the Iron Enchantment reforge effect. The size boost is very useful on melee weapons such as the Slime Slinging Slasher, but not useful at all on most weapons. The lightning and the explosions do good damage, and the parry works great with Heart of the Master\u2019s bonus parry effects. The crit boost can be very useful if you dont have anything else boosting your crit already, but it's otherwise not noteworthy. Synergizes well with any accessory that drops pickups like mana stars, nebula boosters, bee flowers, etc. In the DLC, there are many embiggenable melee weapons, some of which were already big to begin with such as the Holy Collider, or which are very powerful already such as the Murasama. This benefit isn\u2019t quite drastic enough to bump it up to five stars, but it is noteworthy."
  },
  {
    "name": "Copper Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Crit an enemy or attack a Wet-afflicted enemy to shoot lightning at them, which bounces to several nearby enemies and inflicts the Electrified debuff. The cooldown lowers a small amount when you hit a wet enemy or get a critical hit. A reasonably good enchantment for very early pre-hardmode single target damage, but it shines on worms, hordes, bosses with minions, and with rapid firing weapons against wet enemies. Has a powerful synergy with Tin Enchantment and Rain Enchantment since they allow you to crit and hit wet enemies more often, which lowers the cooldown. Try not to use against late hardmode bosses like Wall of Flesh since the damage might not be good enough to justify using it.\n\nIf you have the DLC installed, try using a minishark with flash rounds and luxor\u2019s gift with tin, copper, and rain enchantments for constant lightning. This is not the strongest build, nor will it carry you in late pre-hardmode, but it\u2019s fun and effective."
  },
  {
    "name": "Tin Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Sets your crit chance to 5%, and each crit, with a cooldown of 1 second, increases it by 5%, up to double your original crit chance or 15%, whichever is higher. Getting hit halves your current critical chance, to a minimum of 5%. If you never get hit, this is a five star enchantment since it will double your crit rate after a small period of building up. If you facetank the boss, this can annihilate your crit chance and actively make you deal less damage which would make this a one star accessory. For those in between, which is probably most people, this is just a reasonably good enchantment. Best used with rapid fire weapons since more critting = gain crit chance faster, so don\u2019t use this on anything with an absurdly low fire rate. Also best on bosses that hit you infrequently but have high damage.\n\nBeing at 5% crit is bad because your build rate will be slower, but if you\u2019re up to 50% crit and get hit and it goes down to 25%, you\u2019re not in that bad of a situation as long as you don\u2019t get chain hit several more times in the next few seconds.\n\nCompatible with Spider Enchantment if you ever want to do a weird summon crit build."
  },
  {
    "name": "Iron Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: While this is in your inventory or a vanity slot, you attract dropped items at a longer range, and the goblin tinkerer will always give you a great reforge, at the small downside of +50% cost. While equipped in a real accessory slot, the increased grab range also affects dropped hearts and other pickups like nebula boosters, and picking up anything from an item to a heart to a booster will give you 20% damage reduction for 5 seconds. Cheap to craft on its own and will save you a lot of time at the goblin tinkerer. Less useful in the DLC due to calamity\u2019s streamlined reforge system. Still, it\u2019s very good utility in general and has a low cost, so you should make this early on for its utility benefits.\n\nWhen in a real accessory slot though, this is a better worm scarf\u2026 as long as you are constantly picking things up. Wizard version gives +30% damage reduction, so wiz iron + pearlwood + bionomic + spectre could be an actual build."
  },
  {
    "name": "Lead Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Makes your attacks inflict Lead Poisoning, which deals 10 damage per second and can spread to other nearby enemies. Additionally, you take 40% less damage from all debuffs. Most powerful offensively when there are large numbers of targets for the debuff such as worm segments or minions, and most powerful defensively when enemies have powerful damaging debuffs. Eater of Worlds inflicts Cursed Flames and has lots of targets, making it the ideal choice for this enchantment. Plantera, Queen Bee, Eye of Cthulhu, and more bosses spread across progression are also good picks for this item. It\u2019s reasonably good on many things, but not spectacular on any of them."
  },
  {
    "name": "Silver Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants you an active skill: when used, you parry the next attack in a 0.33 second window. Parrying an attack reduces its damage by 100, and if you time your parry so that it\u2019s immediately before the hit, you also gain the Striking Moment buff. The parry has 1.67 second cooldown, and it cannot be used while attacking or during your weapon\u2019s use time cooldown. Right click (assuming skill is bound to right click) when attacked to take no damage; this accessory can make you immortal if you manage to parry everything, so long as nothing does more than 100 damage (or 200 for the wizard version). You can\u2019t parry an attack after you\u2019ve been hit, so you need to see it coming: you can always parry as a precaution if you think an attack will miss but aren\u2019t sure. Also, if you don\u2019t remember to parry, this accessory is useless, but I assume you\u2019ll only equip this if you bother to use it. This would be five stars if you parried all or most hits, but I assume most people won\u2019t manage to pull it off.\nStriking Moment only applies to one hit, so use it on a high damage per hit weapon (mythril sword perhaps). TIP FOR PARRYING: You can\u2019t parry during your weapon\u2019s use time cooldown, so wait for your weapon to vanish before right clicking."
  },
  {
    "name": "Tungsten Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Enlarges held melee weapons like swords and spears by 50%, and increases whip range by 20%. Attacks create shockwaves based on the original attack\u2019s damage every 2.5 seconds, but the shockwave does less damage on the original target. 50% sounds like a moderate boost, but it\u2019s much larger than it sounds, and it makes the difference between some melee weapons being impossible to use on bosses and those melee weapons actually being usable. Many melee weapons also have extremely high DPS, so being able to deal that without dying from contact damage is also great. The shockwave damage is a great side bonus and particularly good on crowds and worms, and is strongest with slow high damage weapons (such as Volcano, and even rarely on non-melee weapons such as Calamity\u2019s Eviscerator)."
  },
  {
    "name": "Ash Wood Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants immunity to Oiled, and On Fire no longer damages you (but it still nullifies life regen). If you\u2019re attacking while under the effect of virtually any debuff (aside from potion debuffs and water candle), you shoot out a fireball every half second that deals a portion of the weapon\u2019s damage. Finally, it halves the damage taken from touching lava. Reasonably useful for damaging anything in pre-hardmode, since you shoot fireballs when you\u2019re affected by virtually any debuff, including non-damaging debuffs, biome debuffs like crimson bleed, and even harmless debuffs like Wet. It does reasonable damage at no cost in many situations, including whenever it's raining (and Abominationn can control the weather, so go buy some items from him to cause rain)."
  },
  {
    "name": "Force of Earth",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Force",
    "description": "Effects: While equipped, you have a Charge bar that empties while attacking, and you regain it by not attacking for a few moments.The higher your bar is, the more life regen, damage reduction, and attack speed you have.You also inflict a powerful damage over time debuff while you have charge.Finally, at all times, you explode when hit and not attacking, and all your damaging debuffs deal 3.5x damage.\n\nLet go of left mouse sometimes to become stronger in every way: the buffs from having high charge are very powerful.Has an anti- synergy with Force of Cosmos which wants you to hold down the left mouse button.Most effective with high damage per shot weapons due to the earth poison, but useful on anything.If the boss is far away from you and hard to hit with your weapon(s), maybe letting go of the left mouse button isn\u2019t that much of a downside, so it's free charge regeneration.\n\nIn the Souls DLC with Calamity, Force of Earth is particularly good on stealth strike builds: despite reduced Mythril enchantment effectiveness with them, it\u2019s much easier to maintain high charge and constantly get the benefits."
  },
  {
    "name": "Obsidian Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Effects of Ash Wood enchantment, but additionally, you take no damage from lava, can move through it more easily, and become Lava Wet while in lava and for 10 seconds after leaving it. While Lava Wet, you fire ash wood fireballs even without being debuffed, and your attacks make explosions which also scale with your weapon\u2019s damage up to a cap. The most powerful enchantment for killing Wall of Flesh, and it\u2019s remarkably good on Skeletron and Queen Bee if you bother to put lava on the ground. Shooting fireballs plus explosions has great crowd control and single target damage potential, and it's easy to dip in lava. As far as I can tell, this is the strongest pre-hardmode damage enchantment. The damage cap is only relevant in hardmode, so don\u2019t worry about it in pre-hardmode. Still good with Wizard Enchantment in hardmode on high damage per shot weapons."
  },
  {
    "name": "Ancient Cobalt Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants an explosive ground jump that deals 100 base damage and inflicts oiled to hit enemies. The jump also grants +100% jump speed, which also accelerates wing flight and similar forms of vertical mobility. Also grants you the ability to hold down to fall faster. Remarkably powerful in every way: the explosion is great, oiled is great, being able to get out of the way of an attack is great, and being able to move up fast and farther is great. Fall speed is also anywhere from a small bonus perk to a fantastic bonus depending on who you ask. The jump speed is the equivalent of four frog legs, so it basically gives you the whole frog. Extremely powerful on most pre-hardmode bosses."
  },
  {
    "name": "Cobalt Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Effects of Ancient Cobalt, but with more damage and jump speed; airborne jumps now also become more powerful and make mini-explosions on a short cooldown.\n\nPowerful in every way Ancient Cobalt is, but sometimes using a jump this powerful will actively kill you such as during the destroyer coil attack or on any similar high precision attack, or if dodging an attack with a fast leap causes you to launch into another one. You may also fly a mile into the air and get caught by something like retinazer\u2019s aura/deathray combo if you\u2019re not careful. The airborne jumps also have a short range and less damage and are far worse offensively than the main jump. There are also more powerful accessories available now, so it's less good in comparison. However, this is still very powerful for anyone who wants to go up and down very fast."
  },
  {
    "name": "Palladium Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Hitting an enemy grants palladium regen for a short duration, and every 80 damage healed from anything spawns an homing orb that does damage to enemies. One of the simplest enchantments. The regeneration is alright, and the damage is a very small bonus. Buff is redundant with the palladium weapons, so don\u2019t use them together. Despite being weak, it's useful on any build, unless you\u2019re nohitting."
  },
  {
    "name": "Mythril Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Has a charge meter that fills up when not attacking. Attack speed is increased as the meter fills up, and attacking expends charge.\n\nBasically, let go of the mouse sometimes to get an attack speed boost. Most useful on mage, since this lets you regenerate mana without the use of a potion, preventing that dangerous mana sickness from building up. I never found this to be a huge DPS boost, but I haven\u2019t done the math on it. Note that this also gives you an excuse to stop attacking to cleanse all debuffs faster (Eternity mode feature), but I don\u2019t know how much that actually helps since it takes time to build up that debuff cleanse after you stop attacking. Wizard version is substantially stronger, but you could just be wizarding any other enchantment. Note that it stacks with Force of Earth\u2019s mythril-like effect as of 1.7.1.4."
  },
  {
    "name": "Orichalcum Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "(\u2b50\u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Petals shoot out when you hit an enemy, your attacks inflict orichalchum poison which does a base of 12 damage per second, and all debuff damage is multiplied by 2.5 (including orichalcum poison which brings it up to 30 dps).\n\nPhilosophers have long pondered the nature of knowledge itself, asking themselves whether its possible to truly know something. Debuff builds have answered this question once and for all by having their true DPS be virtually impossible to measure in practice using mods like BetterDamageCalc and DPSExtreme, proving that knowledge is impossible and that the only thing we know for sure is that we know nothing at all.\n\nNevermind on that epistemology rant, DPS Extreme measures your total debuff damage dealt now. They figured it out. They solved philosophy. It can\u2019t break down damage by individual debuffs, but the total DPS is probably what you wanted anyway.\n\nThis enchantment is bad if you don't inflict debuffs at all since orichalcum poison and petals are fine, but stacking every possible debuff makes it fantastic. Also there\u2019s a hidden nerf with the Daybreak debuff, as well as with shellfish-based debuffs in the Souls DLC with Calamity; the effectiveness of this enchantment is reduced on all debuffs when an enemy has any of these debuffs active. However, Calamity has many more damaging debuffs, so despite the shellfish nerf and the general effectiveness nerf, this is remarkably powerful in the DLC, especially if you use Sage Poison."
  },
  {
    "name": "Adamantite Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Increases fire rate the longer you attack, but only for weapons that directly shoot projectiles (so guns yes, swords no), and makes your shots more inaccurate as the effect increases. Caps at 30% fire rate and eventually adds significant inaccuracy.\n\nThe mirror dimension version of Mythril enchantment. Much more useful since you can hold the button as long as you want and maintain the bonus and never have to completely give up all damage like with Mythril enchantment, as long as you don\u2019t ever need to parry or recover mana or anything like that. The inaccuracy is the only thing that holds this accessory back, so stay close to the enemy or use it on a large target. The Wizard version increases the fire rate boost to 50%, which is pretty good.\n\nWatch out if you use this as a mage: extra fire rate means more mana potions used if you go that route, so on a weapon that already chugs mana, you\u2019ll consume it way faster and could wind up permanently hitting maximum mana sickness. Also useless on any weapon that doesn\u2019t meaningfully scale with fire rate, like some weapons with static iframes that cause some projectiles to be wasted."
  },
  {
    "name": "Titanium Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Buffed titanium armor set bonus: deals more damage, and when you hit max shards, you gain a damage reduction buff that gets stronger when you\u2019re closer to an enemy, ranging from 10-30% based on distance. After getting hit, you keep the buff for a few seconds and can\u2019t gain new shards for 15 seconds.\n\nPowerful on close range builds since the shard damage is surprisingly high and the damage reduction is straightforwardly great."
  },
  {
    "name": "Force of Nature",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Force",
    "description": "Effects: Grants you an aura that damages enemies in multiple ways and heals you in the process.You deal 1.15x damage to enemies in the aura, inflict frostburn and frostbite on hit, gain a large damage and critical hit buff and aura size buff from mushrooms which now heal 50 HP, and you have an umbrella on your head that reflects projectiles coming from above, breaking once it takes enough damage.\n\nLike Force of Timber, this accessory has an aura that kills enemies; it provides a multiplicative damage boost, but only to things in the aura.Unlike Timber though, there is also bonus healing, the mushroom buff, and the umbrella.The healing sometimes makes a difference, but it\u2019s nothing drastic.\n\nI don\u2019t recommend using the mushroom buff, since it\u2019s very easy to get effectively 100% crit already through other means, but you can use it if you want; Force of Spirit and Force of Will are going to be less effective if you do this, since they will have less healing to boost.\n\nThe umbrella is the most underrated part of this force: it\u2019s capable of reflecting multiple Abominationn projectiles before breaking, which can save you multiple hits.Add that onto an already good force and it\u2019s fantastic, but not quite five stars."
  },
  {
    "name": "Crimson Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: After getting hit, you get a buff that lasts 7 seconds. When the buff wears off, you heal 50% of the damage you took from that hit. If you get hit, the buff\u2019s countdown will reset. Does not affect attacks that deal less than 10 damage. Insanely strong enchantment for general survivability, if you only take occasional hits; if your hits come in large bursts one after another, this is not very good. More powerful in higher difficulties such as Masochist mode since it heals more in a mode where you want to get hit less, and unexpectedly viable post-moon lord as a filler defense accessory. A developer told me that Mutant nerfs the healing from this, so its not an auto-win against him: it still may be worth equipping against him though."
  },
  {
    "name": "Molten Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Gives you an aura; enemies inside it take damage, get the On Fire debuff, and you deal 1.2x damage to them while they\u2019re inside the aura. Short range damage enchantment; great for melee characters, but anyone can benefit from it. Usable at many points in the game, so long as getting close to the enemy is viable. Usable on everything from Queen Bee to Destroyer to Moon Lord to Queen Slime. The wizard version\u2019s larger range and 1.3x multiplier are especially good."
  },
  {
    "name": "Rain Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants immunity to Wet, gives effects of the inner tube, and summons an umbrella that can reflect projectiles from above. The umbrella can take 200 damage, and then it goes on a 15 second cooldown before reappearing. When there is an umbrella, you also have the effects of a featherfall potion. Your attacks also inflict the Wet debuff. Useful for bosses that occasionally hit you from above, but nobody ever crafts this thing since it\u2019s hard to make early on. By the time they craft it, they already killed King Slime, who\u2019s slime rain-themed attacks this would be perfect for. Still usable on Queen Bee and other bosses though. Featherfall effect may annoy some, but others will like it. The upsides remain useful even in hardmode, but by then you have stronger accessories."
  },
  {
    "name": "Snow Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Your attacks briefly inflict Frostburn, and you periodically shoot snowballs. When you stop attacking, you can build up multiple snowballs (up to 5) and shoot them all at once.\n\nThe snowball damage is fairly low: this is a boreal enchantment sidegrade with less maximum potential and with Frostburn tacked on. The best use of this is to melt Eater of Worlds with debuffs, since even a flare gun (which infinitely pierces) can apply the Frostburn debuff."
  },
  {
    "name": "Frost Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Same as snow enchantment, but inflicts Frostbite instead of Frostburn, and the five snowballs are replaced with ten icicles that fly faster. They also briefly immobilize nearly any enemy or boss on hit. The damage and debuff just aren\u2019t very good, but the ability to freeze bosses in place, however briefly, does barely earn this a second star. There\u2019s theoretical mythril synergy here but I doubt it\u2019s actually all that good."
  },
  {
    "name": "Jungle Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants a double jump that leaves damaging spores and the ability to do a short dash. A dash and a double jump are both useful, but your mileage may vary. Some people can\u2019t live without a dash, and other people don\u2019t find them that useful. I was tempted to give this a \u2753 ranking, but the dash is straightforwardly good enough and the jump is straightforwardly good enough and the spores are a nice enough bonus for this to get three stars."
  },
  {
    "name": "Chlorophyte Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Effects of Jungle Enchantment, but with more spore damage. Additionally, a ring of leaf crystals surround you and shoot lasers at nearby enemies. Flying using wings also causes spores to constantly spawn below you, damaging enemies. The dash and double jump aren\u2019t that great, but they\u2019re fine, especially for people who can\u2019t live without a dash. The biggest feature is the leaf crystal ring, but if you try to use it on plantera, their crystal rings will absorb most of its shots, and chlorophyte enchantment\u2019s damage isnt as good when the boss has more HP and your weapons are stronger. Golem\u2019s hands don\u2019t attract crystal lasers, but he\u2019s remarkably tanky. This makes Lifelight uniquely susceptible to this enchantment, since she has nothing to absorb hits and is less durable than later bosses despite her high damage reduction. Equip this whenever you fight Lifelight."
  },
  {
    "name": "Shroomite Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Your piercing projectiles spawn a cloud of damaging mushrooms on their first hit, with a short cooldown. Additionally, edible mushrooms grant you the Mushroom Power buff for 20 seconds when eaten and heal 50 hp instead of 15, granting +20% damage and critical strike chance for the duration.\n\nMushrooms still grant 30 seconds of potion sickness; healing-wise, this means they have the strength of a normal healing potion if you chug them as soon as their cooldown expires, but you can use them at a higher HP threshold without wasting healing. However, it also means you only have 66% uptime on the buff. Still, it\u2019s a very strong offensive buff, and the extra mushrooms on hit with piercing projectiles are reasonably powerful. This is the easiest way to hit 100% critical strike chance in late hardmode, alongside weapons like the Sniper Rifle (which may be overkill)\n\nCharm of Myths is normally a mediocre accessory in Eternity Mode, but this makes it much more powerful by increasing your Mushroom Power uptime. I\u2019m unsure this makes using Charm of Myths a good idea though, but hey, the synergy is there."
  },
  {
    "name": "Force of Life",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Force",
    "description": "Effects: Increases critical strike chance in general by 15%.Grants extremely powerful wings with a very long flight time.While flying, you leave behind flowers that when fully grown and touched, heal you, refresh your flight time, and grant the Ambrosia buff for 6 seconds which grants weak summoner crits, massive melee boosts, and massive defensive boosts.Enemies that deal contact damage to you also take 500% of it reflected back to themselves.Effects of Hive Pack.This is one of the core mobility options you have access to post- moon lord: it’s this, Flight Mastery Soul, or Force of Will for the most part.The flight statistics are slightly worse than Flight Mastery Soul and the flight isn’t infinite without touching flowers, but you get some other stuff thrown in, so I consider it to be better.The short lived flower buffs are good on any class, but are particularly good on summoner and melee characters.If you do use melee weapons that benefit from speed, such as Slime Slinging Slasher, this is even better, and if you have Cosmic Core, your minions can supercrit while you’re ambrosia’d.The only downside is that you won’t have infinite flight unless you pick up flowers, but Heart of the Master boosts flight time by 50 %, making it a good accessory to pair with this since it makes the flight effectively infinite.A single Instabridge in your sky also lets you occasionally land to refresh flight time.Finally, a mount can be used if you’re desperate to avoid falling and somehow run out of flight time.Unusually enough in the DLC, you tend to wind up with some wing speed buffs, which makes this basically just a Flight Mastery Soul with finite flight time."
  },
  {
    "name": "Pumpkin Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: When walking on the ground, you will grow pumpkins every 7.5 seconds. When fully grown, touching them will heal for 25 HP and spawn damaging embers that deal 15 damage per hit. Enemies that touch them will destroy the pumpkins and take damage. A very powerful enchantment for early game survivability, especially against grounded bosses; it also makes exploration less lethal. 25 HP every 5 seconds is very strong. With wizard, pumpkins will be created while flying and it raises to a 50 hp heal, making it great even in hardmode. However, the largest drawback is the enemies have a tendency to touch your pumpkins, destroying them and ruining all your potential healing. If you can avoid that, add a star to the rating.\n\nRemember that this enchantment is pre-boss if you have halloween mode enabled in the Mutant mod configs, and post-eye of cthulhu otherwise."
  },
  {
    "name": "Bee Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Gives you wings that are the strength of Fledgling Wings. While you\u2019re flying, spawn flowers that, when fully bloomed, spawn bees upon you or an enemy touching it; you also gain the honey buff when you touch them. Effects of Hive Pack. Fledgling wings are alright, but nothing special. The bee damage is okay, and the honey buff is nice if you aren\u2019t getting it from somewhere else. Hive Pack can massively increase summoner damage since it gives Hornet staff a massive damage increase, making this the best on summoners. \n\nIf you want wings or you\u2019re a summoner, this is the perfect enchantment for you, but make sure to combine it with any form of rocket boots or your flight time will be horrible."
  },
  {
    "name": "Spider Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Summon weapons gain the ability to critically hit, but the critical hit only multiplies the total damage by 1.5x instead of 2x. This extra critical hit damage is reduced further if you\u2019re holding a non-summon weapon. Finally, it grants a +10% critical hit chance that applies to all classes. Extra damage from summon critical hits is capped at 100.\n\nOnly useful on characters who use summon weapons, but despite the critical hits being weaker than normal, the damage boost can be extremely substantial with a high crit chance. There aren\u2019t other items that give summoner-specific crit chance, but anything that gives you a universal critical hit chance boost like Lucky reforges, certain armor, Shroomite enchantment, and so on will allow that universal boost to apply to your summoner critical hit chance. Late-hardmode, you can get a high enough critical hit chance to make the damage bonus truly massive through things like Shroomite Enchantment and just your accessories in general. However, you shouldn\u2019t use this post-moon lord due to the bonus crit damage cap.\n\nEven stronger in the DLC because Calamity summoner is very strong already and Aerospec Enchantment is a thing."
  },
  {
    "name": "Cactus Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: 8 needles spray out from you in a ring while attacking. Enemies hit by your needles will explode into more needles upon death. Each needle does 20 damage and hits one enemy at a time. Finally, it grants immunity to Eternity Mode cactus damage in both inventory and vanity slots. Despite being obtained very early, the damage is impressively high when close to your enemies due to the number and damage of needles. Don\u2019t expect this to be useful in mid to late pre-hardmode, but it will kill the Eye of Cthulhu with ease. Additionally, although cactus damage is easily blocked by defense, this prevents that minor annoyance."
  },
  {
    "name": "Turtle Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Enemies deal 100% of their contact damage to themselves when they deal contact damage to you. While standing still on a surface and not attacking, you will enter a shell. While in this shell, you gain 90% damage reduction, you will destroy incoming projectiles, and you will also do 10x thorns damage. The shell lasts at least 1 second and blocks up to 20 attacks. Effects of Cactus Enchantment.\n\nThis enchantment allows you to facetank bosses, but only part-time. Functions similarly to gold enchantment by letting you enter a shell that makes you almost invincible (almost is close enough to actually being invincible) while also letting you deal significant thorns damage in the process. Perfect if you want to open a fight by facetanking and then quickly switch this enchantment out for something else, or if there\u2019s one attack you don\u2019t like."
  },
  {
    "name": "Beetle Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants the offensive beetle armor set bonus, except with all-class damage boosts instead of melee damage boosts only (but the other part of it still provides melee speed); see the vanilla terraria wiki for details. When hit, you switch to the defensive beetle armor effect for 10 seconds after you take damage from the hit. Beetle buffs are capped at level 2. \n\nThe offensive boosts are excellent, but the defensive boosts are even better. 30% damage reduction against subsequent hits is incredibly good, and when Wizard boosted, this grants 45% damage reduction instead, making it powerful enough to be a good choice on post-moon lord builds. This enchantment is good from the moment you get it to even being an okay choice against Mutant, even with his damage reduction reduction debuff, since the Soul of Terraria wizard boosts this to have level 3 beetle buffs."
  },
  {
    "name": "Force of Spirit",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Force",
    "description": "Effects: Grants a tornado active skill that multiplies the damage of projectiles shot through it by 1.4x: the mouse can somewhat control the tornado. Healing potions restore vastly more health but take effect over time, dying will revive you with 200 HP and cleanse debuffs on a long cooldown, and whips gain the Tiki enchantment buffs.\n\nProvides straightforwardly high amounts of healing and damage, assuming you do things like use the tornado, use healing potions instead of mushrooms, and/or use whips. If you don\u2019t do any of these things, stick it in your magic storage. But if you do, your projectiles will become vastly more powerful and your potion healing will become incredibly good. Strongest on summoner, who uses whips the most often anyway, and also powerful against stationary enemies who can easily have a tornado placed between yourself and them.\n\nMore useful in the DLC thanks to stronger calamity healing potions, but not enough to bump it up to five stars."
  },
  {
    "name": "Fossil Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Every 40 damage you take in a single hit, you spawn one floating bone that can be picked up to heal for 20 health. If you reach 0 HP, you will revive with 50 HP and spawn several bones. The revive alone makes this a good accessory, since 50 HP + bones instead of dying means you\u2019ll have a lot of extra survivability. However, creating healing bones when hit is remarkably powerful, assuming you bother to pick them up; if you lose 80 hp from a big hit and then pick up two bones, you just healed half of that entire hit."
  },
  {
    "name": "Forbidden Enchantment",
    "rating": "\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants an active skill that summons a stationary damaging tornado when used. Any of your projectiles shot through the storm have their damage multiplied by 1.2x. Fly through the storm to refill your wing time. Tornado cannot be resummoned before you've touched the ground.\n\nThe tornado damage itself is low, but multiplicative damage is very powerful. However, it\u2019s only 1.2x, and it requires some effort to set up so whether or not you\u2019ll get any value out of this depends on whether or not you can be bothered to place your tornado. It\u2019s a lot of work and requires good positioning (and for you to touch the ground sometimes). Also, the multiplicative damage only applies to the first hit of piercing projectiles, and the tornado itself deals less damage than its armor counterpart. \n\nYou can bind the active skill to left or right click for convenient use, but you can't hold the button to continuously summon tornadoes since 1) there\u2019s a cooldown, 2) you can only do it on the ground, and 3) holding a button does not summon tornadoes continuously and you have to continuously press the button to do it.\n\nJust use any other damage boosting item. Wait until you have Force of Spirit to bother with tornadoes."
  },
  {
    "name": "Hallowed Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Healing potions restore 40% more, but take effect over ten seconds. Using a healing potion creates a shockwave that repels nearby enemy projectiles. (NOTE: reflected projectiles do not deal damage to enemies)\n\nThe bonus healing is okay, and being able to hit a button to repel projectiles is also okay, but they don\u2019t synergize well together. If you get hurt and need to heal, you aren\u2019t going to wait for more projectiles to come near you before you press the potion button, and any item that automatically uses healing potions will foil this. At the same time, if you don\u2019t deliberately reflect projectiles, that part of the enchantment is mostly useless, and all you\u2019re left with is okay healing. Delaying using a potion just means that your future potions won\u2019t be used as quickly. The healing over time also shouldn't be a downside if you\u2019re not immediately about to die (i have never been killed by a potion healing me too slowly)."
  },
  {
    "name": "Ancient Hallowed Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Summons a Terraprisma familiar that follows the direction of your mouse (caps at 15 blocks away from you, in a circle). Right clicking will slash the sword for 350 damage (scales with summon damage). Slashing a projectile will reflect it for 525 damage (scales with summon damage) on a 15 second cooldown (only affects projectiles that deal less than 150 damage).\n\nDoes good damage to Lifelight and Plantera when spammed as a summoner: using it with reflects in mind makes it good for defense, since near the end of the cooldown you can stop firing and wait for a projectile to come close to hitting you. Does not allow you to reflect daytime empress of light\u2019s projectiles or any similarly dangerous things due to the damage cap."
  },
  {
    "name": "Tiki Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Allows whips to benefit from melee speed bonuses again in Eternity Mode, whips have +20% range, whips scale with your strongest class instead (but still use melee speed and deal summon damage), and whipping any minion or projectile makes it deal 1.2x damage on its next hit.\n\nDo you use a whip? If so, this is almost mandatory since it makes your whips much more powerful. They will swing faster, buff your minions, hit everything from farther away, and if you want to pull off some kind of galaxy brained build where you use a whip as a mage, this is how you do it. If you don\u2019t ever use whips, this is useless. Tiki is most useful on those whips that whip faster after whipping, such as Dark Harvest, since they can give minions the bonus more often. This also makes whips better as an Apprentice Enchantment sidearm. Also, although the idea of using whips as a melee, ranged, or mage character is intriguing, I wouldn\u2019t bother; every time i tried to theorycraft a mage whip build, I went \u201cbut why dont i just go summoner and get just as much whip damage and also a billion minions\u201d."
  },
  {
    "name": "Spectre Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: When you take damage, you will spawn spirits, with the number of spirits increasing with the strength of the hit and healing 20 HP when picked up. If you reach 0 HP, you will revive with 100 HP, become an invincible ghost for a few seconds that can\u2019t attack, and spawn many spirits. Additionally, whenever you pick up a spirit, they shoot a projectile at the nearest enemy, dealing magic damage.\n\nThis is a direct upgrade to the already powerful Fossil Enchantment. The damage of hardmode enemies is higher, so this will net you multiple spirits per hit a lot of the time. The revive is also even better, and it even gives you more damage. The only drawback is that as a ghost, you gain infinite flight but only if you had a form of flight before dying, and you can still take fall damage if you don\u2019t have flight. This means on a mount build, you can fall out of the sky as a ghost and die in ghost form which\u2026 yeah. Watch out for that."
  },
  {
    "name": "Force of Death",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Force",
    "description": "Effects: Grants a super dash that cancels vertical momentum and can be angled diagonally and makes shadowflame projectiles. On a 4 second cooldown, your dash makes you invincible, does damage to enemies, and inflicts Marked for Death. Dashing releases shadowflame projectiles. Moving slowly increases projectile speed and critical hit chance, you create necro enchantment graves that can be picked up to spawn dungeon guardians, all your minions shoot scythes, and you have the effects of Apprentice Enchantment\u2019s support weapon.\n\nProvides many benefits, and none of them are incredible, and some might be useless, but there\u2019s a lot of them. The dash is the strongest benefit, since it can be used to dash through any attack and deal extra damage to bosses. In my opinion, even though the dash is good for people who like its mechanics and dont auto-disable all dashes when fighting post-moon lord bosses, it\u2019s one of the weaker forces."
  },
  {
    "name": "Shadow Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Two Shadow orbs orbit you, and attacking these shadow orbs will cause them to burst into homing shadow energy.\n\nIt\u2019s a decent enchantment focused on DPS, not the best, but it can work. It\u2019s also extremely easy to craft, because all of the materials are received from either EoW or BoC."
  },
  {
    "name": "Ancient Shadow Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: You have a chance to inflict darkness to enemies, enemies inflicted with darkness will occasionally shoot shadowflame tentacles at other enemies, and grants the effects of Shadow enchantment, but with 3 orbs instead of 2. Good crowd control, nice against bosses with multiple parts, like skeletron prime, plantera, the twins, and even golem. The damage isn\u2019t spectacular, and damage is all it does, but it\u2019s still very good."
  },
  {
    "name": "Necro Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Slain enemies drop a pile of bones, and touching a pile of bones spawns a mini dungeon guardian to attack your foes (prioritizing bosses), dealing damage equal to \u2153 of the slain enemies HP, with bosses dropping a pile of bones every 10% hp lost and dealing 3.33% of the boss\u2019s HP. Damage is capped at 10000.\n\nFantastic on Deviantt, as long as you bother to pick up the graves, but useless on Wall of Flesh since you can\u2019t go behind the boss to pick up the spawned graves. Additionally, bosses with minions such as Queen Slime and Plantera allow you to convert crowd control damage into some single target damage. The damage cap makes this weaker in late hardmode and beyond, but since it\u2019s a free 33.3% of the boss\u2019s health-bar eliminated, it\u2019s still great until late hardmode. Note that nothing can increase the guardian damage; all-class damage bonuses, critical hits, forbidden enchantment\u2019s tornadoes, rage and adrenaline in DLC, nothing increases it. This is for the best though, since it might result in an infinite loop if damage ever got high enough to spawn a new grave on hit."
  },
  {
    "name": "Spooky Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: All your minions shoot scythes at enemies sometimes. That\u2019s it. \nIt\u2019s decent damage. The damage isn\u2019t overwhelming or anything, and there\u2019s some formula around how often scythes can spawn based on total minions, but don\u2019t worry about it. Outclassed by Spider Enchantment, but it\u2019s fine if you ignore that Spider exists."
  },
  {
    "name": "Monk Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Gives you a dash that makes you immune to all damage and debuffs for half a second, and deals damage to enemies, but the dash has a cooldown double that of most dashes. Lightning aura sentries gain the ability to crit and they also strike faster. Good for iframing through an attack such as Retinazer\u2019s deathray or Lifelight\u2019s deathray or anything similar, as well as for iframing through contact damage. It also deals reasonable damage to any enemies you dash through. Lightning aura sentries are difficult to use, but the buff is fairly large, so you might as well place some sentries."
  },
  {
    "name": "Shinobi Infiltrator Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Gives you a dash that teleports you forward and through walls until there is an opening. Greatly enhances Lightning Aura effectiveness. Used for almost identical things as Monk Enchantment, but now you\u2019re using it on Empress of Light\u2019s projectiles and Moon Lord\u2019s lasers and Duke Fishron\u2019s dashes. Note that you have competition in the form of Pumpking\u2019s Cape and Betsy\u2019s Heart now, so you may prefer those instead, but this is still great."
  },
  {
    "name": "Apprentice Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: While attacking, fire your next closest weapon's projectile as support, at 1/7 the typical fire rate. Weapon still consumes mana, bullets, or any other resources it normally would. Buffs Flameburst sentries. The damage is lackluster when used purely for DPS, but it\u2019s good for support weapons that inflict things like Ichor or Betsy\u2019s Curse, or for whips if you want to give minions tag damage while doing something else. Of course, if you solely want to inflict one debuff very occasionally, you could always just switch weapons sometimes\u2026"
  },
  {
    "name": "Dark Artist Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: While attacking, fire your next closest weapon's projectile as support, at 1/5 the typical fire rate. Weapon still consumes mana, bullets, or any other resources it normally would. Additionally buffs Flameburst sentries and summons a special Flameburst minion above your head. Apprentice but better. The extra minion and higher fire rate pushes this into being a rather good enchantment."
  },
  {
    "name": "Ninja Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: If you\u2019re moving slowly, your projectile speed is significantly increased, and all your projectiles have extra crit chance based on their speed, up to 20%. Gives you a small damage boost most of the time, and makes it easier to hit with projectiles when moving slowly."
  },
  {
    "name": "Crystal Assassin Enchantment",
    "rating": "\u2753",
    "type": "Enchantment",
    "description": "Effects: Grants a powerful dash with unique vertical momentum cancelling, diagonal angling properties, and the ability to jump while dashing into the ground to gain a speed boost. Using this jump dash speed boost grants you the First Strike buff, which triples your next attack\u2019s damage and reduces enemy defense by 10 on hit. This is a very powerful though strange dash reminiscent of a Celeste wavedash. It\u2019s possible you\u2019ll have a lot of fun with this enchantment; recommended if you can\u2019t live without a dash and want a good dash in hardmode. It\u2019s hard to rank since it\u2019s very playstyle dependent.\n\nThe First Strike buff is hard to take advantage of with any rapid fire weapons, but it\u2019s decent with slow weapons and excellent with mythril melee weapons, since they gain extra damage while held and not attacking: combine with Striking Moment from Silver Enchantment for some funny hijinks."
  },
  {
    "name": "Force of Will",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "(\u2b50\u2b50\u2b50\u2b50 if used as a wing replacement) (also \u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Grants the Gold Shell invincibility active skill in its Wizard Enchantment form, successive attacks made without missing gain bonus damage, gladiator spirit follows you and grants bonus damage and defense while nearby, improves all healing sources by 25%, vastly improves mount mobility and grants the Valhalla enchantment dash, enemies drop more loot and coins are automatically sent to your piggy bank.\n\nForce of Will is an unusual force: the Valhalla Enchantment aspect can genuinely replace the need for wings, but the post-ML wing options are very strong. Still, it\u2019s great if you want a wingless build for variety, since it gives you Abominationn-viable mobility while also doing other things.\n\nThe Red Riding aspect is worth ignoring since it only adds roughly 150 damage to your shots at full charge while inside the banner, which sounds like a lot on a rapid fire weapon, but it doesn\u2019t suddenly make using the SDMG a great idea, and you have to rarely miss to get that much damage, and you can\u2019t use homing weapons, or anything with a large spread except at point blank. Gold Enchantment and the healing boost are far more valuable since Gold Enchantment lets you ignore your least favorite attack from Eridanus, Abominationn, or Mutant, and it and Stardust\u2019s time stop both recharge while the other is active, so there\u2019s some good synergy there.\n\nIn the DLC, you can regenerate The Sponge\u2019s shield and build adrenaline while gold shelled, so this is much more potent."
  },
  {
    "name": "Gold Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Makes your attacks inflict Midas, and makes all money immediately go into your piggy bank when picked up, even while Gold Enchantment is in your inventory. Additionally, while equipped in a real accessory slot, you gain the gold shell active skill which makes you immune to all damage for 5 seconds with a 60 second cooldown (cooldown applies when you hit the button, so it's 55 after it wears off). Press the active skill key again to cancel early.\n\nGood utility since it gives you more money and protects you from losing money on death, but money is already abundant in this mod, and the gold shell aspect is lackluster. It\u2019s best used on high damage bosses with difficult attacks, but this accessory is dead weight whenever it's not actively making you invincible. You can bind the active skill, unequip the accessory, and then re-equip it and quickly use the skill if you want, but then that extra step limits this item\u2019s use as a panic invincibility button unless you\u2019re using autopause or something.\n\nIt\u2019s more powerful on summoners since their minions can still attack while you\u2019re in the shell. Additionally, it\u2019s more powerful in the DLC since you build adrenaline while invincible, but it doesn\u2019t significantly impact the rating of this accessory."
  },
  {
    "name": "Platinum Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Gives a 20% chance for enemies (but not bosses) to roll their loot tables 5 times. Basically gives double loot. More money, more rare drops, more everything. Make this and use it when grinding anything, but since it has a tricky crafting recipe (use portable sundial and underground lumberjack to get the diamond squirrel) you may have trouble making this very early on."
  },
  {
    "name": "Gladiator Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "(\u2b50\u2b50\u2b50\u2b50 for wizard enchantment version, \u2b50\u2b50\u2b50\u2b50\u2b50 on destroyer) Effects: Spawns 4 javelins above any enemy you hit, dealing 20% attack damage each. Grants an active skill that summons a gladiator banner for 15 seconds, and which can only be re-summoned after it expires naturally. Being near the banner gives you knockback immunity and +8% damage and damage reduction, and buffs your spear rain. The spear rain isn\u2019t very good: it scales with attack damage, so you\u2019ll want to use a high damage weapon, but even then it doesn\u2019t do that much damage and gets eaten up by defense. The banner\u2019s stat buffs and knockback immunity are the best part, but they require that you stay in a small radius near the banner. Best used against the Cursed Coffin boss and not much else.\n\nThe Wizard Enchantment version is far stronger, however; the banner radius is enormous and the spear rain is drastically more powerful. If you can get the spears to hit your target, it will deal a lot of damage. Destroyer is easy to hit, so he\u2019s the obvious target for this. Use with Daedalus Stormbow (unholy arrows are better than holy now) for the funny rain build."
  },
  {
    "name": "Huntress Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Attacks deal an extra 3 flat damage and ignore 6 defense, and each successive attack ignores an additional 6 defense and deals 3 more damage. This stacks up to 10 times, but if you miss an attack, these bonuses get halved. Minions and homing projectiles will not activate or benefit from this effect. Really good with fast attacking, low damage, accurate projectiles. Don\u2019t miss or you\u2019ll lose your bonus. Damage buildup has a short cooldown, meaning it takes a while to max out your meter, which keeps this out of four stars."
  },
  {
    "name": "Red Riding Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Effects of Huntress Enchantment (at +5 damage and +10 armor pen this time), but once reaching 10 stacks you spawn a rain of arrows. The arrows default to venom arrows or whatever is in your inventory. Good in the same ways Huntress is. Just don\u2019t miss. Arrow rain is a fine bonus, so use whatever arrows you think would be strong with that (chlorophyte arrows are good if the boss is just above some solid blocks since they\u2019ll land near the boss and then bounce back up towards it, but this requires perfect positioning and a slow moving boss)"
  },
  {
    "name": "Squire Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Increases mount acceleration, top speed, and jump height. While mounted, you get 10 extra defense, fall damage resistance, and a fart jump. All healing sources will heal 10% more. Ballista pierces more targets and panics when you take damage. Enables a mount-heavy playstyle that boosts both your mobility and defense. Replaces boots, wings, and dash accessories completely, possibly allowing you to save on accessory slots when paired with a good mount. Unusable on any boss that inflicts Low Ground. Whether or not using a mount is a good idea is up to you, but this is extremely useful if you want to use a mount. If you do not want to use a mount, do not use this."
  },
  {
    "name": "Valhalla Knight Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Increases mount acceleration, top speed, and jump height. While mounted, you get 15 extra defense, fall damage resistance, a dash, and a fart jump. All healing sources will heal 15% more. Greatly enhances ballista effectiveness. Enables a mounted playstyle just like Squire Enchantment, but is far more powerful both due to its effects and due to the availability of convenient and easy to use infinite flying mounts such as the broom mount and the cute fishron. The valhalla dash is unusual in that it can dash up and down as well as left and right, but also it can dash diagonally if using the dash hotkey or if double tap is pressed on two keys at once with good timing. However, on any flying mount, the down dash doesn\u2019t work properly due to a vanilla physics bug, so you can only dash to the sides and upwards.\n\nNon-flying mounts lack this issue, and the dash is so fast and has such a short cooldown that any non-flying mount effectively becomes a fast yet imprecise flying mount that can dash downwards in an emergency: the Toy Tank mount is able to outmaneuver Duke Fishron with ease once you get used to the movement while also shooting bullets and rockets from the mount itself. This is an unconventional use for the accessory though, and infinite flying mounts are usually better.\n\nAs if that weren\u2019t good enough, have 15 goddamn defense and +15% healing from all non-regeneration sources, even Spectre enchantment spirits."
  },
  {
    "name": "Force of Cosmos",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Force",
    "description": "Effects: Grants the Time Stop active skill, improves your movement speed and acceleration, upgrades all enchantments equipped to their wizard forms, and constantly generates moons while attacking: stop attacking to unleash the moons which deal heavy damage and explode into stat-boosting boosters.\n\nAn extremely powerful force: the moon damage is small but significant, and the time stop active skill, minor mobility boost, and extremely powerful boosters are very nice. Finally, its ability to wizard boost any enchantment (even ones not comprising its components) can be unexpectedly useful."
  },
  {
    "name": "Wizard Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Strengthens the power of the enchantment equipped below it; the specific way this manifests varies from enchantment to enchantment. Massively boosts the power of almost every enchantment, but only one at a time: it would require its own guide to fully explore the possibilities, but good candidates for boosting in early hardmode include ebonwood enchantment (+10 flat damage on blade staff and any rapid fire weapon), meteor enchantment (more speed and HUGE meteor), copper enchantment (on destroyer), ninja enchantment (big crit chance), palm wood enchantment (immensely powerful sentry damage), obsidian enchantment (high damage in general), and gladiator enchantment (big spear rain damage and big banner radius with bigger stats).\n\nNew possibilities for wizarding unlock as you progress and gain new enchantments, and old damage enchantments become less viable as time goes on, so keep trying to figure out which enchantments make good wizard candidates.\n\nMake sure to place this one slot above an equipped enchantment, or it will do nothing. \u201cWizard Bionomic Cluster\u201d doesn\u2019t work."
  },
  {
    "name": "Meteor Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Has movement boosting effects similar to Magiluminescence, but also drops a giant meteor on an enemy\u2019s head every few seconds. The magiluminescence effect makes you accelerate and decelerate more quickly, and increases your top speed, giving you extremely precise control over your horizontal movement. Combine with tungsten enchantment to use close range melee weapons without taking boss contact damage with ease. Even without wizard enchantment, this is worth equipping in hardmode for the movement benefits alone. Some people use this as a boots replacement, but I find it to be most useful when used alongside them. The damage from the meteor is also very good on every pre-hardmode boss.\n\nNote that the magiluminescence speed boost does not apply while flying, so you\u2019ll want to remain grounded to get the most of the boost and acceleration."
  },
  {
    "name": "Solar Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Solar Enchantment - \u2b50\u2b50\u2b50  (\u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Allows you to build up charge while attacking, which grants up to 20% damage reduction: stop attacking to consume all charge and emit a solar shockwave that deals high amounts of melee damage, but has falloff on subsequent hits. The damage and damage reduction are both reasonably good, but this is competing with forces. Many forces can give you better offensive and defensive boosts. The most unfortunate fact about this is that it\u2019s a crowd control force in a mod where all the late game bosses are single targets.\n\nIf you\u2019re playing Calamity with the Souls DLC, this is unusually strong against worms or Ceaseless Void\u2019s dark energy minions since it can hit a lot of them in one shockwave, even if it has damage falloff. Wouldn\u2019t recommend on Devourer of Gods though, just because the boss has a lot of HP and the body segments have 95% damage reduction."
  },
  {
    "name": "Vortex Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "(\u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Shoot big piercing laser at distant enemies sometimes for big ranged damage. That\u2019s all it does and somehow it\u2019s still reasonably good. Without Force of Cosmos or wizard enchantment, its damage is good on champions, and with Force of Cosmos, its damage is good on Abominationn, but it\u2019s also competing with forces (unless you\u2019re pre-Providence in the DLC which case the laser helps a lot if you find that fights are going on for too long)"
  },
  {
    "name": "Nebula Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "(\u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Once every 3 seconds, replaces one of your projectiles with a homing nebula shot that deals magic damage and spawns a nebula armor nebula booster: buff stacking is capped at 2, and mana boosters are not spawned. Okay damage from the nebula shots, and good life regen and damage boosts from the buffs. These are identical to the vanilla boosters, so this is useless if you have nebula armor equipped. Great with eridanus armor or gaia armor or even on non-mages, but also it\u2019s competing with forces. Note that in the DLC, nebula boosters are nerfed, but you don\u2019t immediately have forces post-ML so it\u2019s arguably still great."
  },
  {
    "name": "Stardust Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "(\u2b50\u2b50\u2b50 in DLC but only if you build around using it with adrenaline) Effects: Spawns a stardust guardian to fight for you. Grants an active skill that lets you stop time for 6 seconds; while time is frozen, minions will continue to attack and the stardust guardian gains a new attack. Freezing time has a 90 second cooldown. Time stop is fantastic, but the stardust guardian has very low damage since it\u2019s just the vanilla armor set bonus\u2019s guardian. Extremely powerful in short bursts, but does nothing for the overwhelming majority of the fight. Force of Cosmos is great because it does other powerful things when time isn\u2019t stopped, but this doesn\u2019t do any of that.\n\nNote that Eridanus can move in stopped time and can continue building up projectiles in that time which could be a problem once it ends, so this is most useful on non-eridanus champions, meaning this is a decent enchantment but only on bosses that are relatively easy to begin with. Could be useful while grinding forces, but I would replace it with a force as soon as possible.\n\nCould be stronger in Calamity + DLC where you don\u2019t immediately get access to forces after killing moon lord, but only if you build around adrenaline. Force of Cosmos (the direct upgrade to this) in particular is obtained much later, and there are more bosses who can be effectively time stopped, and you have rage + adrenaline which can be popped during time stop. Note that adrenaline is nerfed in DLC specifically because of things like this, but you can also unleash your Force of Earth charge or debuff installs or other stuff during this time, which makes up the difference."
  },
  {
    "name": "Soul of the Master",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "Effects: Effects of all components simultaneously, plus a bunch of other stuff like extra maximum HP\n\nI don\u2019t think I need to explain why this is five stars. Only ever used on Mutant though, or i guess to make an Abominationn refight much faster.\n\nDisable the \u201cminions effects for damage\u201d effect though: it\u2019s a trap since minion effects include all kinds of things that deal good damage, and +1% damage per effect and unused minion slot is not enough, and these effects do not have iframe issues like in older versions of the mod."
  },
  {
    "name": "Sinister Icon",
    "rating": "\u2753",
    "type": "Accessory",
    "description": "Dropped by the Dungeon Guardian\nEffects: Grants immunity to Unlucky and Stunned, increases spawn rate, and all non-boss enemies drop double loot. Boss enemies can also drop double loot, but only if you equip the accessory for the entire fight. A great farming accessory, but the buffed Eternity mode Dungeon Guardian will prevent all but the weirdest lunatics from getting it pre-boss. Most people will get this post-moon lord, after they\u2019ve already stopped grinding most normal enemies for things. Platinum Enchantment is more convenient, but this can be used alongside it. Supreme Deathbringer Fairy \u2b50\u2b50\u2b50\u2b50 Effects: Grants immunity to a few debuffs, 2 defense, a berserk and bee dash active skill, increases fall speed, grants platform falling, slime falls on your cursor after landing, skeletron arms whack people, improved dashes and damage resistance and reflection while dashing, honey buff increases armor penetration by 5, spawn blood scythes while moving quickly, bees and weak hornets become friendlier.\n\nGood accessory for Wall of Flesh and early hardmode bosses due to the miscellaneous mobility benefits and the moderate damage boosts, mostly from the arms and blood scythes. The immunities are sometimes handy, such as when fighting Queen Slime to avoid Slimed (which slows you). The more you dash and move up and down and use the active skills, the more useful this becomes, but people understandably rarely use the berserk mode due to the risks involved. (it\u2019s really good so maybe give it a shot) Some people swear by this thing solely for the fall speed and dash speed benefits, but I never managed to get much use out of them, except on Duke Fishron (where I genuinely find fall speed super useful). If you can use them effectively, this might be five stars."
  },
  {
    "name": "Supreme Deathbringer Fairy",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Grants immunity to a few debuffs, 2 defense, a berserk and bee dash active skill, increases fall speed, grants platform falling, slime falls on your cursor after landing, skeletron arms whack people, improved dashes and damage resistance and reflection while dashing, honey buff increases armor penetration by 5, spawn blood scythes while moving quickly, bees and weak hornets become friendlier.\n\nGood accessory for Wall of Flesh and early hardmode bosses due to the miscellaneous mobility benefits and the moderate damage boosts, mostly from the arms and blood scythes. The immunities are sometimes handy, such as when fighting Queen Slime to avoid Slimed (which slows you). The more you dash and move up and down and use the active skills, the more useful this becomes, but people understandably rarely use the berserk mode due to the risks involved. (it\u2019s really good so maybe give it a shot) Some people swear by this thing solely for the fall speed and dash speed benefits, but I never managed to get much use out of them, except on Duke Fishron (where I genuinely find fall speed super useful). If you can use them effectively, this might be five stars."
  },
  {
    "name": "Slimy Shield",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by King Slime \nEffects: Grants immunity to Slimed and 2 defense. Gives you extra fall speed, and whenever you land from a jump, slimy balls which inflict Slimed and Oiled rain from the sky at your cursor. An optional toggle allows you to fall through platforms on a very, very short cooldown. Most useful when you have some source of fire debuffs, but the Oiled is redundant with Ancient Cobalt Enchantent; or just Cobalt Enchantment. Then again, if you don\u2019t have either of those, the Oiled is still good, and the balls do a little extra damage. Fall speed is okay but overrated in my opinion, same with the ability to fall through platforms."
  },
  {
    "name": "Agitating Lens",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Eye of Cthulhu\nGrants immunity to Berserked. While dashing or running quickly, you spawn scythes that go in the direction you\u2019re running. When you use the active skill, you get 20% damage, 20% crit, and a massive attack speed increase for 7.5 seconds, however, you also lose 20 defense, 30% damage reduction, and you can\u2019t stop moving or attacking. After this ability ends, you get stunned for 2.5 seconds. The blood scythes deal reasonable damage, but the active skill is controversial and rarely used; it has massive offensive benefits, but could get you killed. I used it to great success on many pre-hardmode bosses, but yes, it did also get me very, very killed sometimes."
  },
  {
    "name": "Queen's Stinger",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Queen Bee.\nGrants immunity to Infested. Increases armor penetration by 10 if you have the honey buff, as well as causes bees and weak hornets to be friendly. Using the active skill makes you perform a short dash towards your cursor with a 4 second cooldown that inflicts acid venom on any enemies you pass through (no iframes included though).\n\nMost useful offensively with rapid fire weapons and most useful for mobility on bosses with very tricky to avoid attacks. Remember that you have the bee dash and use it often to avoid attacks."
  },
  {
    "name": "Necromantic Brew",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Skeletron\nGrants immunity to Lethargic. Summons two Skeletron hands that attack enemies. When you dash, you dash 30% faster and take 15% less damage, and enemies take the same contact damage that they deal to you.\n\nThe hands deal surprisingly good damage at close range, and the dash benefits are okay-ish if you really like dashing. Most useful on summoners since the hands are summons and scale with summon damage."
  },
  {
    "name": "Bionomic Cluster",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects while in inventory: Concentrated Rainbow Matter\u2019s automatic healing potions Frigid Gemstone\u2019s Ice Rod active skill and immunity to Frostburn and Chilled Sands of Time\u2019s faster respawn time, teleportation, and immunity to Mighty Wind Mystic Skull\u2019s automatic mana potions and immunity to Suffocation Security Wallet\u2019s reforge discount Nymph\u2019s Perfume\u2019s full health respawn Ordinary Carrot\u2019s Night Vision and Sniper Scope effects\n\nEffects while equipped in an accessory slot:\n6 defense\nSpawn hearts on hit sometimes\nImmunity to a bunch of things, notably Purified\nEnemy attacks have a 5% chance to deal 1 damage to you\nTouch light orbs to refresh flight time\nWhile attacking, build up a shadowflame shotgun burst (but reduce damage reduction by 10% while active) then stop attacking to unleash it\nRainbow slime minion that inflicts Flames of the Universe\nSome enemies drop potions when defeated\nWhen attacking by manually clicking, increase non-summon damage by 30% Great to have in your inventory with having most of its QOL effects. Craft it as soon as possible, but think before using it in a boss fight.\n\nThe defensive benefits are reasonably good throughout all of hardmode: everyone likes picking up hearts and sometimes taking 1 damage from a hit randomly.\n\nPerfect against Empress of Light and similar bosses that inflict Purified, and has a synergy with Pearlwood enchantment due to the sheer number of pickups this accessory creates (hearts and orbs). The manual clicking feature synergizes great with slow weapons like the Sniper Rifle (which is buffed in Eternity Mode). The minion synergizes well with Orichalcum enchantment due to the high debuff damage (if you can get the minion to hit anything, that is). The shadowflame burst is the only thing that is actively harmful sometimes, and you can disable it if you find the damage to be not worth the cost. \n\nIn general, great accessory, but only equip it if you have any actual reason to equip it."
  },
  {
    "name": "Concentrated Rainbow Matter",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by a Rainbow Slime with a 5% drop chance\nEffects: Grants immunity to Flames of the Universe. Summons a baby rainbow slime that inflicts Flames of the Universe, and makes you automatically use healing potions when needed (threshold configurable in configs) Despite the orichalcum enchantment synergy, the minion isn\u2019t that great since it has trouble hitting things and the debuff duration is short. I wouldn\u2019t use it for that purpose; the other part is where the three star rating comes from. Automatic healing potions are great; try to set the use threshold higher in configs so that you can start the potion sickness cooldown sooner."
  },
  {
    "name": "Wyvern Feather",
    "rating": "\u2b50",
    "type": "Accessory",
    "description": "Dropped by a Wyvern with a 100% chance in PHM, or with a 10% drop chance in HM\nEffects: Grants immunity to Clipped Wings and Crippled. Stabilizes gravity, and occasionally makes you produce a light orb while flying, which refreshes your flight time when touched.\n\nGravity stabilization only matters later on when you already turned this into Bionomic Cluster, and the light orb flight time boost is generally not worth the hassle. Has a pearlwood enchantment synergy since the orbs count as pickups, but just use anything else with a pickup if you want them that badly."
  },
  {
    "name": "Frigid Grasp",
    "rating": "\u2b50",
    "type": "Accessory",
    "description": "Dropped by an Ice Golem with a 100% chance in PHM, or with a 20% drop chance in HM Effects: Grants immunity to Frostburn and Chilled. Gives you the ability to cast Ice Rod at any time via its active skill. Moving ice blocks inflict frostburn, but only in hardmode.\n\nI have never used this for anything ever and I can\u2019t think of a reason to. I guess if you\u2019re doing a no-weapons challenge this could deal some damage in hardmode? Maybe? \nI guess there was that video of someone blocking legendary GFB Nameless Deity\u2019s final attack with ice rod, but I\u2019m pretty sure that was patched."
  },
  {
    "name": "Sands of Time",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by a Sand Elemental with a 100% chance in PHM, or with a 20% drop chance in HM Effects: Grants immunity to Mighty Wind. Makes you respawn twice as fast if no boss is alive, and allows you to teleport to your last death point. Just really nice to have. Makes dying more tolerable while grinding, and reduces time between boss attempts significantly."
  },
  {
    "name": "Squeaky Toy",
    "rating": "\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by any evil critter with a 5% drop chance Effects: Grants immunity to Squeaky Toy and Guilty. Gives you a 10% chance to take 1 damage from an attack. If you\u2019re ramming your face against a boss, you just have to get lucky once to beat it. Not that great on average though."
  },
  {
    "name": "Tribal Charm",
    "rating": "\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by a Jungle Mimic with a 10% drop chance Effects: Grants immunity to Webbed and Purified. Gives you 6 defense. When attacking by manually clicking, your non-summon weapons deal 30% more damage. 30% damage is good, but it\u2019s not as massive as it seems since a lot of your damage is starting to come from accessories, and you have substantial damage bonuses now which makes an additive 30% smaller in comparison. You also have to find a weapon worth manually clicking with to make using this a good idea."
  },
  {
    "name": "Mystic Skull",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by a Rune Wizard with a 10% drop chance Effects: Grants immunity to Suffocation. Gives you the Mana Flower\u2019s effect, as well as increasing pickup range for mana stars. All effects work from vanity/inventory. It\u2019s free mage quality of life, and it makes it easier to trigger Pearlwood\u2019s buff from its own stars, but that's really it. You can also walk around in space now."
  },
  {
    "name": "Security Wallet",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by The Flying Dutchman with a 20% drop chance Effects: Gives you immunity to Midas, and reforges have -50% cost.\n\nNow you can spend one billion platinum at the goblin instead of two billion platinum."
  },
  {
    "name": "Wretched Pouch",
    "rating": "\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Goblin Warlock with a 10% drop chance Effects: Gives immunity to Shadowflame. While attacking, build up shadowflame charge, at the cost of having 10% less damage reduction. Stop attacking to unleash a shadowflame tentacle shotgun blast that deals magic damage. The damage isn\u2019t awful, but -10% damage reduction really hurts, and it hurts more the more damage reduction you had in the first place."
  },
  {
    "name": "Nymph\u2019s Perfume",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by a Nymph with a 10% drop chance Effects: Gives you immunity to Lovestruck, Stinky, and Hexed. Your attacks can spawn hearts, and even in inventory or vanity, it makes you respawn with full health. Really good for Deviantt. Respawning with full health is nice, too. Spawning hearts on hit is also excellent for general survivability on any boss."
  },
  {
    "name": "Tim\u2019s Concoction",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Tim with a 10% drop chance Effects: Makes some enemies drop potions while equipped. This + Platinum Enchantment makes farming potions a breeze. You should definitely get this. Clowns drop Greater Luck potions, by the way."
  },
  {
    "name": "Dubious Circuitry",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Grants 10 defense, 5% damage reduction, several immunities (notably defenseless and knockback), the Fused Lens debuff active skill, probes minions, and the supercharge functionality from the Remote Control.\n\nHas several benefits, and they\u2019re all good but not great, but combined they\u2019re fantastic. Briefly tapping the bound active skill key, firing your weapon once, then tapping it a second time to inflict the debuffs while losing minimal health yourself is a good strategy. Good on every boss from Lifelight to Moon Lord. Particularly good on golem due to supercharging potential and defenseless immunity; the small head lasers are weak enough that you can ram into them, and with enough defense and no debuffs, you\u2019ll take almost no damage and still supercharge.\n\nNote that the probe minions fire half as fast as their Remote Control counterparts, and you don\u2019t automatically inflict the Fused Lens debuffs when you\u2019re under the effects of any debuff yourself."
  },
  {
    "name": "Fused Lens",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by The Twins Effects: Gives you immunity to Cursed Inferno and Ichor. \nIf you\u2019re inflicted with Cursed Inferno, you gain 15% increased attack speed, and if you\u2019re inflicted with Ichor, you gain 15% increased crit chance. If you\u2019re losing health to a DoT debuff, you inflict Cursed Inferno and Ichor yourself.\nFinally, it grants you an active skill that will inflict you with Cursed Inferno and Ichor (bypassing immunity) until you activate it again. Decently risky, with a pretty big reward. Synergizes well with Orichalcum, or with rapid fire low damage weapons that benefit from Ichor."
  },
  {
    "name": "Remote Control",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by The Destroyer Effects: Grants immunity to Lightning Rod. Spawns probes that surround you, providing reasonable summon damage. Getting hit by an electric attack or a ray attack will supercharge you and make you take half damage from the attack that supercharged you. Being supercharged gives you increased attack speed, increased move speed, and the ability to inflict Lightning Rod. Probes minions are good, and supercharging is good. If you killed Destroyer first, all other mechanical bosses have laser attacks you can supercharge from, and the damage of their basic red lasers (not retinazer\u2019s giant deadly red laser though) is lower than that of their other attacks."
  },
  {
    "name": "Reinforced Plating",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Skeletron Prime\nEffects: Grants immunity to Nano Injection, knockback, and Defenseless, as well as 15 defense and 5% damage reduction. 15 defense is a lot of defense, knockback immunity is nice, and 5% damage reduction is good. Can be combined with its Dubious Circuitry upgrade for a total of 25 defense and 10% damage reduction."
  },
  {
    "name": "Pure Heart",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Grants immunity to biome debuffs, rotting, and bloodthirsty. Improves movement speed and acceleration/deceleration and occasionally emits homing eater projectiles that inflict Sublimation, which inflicts damage over time and significantly reduces enemy defense. Creepers appear around you which block damage and respawn faster when not moving. Max life increases by 10%, grants a double jump, slime spikes spray to the sides when landing, and flight time increases by 30%.\n\nDoes so many things for offense, defense, and mobility that it\u2019s useful on any build. Creepers are arguably the most powerful benefit, since deleting projectiles is fantastic."
  },
  {
    "name": "Darkened Heart",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by the Eater of Worlds Effects: Grants immunity to Rotting. Increases your turnaround traction, and increases movement speed by 10%. You occasionally emit homing mini eaters that inflict Cursed Inferno on enemies. Okay mobility and very nice damage. Not much to say. The movement boosts are smaller than Meteor Enchantment, but you do gain a small top speed increase while flying, so you may prefer this if you remain airborne a lot."
  },
  {
    "name": "Gutted Heart",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by the Brain of Cthulhu Effects: Grants immunity to Bloodthirsty. Increases your max life by 10%, and spawns up to 5 creepers (one every 15 seconds while moving, faster while not moving) that block damage. The creepers are extremely good and block projectiles completely much of the time, but watch out for forms of damage that pierce through and shred your creepers such as giant deathrays or boss contact damage. 10% max life is also a useful boost."
  },
  {
    "name": "Gelic Wings",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "(\u2b50 in DLC) Dropped by Queen Slime\nEffects: Grants immunity to Illuminated, as well as granting a double jump and acting as wings on par with angel wings. Whenever you land, spikes shoot out to your sides. Generally underrated: although the wings are worse than other available wings, you often don\u2019t need that much flight time or speed, and the double jump and spikes are okay side benefits. Overall, a reasonable sidegrade to other available wings, unless you\u2019re in the Souls DLC where Calamity gives buffs to every single set of vanilla wings in which case just use Angel Wings instead for the absurd defense bonus."
  },
  {
    "name": "Lump of Flesh",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Grants several immunities, including to knockback. Also grants a glacial blood spike fastfall and a dread shell parry active skill. Cursor builds up to 1.15x damage vulnerability on enemies in your cursor\u2019s ring, and rare (Lifeform Analyzer-able) enemies spawn 5x more often. You deal 15% more damage at all times, and attacking charges an eyeball minion\u2019s laser, which fires when you stop attacking. Dashing also leaves blood spikes. Great damage boost since multiplicative damage is good, but keep in mind that the boss will lose all of its built up damage vulnerability if your cursor leaves it for even a moment. The giant laser does good damage as well, so pay attention to its charge. Try to parry attacks whenever you can, since the dread shell parry is powerful. The knockback immunity is also great."
  },
  {
    "name": "Pungent Eyeball",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by the Wall of Flesh\nEffects: Gives immunity to Blackout and Obstructed. Enemies near your cursor take increased damage, scaling with how long you track them with your cursor. Increases the spawn rate of rare enemies detectable by lifeform analyzer by 5x. The increased damage to enemies in your cursor is less useful than it seems since it builds up slowly and moving your mouse away from the enemy for even a moment makes you lose all the built up vulnerability, but you shouldn\u2019t equip it for that alone anyway: the drastically increased spawn rate of rare enemies is amazing for farming the Bionomic Cluster, and where the three star rating comes from."
  },
  {
    "name": "Crystal Skull",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Doctor Bones with a 10% drop chance\nEffects: Grants immunity to Dazed and Stunned. Increases damage dealt by 15%, but increases damage taken by 10%. Holding left click with a weapon charges a crystal skull that fires a powerful energy attack; release when charged to fire. The damage boost is basically a pre-boss all-class emblem, and the charged shot is incredibly powerful, even being strong against Wall of Flesh. Five stars if you get this early on, even if it\u2019s closer to four stars towards the end of pre-hardmode. Likely not worth using in hardmode though, as better alternatives exist."
  },
  {
    "name": "Dread Shell",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by the Dreadnautilus with a 20% drop chance Effects: Grants immunity to Anticoagulation and knockback. Increases defense by 2, and grants a parry with extremely tight timing. Upon parrying, blood spikes that inflict Anticoagulation to enemies and release blood boosters that increase damage when collected. Defense and damage reduction is reduced for a few seconds whenever a parry attempt is made or when the shield is held up during the parry cooldown. Excellent for blocking damage and inflicting massive damage, but its timing is extremely tight, and the defense penalties are harsh. Silver Enchantment shortens the cooldown and increases the parry window. Extremely good at countering Retinazer\u2019s giant spinning deathray, and can kill Queen Slime\u2019s subjects instantly. TIP FOR PARRYING: You can\u2019t parry during your weapon\u2019s use time cooldown, so wait for your weapon to vanish before right clicking."
  },
  {
    "name": "Deerclawps",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Deerclops\nEffects: Grants immunity to Frozen and Slow. Dashing leaves a trail of ice spikes. Use the active skill to fastfall, which creates a glacial eruption on landing. A pre-hardmode fastfall active skill with some extra damage, plus your dashes have a little damaging trail. The damage is surprisingly good if you bind the active skill to right click and ground pound whenever possible, and i\u2019ve been told you can dodge some attacks more effectively with this (does anything in pre-hardmode actually require faster fall speed though? not really). It\u2019s a reasonably good accessory for damage for non-deviantt late pre-hardmode bosses if you\u2019re willing to ground pound a lot."
  },
  {
    "name": "Verdant Doomslayer Mask",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Grants treasure box fastfall and magical cleanse active skills. Grants several immunities. increases regeneration based on light received and fires additional attacks while attacking based on your current class\u2019s weapon. Converts accessory minion effects and unused minion slots into +1% damage each: if disabled, summons a miniature plantera minion. Disable the minions to damage effect: it is a trap that\u2019s enabled by default and hinders your other accessories. An additive 1% damage per effect removed is usually not worth losing your best effects, and filling your minion slots gives you more than 1% damage in return. You can consider re-enabling it for visibility or framerate improvement purposes if you wish though.\n\nThe Doomsayer Mask is mostly good for killing moon lord and early post-moon lord bosses due to the extreme offensive benefits and reasonably good defensive benefits. Remember your magical cleanse, and maybe use the fastfall if you have nothing else to fill that active skill slot. Since the recipe uses four pillar fragments, and you can craft three pillar fragments into a fourth, and the accessory gives immunity to pillar debuffs, you can craft it before killing your least favorite pillar to make it much easier."
  },
  {
    "name": "Magical Bulb",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Plantera\nEffects: Grants immunity to Acid Venom, Ivy Venom, and Swarming. Increases your life regen depending on how lit up the area around you is (min +1 HP/s, max +4 HP/s), and gives you a plantera minion which shoots seeds and spiky balls. Allows you to press the Magical Cleanse key to cure yourself of most debuffs, as well as doubling debuff damage for 45 seconds, with a 40 second cooldown. Magical Cleanse is amazing for erasing debuffs, and it\u2019s most useful on Golem who has devastating defense-wrecking debuffs, as well as on any builds that inflict powerful debuffs since for some reason Magical Cleanse gives you almost permanent double debuff damage. Finally, the plantera minion is uniquely good on slow moving bosses like Golem, but bad on other bosses."
  },
  {
    "name": "Lihzahrd Treasure Box",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Golem\nEffects: Grants immunity to several debuffs and 8 defense. Grants an active skill that allows you to quickly fastfall. When you hit the ground, boulders and fire geysers will spray out. Spamming the fastfall gives you a surprisingly high amount of damage in a wide area (1.3k dps on a dummy with no armor or other accessory boosts), but there are gaps between the geysers that small targets can slip through, and doing so means you won\u2019t be airborne for very long between fastfalls. Ideal for larger targets like Betsy and Empress of Light. Can also be used to satisfy the fall speed addiction of some people. 8 defense is also nice. If you equip this, bind the skill to a convenient key and spam it when possible."
  },
  {
    "name": "Celestial Rune",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Lunatic Cultist Effects: Grants immunity to Marked for Death. Causes you to fire additional projectiles depending on your weapon type. Usable on pillars, and then crafted into the Doomsayer Mask. It deals decent bonus damage, but that\u2019s it."
  },
  {
    "name": "Heart of the Master",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Heart of the Master \u2b50\u2b50\u2b50\u2b50\u2b50 Effects: Grants five active skills for some reason, a bunch of immunities, small damage and damage reduction increases, shrinks your hitbox, grants +100% flight time, grants most vanilla potion buffs, grants precision seal hotkey, and summons three true eyes of cthulhu and a saucer minion as long as you disable the unhelpful minions to damage option.\n\nDisable the minions to damage effect: it is a trap that\u2019s enabled by default and hinders your other accessories. An additive 1% damage per effect removed is usually not worth losing your best effects, and filling your minion slots gives you more than 1% damage in return. You can consider re-enabling it for visibility or framerate improvement purposes if you wish though.\n\nA fantastic accessory, but sometimes I secretly wonder if it\u2019s overrated. Then I remember it makes Force of Life even better, the parry lets you heal from Abom hits in all but the hardest difficulties, it shrinks your hitbox, it adds a ton of damage, and so on and so forth, and I remember that it's rated exactly how it should be."
  },
  {
    "name": "Pumpking's Cape",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by the Pumpking with a 20% drop chance\nEffects: Grants immunity to Living Wasteland. Increases your damage and crit chance by 5%, and gives you a new parry. While parrying, you get an aura of Rotting, and if you block exactly as an attack hits you, you will dodge the attack, heal based on the blocked damage, and counterattack with a spray of scythes which deal damage based on the blocked damage (capped at 1000). This parry has a cooldown of several seconds. Arguably the strongest hardmode accessory because it just makes you immortal if you land half your parries. Adding Silver Enchantment is overkill, as it will inherit the super short parry cooldown and longer parry window of Silver Enchantment. Golem, Empress of Light, Moon Lord, and even many post-moon lord bosses become far easier with this. I deliberately ram into lasers all the time to regain health.\nNote that Squeaky Toy and Bionomic Cluster can reduce damage to 1, which means you have a small chance to only heal 1 health when parrying something; don\u2019t use this with those accessories. TIP FOR PARRYING: You can\u2019t parry during your weapon\u2019s use time cooldown, so wait for your weapon to vanish before right clicking."
  },
  {
    "name": "Ice Queen\u2019s Crown",
    "rating": "\u2b50",
    "type": "Accessory",
    "description": "Dropped by the Ice Queen with a 20% drop chance Effects: Grants immunity to Hypothermia. Gives you 5% DR, and allows you to graze attacks to gain an ice bomb that when used can freeze (as if time stopped) almost all enemies and projectiles within 150 tiles for 1 second, then chills them for 3 seconds, slowing them. Has anyone ever used the bomb? I think I remember using it exactly once, being unimpressed, and equipping something else. If you want a timing-based way of avoiding damage, just use Pumpking\u2019s Cape. Or Betsy\u2019s Heart. Or any iframe dash. Or any kind of teleport. Might be okay if all those things didn't exist."
  },
  {
    "name": "Saucer Control Console",
    "rating": "\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by the Martian Saucer with a 20% drop chance Effects: Gives you immunity to Electrified and Distorted. Gives you a mini saucer which attacks when you attack, slowing enemies down on hit. While equipped or in your inventory, pressing the Ammo Cycle key will move every item in your ammo slots up by 1 space, with the top-most item going to the bottom space. The saucer does okay damage for a post-golem bonus effect, but it\u2019s not unusually good, and that\u2019s really all it does. Ammo cycle is also good for inflicting debuffs with your bullets, but it costs an active skill slot and a little micromanagement, so you may not want to bother if you already had three skills you wanted to use, or if you weren\u2019t going to bother inflicting debuffs anyway and just spam chlorophyte bullets.\n\nBizarrely, Martian Saucers have an extremely rare chance to spawn in space at any point in hardmode, including before Golem is killed: it might take an hour or more for one to actually spawn if you try to farm it, but if you actually manage to kill it, you can get this accessory early (but no other useful drops) with nerfed saucer stats, allowing you to kill early hardmode bosses with much more ease. I\u2019m not sure why you would do this though, given how the saucer is probably harder to kill than the mechanical bosses and you have to wait an eternity between attempts."
  },
  {
    "name": "Betsy\u2019s Heart",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Betsy Effects: Gives you immunity to Oozed, Withered Weapon, and Withered Armor. Grants an omnidirectional iframe dash in the form of an active skill. Hitting enemies with the dash reduces the cooldown and inflicts Betsy\u2019s Curse for 20 seconds. The original guide calls this arguably the best eternity mode drop in the game: I think Pumpking\u2019s Cape is better on account of making you immortal, but this is also fantastic. You can bind this one to right click for easy use if you don\u2019t want to go the parry route. Equipping both this and Pumpking\u2019s Cape is overkill: use one or the other.\n\nNotably, unlike a parry, you can use this even during a weapon\u2019s use time cooldown, cancelling it completely: the Scientific Railgun is a good candidate for this due to its long use time, allowing you to fire it faster. Probably not worth taking advantage of."
  },
  {
    "name": "Mutant Antibodies",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Duke Fishron Effects: Grants immunity to Wet, Feral Bite, Mutant Nibble, Oceanic Maul, and debuffs caused by entering water. Increases all damage by 20% and permanently grants the effects of Wet while riding Cute Fishron. Reduces life regen by 1 hp/second. Free all-class damage boost, and perfect for the valhalla enchantment cute fishron build. The life regen penalty is barely a thing."
  },
  {
    "name": "Precision Seal",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by the Empress of Light Effects: Grants immunity to Smite. Shrinks your hitbox significantly and gives access to \u201cPrecision Mode,\u201d which shows your hitbox and disables dashes and double jumps so you don\u2019t accidentally use them. Precision seal hitbox pictured below. A great accessory, but I think it\u2019s non-upgraded form is overrated; a smaller hitbox may sometimes let you dodge projectiles you otherwise wouldn\u2019t have, but the fights you genuinely get the most benefits from are all post-moon lord, where you have it built into Heart of the Master."
  },
  {
    "name": "Chalice of the Moon",
    "rating": "\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Moon Lord Effects: Grants immunity to Flipped, Unstable, Nullification Curse, and Curse of the Moon, as well as 10 defense. Lets you control gravity, summons True Eyes of Cthulhu to protect you, and increases wing flight time by 100%. Grants nearly all potion buffs. Basically just gets crafted into Heart of the Master immediately, but the true eye minions and extra flight time can be useful in the 5 milliseconds between killing Moon Lord and upgrading the item.\n\nBecause it increases flight time by 100% instead of 50% like its upgrade, in theory you could use this alongside Force of Life instead of just using Heart of the Master for more flight time. I don\u2019t know why you would sacrifice all the other benefits of Heart of the Master for more flight time though\u2026"
  },
  {
    "name": "Soul of Dimensions",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "Effects: Effects of countless defensive and utility accessories. Grants godly fishing powers and the ability to enable Builder Mode. You fly at high speed with amazing acceleration and can stop nearly instantly, in addition to the ability to hover. Grants lots of maximum HP, defense, and so on.\n\nI don\u2019t think I need to explain why this is five stars. Only ever used on Mutant though, or i guess to make an Abominationn refight much faster. Even though this is the least necessary of the four nearly mandatory mutant killing accessories, this still outclasses any other alternatives to those four accessories."
  },
  {
    "name": "Colossus Soul",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "(\u2b50\u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Grants 10 defense, +10% damage reduction, 100 max life, and +5 life regeneration. Grants lots of immunities, including to knockback, and has the effects of many vanilla defensive accessories. This does one thing: defense. It\u2019s a great accessory. Has the effects of Charm of Myths, providing a slight synergy with anything that boosts healing potions or mushrooms (Force of Nature and Force of Spirit, and to a lesser extent Force of Will). Note that it\u2019s stronger with the Souls DLC installed since most of Calamity\u2019s own defensive accessories are crammed into this as well."
  },
  {
    "name": "Supersonic Soul",
    "rating": "\u2b50\u2b50",
    "type": "Soul",
    "description": "Effects: Grants supersonic run speed, and makes your flight faster and allows you to accelerate faster and decelerate almost instantly (often referred to as \u201cno momentum\u201d). Has the effects of many of its components, and grants a quintuple jump if no wings are equipped. This is not worth equipping on its own, because you need to fly when fighting lategame bosses and this doesn\u2019t provide flight. People use this mostly for the extra speed and acceleration while flying with Flight Mastery Soul or Force of Life, but mostly for the ability to stop on a dime and cancel all your momentum by just letting go of a movement key, allowing for high precision dodging.\n\nThat said, I have never seen much need for this: i was tempted to rate it as \u2753 since it is partly personal preference, but you give up so much that you should try to avoid equipping this at all costs. May be useful for strange challenge runs if other accessories are inaccessible or if you have some highly specific mobility needs, but that\u2019s it."
  },
  {
    "name": "Flight Mastery Soul",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "(\u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Grants high speed infinite flight: you can hover by holding down and jump simultaneously, and hold up to boost faster. Finally, it increases gravity, allowing you to fall faster, and disables all your jumps (togglable) This is a very good accessory, but Force of Life in my opinion outclasses it despite having worse flight statistics due to the giant pile of other benefits it offers. You may still prefer the faster flight this accessory offers, as well as the lack of dependence on flowers.\n\nIn the DLC though, Force of Life has better flight time statistics due to assorted calamity wing movement buffs, and the difference between the two wings is much smaller, so just use Life instead."
  },
  {
    "name": "Trawler Soul",
    "rating": "\u2b50",
    "type": "Soul",
    "description": "Effects: Grants godlike fishing buffs, and has effects of some fishing related accessories, including Spore Sac. Angler enchantment allows you to fish up every single object you could conceivably want, and this is only obtainable post-moon lord, and it requires rare fishing drops like Bladetongue in the first place. What fishing am I supposed to do with this? I already caught every fish in the game!"
  },
  {
    "name": "World Shaper Soul",
    "rating": "\u2b50",
    "type": "Soul",
    "description": "(\u2b50\u2b50\u2b50in DLC) Effects: Grants godlike mining and building powers, and also allows you to enable Builder Mode, which provides a variety of benefits, most notably the ability to place any placeable tile or block without consuming it. Fantastic at construction, but surely you didn\u2019t wait until the game was almost over to build a nice house for yourself, right? Have you been living in an Insta-House this whole time?\n\nBuilder Mode lets you duplicate all kinds of things, from metal ingots to platinum coins, but there\u2019s little need for this, except in the DLC, where you may want to produce a ton of Shadowspec or Auric bars very quickly. \n\nIt\u2019s even capable of duplicating the Rock, obtained from the boss rush or from Wrath of the Gods content, allowing you to craft more endgame items."
  },
  {
    "name": "Soul of the Universe",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "Effects: Grants a variety of massive damage buffs to all classes, mostly to your currently held weapon class, and has the effect of many vanilla items. Most importantly, grants 4 defense.\n\nI don\u2019t think I need to explain why this is five stars. Only ever used on Mutant though, or i guess to make an Abominationn refight much faster.\n\nNotably, the number of granted minion slots is lower than its Conjurist\u2019s Soul downgrade, so you can equip that if you want more minion slots."
  },
  {
    "name": "Berserker\u2019s Soul",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "(\u2b50\u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Grants 22% melee damage, 20% melee speed, and 10% melee crit chance; additionally has the effects of the yoyo bag, celestial shell, and fire gauntlet, as well as 4 defense. A large suite of very good melee damage boosts, but that's all it does. Melee speed isn\u2019t useful on some of the melee weapons you have, so it\u2019s best used with the ones that benefit from it (Slime Slinging Slasher and Umbra Regalia). Crit chance is only useful if you equipped none of the forces that take you to 100% crit chance anyway.\n\nAll souls have Calamity items built in with the DLC, including both their obvious tooltip effects and the stat bonuses from the original Calamity items, making them auto-equips."
  },
  {
    "name": "Sniper\u2019s Soul",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "(\u2b50\u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Grants 22% ranger damage, 20% increased ranged weapon velocity, and 10% ranged crit chance; additionally has the effects of the sniper scope and magic quiver. Worse than its melee/mage siblings but not by much. Crit chance is also only useful if you equipped none of the forces that take you to 100% crit chance anyway. Increased velocity is nice, but only if you\u2019re using a weapon that benefits from it (so not the scientific railgun).\n\nThe Magic Quiver part is only useful on Nano Core\u2019s ranged mode in non-DLC eternity mode, since that is, for some reason, the only post-moon lord bow. But since it\u2019s only a 10% boost and it\u2019s no longer multiplicative as of terraria 1.4.4, equip other accessories instead. All souls have Calamity items built in with the DLC, including both their obvious tooltip effects and the stat bonuses from the original Calamity items, making them auto-equips."
  },
  {
    "name": "Arch Wizard\u2019s Soul",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "(\u2b50\u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Grants 22% magic damage, 20% reduced mana cost, and 10% magic crit chance; additionally grants 200 max mana and the effects of the celestial cuffs and mana flower. A large suite of very good mage damage boosts, but that's all it does. Magic attack speed is more useful than melee speed since more weapons use it. The crit chance is also only useful if you equipped none of the forces that take you to 100% crit chance anyway.\n\nAll souls have Calamity items built in with the DLC, including both their obvious tooltip effects and the stat bonuses from the original Calamity items, making them auto-equips."
  },
  {
    "name": "Conjurist\u2019s Soul",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "(\u2b50\u2b50\u2b50\u2b50\u2b50 in DLC) Effects: Grants 22% summoner damage, 15% whip range, 3 minion slots, and 1 sentry slot. Three summoner slots plus some other stuff! Very good if you're a summoner. It\u2019s even great on Mutant as a bonus accessory since the slots add on top of Soul of the Universe\u2019s +2 slots. All souls have Calamity items built in with the DLC, including both their obvious tooltip effects and the stat bonuses from the original Calamity items, making them auto-equips. By the way, this one has Nucleogenesis built in, meaning it actually grants seven slots in the DLC."
  },
  {
    "name": "Miner Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Increases mining speed by 50%. Effects of Spelunker, Night Owl, Shine, Hunter, and Dangersense potions. Unnecessary if you already have these potions and don\u2019t want the mining speed, but it does at least make you throw boom shurikens faster."
  },
  {
    "name": "Angler Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Increases fishing skill, fish bite your bobber almost immediately, and grants the effects of Lava Proof Tackle Bag. Surprisingly easy to craft, and powerful; the nearly instant fishing lets you grab truly enormous piles of fishing loot."
  },
  {
    "name": "Box Of Gizmos",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped By Trojan Squirrel\nEffects: While in inventory, standing still gives you a weaker Spelunker Potion effect that only adds fancy sparkles near valuables, as well as the Hunter Potion effect. Enemies emit light at night, and grants autofire to non-weapon items. You killed Trojan Squirrel, so you might as well keep it in your inventory for the mild bonuses. It doesn\u2019t actually do anything unique if you put it in an accessory slot though. Wait, is this even an accessory? I never tried putting this in a slot so I have no idea. Whatever, I\u2019m lumping it in with all the other \u201cin inventory/vanity\u201d accessories anyway."
  },
  {
    "name": "Medallion of the Fallen King",
    "rating": "\u2b50",
    "type": "Accessory",
    "description": "Dropped by the King Slime Patreon item Effects: Grants a King Slime Minion that scales with summon damage, it will perform similar attacks to King Slime in Eternity mode. I have never used this thing, so here\u2019s the previous guide\u2019s review:\n\n\u201cAnd the award for the most \u2018I mean it\u2019s alright but it\u2019s so hard to get so why bother\u2019 item goes to\u2026 this thing. 1% drop chance from Eternity mode King Slime, it\u2019s nice for summoner aoe and neat for evil bosses, but it's not worth the accessory slot AT ALL when you can just get  for way less time investment and way better payoff. It is kinda funny though I\u2019ll give it that. He\u2019s just a lil guy <3\u201d"
  },
  {
    "name": "Sparkling Adoration",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Deviantt\nEffects: Grants immunity to Lovestruck and Fake Hearts. Graze projectiles (allow them to come near you without hitting you) to gain up to 1.25x extra damage, which is lost on hit. Critical hits summon homing hearts on a cooldown. Graze radius increased while wearing Nekomi Armor. Most useful in combination with Nekomi Armor, and against bosses which throw a lot of projectiles at you like Empress of Light, Queen Slime, and Mutant. Gets stronger the better you are at dodging. Since the graze damage is multiplicative, this is generally considered to be part of the Standard Mutant Killing Loadout\u2122, but it's not mandatory."
  },
  {
    "name": "Zephyr Boots",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Combines Terraspark Boots and Fart in a Bottle, granting you both the double jump and the speed. Speed is increased further from Lightning Boots. The best boots available in pre-hardmode: the double jump can eliminate the need for wings in some situations in early hardmode as well."
  },
  {
    "name": "Paradox Wolf Soul",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "(Die to a wolf to get this accessory)\nPatreon item Effects: Double tap the left or right movement keys to perform an invincible wolf dash that travels 30 blocks. The dash deals 50 Melee damage but does not inflict melee/whip specific debuffs (flasks, fire gauntlet) It\u2019s an iframe dash. Good in the same ways Monk Enchantment is, but has much less damage. Haven\u2019t ever used this myself since I always forget about it."
  },
  {
    "name": "Aeolus Boots",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Same effects as Zephyr Boots. Increases jump height and fall damage resistance, flowers spawn beneath your feet, and you run faster on sand. Even better boots; get these if you ever want to go fast without using a mount. Not always necessary; Plantera and Golem can be easily fought using only wings and no boots, but if you want to fight Duke Fishron without a mount, these are very useful."
  },
  {
    "name": "Computation Orb",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Golem with a 10% drop chance Patreon item Effects: Non-Magic / Summon attacks deal 1.2x damage but are affected by mana sickness and cost half of the weapon\u2019s use time in mana to use. Never results in a spectacular boost, but can be handy as an extra damage multiplier. Can even be used on Mutant, since multiplicative damage is very useful at that point and you may be looking to fill an extra accessory slot."
  },
  {
    "name": "Cosmic Core",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "(\u2b50\u2b50\u2b50 specifically when fighting mutant as summoner) Dropped by Eridanus\nEffects: Critical hits can critically hit with half the crit chance of a regular crit (capped at 33% supercrit chance), dealing 4x damage instead of only 2x, along with inflicting Flames of the Universe. Your critical hit chance is almost certainly 100% by now, so this is effectively 1.33x damage on any post-Eridanus boss. Note that Mutant disables spider crits, meaning summoners get less use from this when fighting him in particular, but it still works on all the non-summon damage from things like the styx armor set bonus. Otherwise, it is virtually mandatory in all loadouts after killing Eridanus."
  },
  {
    "name": "Abominable Wand",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Dropped by Abominationn\nEffects: Grants immunity to Abominable Fang. Increases your Sparkling Adoration graze damage cap to 1.3x and doubles the rate you fill it up, halves Sparkling Adoration heart cooldown, a spectral Abominationn periodically appears to support your critical hits, and allows you to endure any attack with 1 HP. You can endure an attack again after you reach full health. Finally, at full graze, any excess graze you gain will fill up your Styx Armor charge if you\u2019re wearing that armor. A very good staple accessory. It\u2019s generally considered part of the Standard Mutant Fighting Loadout \u2122 mostly due to its graze damage bonus and the revive. Because you heal very quickly after a while of not being hit during the mutant fight, the revive is actually more meaningful here than on previous bosses."
  },
  {
    "name": "Mutant Eye",
    "rating": "\u2753",
    "type": "Accessory",
    "description": "Dropped by Mutant\nEffects: Grants immunity to Mutant Fang. Increases your graze cap from Sparkling Adoration by 25%, increases Critical damage gained per graze, and upgrades the hearts spawned by Sparkling Adoration into heart rays, increases Spectral Abominationn respawn rate and damage, and reduces the Spectral Abominationn Rebirth duration. Also, allows you to press the Mutant Bomb key to unleash a wave of spheres and destroy most enemy projectiles. Mutant Bomb has a 60 second cooldown. Great for refighting Mutant, but that\u2019s it. Not really useful on anything unless you have both the Souls DLC, Calamity, and Wrath of the Gods, in which case you can use it on a pair of significantly easier bosses. But at the same time, I always forget to equip this and nobody ever talks about it, so idk if it\u2019s any good in DLC."
  },
  {
    "name": "Apprentice\u2019s Essence",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: 18% increased magic damage, 8% increased magic crit, and increases your maximum mana by 50. It\u2019s fiiiiiine, but you can do better than this: all it offers are moderate offensive boosts. Very low as far as three star accessories go."
  },
  {
    "name": "Barbarian\u2019s Essence",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: 18% increased melee damage, 10% increased melee speed, and 8% increased melee crit chance. Same deal as Apprentice\u2019s Essence, but a little better. It\u2019s fiiiine. Whatever. It\u2019s probably slightly better than Apprentice\u2019s, but not by a whole lot. Not very good when used on weapons that don\u2019t care about attack speed, such as yoyos (technically their string lengthens but not that big of a deal)."
  },
  {
    "name": "Occultist\u2019s Essence",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: 18% increased summon damage, 10% increased whip range, and increases your max number of minions by 1. The strongest essence due to the minion slot. Just enough to boost it to four stars."
  },
  {
    "name": "Sharpshooter\u2019s Essence",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: 18% increased ranged damage, 10% increased velocity on ranged weapons, and 8% increased ranged critical chance. Tied with the Apprentice\u2019s Essence for weakest essence. Increased weapon velocity is nice I guess."
  },
  {
    "name": "Eurus Socks",
    "rating": "\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Grants running speed, but not as fast as hermes boots. You start out with these, so you might as well put them on. Surprisingly viable against Trojan Squirrel, but you\u2019ll want to replace them when possible."
  },
  {
    "name": "Puff In A Bottle",
    "rating": "\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Grants a very weak double jump. You also start out with this. It\u2019s better than nothing, and surprisingly viable on Trojan Squirrel, but replace it when you can. At least you can equip this one alongside other double jumps and use this to stop fall damage, so it\u2019s better than the Eurus socks in that regard."
  },
  {
    "name": "Razor Container",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Patreon item Effects: Spawns a damaging razor blade that hovers near you and follows your cursor: when you swing anything with a standard broadsword animation or with the eternity mode broadsword rework animation, the razor launches with increased armor penetration, automatically landing critical hits while launched. One of the easiest to make accessories in the entire mod, and when combined with early swords like the Enchanted Sword (found for free in Cursed Coffin\u2019s room), you can deal great damage early on to bosses and enemies. Falls off in effectiveness later on, but it\u2019s craftable using nothing but wood, iron, and chains, so make it as soon as possible if you\u2019re using any broadsword type melee weapon. \n\nBecause bug nets use the standard broadsword animation, they can launch the razor blade, making this a fantastic pre-boss accessory for weaponless challenge runs, but this is a strange use case and doesn\u2019t affect the overall rating."
  },
  {
    "name": "soul of eterniry",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "effectz: makes u god when u equip it.\n\ngood but seen better tbh Very quick DLC Rankings These items only appear in the Fargo\u2019s Souls DLC when Calamity is installed: base calamity accessories are not rated in this guide, but as a general rule, you mostly want to equip accessories from the Fargo\u2019s side of things, occasionally using something from Calamity alongside them. Ram dash shields are good on many calamity bosses and some vanilla ones, but you should never use them on bosses like the fargo siblings since they\u2019re virtually useless on them. Other notably good DLC picks include The Absorber and The Sponge, as well as some of their wings."
  },
  {
    "name": "Force of The Gale",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Force",
    "description": "Effects: Gain an infinite number of unusual, highly controllable, and hurricane fast gale jumps that can send you up, down, or sideways. Holding the jump button generates sharp spines attached to you. Once you have six spines, your next jump launches them as homing projectiles that deal heavy damage and inflict sulphuric poisoning. Finally, you gain more damage the faster you move, up to a cap of 40% (like statigel, but with no added momentum hijinks) It has a learning curve, but the jumps are strong enough and controllable enough for this to be roughly equal to the two big souls wing options in speed, and it comes with other benefits too. Very good accessory on lots of bosses, assuming this type of movement is something you like. Give it a shot!\n\nThe damage from the spines is an okay boost, but if you want to get the most of it, remember that small jumps won\u2019t grow spines, but long jumps from holding the button will grow spines. This also lets you go pretty fast and get a lot of statigel damage. Sulphuric Poisoning also inflicts 120 damage per second, and is boosted by Force of Earth if you have that equipped.\n\nWhen equipped alongside hover wings, it disables the wings but causes their hover to replace the down jump, so keep that in mind."
  },
  {
    "name": "Snow Ruffian Enchantment",
    "rating": "\u2753",
    "type": "Enchantment",
    "description": "Effects: Gain a weird gliding mechanic (try it for yourself!) More of an exploration and \u201cfor fun\u201d enchantment than anything else. I don\u2019t typically see people recommend or use this for combat, but you can goof off with this or explore sky islands without a gravity potion since you can fly almost infinitely if you perfectly time your glides and dives. Has a strange synergy with Statigel enchantment; its movement alterations strengthen this enchantment\u2019s pseudo-flight, turning it into a very easy yet weird infinite flight. Give it a try.\n\nThe wizard version apparently gives you wings on par with calamity\u2019s starlight wings, which allow you to fly, and then you can glide when you\u2019re out of flight time. No idea if you would ever want to do that, but the option is there.\n\nYou can also equip this alongside Force of the Gale and glide after a jump, which is extremely pointless since you have infinite jumps which are better than gliding, but it\u2019s another thing you can do to goof off."
  },
  {
    "name": "Statigel Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Increases maximum movement speed, but you accelerate and decelerate much more slowly, making your movement slippery. Gain up to +35% damage based on how fast you\u2019re moving. It\u2019s impossible to fully reach +35% damage due to the formula, but +25% or +30% are much more attainable. This is a huge damage boost, but at the cost of your movement becoming less precise. Dashes still instantly accelerate you as usual, meaning you can use the default Calamity dash to reverse direction as if you were bouncing. Hooks also stop your movement completely as usual. Anything that lets you accelerate and decelerate faster can also counteract the acceleration/deceleration reduction, like Meteor Enchantment or just good ol\u2019 Aeolus Boots. The wizard version further increases your top run speed and doubles the damage up to a whopping 70%, which makes this powerful even in late hardmode."
  },
  {
    "name": "Desert Prowler Enchantment",
    "rating": "\u2753",
    "type": "Enchantment",
    "description": "Effects: Gain the ability to charge up your ground jumps for extra height; additionally, you can dive towards the ground to fall faster. Doing either of these things damages and knocks back nearby enemies. Extremely fun enchantment, though like with Snow Ruffian, its mostly for goofing off and general exploration. Outperformed by Ancient Cobalt in practice, but it\u2019s easier to get. It also helps you get initial height for your Snow Ruffian gliding. I don\u2019t think people use this for boss fights, but it could be fun to try it out."
  },
  {
    "name": "Victide Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Spikes extend from your body, which grant 4 defense while attached; attack to charge the spikes, and release to shoot the spikes. Reasonably okay accessory-based damage to early pre-hardmode bosses. 4 defense isn\u2019t a lot, but I\u2019ll take it."
  },
  {
    "name": "Sulphurous Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants a sulphur double jump that releases a sulphur bubble on use: when you attack the bubble, it emits gas that damages nearby enemies. Reasonably okay accessory-based damage to some pre-hardmode bosses, and this one also has a double jump. Requires you to bother to attack the bubble to get any damage from it."
  },
  {
    "name": "Force of The Elements",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Force",
    "description": "Effects: Grants two modes, which can be switched as an active skill. The default Magma Mode\u2122 increases damage reduction by 30% and defense by 30, and allows you to build up heat while attacking: stop attacking at full heat or get hit to vent heat, which grants Reaver Rage and spawns homing chaos flare projectiles.\n\nBlizzard Mode\u2122 gives increased flight time, flight speed, life regen, hook velocity, and a lower dash cooldown. You also gain up to 50% more damage the longer you stay in the air, and after being in the air for a second without getting hit, your attacks spawn arrows from the sky. The projectiles spawned from each mode are roughly equivalent and are each a nice small damage boost. Magma Mode is obviously ideal for defensive purposes, but keep in mind that 30% damage reduction is much lower than it sounds due to calamity\u2019s diminishing returns on damage reduction. Blizzard Mode is better for offense due to the whopping 50% damage; you\u2019ll want to use it when you\u2019re flying a lot and not landing on platforms very often, or if the assorted mobility benefits are useful.\n\nOne thing you can try to do is get hit, reduce the damage with Magma Mode, then heal it off faster by switching to Blizzard Mode for its life regen, but I don\u2019t know if anyone will ever bother to do this. What I do is pick the mode I want, then switch out the active skill until I want to change modes again.\n\nAs far as which mode is better, I\u2019m not sure, since damage reduction and 30 defense are very good, but so is getting a big damage boost. Pick whatever suits your playstyle."
  },
  {
    "name": "Aerospec Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants +5% crit chance and summon damage whenever you jump or use a double jump: the bonus resets when your jumps are reset or a mount is used. Benefits are maximized after six jumps. Okay damage for people who like to jump around like crazy, and makes the balloon items more worth using. Becomes remarkably powerful when used underwater, as flipper jumps count as jumps, granting up to +30% crit chance and summon damage, or twice as much with the wizard enchantment version. With Spider Enchantment, this becomes a truly formidable summoner damage bonus\u2026 at the cost of having to fight the boss entirely underwater or with Banished Baron\u2019s Rusted Oxygen Tank, which is just enough of a downside to keep this out of five stars territory. Don\u2019t forget your Aquatic Emblem for +50 defense (yes, it\u2019s that powerful for some reason) if you plan on fighting the boss underwater."
  },
  {
    "name": "Daedalus  Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Increases flight time by 25%. After a second in the air without landing or getting hit, your attacks occasionally spawn several special energy arrows from the sky on the cursor. Getting hit also halves your remaining wing time. Big damage. Very big damage! Some bosses are easier to hit with the arrows than others, but a regular daedalus will do a lot of damage, and a wizard-boosted daedalus will do even more damage due to extra arrow damage, amount, and velocity. Extra flight time is nice and helps mitigate the one downside of the enchantment. Just make sure to fly around a lot and avoid landing on platforms, or else you won\u2019t get your cool arrows."
  },
  {
    "name": "Reaver Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants two modes, which can be switched as an active skill. The default Plated Mode gives 15% damage reduction and 15 defense, and taking damage grants Reaver Rage and summons a thorn spike. Swift Mode grants massive life regeneration, increases wing time and speed by 10%, reduces dash cooldown, and increases hook speed. Very similar to its upgraded force version in terms of general tactics and overall usefulness. The wizard version of Plated Mode grants 30 defense and 30% damage reduction, by the way. You can either do the big brained switching thing I mentioned earlier with Force of the Elements or just not bind the active skill and keep using the default Plated Mode. I personally do the latter."
  },
  {
    "name": "Hydrothermic Enchantment",
    "rating": "\u2b50\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Attacking builds up heat, which gives up to 30% damage reduction based on how full the heat meter is: at full heat, stop attacking to vent it, firing chaos flares towards your cursor for 3 seconds while the meter slowly decreases. Getting hit also vents heat, regardless of heat level, with a lower chaos flare duration. 30% damage reduction is a lot, but keep calamity\u2019s damage reduction curve in mind: you\u2019ll have less than 30% in practice. The chaos flares also do good damage if you bother to vent your heat, and the wizard version improves both the chaos flare damage and the venting duration, and it also increases the damage reduction to 45%. Miscellaneous DLC Accessories"
  },
  {
    "name": "Wulfrum Enchantment",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: A drone follows your cursor and scans enemies, telling you their debuff weaknesses/resistances in Calamity\u2019s special elemental debuff type system. Scanned enemies take flat extra damage over time while under the effects of any damaging debuff. Cheap to make with a mild benefit, and unique in that it funnels you down looking up how debuffs work in Calamity, making you go insane as you try to put a debuff build together. Good item, but unequip it when you find something better. Useless if you never inflict a debuff."
  },
  {
    "name": "Marnite Architect Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Grants +10% tile placement speed and +5 tile placement range. Lasers strike nearby enemies when building and mining, grants effects of the Marnite Repulsion Shield, and grants 2 defense. Bad for straightforward combat, but keeps bats from hitting you while you\u2019re mining and protects you while you build your house. Some combat-oriented tools don\u2019t cause you to shoot lasers. There are niche weaponless builds (or tool-based builds) that use this, but that\u2019s really just a meme strategy, so it\u2019s really just good for building and mining."
  },
  {
    "name": "Titan Heart Enchantment",
    "rating": "\u2b50\u2b50",
    "type": "Enchantment",
    "description": "Effects: Adrenaline charges 20% faster, increased to 70% while grounded. You gain additional damage reduction based on your adrenaline charge, up to 15%. Finally, it increases your movement speed and acceleration by 5%. If you can find a boss that lets you run in one direction in a straight line on a platform without taking any damage, this is the perfect enchantment for those bosses! Unfortunately, if you discover any bosses like this cough cough astrum aureus cough cough ravager, you probably didn\u2019t have much trouble killing them anyway. For difficult bosses, Queen Slime is probably the ideal boss for this enchantment, because you can walk on a platform next to or diagonally under the boss and avoid (most of) her attacks, but that\u2019s about it as far as recommendations go.\n\nThe recipe also includes Stress Pills, which are a pain to farm, so good luck with that. The rest is easily obtained by fishing and making the armor set."
  },
  {
    "name": "Outlaw\u2019s Essence",
    "rating": "\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Grants +18% rogue damage, +5% rogue projectile velocity, and +5% rogue critical hit chance. It\u2019s okay. Like usual for essences, it\u2019s mostly just a moderate damage boost and nothing else."
  },
  {
    "name": "Vagabond\u2019s Soul",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Soul",
    "description": "Effects: Grants +30% rogue damage, +15% rogue projectile velocity, and +15% rogue critical hit chance. Additionally, grants the effects of Nanotech and the Eclipse Mirror. Eclipse Mirror is basically mandatory for rogues due to all of the massive bonuses its grants, and this gives you even more bonuses on top of that."
  },
  {
    "name": "Brand of the Brimstone Witch",
    "rating": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "type": "Accessory",
    "description": "Effects: Grants +50 defense, and the benefits of countless endgame Calamity accessories. Effects such as Draedon\u2019s Heart nanomachines can be toggled in the accessory toggle menu.\n\nThe most powerful accessory the DLC adds, and an essential part of any DLC Mutant loadout. Equip this and then don\u2019t unequip it until you craft the Soul of Eternity."
  }
];
