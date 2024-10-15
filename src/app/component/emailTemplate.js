export const EmailTemplate = ({ clientName, pdfLink }) => {
  return (
    <div style={{maxWidth:'800px',color:'white',backgroundColor:'#00005A',color:'white', textAlign:'center', padding:'60px 40px'}}>
        <div style={{marginBottom:'30px', margin:'0 auto'}}>
          <img
            src="https://jem-digital.com/logo.png"
            style={{ObjectFit:'contain',width:'100px',height:'100px'}}
          />
        </div>
        <h1 style={{marginBottom:'20px',color:'white'}}>Welcome to your Digital Marketing Journey.</h1>
        <p style={{color:'white',fontSize:'18px',marginBottom:'20px',lineHeight:'30px'}}>
          We are glad to have you on board, and as a gesture, 
          we have provided you with a free e-book to enhance your 
          online presence immediately!
        </p>
        <div style={{margin:'50px 0'}}>
          <a href="https://mcusercontent.com/16e51dc6bf07be9726b90c317/files/a4311540-48ca-a158-5c20-47d97231ea5d/JEM_Digital_Free_Starter_Resource.pdf" target="_blank" style={{backgroundColor:'#40E0D0', textDecoration:'none', color:'black',fontWeight:'bold', padding:'10px 14px', borderRadius:'8px'}}>
            Claim your free resource!
          </a>
        </div>
        <p style={{fontSize:'18px', color:'white', marginBottom:'40px', lineHeight:'30px'}}>
          If you are still unsure on where to get started, 
          our team of industry professionals are here to help. 
          Reach out to us via our website or social media, 
          and we will be more than happy to help set up your marketing journey.
        </p>
        <div style={{marginBottom:'50px',textAlign:'center'}}>
            {/* <a style={{fontSize:'40px'}} href="facebook.com" target="_blank">
              facebook
            </a> */}
            <a style={{marginRight:'10px'}} href="https://www.facebook.com/profile.php?id=61564244532399" target="_blank">
              <img
                style={{width:'40px',height:'40px'}}
                src="https://www.jem-digital.com/facebook-icon.png"
              />
            </a>
            <a href="https://www.instagram.com/jemdigitaluk?igsh=MXA0b3dkaGMwdWtzeA%3D%3D&utm_source=qr" target="_blank">
              <img src="https://www.jem-digital.com/insta-icon.png" style={{width:'40px',height:'40px'}}/>
            </a>
        </div>
        <div>
          <span style={{fontSize:'16px',color:'white'}}>
            Copyright (C) {new Date().getFullYear()} JEM Digital. All rights reserved.
          </span>
        </div>
    </div>
  );
};

export default EmailTemplate;
