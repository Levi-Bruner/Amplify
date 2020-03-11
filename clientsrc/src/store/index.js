import Vue from "vue";
import Vuex, { Store } from "vuex";
import Axios from "axios";
import router from "../router";
import Song from "../models/song";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    searchedSongs: [],
    recommendedSongs: [],
    favoriteSongs: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setSearchedSongs(state, results) {
      state.searchedSongs = results;
    },
    addFavorite(state, favData) {
      state.favoriteSongs.push(favData)
    },
    setFavorites(state, favorites) {
      state.favoriteSongs = favorites
    },
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },


    async getMusicByQuery({ commit, dispatch }, query) {
      try {
        let url = "https://itunes.apple.com/search?callback=?&term=" + query;
        // @ts-ignore
        $.getJSON(url)
          .then(res => {
            let results = res.results
              .filter(s => s.kind == "song").map(sd => new Song(sd))

            commit("setSearchedSongs", results);
          }).
          catch(e => {
            console.log(e)
          })
      }
      catch {
        (err => {
          throw new Error(err);
        })
      }
    },

    async getFavoritesbyEmail({ commit, dispatch }) {
      try {
        //WAITING ON BACKEND TO FIX THIS 
        let res = await api.get("favorites")

        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
          let trackId = res.data[i].trackId
          let url = "https://itunes.apple.com/search?callback=?&term=" + trackId
          $.getJSON(url)
            .then(res => {
              let results = res.results
                .filter(s => s.kind == "song").map(sd => new Song(sd)).
                catch(e => {
                  console.log(e)
                })

            }


        //commit("setFavorites", res.data)
      } catch (error) {
          console.error(error);
        }
      },

      async addToFavorites({ commit, dispatch }, newFavorite) {
        debugger
        let res = await api.post("favorites", newFavorite)
        commit("addFavorite", res.data)
      }






    }
  });
