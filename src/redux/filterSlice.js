import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: "",
    persons: [],
    reset: true,
    filtersName: ["gender", "status", "type", "species"],
    filtersList: [
      ["Female","Genderless","Male","unknown"],
      ["Alive","Dead","unknown"],
      ["","Alligator-Person","Alphabetrian","Amoeba-Person","Animal","Anime","Artificial Intelligence","Bepisian","Bird-Person","Bird-Person Human Mix","Blue ape alien","Boobie buyer reptilian","Boobloosian","Bread","CHUD","CHUD Human Mix","Cat","Cat controlled dead lady","Cat-Person","Caterpillar","Centaur","Chair","Changeformer","Clay-Person","Clone","Cone-nippled alien","Conjoined twin","Cookie","Corn-person","Cromulon","Cronenberg","Crow","Crow Horse","Cyborg","Decoy","Demon","Dog","Doopidoo","Dragon","Drumbloxian","Dummy","Eat shiter-Person","Eel","Elephant-Person","Ferkusian","Ferret Robot","Fish-Person","Flansian","Floop Floopian","Fly","Game","Garblovian","Gazorpian","Gazorpian reproduction robot","Gear-Person","Genetic experiment","Giant","Giant Cat Monster","Giant Incest Baby","Glorzo","God","Goddess","Gramuflackian","Grandma","Greebybobe","Gromflomite","Guinea Pig for the Polio Vaccine","Hairy alien","Half Soulless Puppet","Hammerhead-Person","Hivemind","Hole","Hologram","Human Gazorpian","Human with a flower in his head","Human with antennae","Human with ants in his eyes","Human with baby legs","Human with giant head","Human with tusks","Human-Snake hybrid","Interdimensional gaseous being","Jellybean","Korblock","Krootabulan","Larva alien","Leprechaun","Light bulb-Alien","Little Human","Lizard","Lizard-Person","Lobster-Alien","Mannie","Mascot","Meeseeks","Mega Gargantuan","Memory","Mexican","Microverse inhabitant","Miniverse inhabitant","Monogatron","Monster","Morglutzian","Morty's toxic side","Mytholog","Nano Alien","Narnian","Necrophiliac","Normal Size Bug","Numbericon","Octopus-Person","Old Amazons","Omniscient being","Organic gun","Parasite","Passing Butter Robot","Phone","Phone-Person","Pickle","Pizza","Planet","Plutonian","Pripudlian","Rat","Rick's toxic side","Ring-nippled alien","Robot","Robot-Crocodile hybrid","Scarecrow","Scrotian","Self-aware arm","Sentient ant colony","Sexy Aquaman","Shapeshifter","Shimshamian","Shrimp","Slartivartian","Slug","Snail alien","Snake","Soulless Puppet","Squid","Stair goblin","Starfish","Summon","Super Sperm Monster","Superhuman","Superhuman (Ghost trains summoner)","Teddy Bear","Teenyverse inhabitant","Tentacle alien","The Devil","Tiger","Time God","Tinymouth","Toy","Traflorkian","Trunk-Person","Tumblorkian","Turkey","Turkey Human Mix","Tuskfish","Unknown-nippled alien","Vampire","Wasp","Weasel","Whenwolf","Zeus","Zigerion","Zombodian"],
      ["Alien","Animal","Cronenberg","Disease","Human","Humanoid","Mythological Creature","Poopybutthole","Robot","unknown"]
    ],
    filterGender: "",
    filterStatus: "",
    filterType: "",
    filterSpecies: "",
    filterName: ""
  },
  reducers: {
    setStatus: (state, action) => {
      state.value = action.payload;
    },
    setFilterPersons: (state, action) => {
      state.persons = action.payload;
    },

    // ?Отрефакторить всё, для компакности
    setFilterGender: (state, action) => {
      state.filterGender = `&gender=${action.payload}`;
      state.reset = false;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = `&status=${action.payload}`;
      state.reset = false;
    },
    setFilterType: (state, action) => {
      state.filterType = `&type=${action.payload}`;
      state.reset = false;
    },
    setFilterSpecies: (state, action) => {
      state.filterSpecies = `&species=${action.payload}`;
      state.reset = false;
    },
    setFilterName: (state, action) => {
      state.filterName = `&name=${action.payload}`;
      state.reset = false;
    },
    setCleanFilterName: (state) => {
      state.filterName = '';
    },
    resetFilters: (state) => {
      state.filterGender = "",
      state.filterStatus = "",
      state.filterType = "",
      state.filterSpecies = "",
      state.filterName = "",
      state.reset = true;
    },

    setResetFilters: (state, action) => {
      state.reset = action.payload;
    },

    findFilters: (state) => {
      // +Прохожусь по массиву имен фильтров и на его основе выбираю из всего объекта нужные фильтры. Получается массив с массивами, также отсортированный

      state.filtersList = state.filtersName.map((name) =>
        [...new Set(state.persons.map((filter) => filter[name]))].sort()
      );
    },
  },
});

export const {
  setStatus,
  setFilterPersons,
  findFilters,
  setFilterGender,
  setFilterStatus,
  setFilterType,
  setFilterSpecies,
  setFilterName,
  setCleanFilterName,
  resetFilters,
  setResetFilters
} = filterSlice.actions;
export default filterSlice.reducer;
