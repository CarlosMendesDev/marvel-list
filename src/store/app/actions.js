import { api } from 'boot/axios';

export async function getMarvelApi({ commit }, { offset }) {
  const params = {
    offset,
    limit: 10,
    apikey: 'ae85e8b9723f65dae5238770fbad9fea',
  };

  const { data } = await api.get('https://gateway.marvel.com:443/v1/public/characters', { params });

  commit('setMarvelList', { marvelList: data.data.results });
}

export async function getMarvelApiSearch({ commit }, { nameStartsWith }) {
  const params = {
    offset: 0,
    nameStartsWith,
    limit: 10,
    apikey: 'ae85e8b9723f65dae5238770fbad9fea',
  };

  const { data } = await api.get('https://gateway.marvel.com:443/v1/public/characters', { params });

  commit('setMarvelListSearch', { marvelList: data.data.results });
}

export async function getHeroDetail({ commit }, { id }) {
  const params = {
    apikey: 'ae85e8b9723f65dae5238770fbad9fea',
  };

  const { data } = await api.get(`https://gateway.marvel.com:443/v1/public/characters/${id}`, { params });

  commit('setHeroDetail', { heroDetail: data.data.results[0] });
}
