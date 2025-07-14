const iconMap = {
    "Wood Enchantment":
      "https://fargosmods.wiki.gg/images/3/37/Wood_Enchantment.png?bd2d81",
    "Adamantite Enchantment":
      "https://fargosmods.wiki.gg/images/e/ee/Adamantite_Enchantment.png?d11a0e",
    "Ancient Cobalt Enchantment":
      "https://fargosmods.wiki.gg/images/a/a4/Ancient_Cobalt_Enchantment.png?498825&format=original",
    "Ancient Hallowed Enchantment":
      "https://fargosmods.wiki.gg/images/5/52/Ancient_Hallowed_Enchantment.png?d83b61",
    "Ancient Shadow Enchantment":
      "https://fargosmods.wiki.gg/images/8/8d/Ancient_Shadow_Enchantment.png?b03220",
    "Angler Enchantment":
      "https://fargosmods.wiki.gg/images/c/ce/Angler_Enchantment.png?2e7a9f",
    "Apprentice Enchantment":
      "https://fargosmods.wiki.gg/images/2/20/Apprentice_Enchantment.png?59b4d0",
    "Ash Wood Enchantment":
      "https://fargosmods.wiki.gg/images/1/12/Ash_Wood_Enchantment.png?68c33b",
    "Bee Enchantment":
      "https://fargosmods.wiki.gg/images/a/a6/Bee_Enchantment.png?7c7b4f",
    "Beetle Enchantment":
      "https://fargosmods.wiki.gg/images/6/6f/Boreal_Wood_Enchantment.png?1c9359",
    "Boreal Wood Enchantment":
      "https://fargosmods.wiki.gg/images/6/6f/Boreal_Wood_Enchantment.png?1c9359",
    "Cactus Enchantment":
      "https://fargosmods.wiki.gg/images/e/e2/Cactus_Enchantment.png?41c1bf",
    "Chlorophyte Enchantment":
      "https://fargosmods.wiki.gg/images/c/ca/Chlorophyte_Enchantment.png?b0667e",
    "Cobalt Enchantment":
      "https://fargosmods.wiki.gg/images/4/45/Cobalt_Enchantment.png?85ff95",
    "Copper Enchantment":
      "https://fargosmods.wiki.gg/images/7/74/Copper_Enchantment.png?c783b3",
    "Crimson Enchantment":
      "https://fargosmods.wiki.gg/images/b/bf/Crimson_Enchantment.png?fe437b",
    "Crystal Assassin Enchantment":
      "https://fargosmods.wiki.gg/images/1/1e/Crystal_Assassin_Enchantment.png?e9fe57",
    "Dark Artist Enchantment":
      "https://fargosmods.wiki.gg/images/b/ba/Dark_Artist_Enchantment.png?5bd3cb",
    "Ebonwood Enchantment":
      "https://fargosmods.wiki.gg/images/7/7d/Ebonwood_Enchantment.png?5f9000",
    "Forbidden Enchantment":
      "https://fargosmods.wiki.gg/images/4/4b/Forbidden_Enchantment.png?4ea56b",
    "Fossil Enchantment":
      "https://fargosmods.wiki.gg/images/f/fb/Fossil_Enchantment.png?d65580",
    "Frost Enchantment":
      "https://fargosmods.wiki.gg/images/f/f0/Frost_Enchantment.png?9efd20",
    "Gladiator Enchantment":
      "https://fargosmods.wiki.gg/images/f/f1/Gladiator_Enchantment.png?7f50e7",
    "Gold Enchantment":
      "https://fargosmods.wiki.gg/images/6/63/Gold_Enchantment.png?ae6009",
    "Hallowed Enchantment":
      "https://fargosmods.wiki.gg/images/6/6e/Hallowed_Enchantment.png?6a6db4",
    "Huntress Enchantment":
      "https://fargosmods.wiki.gg/images/b/be/Huntress_Enchantment.png?9ee3d9",
    "Iron Enchantment":
      "https://fargosmods.wiki.gg/images/9/9e/Iron_Enchantment.png?f5f309",
    "Jungle Enchantment":
      "https://fargosmods.wiki.gg/images/f/fb/Jungle_Enchantment.png?bfd4e5",
    "Lead Enchantment":
      "https://fargosmods.wiki.gg/images/2/2a/Lead_Enchantment.png?b27a9c",
    "Meteor Enchantment":
      "https://fargosmods.wiki.gg/images/2/27/Meteor_Enchantment.png?c819eb",
    "Miner Enchantment":
      "https://fargosmods.wiki.gg/images/9/93/Miner_Enchantment.png?dde8f1",
    "Molten Enchantment":
      "https://fargosmods.wiki.gg/images/a/a1/Molten_Enchantment.png?496bb1",
    "Monk Enchantment":
      "https://fargosmods.wiki.gg/images/4/45/Monk_Enchantment.png?34f376",
    "Mythril Enchantment":
      "https://fargosmods.wiki.gg/images/d/da/Mythril_Enchantment.png?f520fd",
    "Nebula Enchantment":
      "https://fargosmods.wiki.gg/images/d/d5/Nebula_Enchantment.png?b863fd",
    "Necro Enchantment":
      "https://fargosmods.wiki.gg/images/a/a9/Necro_Enchantment.png?7bab6a",
    "Ninja Enchantment":
      "https://fargosmods.wiki.gg/images/2/21/Ninja_Enchantment.png?59cacc",
    "Obsidian Enchantment":
      "https://fargosmods.wiki.gg/images/5/5e/Obsidian_Enchantment.png?8a5d00",
    "Orichalcum Enchantment":
      "https://fargosmods.wiki.gg/images/2/2b/Orichalcum_Enchantment.png?a8ea78",
    "Palladium Enchantment":
      "https://fargosmods.wiki.gg/images/f/f3/Palladium_Enchantment.png?61b199",
    "Palm Wood Enchantment":
      "https://fargosmods.wiki.gg/images/e/e3/Palm_Wood_Enchantment.png?c3e4b1",
    "Pearlwood Enchantment":
      "https://fargosmods.wiki.gg/images/5/54/Pearlwood_Enchantment.png?78a28a",
    "Platinum Enchantment":
      "https://fargosmods.wiki.gg/images/3/3a/Platinum_Enchantment.png?347407",
    "Pumpkin Enchantment":
      "https://fargosmods.wiki.gg/images/3/3d/Pumpkin_Enchantment.png?48d6c7",
    "Rain Enchantment":
      "https://fargosmods.wiki.gg/images/3/3f/Rain_Enchantment.png?c78e6a",
    "Red Riding Enchantment":
      "https://fargosmods.wiki.gg/images/e/e3/Red_Riding_Enchantment.png?795963",
    "Rich Mahogany Enchantment":
      "https://fargosmods.wiki.gg/images/5/5a/Rich_Mahogany_Enchantment.png?b28d23",
    "Shadewood Enchantment":
      "https://fargosmods.wiki.gg/images/3/3e/Shadewood_Enchantment.png?6882c0",
    "Shadow Enchantment":
      "https://fargosmods.wiki.gg/images/3/38/Shadow_Enchantment.png?cdea6a",
    "Shinobi Infiltrator Enchantment":
      "https://fargosmods.wiki.gg/images/9/93/Shinobi_Infiltrator_Enchantment.png?9541f6",
    "Shroomite Enchantment":
      "https://fargosmods.wiki.gg/images/0/04/Shroomite_Enchantment.png?1be791",
    "Silver Enchantment":
      "https://fargosmods.wiki.gg/images/8/8f/Silver_Enchantment.png?2b0e19",
    "Snow Enchantment":
      "https://fargosmods.wiki.gg/images/a/ab/Snow_Enchantment.png?7efdca",
    "Solar Enchantment":
      "https://fargosmods.wiki.gg/images/6/67/Solar_Enchantment.png?d10545",
    "Spectre Enchantment":
      "https://fargosmods.wiki.gg/images/9/9c/Spectre_Enchantment.png?5905a8",
    "Spider Enchantment":
      "https://fargosmods.wiki.gg/images/b/b9/Spider_Enchantment.png?3089c3",
    "Spooky Enchantment":
      "https://fargosmods.wiki.gg/images/b/b2/Spooky_Enchantment.png?859caa",
    "Squire Enchantment":
      "https://fargosmods.wiki.gg/images/d/d9/Squire_Enchantment.png?97b546",
    "Stardust Enchantment":
      "https://fargosmods.wiki.gg/images/1/13/Stardust_Enchantment.png?96c141",
    "Tiki Enchantment":
      "https://fargosmods.wiki.gg/images/4/4a/Tiki_Enchantment.png?543280",
    "Tin Enchantment":
      "https://fargosmods.wiki.gg/images/c/c6/Tin_Enchantment.png?4bc69e",
    "Titanium Enchantment":
      "https://fargosmods.wiki.gg/images/c/c2/Titanium_Enchantment.png?bc5ec1",
    "Tungsten Enchantment":
      "https://fargosmods.wiki.gg/images/0/0a/Tungsten_Enchantment.png?85af74",
    "Turtle Enchantment":
      "https://fargosmods.wiki.gg/images/d/dc/Turtle_Enchantment.png?c6ed34",
    "Valhalla Knight Enchantment":
      "https://fargosmods.wiki.gg/images/2/2c/Valhalla_Knight_Enchantment.png?9bbed8",
    "Vortex Enchantment":
      "https://fargosmods.wiki.gg/images/2/28/Vortex_Enchantment.png?5812ba",
    "Wizard Enchantment":
      "https://fargosmods.wiki.gg/images/7/74/Wizard_Enchantment.png?a1df62",
    "Force of Cosmos":
      "https://fargosmods.wiki.gg/images/b/b4/Force_of_Cosmos.png?b6802d",
    "Force of Death":
      "https://fargosmods.wiki.gg/images/2/24/Force_of_Death.png?e567a7",
    "Force of Earth":
      "https://fargosmods.wiki.gg/images/1/15/Force_of_Earth.png?d426e6",
    "Force of Life":
      "https://fargosmods.wiki.gg/images/0/08/Force_of_Life.png?190b8e",
    "Force of Nature":
      "https://fargosmods.wiki.gg/images/2/29/Force_of_Nature.png?46e4e8",
    "Force of Spirit":
      "https://fargosmods.wiki.gg/images/2/2b/Force_of_Spirit.png?5f0cbd",
    "Force of Terra":
      "https://fargosmods.wiki.gg/images/2/29/Force_of_Terra.png?a0d0d3",
    "Force of Timber":
      "https://fargosmods.wiki.gg/images/b/bd/Force_of_Timber.png?f13539",
    "Force of Will":
      "https://fargosmods.wiki.gg/images/d/d2/Force_of_Will.png?aafe81",
    "Apprentice\u2019s Essence":
      "https://fargosmods.wiki.gg/images/1/11/Apprentice%27s_Essence.png?125979",
    "Barbarian\u2019s Essence":
      "https://fargosmods.wiki.gg/images/b/b7/Barbarian%27s_Essence.png?ddb12a",
    "Occultist\u2019s Essence":
      "https://fargosmods.wiki.gg/images/8/8b/Occultist%27s_Essence.png?370db0",
    "Sharpshooter\u2019s Essence":
      "https://fargosmods.wiki.gg/images/6/68/Sharpshooter%27s_Essence.png?df2506",
    "Arch Wizard\u2019s Soul":
      "https://fargosmods.wiki.gg/images/6/69/Arch_Wizard%27s_Soul.png?1ab601",
    "Berserker\u2019s Soul":
      "https://fargosmods.wiki.gg/images/e/ed/Berserker%27s_Soul.png?fc57f9",
    "Colossus Soul":
      "https://fargosmods.wiki.gg/images/b/bc/Colossus_Soul.png?dba466",
    "Conjurist\u2019s Soul":
      "https://fargosmods.wiki.gg/images/3/3d/Conjurist%27s_Soul.png?d3b948",
    "Flight Mastery Soul":
      "https://fargosmods.wiki.gg/images/9/90/Flight_Mastery_Soul.png?f2437e",
    "Sniper\u2019s Soul":
      "https://fargosmods.wiki.gg/images/4/44/Sniper%27s_Soul.png?ab4d4c",
    "Soul of Dimensions":
      "https://fargosmods.wiki.gg/images/5/57/Soul_of_Dimensions.gif?9dcac3",
    "Soul of Eternity":
      "https://fargosmods.wiki.gg/images/9/99/Soul_of_Eternity.gif?e3979f",
    "Soul of Terraria":
      "https://fargosmods.wiki.gg/images/f/f5/Soul_of_Terraria.gif?ac4b28",
    "Soul of the Master":
      "https://fargosmods.wiki.gg/images/a/a2/Soul_of_the_Master.png?7fe6b5",
    "Soul of the Universe":
      "https://fargosmods.wiki.gg/images/d/d9/Soul_of_the_Universe.gif?e3e6a5",
    "Supersonic Soul":
      "https://fargosmods.wiki.gg/images/c/c5/Supersonic_Soul.png?e55a3d",
    "Trawler Soul":
      "https://fargosmods.wiki.gg/images/9/95/Trawler_Soul.png?66580e",
    "World Shaper Soul":
      "https://fargosmods.wiki.gg/images/9/91/World_Shaper_Soul.png?f58d8f",
    "Abominable Wand":
      "https://fargosmods.wiki.gg/images/b/be/Abominable_Wand.gif?bec4ef",
    "Aeolus Boots":
      "https://fargosmods.wiki.gg/images/d/d6/Aeolus_Boots.png?9248ed",
    "Agitating Lens":
      "https://fargosmods.wiki.gg/images/d/d8/Agitating_Lens.png?cf19a2",
    "Bionomic Cluster":
      "https://fargosmods.wiki.gg/images/f/f4/Bionomic_Cluster.png?2558c3",
    "Box of Gizmos":
      "https://fargosmods.wiki.gg/images/2/22/Box_of_Gizmos.png?a30e89",
    "Celestial Rune":
      "https://fargosmods.wiki.gg/images/2/20/Celestial_Rune.png?a98a51",
    "Chalice of the Moon":
      "https://fargosmods.wiki.gg/images/6/6d/Chalice_of_the_Moon.png?608d76",
    "Computation Orb":
      "https://fargosmods.wiki.gg/images/1/1d/Computation_Orb.png?190d86",
    "Concentrated Rainbow Matter":
      "https://fargosmods.wiki.gg/images/5/5c/Concentrated_Rainbow_Matter.png?7ad6e3",
    "Cosmic Core":
      "https://fargosmods.wiki.gg/images/1/18/Cosmic_Core.gif?9bf09d",
    "Crystal Skull":
      "https://fargosmods.wiki.gg/images/f/f3/Crystal_Skull.png?976600",
    "Darkened Heart":
      "https://fargosmods.wiki.gg/images/8/8c/Darkened_Heart.png?93950e",
    "Dread Shell":
      "https://fargosmods.wiki.gg/images/f/f2/Dread_Shell.png?392784",
    "Dubious Circuitry":
      "https://fargosmods.wiki.gg/images/6/64/Dubious_Circuitry.png?db516d",
    "Eurus Socks":
      "https://fargosmods.wiki.gg/images/6/66/Eurus_Socks.png?f9bcf4",
    "Frigid Grasp":
      "https://fargosmods.wiki.gg/images/4/41/Frigid_Grasp.png?51dd11",
    "Fused Lens":
      "https://fargosmods.wiki.gg/images/8/83/Fused_Lens.png?687e60",
    "Gutted Heart":
      "https://fargosmods.wiki.gg/images/3/34/Gutted_Heart.png?39c4ef",
    "Heart of the Master":
      "https://fargosmods.wiki.gg/images/f/f8/Heart_of_the_Master.gif?936db2",
    "Ice Queen\u2019s Crown":
      "https://fargosmods.wiki.gg/images/6/6b/Ice_Queen%27s_Crown.png?a9a938",
    "Lizhard Treasure Box":
      "https://fargosmods.wiki.gg/images/6/66/Lihzahrd_Treasure_Box.png?d8a096",
    "Lump of Flesh":
      "https://fargosmods.wiki.gg/images/d/d7/Lump_of_Flesh.png?80bba6",
    "Medallion of the Fallen King":
      "https://fargosmods.wiki.gg/images/0/02/Medallion_of_the_Fallen_King.png?1ffc66",
    "Mutant Antibodies":
      "https://fargosmods.wiki.gg/images/8/8e/Mutant_Antibodies.png?5ae94c",
    "Mutant Eye":
      "https://fargosmods.wiki.gg/images/f/fb/Mutant_Eye.gif?309e06",
    "Mystic Skull":
      "https://fargosmods.wiki.gg/images/8/8c/Mystic_Skull.gif?d4093c",
    "Necromantic Brew":
      "https://fargosmods.wiki.gg/images/8/83/Necromantic_Brew.png?372323",
    "Nymph\u2019s Perfume":
      "https://fargosmods.wiki.gg/images/3/38/Nymph%27s_Perfume.png?9791c0",
    "Paradox Wolf Soul":
      "https://fargosmods.wiki.gg/images/2/2d/Paradox_Wolf_Soul.png?11fc9c",
    "Precision Seal":
      "https://fargosmods.wiki.gg/images/e/ee/Precision_Seal.png?458968",
    "Puff in a Bottle":
      "https://fargosmods.wiki.gg/images/f/f4/Puff_in_a_Bottle.png?f6fbc3",
    "Pumpking\u2019s Cape":
      "https://fargosmods.wiki.gg/images/e/e1/Pumpking%27s_Cape.png?ba5684",
    "Pungent Eyeball":
      "https://fargosmods.wiki.gg/images/0/06/Pungent_Eyeball.png?3491ac",
    "Razor Container":
      "https://fargosmods.wiki.gg/images/f/f3/Razor_Container.png?c70558",
    "Reinforced Plating":
      "https://fargosmods.wiki.gg/images/7/7f/Reinforced_Plating.png?b78f72",
    "Remote Control":
      "https://fargosmods.wiki.gg/images/f/f4/Remote_Control.png?65810b",
    "Security Wallet":
      "https://fargosmods.wiki.gg/images/4/42/Security_Wallet.png?e260cb",
    "Sinister Icon":
      "https://fargosmods.wiki.gg/images/4/48/Sinister_Icon.png?7b9327",
    "Slimy Shield":
      "https://fargosmods.wiki.gg/images/2/24/Slimy_Shield.png?435062",
    "Sparkling Adoration":
      "https://fargosmods.wiki.gg/images/1/1f/Sparkling_Adoration.gif?dcdf4b",
    "Squeaky Toy":
      "https://fargosmods.wiki.gg/images/8/84/Squeaky_Toy.png?bde24b",
    "Supreme Deathbringer Fairy":
      "https://fargosmods.wiki.gg/images/2/2b/Supreme_Deathbringer_Fairy.png?c84b63",
    "The Queen\u2019s Stinger":
      "https://fargosmods.wiki.gg/images/0/0f/The_Queen%27s_Stinger.png?d18b71",
    "Tim\u2019s Concoction":
      "https://fargosmods.wiki.gg/images/2/28/Tim%27s_Concoction.png?91dac2",
    "Tribal Charm":
      "https://fargosmods.wiki.gg/images/d/d3/Tribal_Charm.png?3afa0e",
    "Verdant Doomsayer Mask":
      "https://fargosmods.wiki.gg/images/b/b8/Verdant_Doomsayer_Mask.png?6b4591",
    "Wretched Pouch":
      "https://fargosmods.wiki.gg/images/3/36/Wretched_Pouch.png?303706",
    "Wyvern Feather":
      "https://fargosmods.wiki.gg/images/d/da/Wyvern_Feather.png?5a8d19",
    "Zephyr Boots":
      "https://fargosmods.wiki.gg/images/c/ce/Zephyr_Boots.png?f01e35",
    "Aerospec Enchantment":
      "https://fargosmods.wiki.gg/images/2/21/Aerospec_Enchantment.png?fbfe1b",
    "Desert Prowler Enchantment":
      "https://fargosmods.wiki.gg/images/1/14/Desert_Prowler_Enchantment.png?39bce9",
    "Marnite Architect Enchantment":
      "https://fargosmods.wiki.gg/images/d/dc/Marnite_Architect_Enchantment.png?5f8f34",
    "Snow Ruffian Enchantment":
      "https://fargosmods.wiki.gg/images/e/e1/Snow_Ruffian_Enchantment.png?189656",
    "Sulphurous Enchantment":
      "https://fargosmods.wiki.gg/images/d/d7/Sulphur_Enchantment.png?e5ed4e",
    "Victide Enchantment":
      "https://fargosmods.wiki.gg/images/8/8f/Victide_Enchantment.png?b50208",
    "Daedalus Enchantment":
      "https://fargosmods.wiki.gg/images/d/d5/Daedalus_Enchantment.png?f4fbff",
    "Hydrothermic Enchantment":
      "https://fargosmods.wiki.gg/images/1/13/Hydrothermic_Enchantment.png?769634",
    "Reaver Enchantment":
      "https://fargosmods.wiki.gg/images/6/64/Reaver_Enchantment.png?750db1",
    "Statigel Enchantment":
      "https://fargosmods.wiki.gg/images/e/ec/Statigel_Enchantment.png?4f5793",
    "Titan Heart Enchantment":
      "https://fargosmods.wiki.gg/images/1/15/Titan_Heart_Enchantment.png?9116af",
    "Wulfrum Enchantment":
      "https://fargosmods.wiki.gg/images/8/8d/Wulfrum_Enchantment.png?772cfe",
    "Force of the Elements":
      "https://fargosmods.wiki.gg/images/0/0e/Force_of_the_Elements.png?d11af0",
    "Force of the Gale":
      "https://fargosmods.wiki.gg/images/7/7f/Force_of_the_Gale.png?c78b26",
    "Outlaw\u2019s Essence":
      "https://fargosmods.wiki.gg/images/6/6b/Outlaw%27s_Essence.png?ee2f09",
    "Vagabond\u2019s Soul":
      "https://fargosmods.wiki.gg/images/9/9f/Vagabond%27s_Soul.png?15fb14",
    "Brand of the Brimstone Witch":
      "https://fargosmods.wiki.gg/images/c/ce/Brand_of_the_Brimstone_Witch.png?a00ed6",
    "Sands of Time":
      "https://fargosmods.wiki.gg/images/7/7b/Sands_of_Time.png?b08270",
    "Pure Heart":
      "https://fargosmods.wiki.gg/images/e/ed/Pure_Heart.png?dd0a59",
    "Gelic Wings":
      "https://fargosmods.wiki.gg/images/f/ff/Gelic_Wings.png?a125b3",
    Deerclawps:
      "https://fargosmods.wiki.gg/images/4/40/Deerclawps.png?e97e1d",
    "Magical Bulb":
      "https://fargosmods.wiki.gg/images/3/3a/Magical_Bulb.png?d6dbd1",
    "Lihzahrd Treasure Box":
      "https://fargosmods.wiki.gg/images/6/66/Lihzahrd_Treasure_Box.png?d8a096",
    "Saucer Control Console":
      "https://fargosmods.wiki.gg/images/3/3a/Saucer_Control_Console.png?faf8d2",
    "Betsy\u2019s Heart":
      "https://fargosmods.wiki.gg/images/a/a5/Betsy%27s_Heart.png?d1157d",
    "King Slime":
      "https://terraria.wiki.gg/images/thumb/5/5e/Map_Icon_King_Slime.png/24px-Map_Icon_King_Slime.png?562680",
    "Eye of Cthulhu":
      "https://terraria.wiki.gg/images/thumb/a/a1/Map_Icon_Eye_of_Cthulhu_%28first_form%29.png/24px-Map_Icon_Eye_of_Cthulhu_%28first_form%29.png?1b90a8",
    "Eater of Worlds":
      "https://terraria.wiki.gg/images/7/75/Map_Icon_Eater_of_Worlds.png?36686b",
    "Brain of Cthulhu":
      "https://terraria.wiki.gg/images/thumb/f/fb/Map_Icon_Brain_of_Cthulhu.png/24px-Map_Icon_Brain_of_Cthulhu.png?16b3e8",
    "Queen Bee":
      "https://terraria.wiki.gg/images/thumb/c/c6/Map_Icon_Queen_Bee.png/24px-Map_Icon_Queen_Bee.png?fb556e",
    Skeletron:
      "https://terraria.wiki.gg/images/thumb/f/f4/Map_Icon_Skeletron.png/24px-Map_Icon_Skeletron.png?e9491e",
    Deerclops:
      "https://terraria.wiki.gg/images/thumb/c/c9/Map_Icon_Deerclops.png/24px-Map_Icon_Deerclops.png?7e136a",
    "Wall of Flesh":
      "https://terraria.wiki.gg/images/thumb/d/d4/Map_Icon_Wall_of_Flesh.png/24px-Map_Icon_Wall_of_Flesh.png?670a42",
    "Queen Slime":
      "https://terraria.wiki.gg/images/thumb/9/95/Map_Icon_Queen_Slime.png/24px-Map_Icon_Queen_Slime.png?3ee22f",
    "The Twins":
      "https://terraria.wiki.gg/images/thumb/c/cd/Map_Icon_Twins_%28combined%29.png/24px-Map_Icon_Twins_%28combined%29.png?e09adf",
    Destroyer:
      "https://terraria.wiki.gg/images/6/6f/Map_Icon_The_Destroyer.png?afef19",
    "Skeletron Prime":
      "https://terraria.wiki.gg/images/thumb/b/be/Map_Icon_Skeletron_Prime.png/24px-Map_Icon_Skeletron_Prime.png?6176b4",
    Plantera:
      "https://terraria.wiki.gg/images/thumb/a/ab/Map_Icon_Plantera_%28first_form%29.png/24px-Map_Icon_Plantera_%28first_form%29.png?82259e",
    Golem:
      "https://terraria.wiki.gg/images/thumb/b/b7/Map_Icon_Golem.png/24px-Map_Icon_Golem.png?c525a1",
    "Empress of Light":
      "https://terraria.wiki.gg/images/thumb/5/5d/Map_Icon_Empress_of_Light.png/24px-Map_Icon_Empress_of_Light.png?d661ba",
    "Duke Fishron":
      "https://terraria.wiki.gg/images/thumb/e/e9/Map_Icon_Duke_Fishron.png/24px-Map_Icon_Duke_Fishron.png?bea35f",
    "Lunatic Cultist":
      "https://terraria.wiki.gg/images/thumb/6/68/Map_Icon_Lunatic_Cultist.png/24px-Map_Icon_Lunatic_Cultist.png?aa94cd",
    "Moon Lord":
      "https://terraria.wiki.gg/images/thumb/8/82/Map_Icon_Moon_Lord.png/24px-Map_Icon_Moon_Lord.png?d0327b",
    "Trojan Squirrel":
      "https://fargosmods.wiki.gg/images/thumb/9/90/Map_Icon_Trojan_Squirrel.png/20px-Map_Icon_Trojan_Squirrel.png?ad10a1",
    Deviantt:
      "https://fargosmods.wiki.gg/images/thumb/e/e3/Map_Icon_Deviantt_%28boss%29.png/20px-Map_Icon_Deviantt_%28boss%29.png?2e3df9",
    Eridanus:
      "https://fargosmods.wiki.gg/images/thumb/d/d1/Map_Icon_Eridanus.png/20px-Map_Icon_Eridanus.png?d592b0",
    Abominationn:
      "https://fargosmods.wiki.gg/images/thumb/2/27/Map_Icon_Abominationn_%28boss%29.png/20px-Map_Icon_Abominationn_%28boss%29.png?395389",
    Mutant:
      "https://fargosmods.wiki.gg/images/thumb/b/b9/Map_Icon_Mutant_%28boss%29.png/20px-Map_Icon_Mutant_%28boss%29.png?c432f8",
    "Desert Scourge":
      "https://calamitymod.wiki.gg/images/thumb/6/6d/Desert_Scourge_map.png/25px-Desert_Scourge_map.png?490817",
    "Perforators/Hive Mind":
      "https://calamitymod.wiki.gg/images/thumb/e/e3/Perforator_Hive_map.png/25px-Perforator_Hive_map.png?8938ce",
    "Slime God":
      "https://calamitymod.wiki.gg/images/thumb/4/41/Slime_God_Core_map.png/20px-Slime_God_Core_map.png?31e484",
    Providence:
      "https://calamitymod.wiki.gg/images/thumb/f/fb/Providence_map.png/35px-Providence_map.png?d8559f",
    "Supreme Calamitas":
      "https://calamitymod.wiki.gg/images/thumb/a/a4/Calamitas_map.png/25px-Calamitas_map.png?ac6665",
    Cryogen:
      "https://calamitymod.wiki.gg/images/thumb/1/1e/Cryogen_map.png/25px-Cryogen_map.png?a96d3d",
    "No Bosses":
      "https://terraria.wiki.gg/images/9/98/Map_Icon_Guide.png?53b805",
    "Mech Bosses":
      "https://terraria.wiki.gg/images/thumb/9/91/Ocram%27s_Razor.png/25px-Ocram%27s_Razor.png?c7c23c",
    "First Mech Boss":
      "https://terraria.wiki.gg/images/5/59/Mechanical_Cart.png?5a7b36",
     "Betsy": "https://terraria.wiki.gg/images/8/84/Map_Icon_Betsy.png?5b60a8", 
     "Yharon": "https://calamitymod.wiki.gg/images/thumb/7/70/Yharon_map.png/25px-Yharon_map.png?c3624d",
     "Soul of Terraria": "https://fargosmods.wiki.gg/images/f/f5/Soul_of_Terraria.gif?ac4b28",
     "Miscellaneous": "https://fargosmods.wiki.gg/images/5/5c/Concentrated_Rainbow_Matter.png?7ad6e3"
  };