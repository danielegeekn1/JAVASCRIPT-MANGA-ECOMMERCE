async function anime() {
  const aniresp = await fetch(
    "https://animechan.vercel.app/api/quotes/character?name=saitama"
  );
  const anidata = await aniresp.json();
  const keys = Object.values(anidata);
  keys.forEach((ani) => {
    const character = ani.character;
    console.log(character);
  });
}
anime();
