import React from 'react';
import A1 from '../image/bg-img/a1.jpg'



class Albums extends React.Component {
    render() {
        return (
           <section className="latest-albums-area section-padding-100">
               <div className="container">
                   <div className="row">
                       <div className="col-12">
                           <div className="section-heading style-2">
                               <p> See what's new</p>
                               <h2> Latest Albums</h2>
                           </div>
                       </div>
                       <div className="row justify-content-center">
                           <div className="col-12 col-lg-9">
                               <div className="ablums-text text-center mb-70 ">
                                   <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante. Donec in velit non elit pulvinar pellentesque et non eros.</p>
                               </div>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-12">
                               <div className="alums-slideshow owl-carousel">
                                   <div className="single-album">
                                       <img src={A1} alt="#"/>
                                       <div className="album-info">
                                           <a href="#!">
                                               <h5>The Cure</h5>
                                           </a>
                                           <p>Second Song</p>
                                       </div>
                                   </div>
                                   <div className="single-album">
                                       <img src="A2" alt="#" />
                                       <div className="album-info">

                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                   </div>

               </div>

           </section>
        );
    }
}
export default Albums;