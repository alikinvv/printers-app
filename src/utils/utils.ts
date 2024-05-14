import { IProductUpdate } from 'store'

export const getProductUpdate = (vendor: string): IProductUpdate[] => {
    switch (vendor) {
        case 'AH01':
            return [
                {
                    path: 'ArkhamHorror/AnomallyHolder.gcode',
                    count: 1,
                },
                {
                    path: 'ArkhamHorror/AnomallyHolder-6.gcode',
                    count: 6,
                },
            ]
        case 'AH02':
            return [
                {
                    path: 'ArkhamHorror/ShopHolder-2.gcode',
                    count: 2,
                },
            ]
        case 'AH03':
            return [
                {
                    path: 'ArkhamHorror/CardsHolder-4.gcode',
                    count: 4,
                },
            ]
        case 'AH04':
            return [
                {
                    path: 'ArkhamHorror/HeartSet.gcode',
                    count: 1,
                },
            ]
        case 'AH05t':
            return [
                {
                    path: 'ArkhamHorror/DoomsSet-second.gcode',
                    count: 1,
                },
            ]
        case 'AH061':
            return [
                {
                    path: 'ArkhamHorror/CapsuleSet.gcode',
                    count: 1,
                },
            ]
        case 'AH007':
            return [
                {
                    path: 'ArkhamHorror/MonsterStandSet-3.gcode',
                    count: 3,
                },
            ]
        case 'AH08':
            return [
                {
                    path: 'ArkhamHorror/TrophySet-3.gcode',
                    count: 3,
                },
            ]
        case 'AH09':
            return [
                {
                    path: 'ArkhamHorror/MagneticDeck-3.gcode',
                    count: 3,
                },
            ]
        case 'AH10':
            return [
                {
                    path: 'ArkhamHorrorLCG/Cthulhu-2.gcode',
                    count: 1,
                },
            ]
        case 'AH11':
            return [
                {
                    path: 'ArkhamHorrorLCG/Rift-3.gcode',
                    count: 1,
                },
            ]
        case 'AH12':
            return [
                {
                    path: 'EldritchHorror/InvistigatorHolder-2.gcode',
                    count: 2,
                },
            ]
        case 'AH13':
            return [
                {
                    path: 'EldritchHorror/SmallCardsHolder-2.gcode',
                    count: 1,
                },
            ]
        case 'AH14':
            return [
                {
                    path: 'EldritchHorror/BigCardsHolder-2.gcode',
                    count: 1,
                },
            ]

        case 'LCG002':
            return [
                {
                    path: 'ArkhamHorrorLCG/HeartsSet.gcode',
                    count: 1,
                },
                {
                    path: 'ArkhamHorrorLCG/HeartsSet-2.gcode',
                    count: 3,
                },
            ]
        case 'LCG03':
            return [
                {
                    path: 'ArkhamHorrorLCG/ArrowsSetNew-2.gcode',
                    count: 2,
                },
                {
                    path: 'ArkhamHorrorLCG/ArrowsSetNew-3.gcode',
                    count: 3,
                },
                {
                    path: 'ArkhamHorrorLCG/ArrowsSetNew-4.gcode',
                    count: 4,
                },
            ]
        case 'LCG04':
            return [
                {
                    path: 'ArkhamHorrorLCG/DoomsSet-2-second.gcode',
                    count: 2,
                },
            ]
        case 'LCG05':
            return [
                {
                    path: 'ArkhamHorrorLCG/MagicChargeSet-1.gcode',
                    count: 1,
                },
                {
                    path: 'ArkhamHorrorLCG/MagicChargeSet-5.gcode',
                    count: 5,
                },
            ]
        case 'LCG06':
            return [
                {
                    path: 'ArkhamHorrorLCG/MedkitSet-10-second.gcode',
                    count: 10,
                },
            ]
        case 'LCG07':
            return [
                {
                    path: 'ArkhamHorrorLCG/ResourceSet.gcode',
                    count: 1,
                },
                {
                    path: 'ArkhamHorrorLCG/ResourceSet-4.gcode',
                    count: 4,
                },
            ]
        case 'LCG08':
            return [
                {
                    path: 'ArkhamHorrorLCG/Agenda-2.gcode',
                    count: 2,
                },
            ]
        case 'LCG10':
            return [
                {
                    path: 'ArkhamHorrorLCG/Matt-1.gcode',
                    count: 1,
                },
                {
                    path: 'ArkhamHorrorLCG/Matt-2.gcode',
                    count: 2,
                },
            ]
        case 'LCG010':
            return [
                {
                    path: 'ArkhamHorrorLCG/CapsuleSet!.gcode',
                    count: 1,
                },
            ]
        case 'LCG11':
            return [
                {
                    path: 'ArkhamHorrorLCG/PlayerStandSet-5.gcode',
                    count: 5,
                },
            ]
        case 'LCG012':
            return [
                {
                    path: 'ArkhamHorror/MonsterStandSet-3.gcode',
                    count: 3,
                },
            ]
        case 'LCG0013':
            return [
                {
                    path: 'ArkhamHorrorLCG/MagneticDeck-3.gcode',
                    count: 3,
                },
            ]
        case 'LCG14':
            return [
                {
                    path: 'ArkhamHorrorLCG/Cthulhu-2.gcode',
                    count: 1,
                },
            ]

        case 'TM01':
            return [
                {
                    path: 'TerraformingMars/PlayerToken-5!.gcode',
                    count: 5,
                },
            ]
        case 'TM02':
            return [
                {
                    path: 'TerraformingMars/Genereations-1.gcode',
                    count: 1,
                },
                {
                    path: 'TerraformingMars/Genereations-5.gcode',
                    count: 5,
                },
            ]
        case 'TM03':
            return [
                {
                    path: 'TerraformingMars/CubesSet.gcode',
                    count: 1,
                },
            ]
        case 'TM04':
            return [
                {
                    path: 'TerraformingMars/TokenCounters-1-second!.gcode',
                    count: 1,
                },
                {
                    path: 'TerraformingMars/TokenCounters-2-second!.gcode',
                    count: 2,
                },
                {
                    path: 'TerraformingMars/TokenCounters-3-second!.gcode',
                    count: 3,
                },
            ]
        case 'TM06':
            return [
                {
                    path: 'TerraformingMars/CardsBox-1.gcode',
                    count: 1,
                },
                {
                    path: 'TerraformingMars/CardsBox-2.gcode',
                    count: 2,
                },
                {
                    path: 'TerraformingMars/CardsBox-3.gcode',
                    count: 3,
                },
            ]
        case 'TM08n':
            return [
                {
                    path: 'TerraformingMars/TilesHolder-2.gcode',
                    count: 2,
                },
            ]
        case 'TM10':
            return [
                {
                    path: 'TerraformingMars/ResourceHolder.gcode',
                    count: 1,
                },
                {
                    path: 'TerraformingMars/ResourceHolder-2.gcode',
                    count: 2,
                },
            ]
        case 'TM11':
            return [
                {
                    path: 'TerraformingMars/ActionsSet-1.gcode',
                    count: 1,
                },
            ]

        case 'MOM01':
            return [
                {
                    path: 'MansionsOfMadness/DoorsSet.gcode',
                    count: 1,
                },
                {
                    path: 'MansionsOfMadness/DoorsSet-2.gcode',
                    count: 2,
                },
            ]
        case 'MOM02':
            return [
                {
                    path: 'MansionsOfMadness/TrapdoorSet-2.gcode',
                    count: 2,
                },
                {
                    path: 'MansionsOfMadness/TrapdoorSet-4.gcode',
                    count: 4,
                },
            ]
        case 'MOM03':
            return [
                {
                    path: 'MansionsOfMadness/BooksSet.gcode',
                    count: 1,
                },
                {
                    path: 'MansionsOfMadness/BooksSet-2.gcode',
                    count: 2,
                },
            ]
        case 'MOM04':
            return [
                {
                    path: 'MansionsOfMadness/SightTokenSet-2.gcode',
                    count: 2,
                },
            ]
        case 'MOM05':
            return [
                {
                    path: 'MansionsOfMadness/InteractTokenSet-2.gcode',
                    count: 2,
                },
            ]
        case 'MOM07':
            return [
                {
                    path: 'MansionsOfMadness/CardsSmall-1.gcode',
                    count: 1,
                },
                {
                    path: 'MansionsOfMadness/CardsSmall-3.gcode',
                    count: 3,
                },
            ]
        case 'MOM007':
            return [
                {
                    path: 'MansionsOfMadness/CardsBig-1.gcode',
                    count: 1,
                },
            ]
        case 'MOM09':
            return [
                {
                    path: 'MansionsOfMadness/CardsMiddle-1.gcode',
                    count: 1,
                },
                {
                    path: 'MansionsOfMadness/CardsMiddle-2.gcode',
                    count: 2,
                },
            ]
        case 'MOM10':
            return [
                {
                    path: 'MansionsOfMadness/WallsSet-1.gcode',
                    count: 1,
                },
                {
                    path: 'MansionsOfMadness/WallsSet-2.gcode',
                    count: 2,
                },
            ]
        case 'MOM11':
            return [
                {
                    path: 'MansionsOfMadness/FireTokenSet-1-second.gcode',
                    count: 1,
                },
                {
                    path: 'MansionsOfMadness/FireTokenSet-2-second.gcode',
                    count: 2,
                },
            ]
        case 'MOM12':
            return [
                {
                    path: 'MansionsOfMadness/NPCHolderSet.gcode',
                    count: 1,
                },
                {
                    path: 'MansionsOfMadness/NPCHolderSet-5.gcode',
                    count: 5,
                },
            ]

        case 'GOT01':
            return [
                {
                    path: 'GameOfThrones/6Ship-10WarriorYellow.gcode',
                    count: 1,
                },
            ]
        case 'GOT01brown':
            return [
                {
                    path: 'GameOfThrones/6Ship-10WarriorBrown.gcode',
                    count: 1,
                },
            ]
        case 'GOT01black':
            return [
                {
                    path: 'GameOfThrones/6Ship-10WarriorBlack.gcode',
                    count: 1,
                },
            ]
        case 'GOT01white':
            return [
                {
                    path: 'GameOfThrones/6Ship-10WarriorWhite.gcode',
                    count: 1,
                },
            ]
        case 'GOT01green':
            return [
                {
                    path: 'GameOfThrones/6Ship-10WarriorGreen.gcode',
                    count: 1,
                },
            ]
        case 'GOT01red':
            return [
                {
                    path: 'GameOfThrones/6Ship-10WarriorRed.gcode',
                    count: 1,
                },
            ]
        case 'GOT02':
            return [
                {
                    path: 'GameOfThrones/PhaseHolder-2.gcode',
                    count: 1,
                },
            ]
        case 'GOT03':
            return [
                {
                    path: 'GameOfThrones/PlayerBoard-1!.gcode',
                    count: 1,
                },
            ]
        case 'GOT04':
            return [
                {
                    path: 'GameOfThrones/PlayerCardHolder-1!.gcode',
                    count: 1,
                },
            ]
        case 'GOT05':
            return [
                {
                    path: 'GameOfThrones/Castle-2Barrel-2!.gcode',
                    count: 2,
                },
            ]
        case 'GOT06':
            return [
                {
                    path: 'GameOfThrones/Castle-2Barrel-2!.gcode',
                    count: 2,
                },
            ]

        case 'JCK01':
            return [
                {
                    path: 'Jackal/Pirate-1!.gcode',
                    count: 1,
                },
                {
                    path: 'Jackal/Pirate-3!.gcode',
                    count: 3,
                },
            ]
        case 'JCK03':
            return [
                {
                    path: 'Jackal/AbilityHolderSet-1.gcode',
                    count: 1,
                },
                {
                    path: 'Jackal/AbilityHolderSet-5.gcode',
                    count: 5,
                },
            ]

        case 'CE01':
            return [
                {
                    path: 'ColtExpress/FullMoney.gcode',
                    count: 1,
                },
            ]
        case 'CE02':
            return [
                {
                    path: 'ColtExpress/WhiskeySet-1.gcode',
                    count: 1,
                },
            ]
        case 'CE03':
            return [
                {
                    path: 'ColtExpress/CardsHolder.gcode',
                    count: 1,
                },
            ]

        case 'EH01':
            return [
                {
                    path: 'EldritchHorror/HeartSet-1.gcode',
                    count: 1,
                },
            ]
        case 'EH02':
            return [
                {
                    path: 'EldritchHorror/GatesHolder.gcode',
                    count: 1,
                },
                {
                    path: 'EldritchHorror/GatesHolder-3.gcode',
                    count: 3,
                },
            ]
        case 'EH03':
            return [
                {
                    path: 'EldritchHorror/DoomToken-5-second.gcode',
                    count: 5,
                },
            ]
        case 'EH04':
            return [
                {
                    path: 'EldritchHorror/MattR!.gcode',
                    count: 1,
                },
            ]
        case 'EH005':
            return [
                {
                    path: 'EldritchHorror/PortalStandSet.gcode',
                    count: 1,
                },
            ]
        case 'EH06':
            return [
                {
                    path: 'EldritchHorror/EldritchTokensSet-second.gcode',
                    count: 1,
                },
            ]
        case 'EH07':
            return [
                {
                    path: 'EldritchHorror/MattSmall-second!.gcode',
                    count: 1,
                },
            ]

        case 'CT01':
            return [
                {
                    path: 'Catan/TokensHolder-2.gcode',
                    count: 1,
                },
            ]
        case 'CT01_2':
            return [
                {
                    path: 'Catan/TokensHolder-2(4).gcode',
                    count: 1,
                },
            ]

        case 'TTR01N':
            return [
                {
                    path: 'TicketToRide/StandartTrtain-45-0.12.gcode',
                    count: 1,
                },
            ]
        case 'TTR03':
            return [
                {
                    path: 'TicketToRide/PlayerTrain-5!.gcode',
                    count: 5,
                },
            ]
        case 'TTR004':
            return [
                {
                    path: 'TicketToRide/CardsHolder.gcode',
                    count: 1,
                },
            ]
        case 'TTR07':
            return [
                {
                    path: 'TicketToRide/ShopHolder.gcode',
                    count: 1,
                },
            ]
        case 'TTR05':
            return [
                {
                    path: 'TicketToRide/PremiumTrains-45-0.12blue.gcode',
                    count: 1,
                },
            ]
        case 'TTR05Y':
            return [
                {
                    path: 'TicketToRide/PremiumTrains-45-0.12yellow.gcode',
                    count: 1,
                },
            ]
        case 'TTR05G':
            return [
                {
                    path: 'TicketToRide/PremiumTrains-45-0.12green.gcode',
                    count: 1,
                },
            ]
        case 'TTR05B':
            return [
                {
                    path: 'TicketToRide/PremiumTrains-45-0.12black.gcode',
                    count: 1,
                },
            ]
        case 'TTR05R':
            return [
                {
                    path: 'TicketToRide/PremiumTrains-45-0.12red.gcode',
                    count: 1,
                },
            ]

        case 'CSS03':
            return [
                {
                    path: 'Carcassonne/Bridge-12.gcode',
                    count: 1,
                },
            ]
        case 'CSS021':
            return [
                {
                    path: 'Carcassonne/CardHolder-5.gcode',
                    count: 5,
                },
            ]
        default:
            return []
    }
}

// last AH14
