import { useState, useMemo } from 'react';

const initialFriends = [
  'Robin Hampton',
  'Chiara Richmond',
  'Eleanor Perry',
  'Khadijah Simon',
  'Shane Mullen',
  'Roberta Fox',
  'Ruby John',
  'Miah Wood',
  'Sonny Valencia',
  'Ishaq Reyes',
  'Jaydon Villanueva',
  'Franklin Hilton',
  'Neil Estes',
  'Olly Leach',
  'Sian Padilla',
  'Rose Gonzales',
  'Elysia Guerrero',
  'Alex Stevenson',
  'Beatrix Schwartz',
  'Alexia Archer',
  'Maia Zamora',
  'Clark Riddle',
  'Marley Mann',
  'Harry Colon',
  'Serena Mckee',
  'Isra Huff',
  'Patricia Wiley',
  'Mariyah Rosales',
  'Yasin Lamb',
  'Patrick Harding',
  'Alexis Flores',
  'William Roman',
  'Rafael Middleton',
  'Hamzah Byrd',
  'Mathew Knapp',
  'Diego Mills',
  'Katy Contreras',
  'Katie Moore',
  'Samuel Crosby',
  'Francesco Mcconnell',
  'Keisha Sutton',
  'Jonty Wilkerson',
  'Tommy Martin',
  'Eleri Bryant',
  'Bronte Savage',
  'Ophelia Cummings',
  'Ellie Tapia',
  'Walter Bright',
  'Reuben Elliott',
  'Katrina Mckay',
  'Stuart Fisher',
  'Briony Ware',
  'Owain Blair',
  'Susie Solis',
  'Luisa Morrow',
  'Linda Irwin',
  'Larissa Montes',
  'Zainab Benjamin',
  'Gerard Oliver',
  'Conrad Marshall',
  'Ernest Cole',
  'Anne Sanchez',
  'Calvin Miller',
  'Halle Love',
  'Glenn Knox',
  'Freyja Branch',
  'Alice Gibbs',
  'Szymon Haas',
  'Aliyah Bean',
  'Lucas Joseph',
  'Esther Thomas',
  'Leroy Clayton',
  'Callum Mcmahon',
  'Ollie Watkins',
  'Lina Baldwin',
  'Sam Walker',
  'Scarlett Jensen',
  'Duncan Lucero',
  'Teresa Henderson',
  'Amie Haley',
  'Charley Jenkins',
  'Abel Gamble',
  'Kurtis Vargas',
  'Keane Pearson',
  'Isha Wall',
  'India Kim',
  'Seth Boyer',
  'Herman Haines',
  'Ricardo Cotton',
  'Joanne George',
  'Faris Mata',
  'Wade Stone',
  'Shannon Russo',
  'Elspeth Kelly',
  'Johnathan Rose',
  'Caspar Collins',
  'Justin Gregory',
  'Grover Chan',
  'Natalie Blanchard',
  'Barbara Zimmerman',
];

export default function Friends() {
  const [count, setCount] = useState(0); //without useMemo the DOM would re-render in any state changing
  const [friends] = useState(initialFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = useMemo(() => {
    return friends.filter((friend) =>
      friend.toLocaleLowerCase().includes(filter)
    );
  }, [filter, friends]);

  return (
    <div style={{ margin: 15 }}>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        {count}
      </button>
      <hr />
      <input onChange={(e) => setFilter(e.target.value)} value={filter} />
      <ul>
        {visibleFriends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
