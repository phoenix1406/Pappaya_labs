import React from 'react';
import background from '../images/Background.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
   <section className="headers">
    <img src={background} style = {{height:'495px',maxWidth:'64%',position:'absolute',top:'-100px',right:'0px',zIndex:'-1'}}alt="" />
   </section>
  
   <section className="mt-5" style={{position:'relative',marginLeft:'20px'}}>
    <div className="container-fluid">
      <div className="row d-flex">
        <div className = "col-lg-5" style ={{flex:'0 0 auto',width:'40%'}}>
         <div className="heading">
          <h2 style={{fontSize:'30px',lineHeight:'50px'}}>Welcome to<br/>
          Edits From India<br/>
            Premium quality Edits<br/></h2>
         </div>

        
         <div className="description">
          <h6>ELEGANT AND CAPTURING CANDID EDIT,</h6>
          <h6>RETOUCHING PORTFOLIO SHOWCASES</h6>
         </div>
          
         <div style={{marginTop:'20px'}}>
         <button className="btn" style={{display:'flex',alignItems:'center',cursor:'pointer',backgroundColor:'crimson',color:'white',padding:'5px auto',borderRadius:'15px'}}>
         
         Get Started
         <i class="fa-solid fa-circle-pause mx-2"></i>
         </button>
      
         </div>

         </div>
        
        
         <div className="col-lg-7">
          <div style ={{display:'flex',justifyContent:'flex-end'}} className = "herobox">
            <img src="https://admin.editsfromindia.com/storage/hero/hero-63eb32783cdff.jpg"  className ="imgprop" alt="..."  />
            <img src="https://admin.editsfromindia.com/storage/hero/hero-63eb32783ced6.jpg"  className = "imgprop" alt="..." />
          </div>
             </div> 
         </div>
         </div>

   </section>

   <div className="container-fluid">
    <div className="row mt-5" >
      <div className="col-lg-8 p-50 ml-2">
        <section className="about">
          <div className="heading mb-3 mt-1">
            <h2 style={{textAlign:'center',color:'red'}}>About Us</h2>
          </div>
          <div className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur officia vel vitae iusto animi reprehenderit, hic corporis sequi soluta corrupti eligendi architecto quaerat earum iste? Laborum porro debitis dolor ea aperiam tempore. Perferendis, nemo assumenda necessitatibus nihil inventore ut aliquam maxime ad quia aliquid laudantium eos a repudiandae beatae unde autem quam quae ghyt phptp Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam.
          </div>
        </section>
       
        <section className="services" style={{marginTop:'32px'}}>
          <div className="heading mb-3 mt-1">
            <h2 style={{textAlign:'center',color:'red'}}>Our Services</h2>
          </div>
          <div className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur officia vel vitae iusto animi reprehenderit, hic corporis sequi soluta corrupti eligendi architecto quaerat earum iste? Laborum porro debitis dolor ea aperiam tempore. Perferendis, nemo assumenda necessitatibus nihil inventore ut aliquam maxime ad quia aliquid laudantium eos a repudiandae beatae unde autem quam quae ghyt phptp Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam.
          </div>
        </section>

        <section className="photo-editing" style={{marginTop:'40px',}} id ="photoEditing">
          <h2 style = {{textAlign:'center',marginTop:'5px',borderRadius:'10px',color:'red',width:'unset',margin:'auto',marginBottom:'8px'}}>PhotoEditing</h2>

         
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="row">
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
          <img src="https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8ec8b3a98.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Clipping path</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
          <img src="https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc9036970db.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Photo Retouching</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
          <img src="https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8de0840d0.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Background Removal</h5>
    
           </div>
         </div>

        </div>
      </div>
 
    </div>
    <div class="carousel-item">
      <div className="row">
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
          <img src="	https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8fcb89ac5.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Ghost Manequein</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
          <img src="https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8f7b95035.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Drop Shadow</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
          <img src="https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8f184c4ea.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Image Masking</h5>
    
           </div>
         </div>

        </div>
      </div>
 
    </div>
    <div class="carousel-item">
      <div className="row">
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
          <img src="https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8f7b95035.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Drop Shadow</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
          <img src="https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8fcb89ac5.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Ghost Manequein</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
          <img src="https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8de0840d0.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Background Removal</h5>
    
           </div>
         </div>

        </div>
      </div>
 
    </div>

 
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  <div className="text mt-5">
    <p style={{textAlign:'justify',marginLeft:'2px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam tempora minima veritatis. Suscipit odio iure enim illum voluptas quia saepe, aliquid libero debitis placeat, officia eligendi nesciunt eaque voluptates dignissimos maxime? Quibusdam officia et ipsam culpa doloremque impedit voluptas voluptatibus quam cum. Ipsam veniam maiores architecto non assumenda! Harum.</p>
  </div>
   

    <ol className="ol1" style={{marginTop:'10px'}}>
      <li className="li3">Color Correction :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id necessitatibus suscipit eaque libero quaerat, est possimus blanditiis incidunt molestias? Labore?</li>
      <li className="li3">Blemish Remmovals :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id necessitatibus suscipit eaque libero quaerat, est possimus blanditiis incidunt molestias? Labore?</li>
      <li className="li3">Resizing :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id necessitatibus suscipit eaque libero quaerat, est possimus blanditiis incidunt molestias? Labore?</li>
      <li className="li3">Sharpening :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id necessitatibus suscipit eaque libero quaerat, est possimus blanditiis incidunt molestias? Labore?</li>
     
    </ol>



 </section>

    <section className="video-editing" style={{marginTop:'40px',}} id ="videoEditing">
          <h2 style = {{textAlign:'center',marginTop:'5px',borderRadius:'10px',color:'red',width:'unset',margin:'auto',marginBottom:'8px'}}>VideoEditing</h2>

         
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="row">
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
         <iframe title = "Online class" width="100%" src="https://www.youtube.com/embed/BLnzSg-i3YE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className ="card-img-top"></iframe>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Online Photography and Film Making Class</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
         <iframe width="100%" title='Wedding Summit' src="https://www.youtube.com/embed/BLnzSg-i3YE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className ="card-img-top"></iframe>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Wedding Summit</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
         <iframe width="100%" title ='show reel'src="https://www.youtube.com/embed/BLnzSg-i3YE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className ="card-img-top"></iframe>
        
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Rahul Vaidya Wedding Show reel</h5>
    
           </div>
         </div>

        </div>
      </div>
 
    </div>
    <div class="carousel-item new">
      <div className="row">
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
         <iframe width="100%" title ="videoEditing" src="https://www.youtube.com/embed/BLnzSg-i3YE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className ="card-img-top"></iframe>
     
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Video Editing</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
         <iframe width="100%" title ='wd'src="https://www.youtube.com/embed/BLnzSg-i3YE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className ="card-img-top"></iframe>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Rahul Vaidya Wedding</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
         <iframe width="100%" title ='show reel'src="https://www.youtube.com/embed/BLnzSg-i3YE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className ="card-img-top"></iframe>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Video Editing</h5>
    
           </div>
         </div>

        </div>
      </div>
 
    </div>
    <div class="carousel-item new">
      <div className="row">
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
         <iframe width="100%" title ='sheel'src="https://www.youtube.com/embed/BLnzSg-i3YE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className ="card-img-top"></iframe>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Capturing Wow</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
         <iframe width="100%" title ='sub'src="https://www.youtube.com/embed/BLnzSg-i3YE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className ="card-img-top"></iframe>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Wedding Submit</h5>
    
           </div>
         </div>

        </div>
        <div className="col-lg-4">
         <div class="card" style={{width: "18rem"}}>
         <iframe width="100%" title ='show reel'src="https://www.youtube.com/embed/BLnzSg-i3YE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className ="card-img-top"></iframe>
          <div class="card-body">
          <h5 class="card-title" style ={{textAlign:'center'}}>Online Photo Edit Class</h5>
    
           </div>
         </div>

        </div>
      </div>
 
    </div>

 
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  <div className="text mt-5">
    <p style={{textAlign:'justify',marginLeft:'2px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam tempora minima veritatis. Suscipit odio iure enim illum voluptas quia saepe, aliquid libero debitis placeat, officia eligendi nesciunt eaque voluptates dignissimos maxime? Quibusdam officia et ipsam culpa doloremque impedit voluptas voluptatibus quam cum. Ipsam veniam maiores architecto non assumenda! Harum.</p>
  </div>
   

    <ol className="ol1" style={{marginTop:'10px'}}>
      <li className="li3">Color Correction :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id necessitatibus suscipit eaque libero quaerat, est possimus blanditiis incidunt molestias? Labore?</li>
      <li className="li3">Blemish Remmovals :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id necessitatibus suscipit eaque libero quaerat, est possimus blanditiis incidunt molestias? Labore?</li>
      <li className="li3">Resizing :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id necessitatibus suscipit eaque libero quaerat, est possimus blanditiis incidunt molestias? Labore?</li>
      <li className="li3">Sharpening :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id necessitatibus suscipit eaque libero quaerat, est possimus blanditiis incidunt molestias? Labore?</li>
     
    </ol>
     
    </section>



      </div>

      <div className="col-lg-4"  id ="sidepaneladds">
        <section className="ads">
          <div>
          <h3 style ={{textAlign:'center'}}>Capturing Wow</h3>
          <Link to="https://capturingwow.com" target="_blank"><figure><img src="https://admin.editsfromindia.com/storage/adsbanner/adsbanner-63de4e4993920.jpg" alt="Capturing Wow" style={{width: '100%',
    height: '254px',
    marginLeft: '17px'}} class="mb-3" id="ads"/><figcaption style={{textAlign:'center'}}>Advertisment<br/><br/><br/></figcaption></figure></Link>
          </div>
          <div>
          <h3 style ={{textAlign:'center'}}>Luv Israni</h3>
          <Link to="https://luvisrani.com/" target="_blank"><figure><img src="https://admin.editsfromindia.com/storage/adsbanner/adsbanner-63de4e362c8ce.jpg" style={{width: '100%',
    height: '254px',
    marginLeft: '17px'}} alt="Luv Israni" class="mb-3" id="ads"/><figcaption style={{textAlign:'center'}}>Advertisment<br/><br/><br/></figcaption></figure></Link>
          </div>
          <div>
          <h3 style ={{textAlign:'center'}}>Capturing Wow</h3>
          <Link to="https://capturingwow.com" target="_blank"><figure><img src="https://admin.editsfromindia.com/storage/adsbanner/adsbanner-63eb2a7cbc0da.jpeg" style={{width: '100%',
    height: '254px',
    marginLeft: '17px'}} alt="Capturing Wow" class="mb-3" id="ads"/><figcaption style={{textAlign:'center'}}>Advertisment<br/><br/><br/></figcaption></figure></Link>
          </div>


         
        </section>

        <section className="freq mt-15">
          <div className="heading text-center"><strong>Frequently Asked Questions</strong>
           
          <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How is Image recorded
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Are my Orders secure?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Do you offer Free trial?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
             
          </div>
          
        </section>
      </div>



    </div>
   </div>

   
   </>
  )
}

export default Home
