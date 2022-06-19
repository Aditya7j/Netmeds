import "./Health.css"

const Health = () => {
  return (
    <>
        <h2 style={{padding:"5px"}}>Health Concerns</h2>
    <div className="category">
        
        <div className="cat1">
            <img className="healthimg" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1" alt="" />
            <br /><br /><br /><br />
            <p className="catp">Lung Care</p>
        </div>
        <div className="cat2">
            <img  className="healthimg" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1" alt="" />
            <br /><br /><br /><br />
            <p className="catp">Weight Care</p>
        </div>
        <div className="cat3">
            <img  className="healthimg" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1" alt="" />
            <br /><br /><br /><br />
            <p className="catp">Women's Care</p>
        </div>
        <div className="cat4">
            <img  className="healthimg" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1" alt="" />
            <br /><br /><br /><br />
            <p className="catp">Bone And Joint Pain</p>
        </div>
        <div className="cat5">
            <img  className="healthimg" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1" alt="" />
            <br /><br /><br /><br />
            <p className="catp">Cold And Fever</p>
        </div>
    </div>
    </>
  )
}

export default Health