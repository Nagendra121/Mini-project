import React from 'react'

const Banner = () => {
  return (
  <div>
    <div className='header-container'>
        <div className='banner-body p-2'>

          <div className="name" >
          <h1> WELCOME TO THALI.COM </h1>
          </div>
          
      
          </div>
        </div>

     <section id='left'>
      <div class="container ">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="detail-box">
              <h1 style={{color:'white'}}>
                Discover Restuarant And Food
              </h1>
              <p style={{color:'white'}}>
                when looking at its layout. The point of using Lorem Ipsum
              </p>
            </div>
            <div class="find_container ">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <form>
                      <div class="form-row ">
                        <div class="form-group col-lg-5">
                          <input type="text"  className='links m-2 'id="inputHotel" placeholder="Dish Name"/>
                        </div>
                        <br/>
                        <div class="form-group col-lg-3">
                          <input type="text" class="form-control" id="inputLocation" placeholder="All Locations"/>
                          <span class="location_icon">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                          </span>
                        </div>
                        <br/>
                        <div class="form-group col-lg-3">
                          <div class="btn-box">
                            <button type="submit" class="btn ">Search</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  </div>

    
 

  )
}

export default Banner