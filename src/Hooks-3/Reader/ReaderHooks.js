import { useState, useEffect, useRef } from 'react';
import items from './reader.json';
// import PropTypes from 'prop-types';

import { Progress } from './Progress';
// import readingContent from "./reader.json";

const LOCAL_STORAGE = 'reader_item_index';

export default function ReaderHooks() {
  const isMounted = useRef(false);
  const [publicationIndex, setPublicationIndex] = useState(0);

  useEffect(() => {
    const savedIndex = localStorage.getItem(LOCAL_STORAGE);

    //condition is needed to check if the saveIndex not null
    if (savedIndex) {
      setPublicationIndex(Number(savedIndex));
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(LOCAL_STORAGE, publicationIndex);
    }
    isMounted.current = true;
  }, [publicationIndex]);

  const changeIndex = (value) => {
    setPublicationIndex((prevValue) => prevValue + value);
  };
  const currentItem = items[publicationIndex];
  const firstItem = publicationIndex === 0;
  // const lastItem_1 = publicationIndex + 1 >= items.length;
  const lastItem_2 = publicationIndex === items.length - 1;

  return (
    <div style={{ margin: 15 }}>
      <section>
        <button
          type="button"
          disabled={firstItem}
          onClick={() => changeIndex(-1)}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={lastItem_2}
          onClick={() => changeIndex(1)}
        >
          Next
        </button>
      </section>

      <Progress currentIdx={publicationIndex + 1} itemsLength={items.length} />
      {/* <p>{publicationIndex + 1}/{items.length}</p> */}

      <article>
        <h2>{currentItem.title}</h2>

        <p>{currentItem.text}</p>
      </article>
    </div>
  );
}
