import { Component } from "react";
import PropTypes from 'prop-types'; 

import { Progress } from "./Progress";
// import readingContent from "./reader.json";

const LOCAL_STORAGE = 'reader_item_index';

export default class Reader extends Component {
  state = {
    publicationIndex: 0
  } 

  componentDidMount() {
    const savedIndex = localStorage.getItem(LOCAL_STORAGE);

    //condition is needed to check if the saveIndex not null
    if (savedIndex) {
      this.setState({publicationIndex: Number(savedIndex)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('update')
    localStorage.setItem(LOCAL_STORAGE, this.state.publicationIndex)
  }

  // onPrev = () => {
  //   this.setState(state => ({publicationIndex: state.publicationIndex - 1}))
  // }

  // onNext = () => {
  //   this.setState(state => ({publicationIndex: state.publicationIndex + 1}))
    
  // }

  //remove double functioning using versitale func

  changeIndex = (value) => {
    this.setState(state => ({publicationIndex: state.publicationIndex + value}))

  }

  render() {
    const {publicationIndex} = this.state;
    const {items} = this.props;
    const currentItem = this.props.items[this.state.publicationIndex];
    const firstItem = publicationIndex === 0;
    const lastItem_1 = publicationIndex + 1 >= items.length;
    const lastItem_2 = publicationIndex === items.length - 1;

    // console.log(this.props.items[this.state.publicationIndex])

    return (
      <div>
        <section>
          <button type="button" disabled={firstItem} onClick={() => this.changeIndex(-1)}>Previous</button>
          <button type="button" disabled={lastItem_2} onClick={() => this.changeIndex(1)}>Next</button> 
        </section>

        <Progress currentIdx={publicationIndex + 1} itemsLength={items.length}/>
        {/* <p>{publicationIndex + 1}/{items.length}</p> */}

        <article>
          <h2>{currentItem.title}</h2>

          <p>{currentItem.text}</p>
        </article>
      </div>
    )
  }
}

Reader.propTypes = {
  changeIndex: PropTypes.func,
};