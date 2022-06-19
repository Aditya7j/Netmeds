import "./Experts.css"

const Experts = () => {
  return (
    <>
        <div className='expert'>
        <h2>Advice From Health Experts</h2>
           <div className="expertwrapper">
                <div>
                    <img className="exploreimg" src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1655200507_Diagnostic-Tests_480x180.jpg" alt="" />
                    <p className="expertp">7 Diagnostic Tests: Here's Why You Should Go For</p>
                </div>
                <div>
                    <img className="exploreimg" src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1655202429_Anantamul_480x180.jpg" alt="" />
                    <p className="expertp">Anantamul:Uses,Benefits,Effect On Doshas,Dosag..</p>
                </div>
                <div>
                    <img className="exploreimg" src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1655204083_Arabian-Jasmine_480x180.jpg" alt="" />
                    <p className="expertp">Arabian Jasmine:Bounteous Benefits Of This Fragra..</p>
                </div>
                <div>
                    <img className="exploreimg" src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1655103844_White-Turmeric_480x180.jpg" alt="" />
                    <p className="expertp">White Turmeric: 5 Incredible Health Reason To Add..</p>
                </div>
           </div>
    </div>
    </>
  )
}

export default Experts