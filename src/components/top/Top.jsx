import "./Top.css"

const Top = () => {
  return (
    <>
    <h2 style={{padding:"5px"}}>Shop by Category</h2>
    <div className="category">
        
        <div className="cat1">
            <img className="catimg" src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/maxi.jpg?v=14" alt="" />
            <p className="catp">Maxi</p>
            <p className="catpp">Up to 50%</p>
        </div>
        <div className="cat2">
            <img  className="catimg" src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/skin-elements.jpg?v=14" alt="" />
            <p className="catp">Skin Elements</p>
            <p className="catpp">Up to 50%</p>
        </div>
        <div className="cat3">
            <img  className="catimg" src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dr-vaidyas.jpg?v=14" alt="" />
            <p className="catp">Dr-Vaidays</p>
            <p className="catpp">Up to 20% OFF</p>
        </div>
        <div className="cat4">
            <img  className="catimg" src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=14" alt="" />
            <p className="catp">Dabur</p>
            <p className="catpp">Up to 30%</p>
        </div>
        <div className="cat5">
            <img  className="catimg" src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/accu-chek.jpg?v=14" alt="" />
            <p className="catp">Accu-Chek</p>
            <p className="catpp">Up to 25% OFF</p>
        </div>
    </div>
    </>
  )
}

export default Top