import background from '../../images/background.jpg'

const adminhome = () => {
  return (
      <div className="adminhome" style={{ 
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          }}>
          <br/>
          <div className="container">
          <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Home</h2>
          </div>


        </div>
      </div>
      </div>
  )
  
}
export default adminhome;