export function setMarvelList(state, { marvelList }) {
  state.marvelList = [
    ...state.marvelList,
    ...marvelList,
  ];
}

export function setMarvelListSearch(state, { marvelList }) {
  state.marvelList = marvelList;
}

export function setHeroDetail(state, { heroDetail }) {
  state.heroDetail = heroDetail;
}
