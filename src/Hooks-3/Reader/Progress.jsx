import PropTypes from 'prop-types'; 

export const Progress = ({currentIdx, itemsLength}) => {
  return (
    <p>{currentIdx}/{itemsLength}</p>
  )
}

Progress.propTypes = {
  currentIdx: PropTypes.number,
  itemsLength: PropTypes.number,

}