import './ShowCount.css'

const ShowCount = ({ className, clicks }) => {

    return (
        <div className={className}>
          <p>You clicked here { clicks ? clicks : 0 } times</p>
        </div>
      )
};

export default ShowCount;